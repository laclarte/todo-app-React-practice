import { useState } from "react";

function Button({ children, onClick, variant = "delete" }) {
  const [isHovered, setIsHovered] = useState(false);

  const base = "px-3.5 py-1.5 rounded-md text-white font-bold size-max shrink-0";

  const styles = {
    delete: "bg-slate-400 hover:bg-slate-500",
  };

  const addGradient = {
    normal: "linear-gradient(135deg, #f97316, #ea580c)",
    hover:  "linear-gradient(135deg, #ea580c, #c2410c)",
  };

  if (variant === "add") {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${base} transition-all duration-200`}
        style={{
          background: isHovered ? addGradient.hover : addGradient.normal,
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;