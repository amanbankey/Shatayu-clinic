import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
     
    const subject = "New Inquiry - Shatayu Clinic";
    const message = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    
    const whatsappUrl = `https://wa.me/918208468672?text=${message}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Message sent")
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
      <p className="text-gray-400 text-sm mb-6">We'll get back to you within 24 hours.</p>

      {sent && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-5 text-sm">
          <FaCheckCircle />
          Message sent! We'll contact you soon.
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handle}
              required
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="Your phone number"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handle}
            required
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            required
            rows={4}
            placeholder="Describe your concern or question..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
        >
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </div>
  );
}
