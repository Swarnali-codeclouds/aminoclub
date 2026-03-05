"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SelectCountry from "@/components/SelectCountry";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "Santosh",
    lastName: "Mandal",
    email: "santosh2mandal@yopmail.com",
    phone: "",
    billingAddress: null
  });

  const [editingSection, setEditingSection] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      const names = parsed.name ? parsed.name.split(" ") : ["", ""];
      setUser({
        ...user,
        firstName: names[0] || "",
        lastName: names[1] || "",
        email: parsed.email || "",
        phone: parsed.phone || ""
      });
    }
  }, []);

  const handleSave = (sectionName) => {
    setEditingSection(null);
    setSuccessMessage(`${sectionName} updated successfully`);
    
    // Save all current state to localStorage
    localStorage.setItem("user", JSON.stringify({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: user.phone
    }));

    // Hide success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-anek" data-testid="profile-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4 text-left">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-sm text-gray-600 pt-2">
          View and update your profile information, including your name, email, and phone number. You can also update your billing address, or change your password.
        </p>
      </div>

      {/* Global Success Message (Matches your HTML structure) */}
      {successMessage && (
        <div className="mb-4 transition-all duration-300 overflow-hidden max-h-20 opacity-100">
          <span className="bg-green-50 text-green-700 border-green-200 inline-flex items-center gap-x-2 border box-border text-sm font-medium h-10 rounded-md px-4">
            <span>{successMessage}</span>
          </span>
        </div>
      )}

      <div className="flex flex-col gap-y-8 w-full">
        
        {/* --- NAME SECTION --- */}
        <section className="w-full text-left">
          <div className="flex items-end justify-between py-4 font-anek">
            <div className="flex flex-col">
              <span className="uppercase text-[12px] font-medium text-gray-500 tracking-wider mb-0">Name</span>
              <span className="font-semibold text-[16px] text-gray-900">{user.firstName} {user.lastName}</span>
            </div>
            <button
              onClick={() => setEditingSection(editingSection === 'name' ? null : 'name')}
              className="bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-gray-200 transition-all w-[100px]"
            >
              {editingSection === 'name' ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {editingSection === 'name' && (
            <div className="py-4 space-y-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-x-4">
                <InputGroup label="First name" value={user.firstName} onChange={(v) => setUser({...user, firstName: v})} required />
                <InputGroup label="Last name" value={user.lastName} onChange={(v) => setUser({...user, lastName: v})} required />
              </div>
              <div className="flex justify-end">
                <button onClick={() => handleSave("Name")} className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Save changes
                </button>
              </div>
            </div>
          )}
        </section>

        <div className="w-full h-px bg-gray-200"></div>

        {/* --- EMAIL SECTION --- */}
        <section className="w-full text-left">
          <div className="flex items-end justify-between py-4 font-anek">
            <div className="flex flex-col">
              <span className="uppercase text-[12px] font-medium text-gray-500 tracking-wider mb-1">Email</span>
              <span className="font-semibold text-[16px] text-gray-900">{user.email}</span>
            </div>
            <button
              onClick={() => setEditingSection(editingSection === 'email' ? null : 'email')}
              className="bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-gray-200 transition-all w-[100px]"
            >
              {editingSection === 'email' ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {editingSection === 'email' && (
            <div className="py-4 space-y-4 border-t border-gray-100">
              <InputGroup label="Email" type="email" value={user.email} onChange={(v) => setUser({...user, email: v})} required />
              <div className="flex justify-end">
                <button onClick={() => handleSave("Email")} className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Save changes
                </button>
              </div>
            </div>
          )}
        </section>

        <div className="w-full h-px bg-gray-200"></div>

        {/* --- PHONE SECTION (Now with Editing Option) --- */}
        <section className="w-full text-left">
          <div className="flex items-end justify-between py-4 font-anek">
            <div className="flex flex-col">
              <span className="uppercase text-[12px] font-medium text-gray-500 tracking-wider mb-1">Phone</span>
              <span className="font-semibold text-[16px] text-gray-900">{user.phone || "No phone number added"}</span>
            </div>
            <button
              onClick={() => setEditingSection(editingSection === 'phone' ? null : 'phone')}
              className="bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-gray-200 transition-all w-[100px]"
            >
              {editingSection === 'phone' ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {editingSection === 'phone' && (
            <div className="py-4 space-y-4 border-t border-gray-100">
              <InputGroup 
                label="Phone Number" 
                type="tel" 
                value={user.phone} 
                onChange={(v) => setUser({...user, phone: v})} 
                required 
              />
              <div className="flex justify-end">
                <button onClick={() => handleSave("Phone number")} className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Save changes
                </button>
              </div>
            </div>
          )}
        </section>

        <div className="w-full h-px bg-gray-200"></div>

        {/* --- BILLING ADDRESS SECTION --- */}
        <section className="w-full text-left pb-10">
          <div className="flex items-end justify-between py-4 font-anek">
            <div className="flex flex-col">
              <span className="uppercase text-[12px] font-medium text-gray-500 tracking-wider mb-1">Billing address</span>
              <span className="font-semibold text-[16px] text-gray-900">No billing address</span>
            </div>
            <button
              onClick={() => setEditingSection(editingSection === 'billing' ? null : 'billing')}
              className="bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-gray-200 transition-all w-[100px]"
            >
              {editingSection === 'billing' ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {editingSection === 'billing' && (
            <div className="py-4 space-y-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First name" required />
                <InputGroup label="Last name" required />
              </div>
              <InputGroup label="Company" required />
              <InputGroup label="Address" required />
              <InputGroup label="Apartment, suite, etc."  />
              <div className="grid grid-cols-[144px_1fr] gap-4">
                <InputGroup label="Postal code" required />
                <InputGroup label="Province" required />
              </div>
               <InputGroup label="Apartment, suite, etc."  />
               <SelectCountry value={user.country} onChange={(v) => setUser({...user, country: v})} />
              <div className="flex justify-end">
                <button onClick={() => handleSave("Billing address")} className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Save changes
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// Input Sub-component (Maintains the structure from your HTML snippet)
function InputGroup({ label, value, onChange, type = "text", required = false }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder=" "
        className="peer pt-4 pb-1 block w-full h-12 px-4 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all text-black text-base"
      />
      <label className="absolute top-3.5 left-4 text-gray-400 text-sm transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-black peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black">
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
    </div>
  );
}