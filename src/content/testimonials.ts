import type { Testimonial } from "@/types";

/**
 * Merged testimonials — combines short quotes with the deeper success stories
 * into one rich set for the carousel. Each entry can carry a rating, a
 * before/after outcome, and a photo.
 *
 * To add a real photo: drop the file in /public/images/team and set `image`
 * (e.g. "/images/team/farhan.jpg"). Until then a branded initial-avatar shows.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Farhan Yousaf",
    course: "Freelancing",
    rating: 5,
    outcome: "Earned Rs 50,000 while still in training",
    quote:
      "I started earning during my training. The practical skills and the mentors at Apex made all the difference — I landed real clients before I even finished the course.",
    // image: "/images/team/farhan.jpg",
  },
  {
    id: "t2",
    name: "Ahmad Raza",
    course: "Digital Marketing",
    rating: 5,
    outcome: "Earned Rs 100,000 online during the course",
    quote:
      "Apex taught me digital marketing the practical way. I crossed Rs 100,000 in online earnings while still completing the course. This is the ultimate skill for today.",
    // image: "/images/team/ahmad.jpg",
  },
  {
    id: "t3",
    name: "Farhat Abbas",
    course: "Office Management",
    rating: 5,
    outcome: "Hired as Computer Operator at IAA Surgical, Ugoki",
    quote:
      "The office management course got me a real job as a Computer Operator. The training was hands-on and job-focused — exactly what employers wanted.",
    // image: "/images/team/farhat.jpg",
  },
  {
    id: "t4",
    name: "Ayesha Khan",
    course: "Graphic Designing",
    rating: 5,
    outcome: "Runs her own design page from home",
    quote:
      "Best decision I made. The design training was practical and the portfolio I built helped me start charging real money for logos and social media work.",
    // image: "/images/team/ayesha.jpg",
  },
  {
    id: "t5",
    name: "A proud parent",
    course: "Spoken English",
    rating: 5,
    quote:
      "Separate classes and a respectful environment gave us the confidence to enroll our daughter. The teaching quality is excellent and the staff are caring.",
  },
];
