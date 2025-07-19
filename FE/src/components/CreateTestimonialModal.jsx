import { useState } from "react";
import axios from "axios";

const CreateTestimonialModal = ({ open, onClose }) => {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTestimonial = {
      quote,
      name,
      position,
      company,
      logo: logo.trim() !== "" ? logo : "/placeholder.svg",
    };

    try {
      await axios.post("http://localhost:3000/api/testimonials", newTestimonial);
      console.log("✅ Testimonial created successfully");
      onClose(); // Close modal after successful submission
    } catch (error) {
      console.error("❌ Error creating testimonial:", error.message);
      // Optional: toast or UI error message
    }

    // Reset form
    setQuote("");
    setName("");
    setPosition("");
    setCompany("");
    setLogo("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl bg-[#1e1e1e] p-6">
        <h3 className="mb-4 text-2xl font-semibold text-white">Add Testimonial</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            placeholder="Quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            rows={3}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg bg-neutral-800 p-3 text-white placeholder:text-neutral-400"
            required
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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
            placeholder="Logo URL (optional)"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
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

export default CreateTestimonialModal;
