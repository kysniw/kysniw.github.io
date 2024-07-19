import React, { Children, useEffect, useRef, useState } from "react";

interface InViewProps {
  children: React.ReactElement<HTMLElement>;
  className?: string;
  animationClass: string;
}

const InView = ({ children, className, animationClass }: InViewProps) => {
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

    // console.log(isInView);
  });

  return (
    <span className={className} ref={ref}>
      {Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: `${child.props.className} ${
            isInView ? animationClass : ""
          }`,
        });
      })}
    </span>
  );
};

export default InView;
