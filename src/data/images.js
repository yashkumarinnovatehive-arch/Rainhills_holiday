// ============================================================
// Image Asset Registry — Rainhills Holiday Home
// All Unsplash images are free-to-use, high quality, nature/India themed
// Replace with real property photos by swapping paths in this file
// ============================================================

import heroImg from '../assets/images/hero.jpg';
import aboutImg from '../assets/images/about.jpg';
import roomFamilyImg from '../assets/images/room_family.jpg';
import roomCoupleImg from '../assets/images/room_couple.jpg';
import foodImg from '../assets/images/food.jpg';
import gardenImg from '../assets/images/garden.jpg';

// Fallback placeholder (inline SVG data URI — never broken)
export const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%231a3a2e' width='800' height='600'/%3E%3Ctext fill='%23c9a84c' font-family='serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ERainhills Holiday Home%3C/text%3E%3C/svg%3E";

// ---- Curated Unsplash nature/homestay images for gallery ----
// These are stable, direct image URLs from Unsplash
const U = {
  // Western Ghats / nature
  hills1: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
  hills2: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  forest1: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  forest2: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  waterfall: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  // Rooms / interiors — cozy homestay style
  room1: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  room2: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
  room3: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
  // Food — Indian cuisine
  food1: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  food2: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  // Garden / outdoors
  garden1: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  garden2: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
  // Guests / visitors
  visitors1: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
};

export const images = {
  hero: heroImg,
  heroBg: heroImg,

  about: {
    main: aboutImg,
    secondary: gardenImg,
    tertiary: U.forest1,
  },

  rooms: {
    family: roomFamilyImg,
    couple: roomCoupleImg,
    group: U.room1,
  },

  food: {
    main: foodImg,
    secondary: U.food1,
    tertiary: U.food2,
  },

  garden: {
    main: gardenImg,
    secondary: U.garden1,
  },

  // Gallery images with categories
  gallery: [
    { src: heroImg, category: "Exterior", alt: "Rainhills property exterior" },
    { src: aboutImg, category: "Exterior", alt: "Property front view" },
    { src: gardenImg, category: "Garden", alt: "Lush garden" },
    { src: U.garden1, category: "Garden", alt: "Property garden" },
    { src: roomFamilyImg, category: "Rooms", alt: "Family room" },
    { src: roomCoupleImg, category: "Rooms", alt: "Couple room" },
    { src: U.room1, category: "Rooms", alt: "Comfortable room" },
    { src: U.room2, category: "Rooms", alt: "Room interior" },
    { src: foodImg, category: "Food", alt: "Homely Maharashtrian meal" },
    { src: U.food1, category: "Food", alt: "Indian thali" },
    { src: U.food2, category: "Food", alt: "Fresh local food" },
    { src: U.hills1, category: "Nature", alt: "Misty Amboli hills" },
    { src: U.hills2, category: "Nature", alt: "Western Ghats" },
    { src: U.forest1, category: "Nature", alt: "Forest trail" },
    { src: U.waterfall, category: "Nature", alt: "Amboli waterfall" },
    { src: U.forest2, category: "Nature", alt: "Lush greenery" },
    { src: U.visitors1, category: "Visitors", alt: "Happy guests" },
    { src: U.garden2, category: "Garden", alt: "Peaceful garden" },
  ],
};

export default images;
