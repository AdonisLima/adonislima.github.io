import { Property } from "csstype";
import { EasingFunction } from "@react-spring/types";

export interface SplitTextProps {
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: EasingFunction;
  threshold?: number;
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
}
