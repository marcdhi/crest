import { CalendarIcon, MapPinIcon, LeafIcon, ZapIcon, RecycleIcon, BookOpenIcon, GraduationCapIcon, CodeIcon, HeartPulseIcon, DownloadIcon, PhoneIcon, MailIcon, MenuIcon } from "lucide-react"

export const LANDING_PAGE = {
  header: {
    logo: {
      text: "Crest",
    },
    navigation: [
      { label: "About", href: "#about" },
      { label: "Departments", href: "#departments" },
      { label: "Speakers", href: "#speakers" },
      { label: "Brochures", href: "#brochures" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    title: {
      highlight: "Shaping Tomorrow's",
      main: "Sustainable Future",
    },
    subtitle: "Join the world's leading conference on sustainable innovation and eco-friendly technologies",
    eventDetails: {
      date: "September 15-17, 2024",
      location: "EcoCenter, Green City",
    },
    cta: "Register Now",
  },
  about: {
    title: "About Crest",
    description: "Crest is more than a conference - it's a movement towards a sustainable future. Join innovators, thought leaders, and change-makers in shaping tomorrow's world.",
    features: [
      {
        icon: "leaf",
        title: "Sustainability",
        description: "Explore cutting-edge sustainable practices and technologies",
      },
      {
        icon: "zap",
        title: "Innovation",
        description: "Discover groundbreaking ideas for a greener tomorrow",
      },
      {
        icon: "recycle",
        title: "Circular Economy",
        description: "Learn about transforming waste into valuable resources",
      },
    ],
  },
  departments: {
    title: "Our Departments",
    subtitle: "Explore our diverse range of departments dedicated to environmental innovation",
    list: [
      {
        icon: "book",
        title: "Environmental Studies",
        description: "Exploring the interactions between human societies and the natural world",
      },
      {
        icon: "graduation",
        title: "Sustainable Engineering",
        description: "Developing eco-friendly solutions for a greener future",
      },
      {
        icon: "code",
        title: "Green Chemistry",
        description: "Innovating chemical processes to reduce environmental impact",
      },
      {
        icon: "code",
        title: "Eco-Informatics",
        description: "Leveraging data science for environmental conservation",
      },
      {
        icon: "heart",
        title: "Environmental Health",
        description: "Studying the impact of environmental factors on human health",
      },
      {
        icon: "code",
        title: "Environmental Law",
        description: "Shaping policies for a sustainable and just world",
      },
    ],
  },
  campus: {
    title: "Our Campus",
    image: {
      src: "/placeholder.svg?height=720&width=1280",
      alt: "Crest College Campus",
    },
  },
  speakers: {
    title: "Featured Speakers",
    subtitle: "Learn from industry leaders and environmental experts",
    list: [
      {
        name: "Dr. Jane Smith",
        role: "Expert in Sustainable Technologies",
        image: "/speakers/jane-smith.jpg",
      },
      {
        name: "Prof. John Doe",
        role: "Climate Change Researcher",
        image: "/speakers/john-doe.jpg",
      },
      // Add more speakers...
    ],
  },
  brochures: {
    title: "Event Brochures",
    subtitle: "Download our comprehensive event materials",
    list: [
      "Conference Schedule",
      "Speaker Profiles",
      "Campus Map",
    ],
  },
  footer: {
    about: {
      title: "About Crest",
      description: "Crest is dedicated to fostering sustainable innovation and eco-friendly technologies.",
    },
    contact: {
      title: "Contact Us",
      phone: "+1 (555) 123-4567",
      email: "info@crestconference.com",
      address: "123 Eco Street, Green City, 12345",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    location: {
      title: "Location",
      mapPlaceholder: "Interactive map coming soon",
    },
    copyright: "© 2024 Crest Conference. All rights reserved.",
  },
} as const;

export type IconType = "leaf" | "zap" | "recycle" | "book" | "graduation" | "code" | "heart";

export const getIcon = (type: IconType) => {
  const icons = {
    leaf: LeafIcon,
    zap: ZapIcon,
    recycle: RecycleIcon,
    book: BookOpenIcon,
    graduation: GraduationCapIcon,
    code: CodeIcon,
    heart: HeartPulseIcon,
  };
  return icons[type];
}; 