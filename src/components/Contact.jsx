import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
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
    <section id="contact" className="bg-slate-50 px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              06 / Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading tracking-tight text-slate-950 mb-6">
              Get in Touch
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-sm">
              I am interested in opportunities to contribute to advanced engineering systems. Reach out directly or connect on professional platforms.
            </p>

            <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6">
              <a href="mailto:elsonbenanzal@gmail.com" className="text-sm font-semibold text-slate-900 hover:text-brand-primary transition-colors">
                elsonbenanzal@gmail.com
              </a>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <a href="https://linkedin.com/in/elson-benanzal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/elsonbenanzal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <a href="https://leetcode.com/elsonbenanzal" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                  LeetCode
                </a>
                <a href="https://codechef.com/users/elsonbenanzal" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                  CodeChef
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                    className={`w-full border-b py-2 focus:outline-none transition-colors duration-200 bg-transparent text-slate-800 placeholder-slate-300 font-sans text-sm md:text-base ${
                      formErrors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-slate-950'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                    className={`w-full border-b py-2 focus:outline-none transition-colors duration-200 bg-transparent text-slate-800 placeholder-slate-300 font-sans text-sm md:text-base ${
                      formErrors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-slate-950'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formValues.message}
                    onChange={handleInputChange}
                    disabled={loading}
                    placeholder="Write details here..."
                    className={`w-full border-b py-2 focus:outline-none transition-colors duration-200 bg-transparent text-slate-800 placeholder-slate-300 font-sans text-sm md:text-base resize-none ${
                      formErrors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-slate-950'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-xs text-red-500 font-medium flex items-center gap-1">
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
                      className="flex items-center gap-2 text-sm font-bold text-green-600 bg-green-50 border border-green-100 rounded-lg px-4 py-3"
                    >
                      <CheckCircle size={16} />
                      <span>Message sent. Thank you!</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
                    >
                      <AlertCircle size={16} />
                      <span>Failed to send. Please check coordinates.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-950 px-6 py-3.5 rounded-full shadow-sm disabled:opacity-50 transition-colors duration-200 mt-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={15} />
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
