import React, { useState } from "react";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // Possible values: 'idle' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const form = e.target;
      const data = new FormData(form);
      const response = await fetch("https://formspree.io/f/mqaeldyd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Soft accent glow positioned top-left to complement the layout */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Let's <span className="text-accent">Connect</span>.
          </h2>
          <p className="text-lg text-secondary">
            Interested in collaborating or have a project in mind? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left column — static contact details (email, location, availability note) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-secondary font-medium mb-1">Email</p>
                    <a href="mailto:mukundjha728@gmail.com" className="text-lg font-semibold text-white hover:text-accent transition-colors">
                      mukundjha728@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-secondary font-medium mb-1">Location</p>
                    <p className="text-lg font-semibold text-white">
                      Delhi NCR, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-secondary text-sm leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities. If you have a project or an opportunity that requires scalable engineering and a modern tech stack, I'd love to hear from you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column — Formspree-powered contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 lg:p-10 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface2 border border-border text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface2 border border-border text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-surface2 border border-border text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex justify-center items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accentHover transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Inline feedback messages shown after form submission */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center font-medium text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center font-medium text-sm"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
