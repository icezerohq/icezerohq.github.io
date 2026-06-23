export interface TimelineIcon {
  type: 'emoji' | 'icon' | 'color' | 'number' | 'image'
  value: string
  fallback?: string
}

export interface InspirationPhoto {
  title: string
  source: string
  image: string
  accent: string
}

export interface JournalGroup {
  title: string
  location?: string
  date: string
  icon: TimelineIcon
  description: string
  images: string[]
}

export const timelineIconPresets = {
  botanical: { type: 'emoji', value: '🌼' },
  home: { type: 'emoji', value: '🖼️' },
  boardGame: { type: 'emoji', value: '🎲' },
  city: { type: 'emoji', value: '🏙️' },
  cat: { type: 'emoji', value: '🐈' },
  cycling: { type: 'emoji', value: '🚴' },
  landscape: { type: 'emoji', value: '🏞️' }
} satisfies Record<string, TimelineIcon>

export const inspirationPhotos: InspirationPhoto[] = [
  {
    title: 'Spring botanical mood',
    source: 'Unsplash',
    image: 'https://images.unsplash.com/photo-1524338198850-e9363500c28e?auto=format&fit=crop&q=82&w=900',
    accent: '#f6c177'
  },
  {
    title: 'Soft flower study',
    source: 'Unsplash',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=82&w=700',
    accent: '#ebbcba'
  },
  {
    title: 'Evening landscape tone',
    source: 'Unsplash',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=82&w=900',
    accent: '#9ccfd8'
  },
  {
    title: 'Forest air reference',
    source: 'Unsplash',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=82&w=900',
    accent: '#a3be8c'
  },
  {
    title: 'Quiet home light',
    source: 'Unsplash',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=82&w=700',
    accent: '#c4a7e7'
  }
]

export const journalGroups: JournalGroup[] = [
  {
    title: 'City Stroll',
    location: 'Downtown Ningbo',
    date: '2026-06-23',
    icon: timelineIconPresets.city,
    description:
      'Spent the day wandering through busy streets, browsing local shops, and enjoying a quiet coffee while watching city life unfold.',
    images: [
      '/pro/img-17523992258319683965cb3a53829d45c99cb61148da33d9d49ee8ce.jpg',
      '/pro/yunshuo-qu-bqxIzrYzGaI-unsplash.jpg'
    ]
  },
  {
    title: 'Botanical Garden',
    location: 'Ningbo',
    date: '2026-03-07',
    icon: timelineIconPresets.botanical,
    description: 'It was early spring, so I went to see the cherry blossoms.',
    images: [
      '/pro/alexandr-popadin-VtnXnEXMwx4-unsplash.jpg',
      '/pro/lawrence-krowdeed-U1KwIi4_amQ-unsplash.jpg',
      '/pro/zongnan-bao-dgabncc2a6E-unsplash.jpg',
      '/pro/david-becker-gyni7CExVk4-unsplash.jpg'
    ]
  },
  {
    title: 'Around Home',
    date: '2026-02-20',
    icon: timelineIconPresets.home,
    description: 'I went home for the holiday, wandered around a bit, and enjoyed the comfort of home.',
    images: [
      '/pro/smithsonian-idRCWgCl7aE-unsplash.jpg',
      '/pro/chrsndrsn-XdgjISWC2Bg-unsplash.jpg',
      '/pro/alexander-lunyov-nlY-pr6Fr1w-unsplash.jpg'
    ]
  }
]
