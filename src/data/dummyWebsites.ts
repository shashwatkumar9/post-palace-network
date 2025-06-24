
export interface Website {
  id: number;
  name: string;
  description: string;
  category: string;
  country: string;
  language: string;
  traffic: string;
  domainRating: number;
  price: number;
  linkType: string;
  maxLinks: number;
  homepageDisplay: boolean;
  isAdvertisement: boolean;
}

const categories = [
  "Advertising", "Agriculture", "Animals", "Architecture", "Arts & Photo", "Automotive", 
  "Aviation & Flight", "Banking & Financial", "Beauty & Health", "Books", "Business", 
  "Computers", "Construction & Repair", "Cryptocurrency", "Dating", "Design", 
  "E-commerce", "Education", "Energy", "Entertainment", "Equipment", "Events & Seminars", 
  "Fashion", "Food & Cuisine", "Gambling", "Gaming", "General", "Home", "Industry", 
  "Insurance", "Internet", "Jobs", "Legal", "Lifestyle", "Local News", "Machinery", 
  "Marketing", "Media", "Medicine", "Metallurgy", "Movie", "Music", "Other", 
  "Products", "Public Relations", "Real Estate", "Religion", "Security", "Services", "Society"
];

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Spain", 
  "Italy", "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway", "Denmark", 
  "Finland", "Poland", "Czech Republic", "Hungary", "Portugal", "Greece", "Ireland", 
  "Luxembourg", "Malta", "Cyprus", "Estonia", "Latvia", "Lithuania", "Slovenia", "Slovakia", 
  "Croatia", "Bulgaria", "Romania", "Russia", "Ukraine", "Belarus", "Japan", "South Korea", 
  "China", "India", "Singapore", "Malaysia", "Thailand", "Philippines", "Indonesia", 
  "Vietnam", "Hong Kong", "Taiwan", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", 
  "Peru", "Ecuador", "Uruguay", "Paraguay", "Bolivia", "Venezuela", "South Africa", 
  "Egypt", "Morocco", "Nigeria", "Kenya", "Ghana", "Israel", "UAE", "Saudi Arabia", 
  "Turkey", "New Zealand"
];

const languages = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Chinese", 
  "Japanese", "Korean", "Arabic", "Hindi", "Bengali", "Urdu", "Indonesian", "Malay", 
  "Thai", "Vietnamese", "Filipino", "Dutch", "Swedish", "Norwegian", "Danish", "Finnish", 
  "Polish", "Czech", "Hungarian", "Romanian", "Bulgarian", "Croatian", "Serbian", 
  "Slovenian", "Slovak", "Estonian", "Latvian", "Lithuanian", "Greek", "Turkish", 
  "Hebrew", "Persian", "Kurdish", "Swahili", "Amharic", "Yoruba", "Igbo", "Hausa"
];

const linkTypes = ["Dofollow", "Nofollow", "Any"];

const trafficValues = ["50k", "100k", "250k", "500k", "750k", "1M", "1.5M", "2M", "2.5M", "3M", "4M", "5M"];

const sampleDomains = [
  "techcrunch", "businessinsider", "healthline", "forbes", "entrepreneur", "mashable", "wired", 
  "theverge", "engadget", "gizmodo", "lifehacker", "fastcompany", "inc", "bloomberg", "reuters",
  "cnn", "bbc", "guardian", "washington", "nytimes", "wsj", "medium", "huffpost", "buzzfeed",
  "vox", "slate", "salon", "dailymail", "telegraph", "independent", "thetimes", "usatoday",
  "cbsnews", "abcnews", "nbcnews", "foxnews", "espn", "sportsillustrated", "bleacher", "yahoo",
  "msn", "aol", "ask", "about", "ehow", "wikihow", "stackoverflow", "github", "reddit",
  "quora", "pinterest", "instagram", "facebook", "twitter", "linkedin", "youtube", "tiktok",
  "snapchat", "discord", "slack", "zoom", "microsoft", "google", "apple", "amazon", "netflix",
  "spotify", "adobe", "oracle", "salesforce", "shopify", "wordpress", "squarespace", "wix"
];

const descriptions = [
  "Leading industry publication with global reach and high-quality content standards",
  "Trusted news source covering latest trends and developments in the sector",
  "Premium lifestyle magazine with affluent readership and strong engagement",
  "Professional business platform serving industry leaders and decision makers",
  "Technology-focused publication with expert analysis and breaking news coverage",
  "Health and wellness resource providing evidence-based information to millions",
  "Financial services publication targeting investors and business professionals",
  "Entertainment and culture magazine with diverse content and viral potential",
  "Educational platform offering valuable insights and practical advice",
  "Travel and lifestyle blog with stunning visuals and engaged community",
  "Food and culinary publication featuring recipes, reviews, and industry news",
  "Fashion and beauty magazine with trendsetting content and style guides",
  "Sports and fitness publication covering athletes, teams, and performance",
  "Automotive enthusiast site with reviews, news, and technical content",
  "Real estate platform providing market insights and property information",
  "Marketing and advertising publication for professionals and agencies",
  "Home and garden magazine with DIY projects and decorating inspiration",
  "Legal and law publication serving attorneys and legal professionals",
  "Medical journal and healthcare publication for professionals and patients",
  "Environmental and sustainability publication promoting green living"
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPrice(): number {
  const prices = [45, 65, 85, 95, 125, 145, 165, 185, 225, 245, 285, 325, 365, 425, 485, 545, 625, 725, 825, 925];
  return getRandomElement(prices);
}

function getRandomTraffic(): string {
  return getRandomElement(trafficValues);
}

function getRandomDR(): number {
  return Math.floor(Math.random() * 40) + 50; // DR between 50-90
}

function getRandomLinks(): number {
  return Math.floor(Math.random() * 5) + 1; // 1-5 links
}

function generateWebsiteName(domain: string, isLoggedIn: boolean): string {
  if (isLoggedIn) {
    return `${domain.charAt(0).toUpperCase() + domain.slice(1)}.com`;
  } else {
    return `${domain.charAt(0).toUpperCase()}${domain.charAt(1)}${domain.charAt(2)}***.com`;
  }
}

export function generateDummyWebsites(isLoggedIn: boolean = false): Website[] {
  const websites: Website[] = [];
  
  for (let i = 1; i <= 300; i++) {
    const domain = getRandomElement(sampleDomains);
    const category = getRandomElement(categories);
    const country = getRandomElement(countries);
    const language = getRandomElement(languages);
    
    websites.push({
      id: i,
      name: generateWebsiteName(domain, isLoggedIn),
      description: getRandomElement(descriptions),
      category,
      country,
      language,
      traffic: getRandomTraffic(),
      domainRating: getRandomDR(),
      price: getRandomPrice(),
      linkType: getRandomElement(linkTypes),
      maxLinks: getRandomLinks(),
      homepageDisplay: Math.random() > 0.7,
      isAdvertisement: Math.random() > 0.8
    });
  }
  
  return websites;
}

export { categories, countries, languages, linkTypes };
