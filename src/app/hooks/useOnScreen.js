import { useEffect, useState } from "react";

export const useOnScreen = (ref, observerOptions) => {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisibility(entry.isIntersecting);
    }, observerOptions);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [observerOptions, ref]);
  return isVisible;
};
