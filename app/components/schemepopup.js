"use client";

import { useState } from "react";

const schemeData = {
  MIDH: {
    "Support Component": "1 - Promotional Campaign for Horticulture Development\n2 - Training for farmers on modern techniques\n3 - Financial assistance for infrastructure",
    "Eligibility Criteria": "Farmers with minimum 1 acre land\nRegistered with local agriculture department",
    "Process of Application": "Submit application online via MIDH portal\nAttach land ownership proof",
    "Required Document": "Aadhaar card, Land deed, Bank details",
  },
  "Support to FPO Scheme": {
    "Support Component": "1 - Promotional Campaign for FPOs\n2 - Capacity building and industry exposure\n3 - Access to Finance",
    "Eligibility Criteria": "Registered FPO with minimum 50 members\nOperational for at least 1 year",
    "Process of Application": "Apply through FPO portal\nSubmit business plan",
    "Required Document": "FPO registration certificate, PAN card",
  },
  "PHHM - Horticulture": {
    "Support Component": "1 - Support for horticulture projects\n2 - Seed distribution programs\n3 - Irrigation support",
    "Eligibility Criteria": "Horticulturists with valid license\nMinimum 2 years experience",
    "Process of Application": "Online application via PHHM website\nVerification by local officer",
    "Required Document": "License copy, Experience certificate",
  },
  PMMSY: {
    "Support Component": "1 - Support for marine fisheries\n2 - Training for fishermen\n3 - Equipment subsidies",
    "Eligibility Criteria": "Registered fishermen\nOwn a fishing vessel",
    "Process of Application": "Apply via PMMSY portal\nSubmit vessel details",
    "Required Document": "Fishermen ID, Vessel registration",
  },
  "EGC/GSF - 10,000 FPO/CSS": {
    "Support Component": "1 - Formation of 10,000 FPOs\n2 - Grant support for FPOs\n3 - Capacity building",
    "Eligibility Criteria": "New FPO formation\nMinimum 100 members",
    "Process of Application": "Online registration on GSF portal\nSubmit proposal",
    "Required Document": "Member list, Project proposal",
  },
  "Operation Green": {
    "Support Component": "1 - Price stabilization for vegetables\n2 - Transport subsidies\n3 - Storage infrastructure",
    "Eligibility Criteria": "Farmers with vegetable production\nRegistered with local market",
    "Process of Application": "Apply via Operation Green portal\nSubmit production proof",
    "Required Document": "Production records, Market registration",
  },
  "CS-AIF": {
    "Support Component": "1 - Infrastructure development\n2 - Agri-startup funding\n3 - Technical support",
    "Eligibility Criteria": "Agri-startups with innovative ideas\nRegistered entity",
    "Process of Application": "Submit proposal on CS-AIF website\nPitch to review committee",
    "Required Document": "Business plan, Registration certificate",
  },
  PKVY: {
    "Support Component": "1 - Promotion of organic farming\n2 - Certification support\n3 - Market linkage",
    "Eligibility Criteria": "Farmers practicing organic farming\nMinimum 1 acre land",
    "Process of Application": "Apply via PKVY portal\nSubmit organic certification",
    "Required Document": "Organic certificate, Land deed",
  },
  "RKVY Raftaar": {
    "Support Component": "1 - Agricultural mechanization\n2 - Training programs\n3 - Subsidy on equipment",
    "Eligibility Criteria": "Farmers with valid land ownership\nRegistered with RKVY",
    "Process of Application": "Online application on RKVY portal\nSubmit equipment request",
    "Required Document": "Land ownership, Farmer ID",
  },
  MKUY: {
    "Support Component": "1 - Skill development for youth\n2 - Employment linkage\n3 - Training subsidies",
    "Eligibility Criteria": "Youth aged 18-35\nUnemployed or underemployed",
    "Process of Application": "Register on MKUY portal\nAttend skill assessment",
    "Required Document": "Aadhaar card, Educational certificates",
  },
  NABARD: {
    "Support Component": "1 - Rural credit support\n2 - Farmer loan schemes\n3 - Infrastructure funding",
    "Eligibility Criteria": "Rural farmers or cooperatives\nValid bank account",
    "Process of Application": "Apply via NABARD website\nSubmit loan application",
    "Required Document": "Bank details, Income proof",
  },
  WIF: {
    "Support Component": "1 - Women farmer empowerment\n2 - Training programs\n3 - Financial aid",
    "Eligibility Criteria": "Women farmers\nMinimum 1 acre land",
    "Process of Application": "Online application on WIF portal\nSubmit profile",
    "Required Document": "Aadhaar card, Land deed",
  },
  VCAS: {
    "Support Component": "1 - Veterinary care support\n2 - Animal health programs\n3 - Subsidy on vaccines",
    "Eligibility Criteria": "Livestock owners\nRegistered with local vet department",
    "Process of Application": "Apply via VCAS portal\nSubmit livestock details",
    "Required Document": "Livestock registration, Vet certificate",
  },
  SFAC: {
    "Support Component": "1 - Farmer producer company support\n2 - Market linkage\n3 - Financial assistance",
    "Eligibility Criteria": "Registered FPCs\nMinimum 50 members",
    "Process of Application": "Apply via SFAC portal\nSubmit business plan",
    "Required Document": "FPC registration, Member list",
  },
  MoFPI: {
    "Support Component": "1 - Food processing unit support\n2 - Subsidy on equipment\n3 - Training programs",
    "Eligibility Criteria": "Food processing entrepreneurs\nRegistered entity",
    "Process of Application": "Online application on MoFPI portal\nSubmit project proposal",
    "Required Document": "Business license, Project plan",
  },
};

export default function SchemePopup({ scheme, onClose }) {
  const [activeTab, setActiveTab] = useState("Support Component");

  const tabs = schemeData[scheme.name] || {
    "Support Component": "Details not available",
    "Eligibility Criteria": "Details not available",
    "Process of Application": "Details not available",
    "Required Document": "Details not available",
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 relative">
        <img
          src={scheme.image}
          alt={`${scheme.name} Logo`}
          className="w-32 h-32 object-contain mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">{scheme.name}</h2>
        <div className="flex border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 ${activeTab === tab ? "border-b-2 border-green-600 text-green-700" : "text-gray-500"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 text-gray-700">
          {activeTab === "Support Component" ? (
            <div>
              {tabs[activeTab].split("\n").map((point, index) => (
                <p key={index} className="mb-2">{point}</p>
              ))}
            </div>
          ) : (
            tabs[activeTab].split("\n").map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))
          )}
        </div>
        <button
          className="absolute top-4 right-4 text-green-600 hover:text-green-800 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        {scheme.pdfUrl && (
          <a
            href={scheme.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" mt-3 bottom-4 left-6 inline-flex items-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zm3 16H7v-2h9v2zm0-4H7v-2h9v2zm0-4H7V9h7v3h3v2z"/>
            </svg>
            View PDF
          </a>
        )}
      </div>
    </div>
  );
}