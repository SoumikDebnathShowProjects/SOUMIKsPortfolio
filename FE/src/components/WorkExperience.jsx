import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, X } from "lucide-react"; // Added X icon for closing
// Import motion and AnimatePresence
import { motion, AnimatePresence } from "framer-motion";
import CreateExperienceModal from "./CreateExperienceModel"; // Assuming path is correct
import { BASE_URI } from "./global"; // Assuming path is correct

// Helper function to generate a unique enough key if _id is missing
const generateKey = (job, index) => job._id || `exp-${index}`;

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to hold the ID (_id or index) of the selected item for expansion
  const [selectedId, setSelectedId] = useState(null);

  // Fetch experiences
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get(`${BASE_URI}/api/experiences`);
        // Optional: Sort data if needed (e.g., by date)
        setExperiences(response.data);
      } catch (error) {
        console.error("❌ Failed to load work experiences:", error.message);
      }
    };
    fetchExperiences();
  }, []);

  // Add experience
  const handleAddExperience = async (newExperience) => {
    try {
      const response = await axios.post(
        `${BASE_URI}/api/experiences`,
        newExperience
      );
      setExperiences((prev) => [...prev, response.data]);
      setIsModalOpen(false);
      // Optionally, immediately select the new one:
      // setSelectedId(generateKey(response.data, experiences.length));
    } catch (error) {
      console.error("❌ Failed to add experience:", error.message);
    }
  };

  // Find the currently selected experience object
  const selectedExperience = experiences.find(
    (exp, index) => generateKey(exp, index) === selectedId
  );

  return (
    // Section with a light background
    <section className="bg-gray-50 py-20" id="experience">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          {/* Darker text for heading */}
          <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Work Experience
          </h2>
          {/* Button with accent color */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-teal-500 bg-teal-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-600 hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            <Plus size={18} />
            Add Experience
          </button>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((job, index) => {
            const key = generateKey(job, index);
            // Prevent grid item from rendering if it's the selected one (it will appear in the modal)
            if (key === selectedId) return null;

            return (
                <motion.div
                  key={key}
                  layoutId={key} // Crucial for shared layout animation
                  onClick={() => setSelectedId(key)}
                  className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  whileHover={{ y: -5 }} // Subtle lift on hover
                >
                  {/* Grid Item Content (Summary) */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="truncate text-lg font-semibold text-gray-800" title={job.title}>
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                      <p className="mt-1 text-xs text-gray-500">{job.period}</p>
                    </div>
                  </div>
                  {/* You could add a short description preview here if desired */}
                </motion.div>
            );
          })}
        </div>

        {/* Animated Modal using AnimatePresence and matching layoutId */}
        <AnimatePresence>
          {selectedId && selectedExperience && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedId(null)} // Click backdrop to close
              />

              {/* Modal Content */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  layoutId={selectedId} // Match the layoutId of the clicked grid item
                  className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl"
                  // Add inner padding and styling for the expanded content
                >
                   <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">
                     {/* Expanded Content */}
                     <div className="mb-4 flex items-start justify-between">
                       <div className="flex flex-grow items-center gap-5">
                         <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 md:h-24 md:w-24">
                           <img
                             src={selectedExperience.logo || "/placeholder.svg"}
                             alt={selectedExperience.company}
                             className="h-14 w-14 object-contain md:h-16 md:w-16"
                           />
                         </div>
                         <div>
                           <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                             {selectedExperience.title}
                           </h2>
                           <p className="mt-1 text-lg text-gray-700">
                             {selectedExperience.company}
                           </p>
                           <span className="mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                             {selectedExperience.period}
                           </span>
                         </div>
                       </div>
                       {/* Close Button */}
                       <button
                         onClick={() => setSelectedId(null)}
                         className="ml-4 flex-shrink-0 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                         aria-label="Close details"
                       >
                         <X size={24} />
                       </button>
                     </div>

                     {/* Description or other details */}
                     {selectedExperience.description && (
                       <div className="prose prose-sm max-w-none text-gray-600 md:prose-base">
                         {/* Using 'prose' for nice text formatting, install @tailwindcss/typography if needed */}
                         <p>{selectedExperience.description}</p>
                         {/* Add bullet points, etc. if your data structure supports it */}
                       </div>
                     )}
                   </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Create Experience Modal (remains unchanged functionally) */}
      <CreateExperienceModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddExperience}
        // Consider passing a light theme prop if the modal needs style adjustments
      />
    </section>
  );
};

export default WorkExperience;