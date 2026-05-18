import React, { useState, useRef, useEffect } from "react";

const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="arrow">{isOpen ? "▾" : "▸"}</span>
      </button>
      <div
        ref={contentRef}
        className="collapsible-content"
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          overflow: "hidden",
        }}
      >
        <div className="collapsible-inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
