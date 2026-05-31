"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBolt,
  faUsers,
  faCoins,
  faStar,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import PropertyCard from "@/components/PropertyCard";
import AgentCard from "@/components/AgentCard";
import { FadeUp, FadeIn, SlideInLeft, SlideInRight, StaggerContainer, staggerItem, SplitTextReveal } from "@/components/Animations";
import { properties, agents, stats, formatPrice } from "@/lib/data";

const featuredProperties = properties.filter((p) => p.status === "for-sale").slice(0, 3);
const featuredAgents = agents.slice(0, 4);

const testimonials = [
  {
    quote: "Summit Realty found us our dream home in Boulder. The process was seamless and Alexandra's market knowledge was second to none.",
    author: "Sarah & Tom Hendricks",
    location: "Bandra, Mumbai",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    quote: "Marcus sold our Cherry Creek property for 12% over asking price in just 8 days. Absolutely exceptional service.",
    author: "Michael Reyes",
    location: "Koregaon Park, Pune",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote: "As first-time buyers we were nervous, but the Summit team made everything clear and stress-free. Highly recommend.",
    author: "Emily & David Park",
    location: "Whitefield, Bengaluru",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
];

const features = [
  {
    icon: faShieldHalved,
    title: "Trusted Expertise",
    description: "20+ years navigating Kolkata's most competitive markets with proven results.",
  },
  {
    icon: faBolt,
    title: "Exclusive Listings",
    description: "Access properties before they hit the market through our private network.",
  },
  {
    icon: faUsers,
    title: "White-Glove Service",
    description: "Dedicated agents guiding you at every step, from first showing to closing.",
  },
  {
    icon: faCoins,
    title: "Maximum Value",
    description: "Our sellers consistently achieve 8–15% above comparable market listings.",
  },
];

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Luxury Kolkata home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/85 via-[#0A3D62]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/40 to-transparent" />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 w-full" style={{ opacity }}>
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#16A085] font-semibold text-sm tracking-[0.16em] uppercase mb-6"
          >
            India&apos;s Premier Real Estate Firm
          </motion.p>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            <SplitTextReveal text="Find Your" delay={0.4} className="block" />
            <span className="block" style={{ color: "#16A085" }}>
              <SplitTextReveal text="Summit" delay={0.55} />
            </span>
            <SplitTextReveal text="in Kolkata" delay={0.7} className="block" />
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
          >
            From the urban energy of Denver to the alpine serenity of Aspen, Summit Realty Partners connects discerning buyers and sellers with exceptional properties.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/properties"
              className="px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#16A085" }}
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-white text-sm border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              Speak to an Agent
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function DiscoverSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yLeft   = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const yRight  = useTransform(scrollYProgress, [0, 1], [-60, 90]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [120, -60]);

  const imgs = [
    properties[0].images[0],
    properties[2].images[0],
    featuredProperties[1].images[0], // same as middle featured card → visual continuity
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#F0F2F5" }}
    >
      <div className="px-6">
        <div className="grid grid-cols-[1fr_1.1fr_1fr] gap-6 items-start">
          {/* Left — tall image, drifts upward on scroll */}
          <motion.div
            style={{ y: yLeft }}
            className="mt-20 ml-28 relative h-[560px] w-[300px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image src={imgs[0]} alt="Property" fill className="object-cover" />
            {/* play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Centre — large muted headline */}
          <div className="flex items-center justify-center py-16 text-center px-4">
            <FadeIn>
              <h2
                className="text-5xl lg:text-6xl font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: "#a0aab4",
                }}
              >
                Thoughtfully
                <br />
                designed
                <br />
                spaces for
                <br />
                living close
                <br />
                to nature
              </h2>
            </FadeIn>
          </div>

          {/* Right — shorter image, drifts downward */}
          <motion.div
            style={{ y: yRight }}
            className="-mt-6 ml-28 relative h-[560px] w-[300px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image src={imgs[1]} alt="Property" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturedListings() {
  const [activeIdx, setActiveIdx] = useState(1);

  // Scroll-driven clip reveal for the middle card's image — continues from DiscoverSection
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start 0.2"],
  });
  const clipY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const middleClipPath = useTransform(clipY, (v: number) => `inset(${v}% 0% 0% 0%)`);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={sectionRef} className="py-24 pt-0" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <FadeUp>
              <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-3">
                Hand-Picked For You
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0A3D62] leading-tight"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Featured Listings
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/properties"
              className="flex items-center gap-2 text-sm font-semibold text-[#0A3D62] hover:text-[#16A085] transition-colors group"
            >
              View All Properties
              <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>

        {/* Cards */}
        <motion.div
          style={{ opacity: sectionOpacity }}
          className="flex gap-4 h-[540px]"
        >
          {featuredProperties.map((p, i) => {
            const isActive = activeIdx === i;
            const isMiddle = i === 1;
            return (
              <motion.div
                key={p.id}
                layout
                animate={{ flex: isActive ? 2.8 : 1 }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                className="relative bg-white rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 min-w-0 flex flex-col justify-between p-8"
                onHoverStart={() => setActiveIdx(i)}
                style={{ boxShadow: isActive ? "0 8px 40px rgba(10,61,98,0.10)" : "0 2px 12px rgba(10,61,98,0.06)" }}
              >
                {/* Corner bracket — top right */}
                <div className="absolute top-6 right-6 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M20 0 L20 20 M0 0 L20 0"
                      stroke={isActive ? "#16A085" : "#d1d5db"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Text side */}
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#a0aab4" }}>
                    {p.type.charAt(0).toUpperCase() + p.type.slice(1).replace("-", " ")}
                  </p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className="font-bold leading-none transition-all duration-500"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        color: isActive ? "#0A3D62" : "#c8cfd8",
                        fontSize: isActive ? "3rem" : "2rem",
                      }}
                    >
                      {formatPrice(p.price, p.status).split(" ")[0]}
                    </span>
                    <span
                      className="font-medium transition-all duration-500"
                      style={{ color: isActive ? "#a0aab4" : "#d1d5db", fontSize: isActive ? "1.1rem" : "0.9rem" }}
                    >
                      {formatPrice(p.price, p.status).split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: isActive ? "#8a9bb0" : "#c8cfd8" }}>
                    {p.city}, {p.state} &middot; {p.beds} bed &middot; {p.sqft.toLocaleString("en-IN")} sq ft
                  </p>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                    transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs leading-relaxed mt-3 max-w-[240px] line-clamp-3" style={{ color: "#b0bcc8" }}>
                      {p.description}
                    </p>
                    <Link
                      href={`/properties/${p.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-colors hover:opacity-80"
                      style={{ color: "#16A085" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Property
                      <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image panel — clips in from top (scroll-driven for middle, hover-driven for others) */}
                <motion.div
                  className="absolute top-0 right-0 bottom-0 w-[52%] rounded-r-3xl overflow-hidden"
                  animate={{ clipPath: isActive ? "inset(0% 0% 0% 0% round 0 1.5rem 1.5rem 0)" : "inset(0% 0% 100% 0% round 0 1.5rem 1.5rem 0)" }}
                  {...(isMiddle
                    ? {} // middle uses scroll-clip override below
                    : { transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }
                  )}
                >
                  {isMiddle ? (
                    // Middle card image reveals from top via scroll linkage
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        clipPath: isActive ? middleClipPath : "inset(100% 0% 0% 0%)",
                      }}
                    >
                      <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
                    </motion.div>
                  ) : (
                    <>
                      <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image */}
          <SlideInLeft>
            <div className="relative">
              <div className="relative h-[560px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80"
                  alt="Luxury home interior"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]"
              >
                <p className="text-3xl font-bold text-[#0A3D62] mb-1" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  ₹8,500 Cr+
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Total transaction volume across Kolkata
                </p>
                <div className="mt-3 h-1 rounded-full" style={{ backgroundColor: "#16A085", width: "40%" }} />
              </motion.div>
              {/* Accent block */}
              <div
                className="absolute -top-6 -left-6 w-40 h-40 rounded-2xl -z-10"
                style={{ backgroundColor: "#16A085", opacity: 0.15 }}
              />
            </div>
          </SlideInLeft>

          {/* Right: content */}
          <SlideInRight delay={0.15}>
            <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-4">
              Why Summit Realty
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0A3D62] leading-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              We Don&apos;t Just Sell <em>Properties</em>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-base">
              We curate extraordinary living experiences. Our advisors combine deep local expertise with a genuine passion for India's finest addresses to ensure every transaction exceeds your expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#16A085", color: "white" }}
                  >
                    <FontAwesomeIcon icon={f.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3D62] text-sm mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}

const FOLDER_CARD_HEIGHT = 320; // px — open card body height
const TAB_HEIGHT = 64; // px — sticky tab height per card

function AgentFolderCard({ agent, index }: {
  agent: (typeof agents)[0];
  index: number;
}) {
  const stickyTop = 80 + index * (TAB_HEIGHT + 2);

  return (
    <motion.div
      className="sticky rounded-2xl overflow-hidden bg-white"
      style={{
        top: stickyTop,
        zIndex: 10 + index,
        boxShadow: "0 4px 32px rgba(10,61,98,0.10)",
      }}
    >
      {/* Folder tab — always visible */}
      <div
        className="flex items-center gap-4 px-6 cursor-default border-b"
        style={{ height: TAB_HEIGHT, borderColor: "#f0f3f6" }}
      >
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#16A085" }} />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#0A3D62] text-base leading-tight" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            {agent.name}
          </p>
          <p className="text-[#16A085] text-xs font-medium mt-0.5 tracking-wide">{agent.title}</p>
        </div>
        <span className="text-xs text-gray-300 font-semibold tracking-widest tabular-nums">0{index + 1}</span>
      </div>

      {/* Folder body */}
      <div style={{ height: FOLDER_CARD_HEIGHT }} className="overflow-hidden">
        <Link href={`/agents/${agent.id}`} className="group flex h-full">
          {/* Text */}
          <div className="flex-1 p-7 flex flex-col justify-between min-w-0" style={{ backgroundColor: "#F8FAFB" }}>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{agent.bio}</p>
            <div>
              <div className="flex gap-3 mb-5">
                {[
                  { val: `${agent.experience}+`, label: "Yrs" },
                  { val: agent.sold, label: "Sold" },
                  { val: agent.listings, label: "Active" },
                ].map((s) => (
                  <div key={s.label} className="text-center px-4 py-3 rounded-xl bg-white shadow-sm">
                    <p className="font-bold text-[#0A3D62] text-base" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{s.val}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {agent.specialties.slice(0, 2).map((s) => (
                  <span key={s} className="text-[10px] font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(22,160,133,0.10)", color: "#16A085" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="relative w-52 flex-shrink-0 overflow-hidden">
            <Image
              src={agent.photo}
              alt={agent.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="208px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFB]/20 to-transparent" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

function AgentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = featuredAgents.length;

  return (
    <section ref={sectionRef} style={{ minHeight: "100vh", backgroundColor: "#fff" }} className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16">
          {/* Left — sticky, vertically centered in viewport */}
          <div className="hidden lg:flex sticky top-0 h-screen items-center">
            <SlideInLeft>
              <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-4">Our Advisors</p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0A3D62] leading-tight mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Meet the<br />Experts
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-xs">
                Our award-winning advisors bring decades of combined experience and an unmatched commitment to client success across India&apos;s finest addresses.
              </p>
              <Link
                href="/agents"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ borderColor: "#0A3D62", color: "#0A3D62" }}
              >
                View Full Team
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
              </Link>
            </SlideInLeft>
          </div>

          {/* Right — stacked sticky folder cards */}
          <div className="py-24 flex flex-col gap-0">
            {/* Mobile heading */}
            <div className="lg:hidden mb-10">
              <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-3">Our Advisors</p>
              <h2 className="text-4xl font-bold text-[#0A3D62] leading-tight" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                Meet the Experts
              </h2>
            </div>

            {featuredAgents.map((a, i) => (
              <AgentFolderCard key={a.id} agent={a} index={i} />
            ))}

            {/* Spacer so last card can fully open */}
            <div style={{ height: FOLDER_CARD_HEIGHT }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: "#0A3D62" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <FadeUp>
            <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-3">Testimonials</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Client Stories
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.65 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="16" height="16" fill="#16A085" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.photo} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.author}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&q=80"
                alt="Kolkata landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A3D62/90 0%, #16A085/70 100%)", backgroundColor: "rgba(10,61,98,0.9)" }} />
            </div>
            <div className="relative z-10 text-center py-20 px-8">
              <p className="text-[#16A085] text-sm font-semibold tracking-[0.16em] uppercase mb-4">Ready to Begin?</p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Your Summit Awaits
              </h2>
              <p className="text-white/70 text-base max-w-md mx-auto mb-10 leading-relaxed">
                Whether you&apos;re buying, selling, or investing — our team is ready to guide you to the perfect outcome.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/properties"
                  className="px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: "#16A085" }}
                >
                  Explore Properties
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl font-semibold text-white text-sm border border-white/30 hover:bg-white/10 transition-all"
                >
                  Contact an Agent
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiscoverSection />
      <FeaturedListings />
      <WhyUsSection />
      <AgentsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
