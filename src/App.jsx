import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDownload, FaUserTie, FaEnvelope, FaLinkedin, FaLink, FaGithub, FaCheckCircle, FaExclamationCircle, FaAngleRight, FaDatabase, FaMarker, FaUsers, FaChartPie, FaShieldAlt, FaTools, FaClock, FaPenFancy, FaListOl, FaGlobe, FaCameraRetro, FaStar } from "react-icons/fa";
import img1 from './assets/img1.jpg';
import { SiMega } from "react-icons/si";
import { GiInspiration } from "react-icons/gi";
import { DiGoogleDrive } from "react-icons/di";
import img from './assets/Screenshot 2025-01-28 235024.png';
import rajesh from './assets/rajesh.jpg';
import sudip from './assets/sudip.jpeg';
import sorup from './assets/sorup.jpg';
import pic from './assets/pic.jpg';
import sir from './assets/sir.jpg';
import sourav1 from './assets/sourav1.jpg';

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 font-sans">
      {/* Navbar */}
      <nav className="text-white p-4 sticky top-0 z-50 shadow-lg rounded-b-xl bg-transparent backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="banner" className="flex items-center text-black font-semibold text-lg space-x-2 cursor-pointer">
            <img
              src={img}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="block lg:inline">Military Dataset</span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              id="menu-toggle"
              className="text-black focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Menu Links */}
          <div
            id="menu"
            className="hidden lg:flex lg:space-x-8 lg:text-black lg:static lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:p-0 lg:rounded-none absolute top-14 left-0 bg-white backdrop-blur-md shadow-lg w-full lg:w-auto lg:flex-row rounded-b-xl p-4"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="banner"
                smooth={true}
                duration={500}
                className="text-lg font-semibold px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg transition-all"
              >
                Home
              </Link>
              <Link
                to="dataset"
                smooth={true}
                duration={500}
                className="text-lg font-semibold px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg transition-all"
              >
                Dataset
              </Link>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="text-lg font-semibold px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg transition-all"
              >
                Features
              </Link>
              <Link
                to="links"
                smooth={true}
                duration={500}
                className="text-lg font-semibold px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg transition-all"
              >
                Links
              </Link>
              <Link
                to="usage"
                smooth={true}
                duration={500}
                className="text-lg font-semibold px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg transition-all"
              >
                Usage Policy
              </Link>
              <Link
                to="contributors"
                smooth={true}
                duration={500}
                className="text-lg font-semibold px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white cursor-pointer shadow-lg transition-all"
              >
                Contributors
              </Link>
            </div>
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
            <h1 className="text-4xl font-bold mb-4">KIIT Military Target Archive (KIIT- MiTA)</h1>
            <p className="text-lg mb-6">
              High-Resolution Drone Imagery for Military Object Detection and Recognition
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
      <section id="dataset" className="bg-gradient-to-r from-blue-100 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-lg">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 flex items-center justify-center mt-10">
            Dataset Overview
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6 flex flex-col md:flex-row items-center justify-center text-lg md:text-lg lg:text-xl text-center md:text-left">
            In todays world, drone-captured imagery has become a cornerstone of modern military operations,
            offering unparalleled surveillance capabilities for strategic decision-making. Drones provide real-time,
            high-resolution images that are essential for monitoring vast areas, identifying potential threats,
            and enhancing situational awareness. In light of this, we have introduced a unique dataset aimed at
            advancing the field of drone-based military target detection and tracking. This dataset is designed to
            support the development of robust algorithms for surveillance and tracking of military targets,
            ultimately contributing to the enhancement of defense and security operations.
          </p>


          {/* Banner Image */}
          <div className="flex justify-center mb-10">
            <img
              src={pic}
              alt="Dataset Banner"
              className="w-full max-w-5xl rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center mb-2">Fig : Sample Drone-Captured Images from KIIT-MITA dataset.</p>

          {/* Data Collection */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaDatabase className="mr-2" />
            Data Collection
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          The KIIT-MITA dataset was created by capturing drone footage through authorized drone operations and sourcing publicly available videos from platforms like YouTube. Given the difficulty in accessing military drone images, frames were extracted from these videos to build a diverse dataset.
          </p>

          {/* Data Annotation */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaMarker className="mr-2" />
            Data Annotation
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          The images were manually annotated using CVAT, an open-source tool for bounding box annotation. Each object was labeled with its class and annotated with rectangular bounding box coordinates, which were normalized based on the image dimensions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      < section id="features" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16" >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 flex items-center justify-center mt-10">
            <FaStar className="text-blue-500 mr-3" />
            Key Features of the Dataset
          </h2>
          <div className="space-y-8">
            {/* High-Resolution Drone Imagery */}
            <div className="flex items-start space-x-4">
              <FaCameraRetro className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">High-Resolution Drone Imagery</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                The dataset includes 1,700 high-quality drone images, ideal for real-time military object detection and tracking operations.
                </p>
              </div>
            </div>

            {/* Diverse and Robust Dataset */}
            <div className="flex items-start space-x-4">
              <FaGlobe className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-green-600">Diverse and Robust Dataset</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Data represents various environmental conditions, including diverse lighting, backgrounds, angles, and weather scenarios, enhancing robustness and diversity.
                </p>
              </div>
            </div>

            {/* Seven Distinct Classes */}
            <div className="flex items-start space-x-4">
              <FaListOl className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-red-600">Seven Distinct Classes</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Military objects are classified into seven categories:
                  <li className="flex items-start space-x-4">
                    <FaAngleRight className="text-blue-600 mt-1" />
                    <span className="text-lg">
                      7 distinct classes:
                      <ul className="mt-2 ml-6 list-disc list-inside text-xl font-bold">
                        <li>Artillery</li>
                        <li>Missile</li>
                        <li>Radar</li>
                        <li>Multiple Rocket Launcher</li>
                        <li>Soldier</li>
                        <li>Tank</li>
                        <li>Vehicle</li>
                      </ul>
                    </span>
                  </li>
                </p>
              </div>
            </div>

            {/* Detailed Annotations */}
            <div className="flex items-start space-x-4">
              <FaPenFancy className="text-purple-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-purple-600">Detailed Annotations</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                Over 4,100 meticulous annotations, exported in YOLO format with corresponding .txt files for coordinates, including normalized values and class labels.
                </p>
              </div>
            </div>

            {/* Tailored for Real-Time Applications */}
            <div className="flex items-start space-x-4">
              <FaClock className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">Tailored for Real-Time Applications</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                Specifically curated for training object detection and tracking models, optimized for real-time applications in military scenarios within the domain of computer vision.
                </p>
              </div>
            </div>

            {/* Augmentation Techniques */}
            <div className="flex items-start space-x-4">
              <FaTools className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-green-600">Augmentation Techniques</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Data augmentation, including resizing, cropping, and other techniques, ensures better generalization across various conditions.
                </p>
              </div>
            </div>

            {/* Split for Generalization */}
            <div className="flex items-start space-x-4">
              <FaChartPie className="text-orange-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-orange-600">Split for Generalization</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                The dataset is divided into three sets to ensure model generalization and effective evaluation:

                </p>
                <li className="flex items-start space-x-4">
                  <FaAngleRight className="text-blue-600 mt-1" />
                  <span className="text-lg">
                    3 sets:
                    <ul className="mt-2 ml-6 list-disc list-inside text-xl font-bold">
                      <li>train: Contains 80% of the data, used for training the model.
                      </li>
                      <li>valid: Contains 10% of the data, used for model validation during training.
                      </li>
                      <li>test: Contains 10% of the data, used for final model   evaluation.</li>
                    </ul>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Dataset Links Section */}
      < section id="links" className="bg-gradient-to-r from-blue-100 to-blue-50 py-16" >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-16 flex items-center justify-center mt-10">
            <FaLink className="mr-3 text-blue-500" />
            Dataset Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Kaggle Link */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <FaExternalLinkAlt className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">Kaggle Dataset</h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Explore the dataset on Kaggle for detailed insights and examples.
                </p>
                <a
                  href="https://www.kaggle.com/datasets/sudipchakrabarty/kiit-mita/data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-4 inline-block hover:underline text-lg"
                >
                  Visit Kaggle <FaExternalLinkAlt className="inline" />
                </a>
              </div>
            </div>

            {/* Google Drive Link */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <DiGoogleDrive className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-green-600">Google Drive</h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Get a local copy of the dataset for your research and analysis.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1fZ_B0lIpVgThWAEi3BPSNnUPr1j3eCiN?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 mt-4 inline-block hover:underline text-lg"
                >
                  Download Now <FaDownload className="inline" />
                </a>
              </div>
            </div>

            {/* Mega Link */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <SiMega className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-red-600">Mega Dataset</h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Access the complete dataset directly from Mega for detailed analysis and research applications.
                </p>
                <a
                  href="https://mega.nz/folder/hesAGKZT#PGPJeQjWy3oQL9nyhBqt5g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 mt-4 inline-block hover:underline text-lg"
                >
                  Access Mega <FaExternalLinkAlt className="inline" />
                </a>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <FaGithub className="text-gray-800 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">GitHub Repository</h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Explore the codebase and implementation details on our GitHub repository.
                </p>
                <a
                  href="https://github.com/Sudip-329/KIIT-MiTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 mt-4 inline-block hover:underline text-lg"
                >
                  Visit GitHub <FaGithub className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Usage Policy Section */}
      < section id="usage" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16" >
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-4xl font-bold text-blue-700 mb-6 flex items-center justify-center mt-10">
              <FaExclamationCircle className="text-blue-500 mr-3" />
              Usage Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              This dataset is intended for <strong>educational</strong> and <strong>research purposes only</strong>.
              Commercial use is strictly prohibited. Users are required to provide proper attribution to the creators if this dataset is utilized in any project or publication.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2 flex items-center"><GiInspiration className="mr-2 text-gray-500" />Inspiration</h3>
              <p className="text-gray-700 text-xl">
                This dataset was created to facilitate research in defense and security applications, particularly for identifying and tracking military objects in drone-captured imagery.
                It serves as a valuable resource for exploring advancements in computer vision and autonomous surveillance systems.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-600 text-2xl" />
                <p className="text-gray-700 text-xl">
                  The dataset can only be used for academic projects, research, or to develop proof-of-concept models.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-600 text-2xl" />
                <p className="text-gray-700 text-xl">
                  Redistribution of the dataset in any form without the authors permission is not allowed.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-600 text-2xl" />
                <p className="text-gray-700 text-xl">
                  If used in a publication or project, proper credit must be given to the creators.
                </p>
              </div>
              {/* License */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2 flex items-center"><FaShieldAlt className="mr-2 text-gray-500" />License</h3>
                <p className="text-gray-700 text-xl">
                  Attribution-NonCommercial 4.0 International (<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CC BY-NC 4.0</a>)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contributors Section */}
<section id="contributors" className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 ">
  <div className="container mx-auto px-6 mt-16">
    <h3 className="text-4xl font-extrabold text-blue-700 mb-12 text-center flex items-center justify-center">
      <FaUsers className="mr-3 text-blue-500" />
      Our Contributors
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Contributor Cards */}
      {[
        {
          name: "Sudip Chakrabarty",
          email: "sudipchakrabarty6@gmail.com",
          img: sudip,
          github: "https://github.com/Sudip-329",
          linkedin: "https://www.linkedin.com/in/sudipchakrabarty329",
        },
        {
          name: "Sourov Roy Shuvo",
          email: "sourovroyshuvo777@gmail.com",
          img: sourav1,
          github: "https://github.com/SourovRS",
          linkedin: "https://www.linkedin.com/in/sourov-roy-shuvo-292582255",
        },
        {
          name: "Rajesh Chowdhury",
          email: "rajesh99.bd@gmail.com",
          img: rajesh,
          github: "https://github.com/rajeshbd99",
          linkedin: "https://www.linkedin.com/in/rajesh-chowdhury-361360224",
        },
        {
          name: "Sorup Chakraborty",
          email: "sorupchakraborty001@gmail.com",
          img: sorup,
          github: "https://github.com/sorupchakraborty",
          linkedin: "https://www.linkedin.com/in/sorupchakraborty",
        },
      ].map((contributor, index) => (
        <div
          key={index}
          className="relative bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-300"
        >
          <img
            src={contributor.img}
            alt={contributor.name}
            className="w-28 h-28 rounded-full border-4 border-blue-400 mb-4 shadow-lg object-cover"
          />
          <h4 className="text-2xl font-bold text-gray-800">{contributor.name}</h4>
          
          

          <div className="flex space-x-5 mt-4">
            {/* Email Icon - Clicking it will open Gmail */}
          <button
            onClick={() => window.location.href = `mailto:${contributor.email}`}
            className="text-blue-500 hover:text-blue-700 text-2xl transition-transform transform hover:scale-110"
            title="Send Email"
          >
            <FaEnvelope />
          </button>
            <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110">
              <FaGithub />
            </a>
            <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Advisor Section */}
      <section id="advisor" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 mb-10">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h3 className="text-4xl font-extrabold text-blue-700 mb-8 flex items-center">
            <FaUserTie className="mr-3 text-blue-500" />
            Our Advisor
          </h3>
          <div className="relative bg-white shadow-lg rounded-3xl p-10 flex flex-col items-center text-center w-full max-w-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-300">
            <img
              src={sir}
              alt="Dr. Rajdeep Chatterjee"
              className="w-48 h-48 border-4 rounded-2xl border-gray-400 mb-4 shadow-lg object-fill"
            />
            <h4 className="text-2xl font-bold text-gray-800">Dr. Rajdeep Chatterjee</h4>
            <p className="text-gray-600 text-lg">Associate Professor</p>
            <p className="text-gray-600 text-lg">School of Computer Engineering, KIIT <br /> Bhubaneswar</p>
            <div className="flex space-x-5 mt-4">
              <a href="https://sites.google.com/kiit.ac.in/rajdeep/home" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110">
                <FaGlobe />
              </a>
              <a href="https://github.com/cserajdeep" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rajdeep-chatterjee-ph-d-60352325" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 text-2xl transition-transform transform hover:scale-110">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      < footer className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-3" >
        <div className="container mx-auto text-center space-y-1">
          <div className="text-lg font-semibold">
            <p>&copy; 2024 Drone Defense Research. All rights reserved.</p>
          </div>
          <div className="text-sm">
            <p>Transforming Defense Capabilities with Cutting-Edge Research.</p>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default App;
