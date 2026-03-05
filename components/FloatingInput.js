import { useId } from "react";

export default function FloatingInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  showToggle = false,
  showPassword,
  setShowPassword,
}) {
  const id = useId(); // unique ID for accessibility
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full h-14 px-4 pt-5 pb-0 bg-white border border-[#e8e8e8] rounded-xl text-black text-base appearance-none focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300
          ${value ? "-top-1.5 text-sm bg-white px-2" : "top-1/2 -translate-y-1/2 text-sm"} 
          peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-black pointer-events-none z-10`}
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
                d="M10 4.5C5 4.5 2 10 2 10C2 10 5 15.5 10 15.5C15 15.5 18 10 18 10C18 10 15 4.5 10 4.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 1l18 18M1 19L19 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}