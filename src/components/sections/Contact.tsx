'use client';
import Contact from "@/app/contact/page";

export default function ContactSection() {
  return (
    <section
    id="/contact"
    className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
          <p className="text-gray-400">
            Let&apos;s discuss how I can help with your project.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <form className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-[#0f172a] border border-gray-700 p-3 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-[#0f172a] border border-gray-700 p-3 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                className="w-full rounded-lg bg-[#0f172a] border border-gray-700 p-3 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-lg bg-[#0f172a] border border-gray-700 p-3 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-indigo-400 flex items-center gap-2">
                📧 sabinagv.888@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4 text-gray-400 text-xl">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
