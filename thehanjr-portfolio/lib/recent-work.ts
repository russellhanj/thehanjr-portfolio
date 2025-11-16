
export type RecentWorkItem = {
  id: string;
  title?: string;
  href?: string;
  src: string;
  alt: string;
};

export const recentWorkItems: RecentWorkItem[] = [
  {
    id: "lang-lang-portrait",
    title: "Piano Portrait",
    href: "/portfolio/portraits-in-the-city",
    src: "/images/recent/lang-lang-portrait.jpg",
    alt: "Portrait at a grand piano in soft light",
  },
  {
    id: "fashion-stairs",
    href: "/portfolio/travel-notes-from-the-road",
    src: "/images/recent/fashion-stairs.jpg",
    alt: "Fashion portrait on stairs with strong shadows",
  },
  {
    id: "night-city-1",
    src: "/images/recent/night-city-1.jpg",
    alt: "Night city scene with blurred lights",
  },
  {
    id: "mountain-fog",
    src: "/images/recent/mountain-fog.jpg",
    alt: "Foggy mountain landscape at sunrise",
  },
  {
    id: "street-reflection",
    src: "/images/recent/street-reflection.jpg",
    alt: "Street reflection in a puddle",
  },
  {
    id: "portrait-window",
    src: "/images/recent/portrait-window.jpg",
    alt: "Soft window light portrait",
  },
  // Add more as you prepare real images
];
