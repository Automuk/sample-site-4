"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface LeadFormProps {
  propertyTitle?: string;
  agentName?: string;
  variant?: "inline" | "full";
}

export default function LeadForm({ propertyTitle, agentName, variant = "full" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "#16A085" }}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#0A3D62] mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thank you for reaching out. {agentName ?? "Our team"} will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {propertyTitle && (
        <div className="p-3 rounded-xl text-sm font-medium text-[#0A3D62]" style={{ backgroundColor: "#F5F7FA" }}>
          Inquiring about: <span className="font-semibold">{propertyTitle}</span>
        </div>
      )}

      <div className={variant === "inline" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name</label>
          <input
            type="text"
            required
            placeholder="Jane"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label>
          <input
            type="text"
            required
            placeholder="Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
        <input
          type="email"
          required
          placeholder="jane@email.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
        <input
          type="tel"
          placeholder="+91 98XXX XXXXX"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all"
        />
      </div>

      {!propertyTitle && (
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">I&apos;m interested in</label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all bg-white">
            <option>Buying a property</option>
            <option>Selling a property</option>
            <option>Renting a property</option>
            <option>Investment advice</option>
            <option>General inquiry</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
        <textarea
          rows={4}
          placeholder={propertyTitle ? `I'd like to schedule a viewing for ${propertyTitle}...` : "Tell us about your property goals..."}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
        style={{ backgroundColor: "#16A085" }}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
