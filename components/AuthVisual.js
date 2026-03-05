import Image from "next/image";

/* ---------------- PRODUCTS ---------------- */

const PRODUCTS = [
  { src: "/images/login-signUp/imgi_2_image.webp", alt: "TB-500" },
  { src: "/images/login-signUp/imgi_3_image.webp", alt: "BPC-157" },
  { src: "/images/login-signUp/imgi_4_image.webp", alt: "Tirzepatide" },
  { src: "/images/login-signUp/imgi_5_image.webp", alt: "AOD-9604" },
  { src: "/images/login-signUp/imgi_6_image.webp", alt: "GLP-3" },
  { src: "/images/login-signUp/imgi_7_image.webp", alt: "Bac Water" },
  { src: "/images/login-signUp/imgi_13_image.webp", alt: "Product 12" },
  { src: "/images/login-signUp/imgi_14_image.webp", alt: "Product 13" },
  { src: "/images/login-signUp/imgi_15_image.webp", alt: "Product 14" },
  { src: "/images/login-signUp/imgi_16_image.webp", alt: "Product 15" },
  { src: "/images/login-signUp/imgi_17_image.webp", alt: "Product 16" },
  { src: "/images/login-signUp/imgi_18_image.webp", alt: "Product 17" },
  { src: "/images/login-signUp/imgi_19_image.webp", alt: "Product 18" },
];

/* ---------------- SLOTS ---------------- */

const SLOTS = [
  "top-[5%] left-[2%] w-[20%] max-w-[130px]",
  "top-[18%] left-[22%] w-[16%] max-w-[100px]",
  "top-[3%] right-[25%] w-[18%] max-w-[115px]",
  "top-[8%] right-[3%] w-[22%] max-w-[140px]",
  "top-[12%] left-[42%] w-[14%] max-w-[90px]",
  "top-[30%] left-[-10%] w-[42%] max-w-[260px]",
  "top-[28%] right-[-5%] w-[28%] max-w-[175px]",
  "bottom-[18%] left-[3%] w-[18%] max-w-[115px]",
  "bottom-[5%] left-[20%] w-[20%] max-w-[125px]",
  "bottom-[2%] left-[38%] w-[24%] max-w-[150px]",
  "bottom-[10%] right-[10%] w-[30%] max-w-[180px]",
  "bottom-[8%] right-[5%] w-[22%] max-w-[140px]",
  "bottom-[6%] right-[15%] w-[26%] max-w-[160px]",
  "bottom-[4%] right-[10%] w-[30%] max-w-[180px]",
];

/* ---------------- ANIMATIONS ---------------- */

const ANIMATIONS = [
  "animate-float-sway",
  "animate-float-rotate",
  "animate-float-pulse",
  "animate-bob",
];

/* ---------------- COMPONENT ---------------- */

export default function AuthVisual() {
  return (
    <div
      className="hidden lg:flex lg:w-1/2 xl:w-[100%] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #e8e5ff 0%, #cbe5fc 50%, #e8e5ff 100%)",
      }}
    >
      {/* CENTER LOGO */}
      <div className="absolute inset-0 flex items-center justify-center z-30 -translate-y-4">
        <Image
          src="/images/LogoMain.svg"
          alt="Amino Club"
          width={210}
          height={58}
          priority
        />
      </div>

      {/* ALL FLOATING PRODUCTS */}
      {PRODUCTS.map((product, index) => {
        const slot = SLOTS[index % SLOTS.length];
        const anim = ANIMATIONS[index % ANIMATIONS.length];
        const delay = index * 0.3; // staggered animation delay

        return (
          <div
            key={index}
            className={`absolute aspect-[1/1.4] ${slot} ${anim}`}
            style={{ animationDelay: `${delay}s` }}
          >
            <Image
              src={product.src}
              alt={product.alt}
              fill
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
            />
          </div>
        );
      })}
    </div>
  );
}