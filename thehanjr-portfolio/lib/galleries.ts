// lib/galleries.ts
export type GalleryCategory =
  | "wedding"
  | "engagement"
  | "portraits"
  | "graduation"
  | "travel"
  | "landscape"
  | "night-sky";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Gallery = {
  slug: string;
  title: string;
  category: GalleryCategory;
  description: string;
  location?: string;
  coverImage: string;
  images: GalleryImage[];
};

export const galleries: Gallery[] = [
  {
    slug: "portraits-in-the-city",
    title: "Portraits in the City",
    category: "portraits",
    description: "Soft, cinematic portraits shot around downtown Vancouver.",
    location: "Vancouver, BC",
    coverImage: "/images/galleries/portraits-cover.jpg",
    images: [
      { src: "/images/galleries/portraits-1.jpg", alt: "Portrait 1" },
      { src: "/images/galleries/portraits-2.jpg", alt: "Portrait 2" },
      { src: "/images/galleries/portraits-3.jpg", alt: "Portrait 3" },
    ],
  },
  {
    slug: "quiet-couples-at-sunset",
    title: "Quiet Couples at Sunset",
    category: "engagement",
    description:
      "Gentle, honest moments captured during golden hour by the water.",
    location: "Stanley Park, Vancouver",
    coverImage: "/images/galleries/couples-cover.jpg",
    images: [
      { src: "/images/galleries/couples-1.jpg", alt: "Couple 1" },
      { src: "/images/galleries/couples-2.jpg", alt: "Couple 2" },
      { src: "/images/galleries/couples-3.jpg", alt: "Couple 3" },
    ],
  },
  {
    slug: "travel-notes-from-the-road",
    title: "Travel Notes from the Road",
    category: "travel",
    description:
      "Small scenes and details from trips that linger in your memory.",
    location: "Various locations",
    coverImage: "/images/galleries/travel-cover.jpg",
    images: [
      { src: "/images/galleries/travel-1.jpg", alt: "Travel 1" },
      { src: "/images/galleries/travel-2.jpg", alt: "Travel 2" },
      { src: "/images/galleries/travel-3.jpg", alt: "Travel 3" },
    ],
  },
];
