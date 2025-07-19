import { useState } from "react";
import axios from "axios";

const CreateExperienceModal = ({ open, onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [period, setPeriod] = useState("");
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExperience = {
      title,
      company,
      period,
      logo: logo.trim() !== "" ? logo : "/placeholder.svg",
    };

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/experiences", newExperience);

      if (onSuccess) {
        onSuccess(res.data); // Optional callback to refresh the list
      }

      // Reset form
      setTitle("");
      setCompany("");
      setPeriod("");
      setLogo("");
      onClose();
    } catch (error) {
      console.error("Error submitting experience:", error.message);
      alert("Failed to submit experience. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl bg-[#1e1e1e] p-6">
        <h3 className="mb-4 text-2xl font-semibold">Add Experience</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            required
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            required
          />
          <input
            type="text"
            placeholder="Period (e.g. Jan 2023 – Mar 2023)"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            required
          />
          <input
            type="text"
            placeholder="Logo URL (optional)"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-white/5"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2 text-sm text-black font-semibold hover:bg-gray-300 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExperienceModal;
