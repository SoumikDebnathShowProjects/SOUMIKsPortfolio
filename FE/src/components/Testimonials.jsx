import { useEffect, useState } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
import CreateTestimonialModal from "./CreateTestimonialModal";
import { BASE_URI } from "./global";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch testimonials on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${BASE_URI}/api/testimonials`);
        setTestimonials(response.data);
      } catch (error) {
        console.error("❌ Failed to load testimonials:", error.message);
      }
    };

    fetchTestimonials();
  }, []);

  const handleAddTestimonial = async (newTestimonial) => {
    try {
      const response = await axios.post(`${BASE_URI}/api/testimonials`, newTestimonial);
      setTestimonials((prev) => [...prev, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Failed to add testimonial:", error.message);
    }
  };

  return (
    <section className="border-b border-neutral-800 py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-4xl font-bold md:text-5xl">Testimonials</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-white/5 transition"
          >
            <Plus size={18} />
            Add Testimonial
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              className="flex flex-col gap-6 rounded-xl bg-[#1e1e1e] p-6"
              key={index}
            >
              <p className="text-neutral-300">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full bg-neutral-800"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <img
                  src={testimonial.logo || "/placeholder.svg"}
                  alt={testimonial.company}
                  className="h-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <CreateTestimonialModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTestimonial}
      />
    </section>
  );
};

export default Testimonials;
