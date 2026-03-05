"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfilePage from "@/pages/account/profile";
import AddressesPage from "@/pages/account/addresses";
import AffiliatePage from "@/pages/account/affiliate";

const fetchOrders = async () => {
  return [];
};

const fetchCards = () => [
  {
    title: "Profile",
    description: "Edit your details",
    section: "profile",
    bg: "bg-white",
    textColor: "text-black",
    iconBg: "bg-gray-100",
    border: "border border-gray-200",
    icon: (
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Addresses",
    description: "Manage addresses",
    section: "addresses",
    bg: "bg-white",
    textColor: "text-black",
    iconBg: "bg-gray-100",
    border: "border border-gray-200",
    icon: (
      <svg
        className="w-6 h-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Partner Program",
    description: "Earn commissions",
    section: "partner",
    bg: "bg-gradient-to-br from-purple-600 to-blue-600",
    hoverBg: "hover:from-purple-700 hover:to-blue-700",
    textColor: "text-white",
    descriptionColor: "text-white/80",
    colSpan: "sm:col-span-2 lg:col-span-1",
    iconBg: "bg-white/20 group-hover:bg-white/30",
    border: "",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");
  const [user, setUser] = useState({ name: "", email: "" });
  const [orders, setOrders] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("loggedIn");

    if (storedUser && loggedIn === "true") {
      setUser(JSON.parse(storedUser));
      fetchOrders().then(setOrders);
      setCards(fetchCards());
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    router.push("/login");
  };

  const showCards = activeSection === "overview";

  return (
    <div data-testid="account-page">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden font-anek">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative content-container py-16 lg:py-24 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black text-2xl font-semibold font-anek">
              {user.name?.charAt(0) || "U"}
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Hi, {user.name || "User"}
              </h1>
              <p className="text-white/60 mt-1">{user.email || "user@example.com"}</p>
            </div>
          </div>
          <p className="text-lg text-white/70 max-w-xl">
            View your order history and track your purchases.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {showCards && (
              <>
                <Link
                  href="/store"
                  className="font-poppins inline-flex items-center justify-center h-11 px-6 bg-white hover:bg-gray-100 text-black font-medium rounded-full transition-colors"
                >
                  Continue Shopping
                </Link>

                <button
                  className="font-poppins inline-flex items-center justify-center h-11 px-6 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors border border-white/20"
                  onClick={handleLogout}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign Out
                </button>
              </>
            )}

            {!showCards && (
              <button
                className="inline-flex items-center justify-center h-11 px-6 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors border border-white/20"
                onClick={() => setActiveSection("overview")}
              >
                ← Back
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      {showCards && (
        <div className="bg-gray-50">
          <div className="content-container py-8 lg:py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              {cards.map((card, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSection(card.section)}
                  className={`${card.bg} ${card.border} rounded-2xl p-6 group block transition-colors text-left w-full cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}
                    >
                      {card.icon}
                    </div>
                    <div className={card.textColor}>
                      <h3 className="font-semibold">{card.title}</h3>
                      <p className={`text-sm ${card.descriptionColor || ""}`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Section Content */}
      <div className="w-full mx-auto bg-gray-50">
        {activeSection === "profile" && <ProfilePage />}

        {activeSection === "addresses" && <AddressesPage />}

        {activeSection === "partner" && <AffiliatePage />}
        {activeSection === "overview" && (
          <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-4xl mx-auto mb-8">
            {/* Orders Section */}
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-black">Your Orders</h2>
                <p className="text-sm text-gray-500">{orders.length} orders placed</p>
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-16 px-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-8">
                  When you place your first order, it will appear here.
                </p>
                <Link
                  href="/store"
                  className="inline-flex items-center justify-center h-12 px-8 bg-black hover:bg-black/90 text-white font-medium rounded-full transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="p-6">
                {orders.map((order) => (
                  <div key={order.id} className="border-b border-gray-100 py-4">
                    <p className="text-black font-medium">{order.product}</p>
                    <p className="text-gray-500 text-sm">
                      {order.date} — {order.status}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      </div>
  );
}