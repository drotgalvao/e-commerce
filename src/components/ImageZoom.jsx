import { useState, useEffect } from "react";
import "./ImageZoom.css";

const MAGNIFY_SIZE = 200;
const MAGNIFY_SIZE_HALF = MAGNIFY_SIZE / 2;

const ImageZoom = ({ imagePath, alt, width, height }) => {
  const [magnifyStyle, setMagnifyStyle] = useState({
    display: "none", // Defina a exibição inicial como "none"
    backgroundImage: `url(${imagePath})`,
  });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = target;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    setMagnifyStyle((prev) => ({
      ...prev,
      display: "block",
      top: `${offsetY - MAGNIFY_SIZE_HALF + offsetTop}px`,
      left: `${offsetX - MAGNIFY_SIZE_HALF + offsetLeft}px`,
      backgroundPosition: `${xPercentage}% ${yPercentage}%`,
    }));

    target.classList.add("no-cursor");
  };

  const handleMouseLeave = (e) => {
    setMagnifyStyle((prev) => ({ ...prev, display: "none" }));

    e.target.classList.remove("no-cursor");
  };

  // Adicione um efeito para lidar com a exibição inicial da lupa
  useEffect(() => {
    setMagnifyStyle((prev) => ({ ...prev, display: "none" }));
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="relative cursor-none border-2 border-white">
        <img
          src={imagePath}
          alt={alt}
          width={width}
          height={height}
          draggable={false}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />
        <div className="magnify" style={magnifyStyle}></div>
      </div>
    </div>
  );
};

export default ImageZoom;
