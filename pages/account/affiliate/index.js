"use client"
import React, { useState } from 'react';

const PartnerProgram = () => {
  const [partnerCode, setPartnerCode] = useState("");
  
  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Logic to create account
    console.log("Creating account with code:", partnerCode.toUpperCase());
  };

  return (
    <div className="bg-gray-50 min-h-screen font-anek">
      <div className="max-w-4xl mx-auto py-12 lg:py-16 px-4">
        
        {/* Header */}
        <div className="mb-8 flex flex-col gap-y-4">
          <h1 className="text-[24px] leading-[32px] font-semibold text-gray-900">
            Partner Program
          </h1>
          <p className="text-sm font-normal text-gray-500 leading-[24px]">
            Earn money by referring customers to Amino Club.
          </p>
        </div>

        {/* Features Grid (Gradient Card) */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border border-purple-100/50">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Why become a partner?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            
            <FeatureItem 
              icon={<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
              color="purple"
              title="20% First Order Commission"
              description="Earn 20% on every new customer's first purchase"
            />

            <FeatureItem 
              icon={<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
              color="blue"
              title="10% Recurring Commission"
              description="Keep earning 10% on all future orders from your referrals"
            />

            <FeatureItem 
              icon={<path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />}
              color="green"
              title="Monthly PayPal Payouts"
              description="Get paid on the 1st of every month with no minimum"
            />

            <FeatureItem 
              icon={<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
              color="orange"
              title="30-Day Cookie Window"
              description="Your referrals are tracked for 30 days after clicking your link"
            />

          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Create your partner account</h2>
            <p className="text-[13px] text-gray-500 mt-1">Choose a unique code that your referrals will use</p>
          </div>
          
          <form className="p-6" onSubmit={handleCreateAccount}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Partner Code</label>
              <div className="relative">
                <input 
                  placeholder="SANTOSH98" 
                  maxLength={20}
                  className="w-full h-12 px-4 border border-[#e8e8e8] rounded-xl focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all uppercase font-mono text-lg"
                  type="text"
                  value={partnerCode}
                  onChange={(e) => setPartnerCode(e.target.value)}
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-400">3-20 characters, letters and numbers only</p>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-[13px] text-gray-600 font-medium">Your referral link will be:</p>
              <p className="text-[13px] font-mono text-gray-800 mt-1 break-all">
                aminoclub.com?utm_source=affiliate_marketing&code={partnerCode || "YOURCODE"}
              </p>
            </div>

            <button 
              type="submit" 
              disabled={partnerCode.length < 3}
              className="w-full h-12 bg-black text-white text-sm font-medium rounded-full hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <span>Create Partner Account</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

// Internal Helper for Feature Items
const FeatureItem = ({ icon, color, title, description }) => {
  const colors = {
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600"
  };

  return (
    <div className="flex gap-4">
      <div className={`w-10 h-10 rounded-xl ${colors[color]} flex items-center justify-center flex-shrink-0`}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          {icon}
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 text-[15px]">{title}</h3>
        <p className="text-[13px] text-gray-500 leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default PartnerProgram;