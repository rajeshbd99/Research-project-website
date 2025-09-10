const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-4 border-b border-indigo-700">
        
        {/* Center - Footer Content */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <p className="text-lg font-semibold">
            © 2024 Drone Defense Research. All rights reserved.
          </p>
          <p className="text-sm">
            Transforming Defense Capabilities with Cutting-Edge Research.
          </p>
        </div>

        {/* Right - Visitor Counter */}
        <div
          id="footer-counter"
          className="text-right"
          dangerouslySetInnerHTML={{
            __html:
              document.getElementById("visitor-counter")?.innerHTML || "",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
