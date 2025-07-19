import { useEffect, useState } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
import { BASE_URI } from "./global";
import CreateProjectModal from "./CreateProjectModel";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${BASE_URI}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("❌ Failed to load projects:", error.message);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = async (newProject) => {
    try {
      const response = await axios.post(`${BASE_URI}/api/projects`, newProject);
      setProjects((prev) => [...prev, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Failed to add project:", error.message);
    }
  };

  return (
    <>
      <section className="border-b border-neutral-800 py-20" id="projects">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-4xl font-bold md:text-5xl">Selected Projects</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-white/5 transition"
            >
              <Plus size={18} />
              Add Project
            </button>
          </div>

          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <div className="overflow-hidden rounded-xl bg-[#1e1e1e]" key={index}>
                {project.hasImage && (
                  <div className="flex h-[300px] items-center justify-center bg-neutral-800">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
                  <p className="mb-6 text-neutral-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-neutral-800 px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CreateProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProject}
      />
    </>
  );
};

export default Projects;
