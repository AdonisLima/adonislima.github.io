import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { SplitTextProps } from "./types";
import { easings } from "@react-spring/web";

export function SplitText(props: SplitTextProps) {
  const {
    tag = "p",
    text = "",
    className = "",
    delay = 100,
    animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
    animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
    threshold = 0.1,
    rootMargin = "-100px",
    onLetterAnimationComplete,
  } = props;

  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );

    ref.current && observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: any) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (
              animatedCount.current === letters.length &&
              onLetterAnimationComplete
            ) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing: easings.easeInBack },
    })),
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`${className}`}
      style={{
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;

            return (
              <animated.span
                key={index}
                style={{
                  ...springs[index],
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
              >
                {letter}
              </animated.span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </span>
      ))}
    </Tag>
  );
}
