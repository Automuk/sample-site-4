"use client";

import { FadeUp, StaggerContainer, staggerItem } from "@/components/Animations";
import AgentCard from "@/components/AgentCard";
import { agents } from "@/lib/data";
import { motion } from "framer-motion";

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A3D62" }}>
        {/* BG texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-3">Our Team</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Meet Our Advisors
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/50 text-base max-w-lg leading-relaxed">
              India&apos;s most trusted real estate professionals, combining unmatched local expertise with a genuine passion for client success.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {agents.map((a, i) => (
            <AgentCard key={a.id} agent={a} index={i} />
          ))}
        </div>
      </div>

      {/* Why our team */}
      <div className="py-20 px-6" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#0A3D62]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Why Work With Us
              </h2>
            </FadeUp>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8" staggerDelay={0.12}>
            {[
              {
                number: "01",
                title: "Hyper-Local Knowledge",
                description: "Our advisors live and work in the communities they serve, giving you an insider advantage in every negotiation.",
              },
              {
                number: "02",
                title: "Concierge Experience",
                description: "From the first conversation to closing day, every interaction is handled with the care and precision you deserve.",
              },
              {
                number: "03",
                title: "Results That Speak",
                description: "Over $1.2 billion in closed transactions with an average sale price 10% above market comparables.",
              },
            ].map((item) => (
              <motion.div key={item.number} variants={staggerItem} className="relative">
                <p className="text-6xl font-bold mb-4 opacity-10 select-none" style={{ color: "#0A3D62" }}>
                  {item.number}
                </p>
                <h3 className="text-lg font-bold text-[#0A3D62] mb-2 -mt-8">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </>
  );
}
