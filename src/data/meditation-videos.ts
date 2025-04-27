
export interface MeditationVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export const meditationVideos: MeditationVideo[] = [
  {
    id: "1",
    title: "Peaceful Sleep Meditation Music",
    category: "Sleep",
    duration: "3:00:00",
    thumbnail: "https://img.youtube.com/vi/1ZYbU82GVz4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/1ZYbU82GVz4",
    description: "Calming sleep music with gentle rain sounds for deep relaxation and peaceful sleep."
  },
  {
    id: "2",
    title: "Anxiety Relief Meditation",
    category: "Stress",
    duration: "30:00",
    thumbnail: "https://img.youtube.com/vi/O-6f5wQXSu8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/O-6f5wQXSu8",
    description: "Guided meditation for anxiety and stress relief with soothing background music."
  },
  {
    id: "3",
    title: "Mindfulness Meditation",
    category: "Focus",
    duration: "20:00",
    thumbnail: "https://img.youtube.com/vi/ZToicYcHIOU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ZToicYcHIOU",
    description: "A guided mindfulness meditation to enhance focus and present moment awareness."
  },
  {
    id: "4",
    title: "Morning Meditation for Energy",
    category: "Morning",
    duration: "15:00",
    thumbnail: "https://img.youtube.com/vi/ENYYb5vIMkU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ENYYb5vIMkU",
    description: "Start your day with this energizing morning meditation practice."
  },
  {
    id: "5",
    title: "Deep Breathing Exercise",
    category: "Anxiety",
    duration: "10:00",
    thumbnail: "https://img.youtube.com/vi/tybOi4hjZFQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tybOi4hjZFQ",
    description: "Simple yet powerful breathing techniques for instant anxiety relief."
  },
  {
    id: "6",
    title: "Study Focus Music",
    category: "Focus",
    duration: "2:00:00",
    thumbnail: "https://img.youtube.com/vi/1ex_bNIFR1A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/1ex_bNIFR1A",
    description: "Alpha waves music to enhance concentration and focus during study or work."
  }
];

export const categories = [
  "All",
  "Sleep",
  "Stress",
  "Anxiety",
  "Focus",
  "Morning"
];
