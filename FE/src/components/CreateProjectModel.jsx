import { useState } from "react";
import axios from "axios";

const CreateProjectModal = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      title,
      description,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
      hasImage: image.trim() !== "",
    };

    try {
      await axios.post("http://localhost:3000/api/projects", newProject);
      console.log("✅ Project created successfully");
      // Optional: show a success message or toast here
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("❌ Error creating project:", error.message);
      // Optional: show error to the user
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setImage("");
    setTags("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl bg-[#1e1e1e] p-6">
        <h3 className="mb-4 text-2xl font-semibold text-white">Add New Project</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            required
          />
          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            rows={4}
            required
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-white/5 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2 text-sm text-black font-semibold hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
