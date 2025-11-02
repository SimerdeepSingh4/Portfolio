import { useEffect, useState, Suspense, lazy } from "react";

const StarBackground = lazy(() => import("./StarBackground"));
const GeometricBackground = lazy(() => import("./GeometricBackground"));

export const ThemeBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      setIsDarkMode(htmlElement.classList.contains("dark"));
    };

    // Check theme on mount
    checkTheme();

    // Create observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    // Start observing the document element for class changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Suspense fallback={null}>
        {isDarkMode ? (
          <StarBackground key="star-bg" />
        ) : (
          <GeometricBackground key="geo-bg" />
        )}
      </Suspense>
    </div>
  );
};