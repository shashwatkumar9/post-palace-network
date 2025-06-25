
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bold, Italic, Underline, Link, List, ListOrdered, Quote } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const [selectedText, setSelectedText] = useState('');

  const insertFormat = (before: string, after: string = '') => {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newText);
    
    // Set cursor position after the inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 10);
  };

  const formatButtons = [
    { icon: Bold, label: 'Bold', before: '**', after: '**' },
    { icon: Italic, label: 'Italic', before: '_', after: '_' },
    { icon: Underline, label: 'Underline', before: '<u>', after: '</u>' },
    { icon: Link, label: 'Link', before: '[', after: '](url)' },
    { icon: List, label: 'Bullet List', before: '\n- ', after: '' },
    { icon: ListOrdered, label: 'Numbered List', before: '\n1. ', after: '' },
    { icon: Quote, label: 'Quote', before: '\n> ', after: '' },
  ];

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1 p-2 border rounded-t-md bg-gray-50">
        {formatButtons.map(({ icon: Icon, label, before, after }) => (
          <Button
            key={label}
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertFormat(before, after)}
            title={label}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
      <Textarea
        id="content-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Write your article content here...'}
        className="min-h-[300px] rounded-t-none"
        onSelect={(e) => {
          const target = e.target as HTMLTextAreaElement;
          setSelectedText(value.substring(target.selectionStart, target.selectionEnd));
        }}
      />
      <div className="text-xs text-gray-500">
        Supports basic markdown formatting. Selected text will be formatted when you click the buttons above.
      </div>
    </div>
  );
};

export default RichTextEditor;
