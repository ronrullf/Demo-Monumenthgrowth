export const site = {
  // ---- Identity (swap per client) ----
  businessName: "Lone Star Kitchen Co.",
  city: "Dallas",
  state: "TX",
  stateFull: "Texas",
  tagline: "Dallas's Kitchen & Bath Remodelers",

  // ---- Hero copy (swap per client) ----
  heroHeadline: "The Kitchen You Want Is Three Weeks Away",
  heroSubheadline: "Send us a photo of your kitchen or bath. Get a real price back the same day — no sales visit, no waiting around.",

  // ---- Contact / conversion (swap per client) ----
  // WhatsApp number in full international format, digits only, no + or spaces.
  whatsappNumber: "1XXXXXXXXXX",
  // Human-readable phone for tap-to-call.
  phoneDisplay: "(214) 555-0142",
  phoneHref: "+12145550142",
  whatsappPrefill: "Hi, I want a quote for my kitchen remodel.",

  // ---- Trust bar (swap per client) ----
  googleRating: "4.9",
  reviewCount: "-", // set to a number string, or "-" to hide the count
  jobsDone: "180+",
  jobsLabel: "Kitchens & Baths Completed",
  licensedInsured: true,
  financing: "Financing available — as low as $199/mo",

  // ---- Reviews (3 short, real-style, name + neighborhood) ----
  reviews: [
    { quote: "They gutted our 1990s kitchen and had us cooking in it three weeks later. The quote came by text the same day I reached out.", name: "Marisol R.", area: "Lakewood" },
    { quote: "We got three bids. Lone Star was the only one that showed up on time and sent a written price before leaving. Easy choice.", name: "Greg T.", area: "Plano" },
    { quote: "Redid our primary bath top to bottom. Clean crew, no surprises, and it looks like the photos they showed us.", name: "Danielle K.", area: "Frisco" },
  ],

  // ---- Before/After pairs (max 2 for this demo). Real kitchen photos, free-license stock (Pexels) ----
  // until real client photos are dropped in at assets/before-after/. Alt text describes the room, never empty.
  beforeAfter: [
    {
      before: "https://images.pexels.com/photos/10397022/pexels-photo-10397022.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after: "https://images.pexels.com/photos/6301183/pexels-photo-6301183.jpeg?auto=compress&cs=tinysrgb&w=1200",
      label: "Full kitchen remodel — Lakewood",
    },
    {
      before: "https://images.pexels.com/photos/7167993/pexels-photo-7167993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      after: "https://images.pexels.com/photos/18039822/pexels-photo-18039822.jpeg?auto=compress&cs=tinysrgb&w=1200",
      label: "Custom cabinets & island — Frisco",
    },
  ],

  // ---- Footer (swap per client) ----
  serviceArea: ["75204", "75218", "75023", "75035", "75080", "75002"],
  hours: "Mon–Sat, 8am–7pm",
} as const;
