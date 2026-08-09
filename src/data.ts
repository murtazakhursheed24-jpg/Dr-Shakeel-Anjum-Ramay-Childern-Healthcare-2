export const DOCTOR_INFO = {
  name: "Dr. Shakeel Anjum Ramay",
  title: "Child Healthcare | Okara",
  experience: "20+ Years of Experience",
  credentials: ["MD (Medicine)", "MBBS", "RMP", "D.A. (PGMI)", "Diploma in Child Health"],
  memberships: [
    "Member Pakistan Pediatric Association Punjab",
    "Ex. Deputy District Health Officer Okara",
    "Ex. General Secretary / Vice President PMA Okara"
  ],
  phone: "+92 344 3335333",
  phoneUrl: "tel:+923443335333",
  whatsapp: "+92 344 3335333",
  whatsappUrl: "https://wa.me/923443335333?text=Assalam+o+Alaikum%2C+I+would+like+to+book+an+appointment+with+Dr.+Shakeel+Anjum+Ramay.",
  location: "AI Shifa Children and Maternity Home, Okara, Pakistan",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=AI+Shifa+Children+and+Maternity+Home%2C+Okara%2C+Pakistan&utm_source=chatgpt.com"
};

export const IMAGES = {
  hero: "https://i.ibb.co/5WBTR0WZ/Chat-GPT-Image-Aug-9-2026-10-20-07-PM.png",
  gallery: [
    "https://i.ibb.co/yFHBypxN/Whats-App-Image-2026-08-09-at-8-18-08-AM.jpg",
    "https://i.ibb.co/N28MZMgd/Whats-App-Image-2026-08-09-at-8-18-19-AM.jpg",
    "https://i.ibb.co/3yKFqYqF/Whats-App-Image-2026-08-09-at-8-18-35-AM.jpg",
    "https://i.ibb.co/F4c1PjHD/Whats-App-Image-2026-08-09-at-8-18-49-AM.jpg",
    "https://i.ibb.co/1fqZqHBJ/Whats-App-Image-2026-08-09-at-8-19-04-AM.jpg",
    "https://i.ibb.co/Lz6rMrPZ/Whats-App-Image-2026-08-09-at-8-19-20-AM.jpg",
    "https://i.ibb.co/xKjMRDGS/Whats-App-Image-2026-08-09-at-8-19-33-AM.jpg",
    "https://i.ibb.co/99qHwZY3/Whats-App-Image-2026-08-09-at-8-20-12-AM.jpg",
    "https://i.ibb.co/CsVZ2ghx/Whats-App-Image-2026-08-09-at-8-20-25-AM.jpg",
    "https://i.ibb.co/rCrHgyw/Whats-App-Image-2026-08-09-at-8-20-38-AM.jpg"
  ]
};

export const VIDEOS = [
  { id: "v9uwmn", title: "Clinic Overview", description: "A brief look at our clinic facilities in Okara." },
  { id: "5s7c56", title: "Child Health Care", description: "Understanding the importance of early childhood checkups." },
  { id: "cg5zed", title: "Parent Guidance", description: "Essential tips for new parents." },
  { id: "0lor93", title: "Fever Management", description: "How to manage childhood fevers at home." },
  { id: "43omyz", title: "Healthy Nutrition", description: "Dietary guidance for growing children." },
  { id: "0grwi4", title: "Preventive Care", description: "Vaccinations and preventive healthcare." },
  { id: "q7g5u1", title: "Patient Consultation", description: "Our approach to compassionate care." }
].map(v => ({
  ...v,
  embedUrl: `https://streamable.com/e/${v.id}?autoplay=0`,
  directUrl: `https://streamable.com/${v.id}`
}));

export const SERVICES = [
  { title: "General Child Health Consultation", description: "Comprehensive health assessments for children of all ages.", icon: "Stethoscope" },
  { title: "Childhood Illness Assessment", description: "Accurate diagnosis and care for various childhood diseases.", icon: "Activity" },
  { title: "Fever & Common Infections", description: "Effective management of viral and bacterial infections.", icon: "Thermometer" },
  { title: "Cough, Cold & Respiratory", description: "Care for respiratory complaints and breathing issues.", icon: "Wind" },
  { title: "Digestive & Stomach Problems", description: "Treatment for common gastrointestinal issues in children.", icon: "HeartPulse" },
  { title: "Growth & Development", description: "Monitoring milestones and guiding healthy child development.", icon: "TrendingUp" },
  { title: "Nutrition & Feeding Guidance", description: "Expert advice on diet and nutrition for healthy growth.", icon: "Apple" },
  { title: "Allergy-Related Complaints", description: "Identifying and managing childhood allergies.", icon: "ShieldAlert" }
];

export const FAQS = [
  { question: "What qualifications does Dr. Shakeel Anjum Ramay have?", answer: "Dr. Shakeel Anjum Ramay holds an MD (Medicine), MBBS, RMP, D.A. (PGMI), and a Diploma in Child Health." },
  { question: "How many years of experience does the doctor have?", answer: "The doctor has over 20+ years of experience in treating children's diseases in Okara." },
  { question: "What children's health concerns can I consult the doctor about?", answer: "You can consult for general child health, fevers, respiratory complaints, digestive issues, growth monitoring, allergies, and nutrition guidance." },
  { question: "Where is the clinic located?", answer: "The clinic is located at AI Shifa Children and Maternity Home, Okara, Pakistan." },
  { question: "How can I book an appointment?", answer: "You can book an appointment online through this website, by calling our clinic, or via WhatsApp." },
  { question: "Can I contact the clinic through WhatsApp?", answer: "Yes, you can easily reach us on WhatsApp at +92 344 3335333." },
  { question: "Can I choose my preferred appointment time?", answer: "Yes, you can select your preferred date and time when requesting an appointment. Our staff will confirm the availability." },
  { question: "What should I bring to my child's appointment?", answer: "Please bring any previous medical records, current medications, and a list of any questions or concerns you have regarding your child's health." },
  { question: "How can I get directions to the clinic?", answer: "You can click the 'Get Directions' button on our location section to open the exact location in Google Maps." }
];
