import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // hanya trigger sekali
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return { ref, isInView };
}
