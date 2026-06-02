import { Testimonial } from "@/components/site/Primitives";
import {
    ArrowRight,
    ArrowLeft,   // ← add this
    ShieldCheck,
     
  } from "lucide-react";

import { useState, useEffect } from "react";


const testimonials = [
    {
      quote: "The tire inspection and uniformity platform exceeded our expectations. The team understood our manufacturing requirements deeply and delivered a solution that integrated seamlessly into our production line.",
      name: "Rajendra Patel",
      role: "Engineering Lead",
      company: "Bridgestone",
      initials: "RP",
      accent: "var(--brand-red)",
      project: "PROJECT: Tire Inspection & Uniformity",
      avatar: "/testimonial/riteshbhole.jpg",
    },
    {
      quote: "The weapon management system built by Pure Technology brought much-needed precision and accountability to our depot operations. Reliable, secure, and built to defence-grade standards.",
      name: "Capt Praveen Sab",
      role: "Captain",
      company: "29 Forward Ammunition Depot",
      initials: "PS",
      accent: "var(--brand-blue)",
      project: "PROJECT: Weapon Management System",
    },
    {
      quote: "Pure Technology delivered the GED software and pulley concentricity solution with exceptional technical depth. Their team grasped our engineering requirements quickly and delivered a robust, production-ready system.",
      name: "Ritesh Bhole",
      role: "Deputy General Manager",
      company: "Schindler",
      initials: "RB",
      avatar: "/testimonial/riteshbhole.jpg",
      accent: "var(--brand-orange)",
      project: "PROJECT: GED Software & Pulley Concentricity",
    },
  {
    quote: "The tire inspection and uniformity platform exceeded our expectations. The team understood our manufacturing requirements deeply and delivered a solution that integrated seamlessly into our production line.",
    name: "Rajendra Patel",
    role: "Engineering Lead",
    company: "Bridgestone",
    initials: "RP",
    project: "PROJECT: Tire Inspection & Uniformity",
  },
  {
    quote: "The weapon management system built by Pure Technology brought much-needed precision and accountability to our depot operations. Reliable, secure, and built to defence-grade standards.",
    name: "Capt Praveen Sab",
    role: "Captain",
    company: "29 Forward Ammunition Depot",
    initials: "PS",
    project: "PROJECT: Weapon Management System",
  },
  {
    quote: "Pure Technology delivered the GED software and pulley concentricity solution with exceptional technical depth. Their team grasped our engineering requirements quickly and delivered a robust, production-ready system.",
    name: "Ritesh Bhole",
    role: "Deputy General Manager",
    company: "Schindler",
    initials: "RB",
    project: "PROJECT: GED Software & Pulley Concentricity",
  },
  {
    quote: "The web portal and cybersecurity solution delivered by Pure Technology gave us the reliability and security compliance we needed for government-grade operations. Highly professional team.",
    name: "J N Tulekar",
    role: "Officer",
    company: "PCDA (O)",
    initials: "JT",
    project: "PROJECT: Web Portal & Cyber Security",
  },
  {
    quote: "Pure Technology built a robust vehicle management system that streamlined our fleet operations significantly. Their technical expertise and timely delivery made the entire engagement smooth.",
    name: "Madhusudan Sadani",
    role: "Manager",
    company: "Sandvik",
    initials: "MS",
    project: "PROJECT: Vehicle Management System",
  },
  {
    quote: "The AI calling solution integrated with Zoho transformed how we handle client outreach. Pure Technology understood our business needs precisely and delivered a seamless, intelligent workflow.",
    name: "Prabin",
    role: "Director",
    company: "AA Consultancy",
    initials: "PR",
    project: "PROJECT: AI Calling with Zoho Integration",
  },
  {
    quote: "The AI-based quotation paper generation and interview system has revolutionized our academic processes. Pure Technology brought innovation that we didn't think was possible in the education space.",
    name: "Dr Sushant Patil",
    role: "Director",
    company: "DY Patil Educational Federation",
    initials: "SP",
    project: "PROJECT: AI Quotation Paper & Interview",
    avatar: "/testimonial/riteshbhole.jpg",
  },
  {
    quote: "The student portal and AI interview system built by Pure Technology has dramatically improved our student engagement and administrative efficiency. A truly future-ready solution.",
    name: "Dr Sajid Alvi",
    role: "Director",
    company: "DIMR",
    initials: "SA",
    project: "PROJECT: Student Portal & AI Interview",
  },
  {
    quote: "Pure Technology delivered our emailer platform with great attention to detail and design quality. The solution was clean, scalable, and exactly what our media operations needed.",
    name: "Mrunal Pawar",
    role: "Manager",
    company: "Sakal Media",
    initials: "MP",
    project: "PROJECT: Emailer Platform",
  },
  {
    quote: "The internal AI agent built by Pure Technology has streamlined our processes beyond expectations. It handles complex workflows intelligently and has saved our team countless hours.",
    name: "Sagar Babar",
    role: "Manager",
    company: "Comsense Technologies",
    initials: "SB",
    project: "PROJECT: AI Agent for Internal Process",
  },
  {
    quote: "Pure Technology delivered a payroll and expense management system that perfectly fits our organizational scale. Reliable, accurate, and easy for our HR team to operate.",
    name: "Mr Khan Ahmed",
    role: "Manager",
    company: "Mahabeej",
    initials: "KA",
    project: "PROJECT: Payroll & Expense Management",
  },
  {
    quote: "The AI-based newsletter solution built for Reliance has transformed internal communications by automating content creation and distribution. Pure Technology delivered an intelligent system that improves efficiency, reduces manual effort, and ensures timely, engaging communication across the organization.",
    name: "Mrs Kaval Bajwa",
    role: "Manager",
    company: "Reliance Industries",
    initials: "KB",
    project: "PROJECT: AI Newsletter",
  },
  {
    quote: "The lead portal built by Pure Technology is intuitive, fast, and exactly what our sales team needed. It has improved our lead tracking and conversion workflows considerably.",
    name: "Rajashree Gandhi",
    role: "Director",
    company: "Botonym",
    initials: "RG",
    project: "PROJECT: Lead Portal",
    avatar: "/testimonial/riteshbhole.jpg",
    // avatar: "/team/jalindrashinde.png"
  },
     
  ];
  
  function TestimonialCarousel() {
    const [active, setActive] = useState(0);
    const total = testimonials.length;
  
    useEffect(() => {
      const timer = setInterval(() => {
        setActive((prev) => (prev + 1) % total);
      }, 5000);
      return () => clearInterval(timer);
    }, [total]);
  
    const prev = () => setActive((a) => (a - 1 + total) % total);
    const next = () => setActive((a) => (a + 1) % total);
  
    // show 3 at a time on desktop
    const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % total]);
    const accentColors = [
        "var(--brand-red)",
        "var(--brand-blue)",
        "var(--brand-orange)",
        "var(--brand-green)",
        "var(--brand-yellow)",
      ];

    return (
      <div className="mt-12">
        <div className="grid lg:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <Testimonial
              key={`${active}-${i}`}
              quote={t.quote}
              name={t.name}
              role={t.role}
              company={t.company}
              initials={t.initials}
              accent={t.accent ?? accentColors[(active + i) % accentColors.length]}
              project={t.project}
              avatar={t.avatar}
            />
          ))}
        </div>
  
        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="h-10 w-10 rounded-full border border-border bg-surface/60 flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
  
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-foreground"
                    : "w-2 bg-foreground/20"
                }`}
              />
            ))}
          </div>
  
          <button
            onClick={next}
            className="h-10 w-10 rounded-full border border-border bg-surface/60 flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }