import React, { Children, useEffect, useRef, useState } from "react";

interface InViewProps {
  children: React.ReactElement<HTMLElement>;
  className: string;
}

const InView = ({ children, className }: InViewProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else setIsInView(false);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    console.log(isInView);
  });

  return Children.map(children, (child) => {
    return React.cloneElement(child, {
      re,
    });
  });
};

export default InView;
