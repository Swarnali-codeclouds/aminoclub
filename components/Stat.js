const Stat = ({
  icon,
  value,
  valueSuffix,
  title,
  description,
  bgColor,
  delay = 0,
}) => {
  return (
    <div
      className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[220px]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <article className="h-full">
        <div
          className="
            bg-white rounded-2xl p-5 h-full
            border border-[#e2e8f0]
            shadow-[0px_4px_12px_0px_rgba(151,201,143,0.1)]
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-[0px_8px_24px_0px_rgba(151,201,143,0.2)]
            flex flex-col items-center justify-center text-center
          "
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 mb-3 rounded-xl flex items-center justify-center text-2xl ${bgColor}`}
            aria-hidden="true"
          >
            {icon}
          </div>

          {/* Value */}
          <p className="text-2xl lg:text-3xl font-bold text-[#131315] leading-none tracking-tight">
            {value}
            {valueSuffix && (
              <span className="text-base lg:text-lg font-medium text-[#5a5a5a] ml-0.5">
                {valueSuffix}
              </span>
            )}
          </p>

          {/* Title */}
          <p className="text-xs font-semibold text-[#5a5a5a] uppercase tracking-wider mt-2">
            {title}
          </p>

          {/* Description */}
          <p className="text-sm text-[#4a5568] mt-2 leading-snug">
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Stat;