export interface Testimonial {
  text: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "The tailored solutions provided by this developer transformed our workflow at Betafits. His expertise in automation and web development has driven our growth and efficiency.",
    name: "Mattew Prisco",
    position: "CEO",
    company: "Betafits",
    image: "/testimonial4.jpg",
  },
  {
    text: "Partnering with this developer was a turning point for Hub Agritech. Their innovative approach and hands-on support helped us streamline our operations and achieve remarkable results.",
    name: "Lilian Oyugi",
    position: "CEO",
    company: "Hub Agritech",
    image: "/testimonial5.jpg",
  },
  {
    text: "This developer’s commitment to excellence brought a fresh perspective to Top Tier Writers. His custom solutions enhanced our workflow and boosted our team's productivity.",
    name: "James Mwaniki",
    position: "Managing Director",
    company: "Top Tier Writers",
    image: "/testimonial6.jpg",
  },
];

export { testimonials };
