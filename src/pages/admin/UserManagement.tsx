import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Navigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { UserPlus, Edit, Trash2, Shield } from 'lucide-react';

type AdminUser = Database['public']['Tables']['admin_users']['Row'];
type Profile = Database['public']['Tables']['profiles']['Row'];

interface AdminUserWithProfile extends AdminUser {
  profile?: Profile | null;
}

const UserManagement = () => {
  const { isAdmin, loading } = useAdmin();
  const { toast } = useToast();
  const [users, setUsers] = useState<AdminUserWithProfile[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    adminRole: 'content_moderator' as Database['public']['Enums']['admin_role'],
  });

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      console.log('Fetching admin users...');
      
      // First get admin users only
      const { data: adminUsers, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .order('created_at', { ascending: false });

      if (adminError) {
        console.error('Admin users error:', adminError);
        throw adminError;
      }

      if (!adminUsers || adminUsers.length === 0) {
        console.log('No admin users found');
        setUsers([]);
        return;
      }

      console.log('Found admin users:', adminUsers.length);

      // Then get profiles for each admin user
      const usersWithProfiles: AdminUserWithProfile[] = [];
      
      for (const adminUser of adminUsers) {
        try {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', adminUser.user_id)
            .maybeSingle();

          if (profileError) {
            console.error(`Profile error for user ${adminUser.user_id}:`, profileError);
          }

          usersWithProfiles.push({
            ...adminUser,
            profile: profile || null
          });
        } catch (profileError) {
          console.error(`Error fetching profile for user ${adminUser.user_id}:`, profileError);
          usersWithProfiles.push({
            ...adminUser,
            profile: null
          });
        }
      }

      console.log('Fetched users with profiles:', usersWithProfiles);
      setUsers(usersWithProfiles);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch users',
        variant: 'destructive',
      });
      setUsers([]);
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateLoading(true);
    
    try {
      console.log('Creating admin user with:', formData);
      
      const { data, error } = await supabase.functions.invoke('create-admin-user', {
        body: {
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          adminRole: formData.adminRole,
        },
      });

      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      console.log('Admin user created successfully:', data);

      toast({
        title: 'Success',
        description: 'Admin user created successfully',
      });

      setDialogOpen(false);
      setFormData({
        email: '',
        password: '',
        fullName: '',
        adminRole: 'content_moderator',
      });
      fetchUsers();
    } catch (error: any) {
      console.error('Error creating user:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create user',
        variant: 'destructive',
      });
    } finally {
      setCreateLoading(false);
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: Database['public']['Enums']['admin_role']) => {
    try {
      const { error } = await supabase
        .from('admin_users')
        .update({ 
          admin_role: newRole, 
          updated_at: new Date().toISOString(),
          permissions: {
            manage_users: newRole === 'super_admin',
            manage_content: ['super_admin', 'content_moderator'].includes(newRole),
            manage_finances: ['super_admin', 'finance_admin'].includes(newRole),
            manage_settings: newRole === 'super_admin'
          }
        })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'User role updated successfully',
      });

      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      toast({
        title: 'Error',
        description: 'Failed to update user role',
        variant: 'destructive',
      });
    }
  };

  const handleToggleUserStatus = async (userId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('admin_users')
        .update({ 
          is_active: !currentStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `User ${!currentStatus ? 'activated' : 'deactivated'} successfully`,
      });

      fetchUsers();
    } catch (error) {
      console.error('Error updating user status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update user status',
        variant: 'destructive',
      });
    }
  };

  if (loading || loadingUsers) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'bg-red-100 text-red-800';
      case 'content_moderator':
        return 'bg-blue-100 text-blue-800';
      case 'finance_admin':
        return 'bg-green-100 text-green-800';
      case 'support_admin':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-gray-600">Manage admin users and their permissions</p>
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Add Admin User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Admin User</DialogTitle>
                <DialogDescription>
                  Add a new administrator to the platform with specific roles and permissions.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleCreateUser} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                    placeholder="Minimum 8 characters"
                  />
                </div>
                
                <div>
                  <Label htmlFor="adminRole">Admin Role</Label>
                  <Select 
                    value={formData.adminRole} 
                    onValueChange={(value: Database['public']['Enums']['admin_role']) => 
                      setFormData(prev => ({ ...prev, adminRole: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="content_moderator">Content Moderator</SelectItem>
                      <SelectItem value="finance_admin">Finance Admin</SelectItem>
                      <SelectItem value="support_admin">Support Admin</SelectItem>
                      <SelectItem value="super_admin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setDialogOpen(false)}
                    disabled={createLoading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={createLoading}>
                    {createLoading ? 'Creating...' : 'Create User'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {users.map((user) => (
            <Card key={user.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg">
                        {user.profile?.full_name || 'Unknown User'}
                      </h3>
                      <p className="text-gray-600">{user.profile?.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.admin_role)}`}>
                          {user.admin_role.replace('_', ' ').toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Select
                      value={user.admin_role}
                      onValueChange={(value: Database['public']['Enums']['admin_role']) => 
                        handleUpdateUserRole(user.id, value)
                      }
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content_moderator">Content Moderator</SelectItem>
                        <SelectItem value="finance_admin">Finance Admin</SelectItem>
                        <SelectItem value="support_admin">Support Admin</SelectItem>
                        <SelectItem value="super_admin">Super Admin</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button
                      variant={user.is_active ? "destructive" : "default"}
                      size="sm"
                      onClick={() => handleToggleUserStatus(user.id, user.is_active || false)}
                    >
                      {user.is_active ? 'Deactivate' : 'Activate'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {users.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No admin users found</h3>
                <p className="text-gray-600 mb-4">Get started by creating your first admin user.</p>
                <Button onClick={() => setDialogOpen(true)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add First Admin User
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
