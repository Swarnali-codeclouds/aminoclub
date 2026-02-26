const Pathway = ({
  title,
  subtitle,
  label,
  strength,
  percent,
  color,
  points,
}) => {
  const ringColor = color === "green" ? "#16a34a" : "#718096";
  const textColor =
    color === "green" ? "text-[#16a34a]" : "text-[#718096]";

  return (
    <div
      className="text-center flex-1 max-w-[180px]"
      role="listitem"
    >
      {/* Circular Meter */}
      <div
        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
        style={{
          background: `conic-gradient(${ringColor} 0% ${percent}%, #e4e4e7 ${percent}% 100%)`,
          padding: "3px",
        }}
        role="img"
        aria-label={`${title}: ${strength} potency`}
      >
        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
          <span className={`text-base lg:text-lg font-bold ${textColor}`}>
            {label}
          </span>
          <span className="text-xs font-semibold text-[#5a5a5a]">
            {strength}
          </span>
        </div>
      </div>

      {/* Text */}
      <h4 className="text-sm font-semibold text-[#131315] mb-1">
        {title}
      </h4>
      <p className="text-xs text-[#5a5a5a] mb-2">
        {subtitle}
      </p>

      <p className="text-xs text-[#374151] leading-tight">
        {points.map((item, index) => (
          <span key={index} className="block">
            {item}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Pathway;