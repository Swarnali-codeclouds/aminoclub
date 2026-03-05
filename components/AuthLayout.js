export default function AuthLayout({ children, visual }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      
      {/* Left Visual */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden">
        {visual}
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center bg-white pt-[73px] lg:pt-0">
        <div className="w-full max-w-[400px] px-6 py-12 lg:py-0">
          {children}
        </div>
      </div>

    </div>
  );
}