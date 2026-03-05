"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router"; // Crucial: Using next/router for Pages Router

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 1. Initialize user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Auth context parse error:", error);
      }
    }
    setLoading(false);
  }, []);

  // 2. Login function
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    router.push("/account/dashboard");
  };

  // 3. Logout function (This fixes your Navbar issue)
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null); // This triggers an immediate UI update in the Navbar
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};