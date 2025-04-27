export interface RetreatScheduleItem {
  day: string;
  activities: string[];
}

export interface RetreatHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface Retreat {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;
  highlights: RetreatHighlight[];
  itinerary: RetreatScheduleItem[];
  inclusions: string[];
}

export const retreats: Retreat[] = [
  {
    id: "rishikesh-spiritual-journey",
    title: "Rishikesh Spiritual Journey",
    location: "Rishikesh, Uttarakhand",
    duration: "7 Days, 6 Nights",
    price: "₹32,999",
    image: "https://cdn.pixabay.com/photo/2020/01/22/12/11/rishikesh-4785189_1280.jpg",
    description: "Experience spiritual awakening in the yoga capital of the world. Immerse yourself in ancient practices, meditation by the Ganges, and transformative healing sessions.",
    longDescription: "Nestled in the foothills of the Himalayas, our Rishikesh retreat offers a profound spiritual journey combining traditional yoga practices with modern therapeutic approaches. The sacred Ganges River provides a powerful backdrop for deep meditation and self-discovery. This retreat is designed for those seeking both spiritual growth and emotional healing, with a perfect blend of yoga, meditation, and therapeutic sessions led by Mr. Samrat. The serene environment of Rishikesh, combined with its rich spiritual heritage, creates an ideal setting for transformation.",
    highlights: [
      {
        icon: "lotus",
        title: "Traditional Yoga",
        description: "Daily yoga sessions in traditional Himalayan style with experienced yogis."
      },
      {
        icon: "waves",
        title: "Ganga Meditation",
        description: "Special meditation sessions by the sacred Ganges River."
      },
      {
        icon: "sun",
        title: "Spiritual Practices",
        description: "Participate in traditional ceremonies and spiritual discussions."
      },
      {
        icon: "heart",
        title: "Healing Sessions",
        description: "Therapeutic sessions combining Eastern wisdom with modern psychology."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Welcome ceremony and retreat orientation",
          "Evening Ganga Aarti participation",
          "Group dinner and introduction circle",
          "Settling into the peaceful ashram environment"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Early morning yoga and pranayama",
          "Introduction to meditation techniques",
          "Afternoon spiritual discourse",
          "Evening meditation by the Ganges"
        ]
      },
      {
        day: "Day 3",
        activities: [
          "Sunrise yoga session",
          "Personal therapy session with Mr. Samrat",
          "Sacred cave meditation experience",
          "Evening kirtan and mantra chanting"
        ]
      },
      {
        day: "Day 4",
        activities: [
          "Advanced yoga practices",
          "Group healing circle",
          "Visit to ancient temples",
          "Sunset meditation and reflection"
        ]
      },
      {
        day: "Day 5",
        activities: [
          "Silent morning meditation",
          "Second therapy session",
          "Riverside contemplation practices",
          "Evening fire ceremony (Havan)"
        ]
      },
      {
        day: "Day 6",
        activities: [
          "Final yoga session",
          "Integration and sharing circle",
          "Personal time for reflection",
          "Special farewell ceremony"
        ]
      },
      {
        day: "Day 7",
        activities: [
          "Morning gratitude meditation",
          "Closing ceremony",
          "Final group sharing",
          "Departure after lunch"
        ]
      }
    ],
    inclusions: [
      "6 nights accommodation in traditional ashram-style rooms",
      "All vegetarian sattvic meals",
      "Daily yoga and meditation sessions",
      "2 private therapy sessions with Mr. Samrat",
      "Spiritual discourse sessions",
      "Sacred site visits and temple tours",
      "Participation in traditional ceremonies",
      "Traditional yoga props and materials",
      "Airport transfers from Dehradun"
    ]
  },
  {
    id: "mountain-serenity-retreat",
    title: "Mountain Serenity Retreat",
    location: "Shimla, Himachal Pradesh",
    duration: "5 Days, 4 Nights",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000",
    description: "Reconnect with yourself amidst the majestic Himalayan mountains. This retreat combines therapy sessions, meditation, and yoga with the healing power of nature.",
    longDescription: "Nestled in the serene Himalayan mountains of Shimla, our Mountain Serenity Retreat offers a transformative journey of self-discovery and inner peace. Far from the noise of everyday life, you'll find yourself surrounded by pristine forests, crisp mountain air, and breathtaking views that naturally induce a sense of calm and reflection. Each day brings a carefully curated blend of therapeutic activities led personally by Mr. Samrat, designed to help you release stress, gain clarity, and rebuild your mental resilience. Whether you're seeking respite from burnout, looking to process emotional challenges, or simply desiring deeper self-connection, this retreat provides the perfect sanctuary for your healing journey.",
    highlights: [
      {
        icon: "mountain",
        title: "Nature Immersion",
        description: "Daily guided forest walks and mountain meditation sessions to harness the healing power of nature."
      },
      {
        icon: "brain",
        title: "Personalized Therapy",
        description: "One-on-one sessions with Mr. Samrat tailored to your specific mental wellness needs."
      },
      {
        icon: "yoga",
        title: "Mindful Movement",
        description: "Morning and evening yoga sessions suitable for all experience levels."
      },
      {
        icon: "utensils",
        title: "Nourishing Meals",
        description: "Farm-fresh vegetarian cuisine designed to support mental clarity and emotional balance."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Arrival and welcome ceremony",
          "Introduction to the retreat and setting intentions",
          "Light dinner and group bonding session",
          "Evening meditation for grounding"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Sunrise yoga and meditation",
          "Breakfast followed by individual therapy sessions",
          "Nature walk with mindfulness practice",
          "Evening group therapy and sharing circle"
        ]
      },
      {
        day: "Day 3",
        activities: [
          "Morning meditation and breathwork",
          "Art therapy workshop",
          "Free time for self-reflection or rest",
          "Evening sound healing session"
        ]
      },
      {
        day: "Day 4",
        activities: [
          "Mountain trek with guided meditation points",
          "Picnic lunch in nature",
          "Individual therapy sessions",
          "Campfire and storytelling night"
        ]
      },
      {
        day: "Day 5",
        activities: [
          "Final sunrise meditation",
          "Closing ceremony and intention setting",
          "Farewell lunch and departure"
        ]
      }
    ],
    inclusions: [
      "4 nights accommodation in private rooms with mountain views",
      "All vegetarian meals, snacks, and herbal teas",
      "3 personal therapy sessions with Mr. Samrat",
      "Daily yoga and meditation classes",
      "Guided nature walks and forest bathing experiences",
      "Art therapy and journaling materials",
      "Group sound healing sessions",
      "Pre-retreat consultation call"
    ]
  },
  {
    id: "forest-healing-escape",
    title: "Forest Healing Escape",
    location: "Munnar, Kerala",
    duration: "4 Days, 3 Nights",
    price: "₹19,999",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=1000",
    description: "Immerse yourself in the lush greenery of Kerala's tea plantations. Experience traditional healing practices, forest bathing, and therapeutic sessions.",
    longDescription: "Our Forest Healing Escape takes you to the verdant hills of Munnar, where the ancient wisdom of traditional Kerala healing practices meets modern therapeutic approaches. Surrounded by misty tea plantations and dense forests, this retreat offers a unique opportunity to disconnect from digital distractions and reconnect with your authentic self. The natural aromatherapy of the forest combined with structured healing sessions creates an environment where transformation occurs naturally. Mr. Samrat personally guides each retreat participant through a journey of emotional release, mental clarity, and renewed purpose, using both one-on-one sessions and group activities that foster community and shared growth.",
    highlights: [
      {
        icon: "tree",
        title: "Forest Bathing",
        description: "Experience the Japanese art of 'Shinrin-Yoku' in Kerala's lush forests for natural stress reduction."
      },
      {
        icon: "spa",
        title: "Ayurvedic Treatments",
        description: "Traditional Kerala therapies to balance mind-body energy and promote deep healing."
      },
      {
        icon: "headphones",
        title: "Sound Healing",
        description: "Immersive sonic experiences using traditional instruments for deep relaxation."
      },
      {
        icon: "coffee",
        title: "Tea Meditation",
        description: "Mindful tea ceremonies amidst Munnar's famous plantations for present moment awareness."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Welcome and retreat orientation",
          "Initial wellness assessment with Mr. Samrat",
          "Introduction to forest bathing practice",
          "Gentle evening yoga and meditation"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Morning breathwork in the tea gardens",
          "Traditional Ayurvedic consultation",
          "Therapeutic journaling workshop",
          "Evening sound bath meditation"
        ]
      },
      {
        day: "Day 3",
        activities: [
          "Sunrise yoga and intention setting",
          "Deep forest immersion therapy",
          "Personal counseling sessions",
          "Group sharing circle and bonfire"
        ]
      },
      {
        day: "Day 4",
        activities: [
          "Final morning meditation",
          "Integration session and future planning",
          "Closing ceremony with traditional blessing",
          "Departure after lunch"
        ]
      }
    ],
    inclusions: [
      "3 nights accommodation in eco-friendly cottages",
      "All organic vegetarian meals featuring local produce",
      "2 private therapy sessions with Mr. Samrat",
      "Daily guided forest bathing experiences",
      "One traditional Ayurvedic treatment",
      "Yoga and meditation sessions",
      "Tea plantation tour and mindful tea tasting",
      "Journal and retreat materials"
    ]
  },
  {
    id: "lakeside-mindfulness-retreat",
    title: "Lakeside Mindfulness Retreat",
    location: "Nainital, Uttarakhand",
    duration: "3 Days, 2 Nights",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    description: "Find peace by the serene Naini Lake. Focus on mindfulness practices, guided meditation, and personalized therapy sessions in a tranquil setting.",
    longDescription: "The Lakeside Mindfulness Retreat offers a perfect weekend escape to reset your mental clarity and emotional balance. Situated on the shores of the pristine Naini Lake, this retreat creates an ideal setting for deep reflection and mindfulness practice. The gentle lapping of the lake waters provides a natural soundtrack for meditation, while the surrounding mountains create a protective embrace that fosters feelings of safety and groundedness. This shorter retreat is perfect for busy professionals who need a quick but effective mental reset. Under Mr. Samrat's expert guidance, you'll learn practical mindfulness techniques that can be integrated into your daily life long after the retreat ends.",
    highlights: [
      {
        icon: "droplets",
        title: "Lakeside Meditation",
        description: "Practice meditation by the serene waters of Naini Lake for enhanced focus and calm."
      },
      {
        icon: "brain",
        title: "Cognitive Restructuring",
        description: "Learn practical techniques to reshape negative thought patterns into positive mindsets."
      },
      {
        icon: "bed",
        title: "Sleep Restoration",
        description: "Special evening practices designed to improve sleep quality and overcome insomnia."
      },
      {
        icon: "compass",
        title: "Guided Reflection",
        description: "Structured journaling and contemplation exercises for greater self-awareness."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Afternoon check-in and welcome",
          "Sunset meditation by the lake",
          "Dinner and orientation session",
          "Evening relaxation and sleep preparation practice"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Early morning lakeside meditation",
          "Mindful breakfast and journaling",
          "Individual therapy sessions with Mr. Samrat",
          "Afternoon mindful walking practice",
          "Evening guided visualization and intention setting"
        ]
      },
      {
        day: "Day 3",
        activities: [
          "Sunrise yoga and meditation",
          "Final group sharing session",
          "Integration workshop and action planning",
          "Closing ceremony and departure"
        ]
      }
    ],
    inclusions: [
      "2 nights accommodation with lake views",
      "All vegetarian meals and refreshments",
      "1 private therapy session with Mr. Samrat",
      "Guided meditation and mindfulness sessions",
      "Mindfulness toolkit to take home",
      "Daily yoga classes",
      "Access to lakeside meditation spaces",
      "Post-retreat check-in call"
    ]
  },
  {
    id: "valley-of-wellness",
    title: "Valley of Wellness",
    location: "Manali, Himachal Pradesh",
    duration: "6 Days, 5 Nights",
    price: "₹29,999",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=1000",
    description: "A comprehensive wellness journey in the Kullu Valley. Combine adventure activities with therapy sessions, yoga, and meditation for holistic healing.",
    longDescription: "Our most comprehensive retreat, the Valley of Wellness, takes place in the stunning Kullu Valley near Manali. This extended 6-day journey provides the time and space needed for profound transformation and deep healing. The retreat balances introspective therapy work with energizing adventure activities, creating a holistic approach to wellness that addresses mind, body, and spirit. The majestic Himalayan peaks and flowing rivers create a powerful backdrop for personal growth and renewal. Mr. Samrat leads this signature retreat with a carefully designed progression that takes participants from releasing old patterns to building new tools for emotional resilience and authentic living.",
    highlights: [
      {
        icon: "mountain",
        title: "Adventure Therapy",
        description: "Guided hiking and mild river adventures that build confidence and mental resilience."
      },
      {
        icon: "flame",
        title: "Trauma Release",
        description: "Specialized therapy techniques for processing and releasing past emotional wounds."
      },
      {
        icon: "music",
        title: "Music Therapy",
        description: "Interactive sessions using sound and rhythm to access deeper emotional states."
      },
      {
        icon: "users",
        title: "Community Healing",
        description: "Build meaningful connections through facilitated group sessions and shared experiences."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Welcome ceremony and group introductions",
          "Setting personal retreat intentions",
          "Initial assessment with Mr. Samrat",
          "Evening meditation and sound healing"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Morning yoga and breathwork",
          "Individual therapy sessions begin",
          "Afternoon gentle river walk",
          "Evening journaling workshop"
        ]
      },
      {
        day: "Day 3",
        activities: [
          "Sunrise meditation in the valley",
          "Group adventure activity (easy hiking)",
          "Afternoon rest and reflection",
          "Evening music therapy session"
        ]
      },
      {
        day: "Day 4",
        activities: [
          "Morning movement and meditation",
          "Second individual therapy session",
          "Art therapy workshop in nature",
          "Community dinner and sharing circle"
        ]
      },
      {
        day: "Day 5",
        activities: [
          "Day trip to local sacred site",
          "Picnic lunch and group therapy in nature",
          "Final individual sessions with Mr. Samrat",
          "Special celebration dinner"
        ]
      },
      {
        day: "Day 6",
        activities: [
          "Integration workshop and future planning",
          "Group closing ceremony",
          "Final lunch and departures"
        ]
      }
    ],
    inclusions: [
      "5 nights accommodation in private mountain cabins",
      "All meals, snacks, and herbal teas",
      "3 private therapy sessions with Mr. Samrat",
      "Daily yoga, meditation, and mindfulness practices",
      "Guided adventure activities (hiking, gentle river experiences)",
      "Art and music therapy sessions",
      "Journal and all workshop materials",
      "Transportation to local excursion sites",
      "Pre and post-retreat support"
    ]
  },
  {
    id: "sunrise-meditation-getaway",
    title: "Sunrise Meditation Getaway",
    location: "Darjeeling, West Bengal",
    duration: "4 Days, 3 Nights",
    price: "₹22,999",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000",
    description: "Wake up to the magnificent view of the Kanchenjunga mountain range. Focus on early morning meditation, pranayama, and therapeutic sessions.",
    longDescription: "The Sunrise Meditation Getaway in Darjeeling offers a unique opportunity to begin each day with the awe-inspiring sight of dawn breaking over the majestic Kanchenjunga mountain range. This retreat is specially designed around the power of morning practices, harnessing the clear, fresh energy of daybreak for deeper meditation and clarity of mind. The early morning light in the mountains has a particular quality that enhances mindfulness and presence, creating perfect conditions for transformation. Mr. Samrat guides participants through specialized pranayama (breath work) techniques that are most effective during these dawn hours, setting the foundation for therapeutic work that continues throughout each day. This retreat is particularly beneficial for those struggling with clarity, decision-making, or those seeking to establish powerful morning routines.",
    highlights: [
      {
        icon: "sun",
        title: "Sunrise Sadhana",
        description: "Daily practice at dawn with views of the Himalayan peaks for spiritual connection."
      },
      {
        icon: "wind",
        title: "Advanced Pranayama",
        description: "Learn powerful breathing techniques that enhance mental clarity and emotional balance."
      },
      {
        icon: "coffee",
        title: "Mindful Tea Experience",
        description: "Visit local tea gardens and practice mindfulness through traditional tea ceremonies."
      },
      {
        icon: "pencil",
        title: "Intentional Planning",
        description: "Sessions focused on creating meaningful life routines and morning practices."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Afternoon arrival and orientation",
          "Evening introduction to pranayama",
          "Early night rest preparation for sunrise practice"
        ]
      },
      {
        day: "Day 2",
        activities: [
          "Pre-dawn wake-up and mountain viewing point trek",
          "Sunrise meditation and pranayama",
          "Breakfast and morning reflection",
          "Individual therapy sessions with Mr. Samrat",
          "Afternoon tea garden visit and mindfulness practice",
          "Evening gentle yoga and preparation for next day"
        ]
      },
      {
        day: "Day 3",
        activities: [
          "Second sunrise practice session",
          "Extended morning meditation",
          "Workshop on creating personal morning routines",
          "Afternoon individual sessions continue",
          "Evening intention setting for life integration"
        ]
      },
      {
        day: "Day 4",
        activities: [
          "Final sunrise ceremony",
          "Closing practice and integration session",
          "Brunch and departures"
        ]
      }
    ],
    inclusions: [
      "3 nights accommodation with mountain views",
      "All meals with special dawn refreshments",
      "2 private therapy sessions with Mr. Samrat",
      "Daily guided sunrise meditation and pranayama",
      "Tea plantation tour and mindfulness tea experience",
      "Morning routine planning workshop",
      "Journal and practice materials",
      "Early morning transportation to viewing points"
    ]
  }
];
