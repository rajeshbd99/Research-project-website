import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDownload, FaBook } from "react-icons/fa";
import img1 from './assets/img 1.jpg'; // Ensure this file exists in the correct directory

const App = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Drone Defense Research</h1>
          <div className="space-x-6">
            <Link to="banner" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to="dataset" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Dataset
            </Link>
            <Link to="features" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Features
            </Link>
            <Link to="usage" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Usage Policy
            </Link>
            <Link to="provenance" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Provenance
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section id="banner" className="bg-blue-600 text-white relative">
        <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Drones in Defense: Real-Time Vision-Based Military Target Surveillance
            </h1>
            <p className="text-lg mb-6">
              Enhancing situational awareness with advanced object detection and tracking techniques.
            </p>
            <Link
              to="dataset"
              smooth={true}
              duration={500}
              className="bg-white text-blue-600 px-6 py-2 rounded shadow-lg hover:bg-gray-200 transition"
            >
              Explore Dataset
            </Link>
          </motion.div>
          <motion.div
            className="mb-10 md:mb-0 md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={img1} alt="Drone Surveillance" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Dataset Section */}
      <section id="dataset" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Dataset</h2>
          <p>
            The dataset contains 1,700 high-resolution images captured by drones, annotated in the YOLO format for object detection tasks.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>7 distinct classes: Artillery, Missile, Radar, M. Rocket Launcher, Soldier, Tank, and Vehicle</li>
            <li>Detailed bounding box annotations for each object class</li>
            <li>Ideal for training YOLO-based models or other object detection architectures</li>
          </ul>
        </div>
      </section>

      {/* Other Sections (Features, Usage Policy, Provenance) */}
      <section id="features" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc ml-6">
            <li>High-resolution drone imagery suitable for defense and security-focused research.</li>
            <li>Robust dataset with augmentations for enhanced diversity.</li>
            <li>Annotations tailored for real-time military applications.</li>
          </ul>
        </div>
      </section>

      <section id="usage" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Usage Policy</h2>
          <p>
            This dataset is intended for educational and research purposes only. Commercial use is strictly prohibited. Proper attribution to the creators is required.
          </p>
        </div>
      </section>

      <section id="provenance" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Provenance</h2>
          <p>
            The dataset combines images collected by drones, public sources, and YouTube video frames. Images were preprocessed with resizing, cropping, and augmentations to ensure diversity.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Drone Defense Research. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
