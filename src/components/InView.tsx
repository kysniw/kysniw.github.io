import React, { Children, useEffect, useRef, useState } from "react";

interface InViewProps {
  children: React.ReactElement<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
  animationClass: string;
  animateSelf?: boolean;
}

const InView = ({
  children,
  className,
  animationClass,
  style,
  animateSelf = false,
}: InViewProps) => {
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

  if (!animateSelf)
    return (
      <span className={className} ref={ref}>
        {Children.map(children, (child) => {
          return React.cloneElement(child, {
            style: style as CSSStyleDeclaration,
            className: `${child.props.className} ${
              isInView ? animationClass : ""
            }`,
          });
        })}
      </span>
    );
  else
    return (
      <span
        className={`${className} ${isInView ? animationClass : ""}`}
        ref={ref}
      >
        {Children.map(children, (child) => {
          return React.cloneElement(child, {
            style: style as CSSStyleDeclaration,
            className: `${child.props.className}`,
          });
        })}
      </span>
    );
};

export default InView;
