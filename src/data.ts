import { IMAGES } from "./assets";

export const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
];

export const CONTACT = {
  phone: "+91 99622 81824",
  phoneHref: "tel:+919962281824",
  whatsapp: "https://wa.me/919962281824",
  instagram: "https://instagram.com/fit_bite_chennai",
  instagramHandle: "@fit_bite_chennai",
  city: "Anna Nagar, Chennai",
};

export const STATS = [
  { value: "12k+", label: "Bowls served" },
  { value: "4.9", label: "Avg. rating" },
  { value: "18", label: "Fresh ingredients" },
  { value: "0", label: "Preservatives" },
];

export const FEATURES = [
  {
    icon: "Leaf",
    title: "100% Whole & Fresh",
    copy: "No preservatives, no refined sugar, no shortcuts. Just whole ingredients prepped the same morning they reach you.",
  },
  {
    icon: "Bolt",
    title: "Macro-Balanced Fuel",
    copy: "Every bowl is built around protein, fiber and good fats so you stay full, focused and energised for hours.",
  },
  {
    icon: "Truck",
    title: "Chilled Doorstep Delivery",
    copy: "Cold-chain packed and delivered fresh around Anna Nagar so your food lands crisp, cool and ready to enjoy.",
  },
  {
    icon: "Heart",
    title: "Made With Care",
    copy: "Small-batch, hand-tossed and taste-tested daily. Real people, real kitchens, real care in every box.",
  },
];

export const PRODUCTS = [
  {
    id: "oats",
    name: "Overnight Oats",
    tagline: "Slow-soaked. Deeply delicious.",
    price: "₹89",
    unit: "per jar",
    image: IMAGES.oats,
    accent: "from-brand-500 to-brand-700",
    dot: "#2d9e56",
    description:
      "Rolled oats soaked overnight in creamy yogurt and milk, layered with seasonal fruit, nuts and seeds. Grab-and-go breakfast that actually keeps you full.",
    highlights: [
      "High protein + slow-release carbs",
      "Banana, apple, pomegranate & berries",
      "Chia, flax & roasted almond crunch",
      "Naturally sweet, no added sugar",
    ],
    tags: ["Breakfast", "Vegetarian", "Grab & Go"],
  },
  {
    id: "salads",
    name: "Healthy Salad Bowls",
    tagline: "Bold, fresh & built to satisfy.",
    price: "₹149",
    unit: "per bowl",
    image: IMAGES.salad,
    accent: "from-citrus-500 to-berry-500",
    dot: "#fd7e14",
    description:
      "Crisp greens and marinated veg tossed with your choice of grilled paneer, falafel, mushroom or chicken — and a dressing crafted in-house.",
    highlights: [
      "Paneer, Falafel, Chicken or Vegan",
      "Sweet corn, pomegranate & corn salad",
      "Freshly tossed, never wilted",
      "Signature house dressings",
    ],
    tags: ["Lunch", "High Protein", "Vegan options"],
  },
  {
    id: "juices",
    name: "Cold-Pressed Juices",
    tagline: "Pressed fresh. Nothing added.",
    price: "₹40",
    unit: "per bottle",
    image: IMAGES.juices,
    accent: "from-citrus-400 to-citrus-600",
    dot: "#ee5e06",
    description:
      "Fruit and veg pressed cold within hours of pickup — no heat, no concentrate, no sugar. From bright Watermelon to an immunity Amla shot.",
    highlights: [
      "Watermelon, Pineapple & Citrus",
      "Amla immunity shot · ₹30",
      "Cold-pressed, never heat-treated",
      "Drink fresh within 24-48 hrs",
    ],
    tags: ["Beverages", "Hydration", "Immunity"],
  },
];

export const BENEFITS = [
  {
    title: "Eat clean without the effort",
    copy: "You shouldn't have to meal-prep at 6am or decode nutrition labels. We do the sourcing, chopping and balancing — you just eat well.",
    stat: "8 min",
    statLabel: "from fridge to ready",
  },
  {
    title: "Feel the difference in a week",
    copy: "Balanced protein, fiber and micronutrient-dense produce means steadier energy, fewer 4pm crashes and lighter, happier digestion.",
    stat: "7 days",
    statLabel: "to feel the shift",
  },
  {
    title: "Food you can actually trust",
    copy: "Small-batch kitchens, transparent ingredients and a menu that changes with the season. No mystery oils, no hidden sugars.",
    stat: "100%",
    statLabel: "traceable ingredients",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aarthi R.",
    role: "Marathon runner · Chennai",
    quote:
      "The overnight oats are my pre-run breakfast every single day. Real fruit, real crunch, zero sugar crash. My recovery has genuinely improved.",
    rating: 5,
    tone: "#2d9e56",
  },
  {
    name: "Karthik S.",
    role: "Software engineer",
    quote:
      "Replaced my oily office lunch with the grilled chicken bowl. Four weeks in, down 3 kgs and I'm not napping at my desk anymore. Tastes amazing too.",
    rating: 5,
    tone: "#fd7e14",
  },
  {
    name: "Divya N.",
    role: "Yoga teacher",
    quote:
      "The cold-pressed watermelon juice is unreal — genuinely tastes like summer. I love that there's nothing hiding in it. The amla shot is a daily ritual now.",
    rating: 5,
    tone: "#e11d48",
  },
  {
    name: "Farhan M.",
    role: "Gym coach",
    quote:
      "I recommend FIT BITE to every client who says they 'can't cook healthy'. Consistent macros, fresh produce and delivery that actually shows up on time.",
    rating: 5,
    tone: "#53bb76",
  },
  {
    name: "Shruti P.",
    role: "New mom",
    quote:
      "Balanced, clean food that I don't have to think about while juggling a baby. The paneer bowl is my favourite comfort meal that's actually good for me.",
    rating: 5,
    tone: "#ff9b38",
  },
];

export const PLANS = [
  {
    name: "Taster",
    badge: "Try it",
    price: "₹149",
    cadence: "one-time",
    blurb: "Build your own single bowl and see what fresh really tastes like.",
    features: [
      "1 salad bowl of your choice",
      "Free house dressing",
      "Chilled doorstep delivery",
      "Skip the membership",
    ],
    cta: "Order a bowl",
    featured: false,
  },
  {
    name: "Morning Ritual",
    badge: "Most popular",
    price: "₹649",
    cadence: "per week",
    blurb: "Five effortless breakfasts delivered every Monday to fuel your week.",
    features: [
      "5 overnight oat jars / week",
      "2 cold-pressed juices included",
      "Rotating seasonal toppings",
      "Priority morning delivery slot",
      "Pause or swap anytime",
    ],
    cta: "Start my mornings",
    featured: true,
  },
  {
    name: "Full Reset",
    badge: "Best value",
    price: "₹2,499",
    cadence: "per month",
    blurb: "The complete clean-eating routine — breakfast, lunch and a daily juice.",
    features: [
      "Daily bowl + oats + juice",
      "Custom macro preferences",
      "Vegan & high-protein modes",
      "Dedicated WhatsApp support",
      "Free chef consultation",
    ],
    cta: "Reset my routine",
    featured: false,
  },
];

export const FAQS = [
  {
    q: "Where do you deliver, and when?",
    a: "FIT BITE exclusively delivers in and around Anna Nagar, Chennai with chilled packaging. Mornings are delivered before 8am and lunch slots between 12–1pm. Order before 9pm the previous day for next-morning delivery.",
  },
  {
    q: "Is everything really made fresh?",
    a: "Yes. We prep in small batches the same morning your order goes out, using whole produce sourced that week. There are no preservatives, refined sugar or heat-processed juices anywhere in our menu.",
  },
  {
    q: "Do you have vegan and high-protein options?",
    a: "Absolutely. Choose vegan builds with falafel, mushroom and chickpea, or go high-protein with grilled paneer or chicken. You can set your preference on the Full Reset plan and we'll build to your macros.",
  },
  {
    q: "How long do the juices and oats keep?",
    a: "Cold-pressed juices are best enjoyed within 24–48 hours — keep them chilled. Overight oats stay fresh for up to 3 days in the refrigerator. We date every container so you always know.",
  },
  {
    q: "Can I customise or skip ingredients?",
    a: "Of course. Note any allergies or dislikes at checkout and we'll adjust your bowl. Subscriptions can be paused, swapped or skipped anytime from WhatsApp.",
  },
  {
    q: "How do I place an order?",
    a: "Tap any order button to pre-order via WhatsApp, or call us at +91 99622 81824. For one-off bowls you can also scan our cart QR. Subscriptions are set up with a quick chat.",
  },
];
