"use client";

import { useState } from "react";

const schemes = [
  { id: 1, name: "MIDH", image: "/s2.jpg", pdfUrl: "/midh-scheme.pdf" },
  { id: 2, name: "Support to FPO Scheme", image: "/s.png", pdfUrl: "/fpo-scheme.pdf" },
  { id: 3, name: "PHHM - Horticulture", image: "/s2.jpg", pdfUrl: "/phhm-scheme.pdf" },
  { id: 4, name: "PMMSY", image: "/s2.jpg", pdfUrl: "/pmmsy-scheme.pdf" },
  { id: 5, name: "EGC/GSF - 10,000 FPO/CSS", image: "/s2.jpg", pdfUrl: "/egcgsf-scheme.pdf" },
  { id: 6, name: "Operation Green", image: "/s2.jpg", pdfUrl: "/operation-green-scheme.pdf" },
  { id: 7, name: "CS-AIF", image: "/s2.jpg", pdfUrl: "/cs-aif-scheme.pdf" },
  { id: 8, name: "PKVY", image: "/s2.jpg", pdfUrl: "/pkvy-scheme.pdf" },
  { id: 9, name: "RKVY Raftaar", image: "/s2.jpg", pdfUrl: "/rkvyr-scheme.pdf" },
  { id: 10, name: "MKUY", image: "/s2.jpg", pdfUrl: "/mkuy-scheme.pdf" },
  { id: 11, name: "NABARD", image: "/s2.jpg", pdfUrl: "/nabard-scheme.pdf" },
  { id: 12, name: "WIF", image: "/s2.jpg", pdfUrl: "/wif-scheme.pdf" },
  { id: 13, name: "VCAS", image: "/s2.jpg", pdfUrl: "/vcas-scheme.pdf" },
  { id: 14, name: "SFAC", image: "/s2.jpg", pdfUrl: "/sfac-scheme.pdf" },
  { id: 15, name: "MoFPI", image: "/s2.jpg", pdfUrl: "/mofpi-scheme.pdf" },
]

export default function SchemesGrid({ onSchemeSelect }) {
  return (
    <section className="bg-green-50 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Schemes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onSchemeSelect(scheme)}
          >
            <img
              src={scheme.image}
              alt={scheme.name}
              className="w-full h-32 object-contain p-4"
            />
            <h3 className="text-center text-green-700 font-semibold p-2">{scheme.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}