
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/AB Logo.jpeg"
        alt="Arogya Bliss Logo" 
        className="h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
