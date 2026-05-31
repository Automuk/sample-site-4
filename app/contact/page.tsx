"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/Animations";
import LeadForm from "@/components/LeadForm";
import { agents } from "@/lib/data";

const offices = [
  {
    city: "Mumbai",
    address: "Level 14, One BKC, Bandra Kurla Complex",
    state: "Mumbai, Maharashtra 400051",
    phone: "+91 22 4055 0100",
    email: "mumbai@summitrealty.in",
  },
  {
    city: "New Delhi",
    address: "Suite 602, Connaught Place",
    state: "New Delhi, Delhi 110001",
    phone: "+91 11 4055 0200",
    email: "delhi@summitrealty.in",
  },
  {
    city: "Bengaluru",
    address: "4th Floor, RMZ Infinity, Old Madras Road",
    state: "Bengaluru, Karnataka 560016",
    phone: "+91 80 4055 0300",
    email: "bengaluru@summitrealty.in",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A3D62" }}>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-3">We&apos;re Here to Help</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Contact Us
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/50 text-base max-w-lg leading-relaxed">
              Whether you&apos;re ready to take the next step or simply have questions, our team is always available to help.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Main form + info */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Form */}
          <SlideInLeft>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <h2
                className="text-2xl font-bold text-[#0A3D62] mb-2"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                We typically respond within 2 business hours.
              </p>
              <LeadForm variant="inline" />
            </div>
          </SlideInLeft>

          {/* Right: Info */}
          <SlideInRight delay={0.1}>
            <div className="space-y-8">
              {/* Offices */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((o) => (
                    <div key={o.city} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-sm transition-shadow">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#F5F7FA" }}
                      >
                      <FontAwesomeIcon icon={faBuilding} className="w-4 h-4" style={{ color: "#0A3D62" }} />
                      </div>
                      <div>
                        <p className="font-bold text-[#0A3D62] text-sm">{o.city}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{o.address}</p>
                        <p className="text-xs text-gray-400">{o.state}</p>
                        <p className="text-xs font-medium mt-1.5" style={{ color: "#16A085" }}>
                        <FontAwesomeIcon icon={faPhone} className="w-3 h-3 mr-1" />
                        {o.phone}
                      </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Speak Directly</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {agents.slice(0, 4).map((agent) => (
                    <a
                      key={agent.id}
                      href={`/agents/${agent.id}`}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-sm hover:border-[#16A085]/30 transition-all group"
                    >
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={agent.photo} alt={agent.name} fill className="object-cover object-top" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#0A3D62] truncate group-hover:text-[#16A085] transition-colors">
                          {agent.name}
                        </p>
                        <p className="text-[10px] text-gray-400 truncate">{agent.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </>
  );
}
