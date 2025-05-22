export interface Module {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: {
    hindi: string[];
    gujarati: string[];
  };
}

export interface DevotionalContent {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
  imageUrl: string;
  audioUrl: string; // Add this new field
}