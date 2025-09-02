import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Load FreeVisitorCounters auth script
    const authScript = document.createElement("script");
    authScript.src =
      "https://www.freevisitorcounters.com/auth.php?id=89da7579fe98be3ad386e176c3d5db047a1f0486";
    authScript.async = true;
    document.body.appendChild(authScript);

    // Load FreeVisitorCounters counter script
    const counterScript = document.createElement("script");
    counterScript.src =
      "https://www.freevisitorcounters.com/en/home/counter/1384365/t/2";
    counterScript.async = true;
    document.body.appendChild(counterScript);

    return () => {
      document.body.removeChild(authScript);
      document.body.removeChild(counterScript);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-3">
      <div className="container mx-auto text-center space-y-2">
        <div className="text-lg font-semibold">
          <p>&copy; 2024 Drone Defense Research. All rights reserved.</p>
        </div>
        <div className="text-sm">
          <p>Transforming Defense Capabilities with Cutting-Edge Research.</p>
        </div>

        {/* Free Visitor Counter */}
        <div className="mt-2">
          <a
            href="http://www.freevisitorcounters.com"
            className="text-white underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Counter
          </a>
          <div id="1384365" className="inline-block ml-2"></div>
        </div>
      </div>
    </footer>
  );
}
