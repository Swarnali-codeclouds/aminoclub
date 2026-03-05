"use client"
import React, { useState, useEffect, useRef } from 'react';

const ShippingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  // Track the address currently being edited
  const [editAddress, setEditAddress] = useState(null);
  const formRef = useRef(null);

  // Function to handle both Add and Update
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = Object.fromEntries(formData.entries());

    if (editAddress) {
      // Update existing
      setAddresses(addresses.map(addr => 
        addr.id === editAddress.id ? { ...entry, id: editAddress.id } : addr
      ));
    } else {
      // Add new
      setAddresses([...addresses, { ...entry, id: Date.now() }]);
    }
    
    closeModal();
  };

  const openEditModal = (address) => {
    setEditAddress(address);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditAddress(null);
  };

  return (
    <div className="bg-gray-50 min-h-[50] font-anek">
      <div className="max-w-4xl mx-auto py-12 lg:py-16 px-4">
        
        <div className="mb-8 flex flex-col gap-y-4">
          <h1 className="text-[24px] leading-[32px] font-semibold text-gray-900">
            Shipping Addresses
          </h1>
          <p className="text-sm font-normal text-gray-500 leading-[24px]">
            View and update your shipping addresses, you can add as many as you like. 
            Saving your addresses will make them available during checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          
          <button 
            onClick={() => setIsOpen(true)}
            className="border border-gray-200 rounded-lg p-5 min-h-[220px] h-full w-full flex flex-col justify-between items-start bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-semibold text-gray-900 text-center w-full">New address</span>
            <div className="text-gray-400">
              <span className="text-2xl font-light leading-none text-black">+</span>
            </div>
          </button>

          {addresses.map((addr) => (
            <div key={addr.id} className="border border-gray-200 rounded-lg p-5 min-h-[220px] flex flex-col justify-between bg-white shadow-sm">
              <div className="flex flex-col">
                <h2 className="font-anek font-medium text-base text-gray-900 leading-none">
                  {addr.first_name} {addr.last_name}
                </h2>
                {addr.company && (
                  <p className="font-anek text-[13px] leading-[20px] text-gray-500 mt-1">
                    {addr.company}
                  </p>
                )}
                
                <div className="flex flex-col text-sm leading-[20px] text-gray-700 mt-3 font-normal">
                  <span>{addr.address_1}</span>
                  <span>{addr.postal_code}, {addr.city}</span>
                  <span className="uppercase">{addr.province}, {addr.country_code}</span>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <button 
                  onClick={() => openEditModal(addr)}
                  className="flex items-center gap-x-2 text-[13px] font-medium text-gray-500 hover:text-black tracking-tight"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.833 13.056s3.2-.505 4.041-1.347l6.513-6.513a1.904 1.904 0 1 0-2.693-2.693L4.18 9.016c-.842.841-1.347 4.04-1.347 4.04zM6.833 1.944H1.056M3.278 5.056H1.056"/></svg>
                  Edit
                </button>
                <button 
                  onClick={() => setAddresses(addresses.filter(a => a.id !== addr.id))}
                  className="flex items-center gap-x-2 text-[13px] font-medium text-gray-500 hover:text-red-600 tracking-tight"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1.944 3.278h11.112M5.5 3.278V1.944a.89.89 0 0 1 .889-.888H8.61a.89.89 0 0 1 .889.888v1.334M11.722 5.5v6.667c0 .982-.795 1.777-1.777 1.777h-4.89a1.777 1.777 0 0 1-1.777-1.777V5.5M5.944 7.278v4M9.056 7.278v4"/></svg>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL SECTION */}
      {isOpen && (
        <div className="fixed inset-0 z-[75] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/10 backdrop-blur-md h-screen" onClick={closeModal}></div>

          <div className="relative flex flex-col w-full transform p-6 text-left transition-all h-fit max-w-xl bg-white shadow-xl border border-gray-100 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-anek font-medium text-lg text-gray-900">
                {editAddress ? 'Edit address' : 'Add address'}
              </h1>
              <button onClick={closeModal} className="text-gray-400 hover:text-black text-xl">×</button>
            </div>

            <form onSubmit={handleSave} ref={formRef}>
              <div className="flex flex-col gap-y-3">
                <div className="grid grid-cols-2 gap-x-2">
                  <InputField name="first_name" label="First name" required defaultValue={editAddress?.first_name} />
                  <InputField name="last_name" label="Last name" required defaultValue={editAddress?.last_name} />
                </div>

                <InputField name="company" label="Company" defaultValue={editAddress?.company} />
                <InputField name="address_1" label="Address" required defaultValue={editAddress?.address_1} />
                <InputField name="address_2" label="Apartment, suite, etc." defaultValue={editAddress?.address_2} />

                <div className="grid grid-cols-[144px_1fr] gap-x-2">
                  <InputField name="postal_code" label="Postal code" required defaultValue={editAddress?.postal_code} />
                  <InputField name="city" label="City" required defaultValue={editAddress?.city} />
                </div>

                <InputField name="province" label="Province / State" defaultValue={editAddress?.province} />

                <div className="relative border border-[#e8e8e8] bg-white rounded-xl h-12 flex items-center px-4">
                  <select 
                    name="country_code" 
                    required 
                    defaultValue={editAddress?.country_code || "us"}
                    className="appearance-none flex-1 bg-transparent text-sm outline-none"
                  >
                    <option value="us">United States</option>
                    <option value="in">India</option>
                  </select>
                  <span className="text-[10px] text-gray-400">▼</span>
                </div>

                <InputField name="phone" label="Phone" type="tel" defaultValue={editAddress?.phone} />
              </div>

              <div className="flex items-center justify-end gap-x-4 mt-8">
                <button type="button" onClick={closeModal} className="text-[13px] font-medium text-gray-500 hover:text-black">
                  Cancel
                </button>
                <button type="submit" className="h-11 px-8 bg-black text-white text-[13px] font-medium rounded-full hover:bg-black/90 transition-all flex items-center gap-x-2">
                  {editAddress ? 'Update' : 'Save'} <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField = ({ name, label, required, type = "text", defaultValue = "" }) => (
  <div className="relative w-full">
    <input 
      placeholder=" " 
      required={required} 
      type={type} 
      name={name}
      defaultValue={defaultValue}
      className="pt-4 pb-1 block w-full h-12 px-4 bg-white border border-[#e8e8e8] rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all text-black text-[14px] peer" 
    />
    <label 
      className="absolute left-4 top-3.5 transition-all duration-200 text-[#666] text-sm pointer-events-none 
      peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gray-400
      peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]"
    >
      {label}{required && <span className="text-rose-500 ml-0.5">*</span>}
    </label>
  </div>
);

export default ShippingPage;