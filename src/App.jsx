import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDownload, FaLink, FaInfoCircle, FaCog, FaBook, FaCheckCircle, FaExclamationCircle, FaAngleRight, FaDatabase, FaMarker, FaUsers, FaChartPie, FaShieldAlt, FaTools, FaClock, FaPenFancy, FaListOl, FaGlobe, FaCameraRetro, FaStar } from "react-icons/fa";
import img1 from './assets/img1.jpg';

const App = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Military Dataset</h1>
          <div className="space-x-6">
            <Link to="banner" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to="dataset" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Dataset
            </Link>
            <Link to="links" smooth={true} duration={500} className="hover:underline cursor-pointer">
              Links
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
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 flex items-center justify-center mb-16 mt-10">
            <FaDownload className="mr-2" />
            Dataset Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 flex items-center justify-center text-lg">
            The dataset contains <strong>1,700 high-resolution images</strong> captured by drones, annotated in the YOLO format for object detection tasks.
          </p>

          {/* Key Features */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Key Features:</h3>
          <ul className="space-y-4 text-gray-800 mb-8">
            <li className="flex items-start space-x-4">
              <FaAngleRight className="text-blue-600 mt-1" />
              <span className="text-lg">
                7 distinct classes:
                <ul className="mt-2 ml-6 list-disc list-inside text-xl font-bold">
                  <li>Artillery</li>
                  <li>Missile</li>
                  <li>Radar</li>
                  <li>M. Rocket Launcher</li>
                  <li>Soldier</li>
                  <li>Tank</li>
                  <li>Vehicle</li>
                </ul>
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FaAngleRight className="text-blue-600 mt-1" />
              <span className="text-lg">
                Detailed bounding box annotations for each object class
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FaAngleRight className="text-blue-600 mt-1" />
              <span className="text-lg">
                Ideal for training YOLO-based models or other object detection architectures
              </span>
            </li>
          </ul>


          {/* Data Collection */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaDatabase className="mr-2" />
            Data Collection
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            To prepare the dataset, a total of <strong>1,700 images</strong> of military objects were gathered from reputable sources and meticulously annotated for each object class.
            Our data sources included open-source military datasets and publicly accessible images, ensuring coverage of various environmental conditions.
            The dataset represents diverse lighting conditions, backgrounds, angles, and weather scenarios, enhancing diversity and robustness.
          </p>

          {/* Data Annotation */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaMarker className="mr-2" />
            Data Annotation
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            The images were manually annotated using <strong>CVAT</strong>, an open-source tool for YOLO bounding box annotation.
            Each object was annotated with its class label and bounding box coordinates, normalized based on image dimensions.
            This process resulted in over <strong>4,100 annotations</strong> to optimize model training and enhance performance accuracy.
            This careful annotation ensures a robust detection model.
          </p>

          {/* Contributors */}
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
            <FaUsers className="mr-2" />
            Contributors
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-xl">
            <li>Sudip Chakrabarty - <a href="mailto:21053329@kiit.ac.in" className="text-blue-500 hover:underline">21053329@kiit.ac.in</a></li>
            <li>Sourov Roy Shuvo - <a href="mailto:21053456@kiit.ac.in" className="text-blue-500 hover:underline">21053456@kiit.ac.in</a></li>
            <li>Rajesh Chowdhury - <a href="mailto:21053394@kiit.ac.in" className="text-blue-500 hover:underline">21053394@kiit.ac.in</a></li>
            <li>Sorup Chakraborty - <a href="mailto:21053328@kiit.ac.in" className="text-blue-500 hover:underline">21053328@kiit.ac.in</a></li>
          </ul>

          {/* Footer Information */}
          <div className="mt-8 bg-blue-100 p-6 rounded-md shadow-md flex flex-col items-center text-xl">
            <h4 className="text-2xl font-semibold text-blue-600">Under the Guidance of:</h4>
            <p className="text-gray-800">Dr. Rajdeep Chatterjee</p>
            <p className="text-gray-800">School of Computer Engineering, KIIT</p>
            <p className="text-gray-800">Bhubaneswar, Odisha - 751024</p>
          </div>
        </div>
      </section>


      {/* Dataset Links Section */}
      <section id="links" className="bg-gradient-to-r from-blue-50 to-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-8 flex items-center justify-center mb-16 mt-10">
            <FaLink className="mr-3 text-blue-500" />
            Dataset Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="text-blue-600 mt-4 inline-block hover:underline"
                >
                  Visit Kaggle <FaExternalLinkAlt className="inline" />
                </a>
              </div>
            </div>

            {/* Download Link */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <FaDownload className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-green-600">Download Dataset</h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Get a local copy of the dataset for your research and analysis.
                </p>
                <a
                  href="https://example.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 mt-4 inline-block hover:underline"
                >
                  Download Now <FaDownload className="inline" />
                </a>
              </div>
            </div>

            {/* IEEE Link */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
              <FaBook className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-red-600">IEEE Publication</h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Read our publication on IEEE Xplore for an in-depth analysis.
                </p>
                <a
                  href="https://ieeexplore.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 mt-4 inline-block hover:underline"
                >
                  View on IEEE <FaBook className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Other Sections */}
      <section id="features" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 flex items-center justify-center mb-16 mt-10">
            <FaStar className="text-blue-500 mr-3" />
            Key Features of the Dataset
            <FaStar className="text-blue-500 ml-3" />
          </h2>
          <div className="space-y-8">
            {/* High-Resolution Drone Imagery */}
            <div className="flex items-start space-x-4">
              <FaCameraRetro className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">High-Resolution Drone Imagery</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Contains <strong>1,700 high-quality images</strong> captured from drones for military object detection.
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
                  Military objects are classified into seven categories: <strong>Artillery</strong>, <strong>Missile</strong>, <strong>Radar</strong>, <strong>M. Rocket Launcher</strong>, <strong>Soldier</strong>, <strong>Tank</strong>, and <strong>Vehicle</strong>.
                </p>
              </div>
            </div>

            {/* Detailed Annotations */}
            <div className="flex items-start space-x-4">
              <FaPenFancy className="text-purple-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-purple-600">Detailed Annotations</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Over <strong>4,100 meticulous annotations</strong> created using CVAT for YOLO bounding boxes. Each object has normalized coordinates and class labels.
                </p>
              </div>
            </div>

            {/* Tailored for Real-Time Applications */}
            <div className="flex items-start space-x-4">
              <FaClock className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">Tailored for Real-Time Applications</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Specifically curated for training YOLO-based models and optimized for real-time detection in military scenarios.
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
                  Dataset is split into <strong>training (80%)</strong>, <strong>validation (10%)</strong>, and <strong>testing (10%)</strong> sets to ensure model generalization and effective evaluation.
                </p>
              </div>
            </div>

            {/* Curated from Reputable Sources */}
            <div className="flex items-start space-x-4">
              <FaShieldAlt className="text-teal-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-teal-600">Curated from Reputable Sources</h3>
                <p className="text-gray-700 leading-relaxed text-xl">
                  Images sourced from open-source military datasets and publicly accessible images, ensuring authenticity and relevance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Usage Policy Section */}
      <section id="usage" className="bg-gradient-to-r from-gray-100 to-gray-300 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-4xl font-bold text-blue-700 mb-6 flex items-center justify-center mb-16 mt-10">
              <FaExclamationCircle className="text-blue-500 mr-3" />
              Usage Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              This dataset is intended for <strong>educational</strong> and <strong>research purposes only</strong>.
              Commercial use is strictly prohibited. Users are required to provide proper attribution to the creators if this dataset is utilized in any project or publication.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Inspiration</h3>
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
                  Redistribution of the dataset in any form without the authors’ permission is not allowed.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-600 text-2xl" />
                <p className="text-gray-700 text-xl">
                  If used in a publication or project, proper credit must be given to the creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provenance Section */}
      <section id="provenance" className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-4xl font-bold text-blue-700 mb-6 flex items-center justify-center mb-16 mt-10">
              <FaInfoCircle className="mr-3 text-blue-500" />
              Provenance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              The dataset combines <strong>drone-captured images</strong>, public sources, and frames extracted from high-resolution YouTube videos depicting military scenarios.
              Images were carefully preprocessed to ensure diversity and robustness.
            </p>

            {/* Provenance Updates */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 text-xl">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Provenance Updates</h3>
              <p className="text-gray-700">
                <strong>Auto Syncing: Off</strong><br />
                Data will not continually sync with new notebook versions.
              </p>
            </div>

            {/* Sources */}
            <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
              <FaDatabase className="mr-2 text-green-500" />
              Sources
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              This dataset combines drone-captured images collected by us, publicly available images from online sources, and frames extracted from high-resolution YouTube videos depicting military scenarios.
            </p>

            {/* Collection Methodology */}
            <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
              <FaCog className="mr-2 text-purple-500" />
              Collection Methodology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              Images were preprocessed through resizing, cropping, and augmentations like <strong>rotation</strong>, <strong>scaling</strong>, and <strong>brightness adjustments</strong> to enhance diversity.
            </p>

            {/* License */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <h3 className="text-2xl font-semibold text-gray-600 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-gray-500" />
                License
              </h3>
              <p className="text-gray-700 text-xl">
                Attribution-NonCommercial 4.0 International (<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CC BY-NC 4.0</a>)
              </p>
            </div>
          </div>
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
