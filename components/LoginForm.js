"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accountExists, setAccountExists] = useState(false);

  // Check if account exists on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAccountExists(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accountExists) {
      alert("No account found! Please sign up first.");
      return;
    }

    // Simple login check (for demo, just match email)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email) {
      // Save session info if needed
      localStorage.setItem("loggedIn", "true"); // optional flag
      router.push("/account/dashboard");
    } else {
      alert("Email not found. Please check or sign up.");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-white pt-[73px] lg:pt-0 font-anek">
      <div className="w-full max-w-[400px] px-6 py-12 lg:py-0">
        {/* Mobile Logo */}
        <div className="lg:hidden text-center mb-10">
          <Link href="/">
            <Image
              src="/images/LogoMain.svg"
              alt="Amino Club"
              width={130}
              height={36}
              className="h-9 w-auto"
            />
          </Link>
        </div>

        <div className="w-full" data-testid="login-page">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-black mb-1">Sign in</h1>
            <p className="text-gray-500 text-sm">Welcome back to Amino Club</p>
          </div>

          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-y-4">
              {/* Email */}
              <FloatingInput
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />

              {/* Password */}
              <FloatingInput
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                showToggle
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="h-12 px-8 bg-black hover:bg-black/90 text-white text-sm font-medium rounded-full transition-all inline-flex items-center justify-center gap-2 w-full mt-6"
            >
              <span>Sign In</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">New to Amino Club?</span>
            </div>
          </div>

          {/* Create Account */}
          <Link
            href="/account"
            className="w-full h-12 border border-gray-300 hover:border-black text-black font-medium rounded-full transition-colors flex items-center justify-center"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Floating Input Component ---------------- */
function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete,
  showToggle = false,
  showPassword,
  setShowPassword,
}) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder=" "
        className="peer block w-full h-14 px-4 pt-2 pb-0 bg-white border border-[#e8e8e8] rounded-xl text-black text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 text-[#666] transition-all duration-300
          ${value
            ? "top-2 -translate-y-0.5 text-sm text-black"
            : "top-1/2 -translate-y-1/2 text-sm peer-focus:top-2 peer-focus:-translate-y-0.5 peer-focus:text-xs "}
          pointer-events-none`}
      >
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>

      {showToggle && (
        <button
          type="button"
          className="absolute right-0 top-3.5 px-4 text-[#666] focus:outline-none transition-all duration-150"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M1 10C1 10 4 3 10 3s9 7 9 7-3 7-9 7S1 10 1 10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.56818 4.70906C9.0375 4.59921 9.518 4.54429 10 4.54543C14.7727 4.54543 17.5 9.99997 17.5 9.99997C17.0861 10.7742 16.5925 11.5032 16.0273 12.175M11.4455 11.4454C11.2582 11.6464 11.0324 11.8076 10.7815 11.9194C10.5306 12.0312 10.2597 12.0913 9.98506 12.0961C9.71042 12.101 9.43761 12.0505 9.18292 11.9476C8.92822 11.8447 8.69686 11.6916 8.50262 11.4973C8.30839 11.3031 8.15527 11.0718 8.05239 10.8171C7.94952 10.5624 7.899 10.2896 7.90384 10.0149C7.90869 9.74027 7.9688 9.46941 8.0806 9.2185C8.19239 8.9676 8.35358 8.74178 8.55455 8.55452M14.05 14.05C12.8845 14.9384 11.4653 15.4306 10 15.4545C5.22727 15.4545 2.5 9.99997 2.5 9.99997C3.34811 8.41945 4.52441 7.03857 5.95 5.94997L14.05 14.05Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M2.5 2.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      )}
    </div>
  );
}