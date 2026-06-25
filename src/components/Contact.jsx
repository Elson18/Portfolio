import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Github, Linkedin } from './BrandIcons';

const Contact = () => {
  const formRef = useRef();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.name.trim()) {
      errors.name = 'Name is required.';
    }
    if (!formValues.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!formValues.message.trim()) {
      errors.message = 'Message is required.';
    } else if (formValues.message.length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitStatus(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    const isPlaceholder =
      !SERVICE_ID ||
      !PUBLIC_KEY ||
      SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID' ||
      PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY';

    if (isPlaceholder) {
      // Simulation mode
      setTimeout(() => {
        setLoading(false);
        setSubmitStatus('success');
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#2563EB', '#7C3AED', '#06B6D4']
        });
        setFormValues({ name: '', email: '', message: '' });
      }, 1200);
    } else {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setLoading(false);
          setSubmitStatus('success');
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#2563EB', '#7C3AED', '#06B6D4']
          });
          setFormValues({ name: '', email: '', message: '' });
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setSubmitStatus('error');
        });
    }
  };

  return (
    <section id="contact" className="bg-white px-6 md:px-12 py-32 md:py-48 relative overflow-hidden">
      {/* Soft background glow orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/10 rounded-full glow-orb translate-x-[30%] translate-y-[30%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column - Details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-600 block mb-3 uppercase">
              // 06 / COLLABORATION
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-zinc-950 uppercase leading-none mb-6">
              GET IN TOUCH
            </h2>
            <div className="h-[2px] bg-zinc-950 w-24 my-6" />
            <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest leading-relaxed mb-8 max-w-sm">
              I am open to projects, research cooperation, and engineering opportunities. Connect via email or social platforms.
            </p>

            <div className="flex flex-col gap-5 border-t border-zinc-150 pt-8 mt-2">
              <a
                href="mailto:elsonaron54@gmail.com"
                className="text-lg font-bold text-zinc-950 hover:text-violet-600 transition-colors font-sans w-fit"
              >
                elsonaron54@gmail.com
              </a>

              <div className="flex flex-wrap gap-4 items-center mt-2">
                <a
                  href="www.linkedin.com/in/elson-benanzal-7451b129a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 hover:text-zinc-950 uppercase tracking-wider transition-colors duration-200"
                >
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Elson18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 hover:text-zinc-950 uppercase tracking-wider transition-colors duration-200"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/Elson18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-zinc-400 hover:text-zinc-950 uppercase tracking-wider transition-colors duration-200"
                >
                  LeetCode
                </a>
                <a
                  href="https://codechef.com/users/elsonbenanzal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-zinc-400 hover:text-zinc-950 uppercase tracking-wider transition-colors duration-200"
                >
                  CodeChef
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="border border-zinc-150 rounded-2xl p-6 md:p-8 bg-zinc-50 shadow-xl shadow-zinc-200/5">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold text-zinc-450 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    disabled={loading}
                    placeholder="John Doe"
                    className={`w-full bg-white border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 transition-all text-zinc-950 placeholder-zinc-300 font-sans text-sm ${formErrors.name
                      ? 'border-red-300 focus:border-red-400 focus:ring-red-400'
                      : 'border-zinc-200 focus:border-zinc-950 focus:ring-zinc-950'
                      }`}
                  />
                  {formErrors.name && (
                    <span className="text-xs text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                      <AlertCircle size={12} />
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold text-zinc-450 uppercase tracking-widest">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    placeholder="john@example.com"
                    className={`w-full bg-white border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 transition-all text-zinc-950 placeholder-zinc-300 font-sans text-sm ${formErrors.email
                      ? 'border-red-300 focus:border-red-400 focus:ring-red-400'
                      : 'border-zinc-200 focus:border-zinc-950 focus:ring-zinc-950'
                      }`}
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                      <AlertCircle size={12} />
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold text-zinc-450 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formValues.message}
                    onChange={handleInputChange}
                    disabled={loading}
                    placeholder="Describe details of collaboration or queries here..."
                    className={`w-full bg-white border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 transition-all text-zinc-950 placeholder-zinc-300 font-sans text-sm resize-none ${formErrors.message
                      ? 'border-red-300 focus:border-red-400 focus:ring-red-400'
                      : 'border-zinc-200 focus:border-zinc-950 focus:ring-zinc-950'
                      }`}
                  />
                  {formErrors.message && (
                    <span className="text-xs text-red-500 font-semibold flex items-center gap-1.5 mt-1">
                      <AlertCircle size={12} />
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Feedback notifications */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 border border-green-100 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 size={14} />
                      <span>MESSAGE SENT SUCCESSFULY. THANK YOU.</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={14} />
                      <span>TRANSMISSION ERROR. PLEASE RETRY.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-900 border border-zinc-950 px-6 py-4.5 rounded-full shadow-lg shadow-zinc-950/10 disabled:opacity-50 transition-colors duration-250 mt-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
