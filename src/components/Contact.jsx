import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle2, Copy, Check, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Github, Linkedin } from './BrandIcons';
import Magnetic from './Magnetic';

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
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('elsonaron54@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          colors: ['#a78bfa', '#06b6d4', '#6366f1']
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
            colors: ['#a78bfa', '#06b6d4', '#6366f1']
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
    <section id="contact" className="bg-white px-6 md:px-12 py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column - Details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2563EB] block mb-3 uppercase">
              // 08 / COLLABORATION GATEWAY
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-[#0F172A] uppercase leading-none mb-6">
              GET IN TOUCH
            </h2>
            <div className="h-[2px] bg-[#2563EB]/50 w-24 my-6" />
            <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-widest leading-relaxed mb-8 max-w-sm">
              I am open to engineering roles, research cooperation, and advanced ML pipelines. Connect via email or social platforms.
            </p>

            <div className="flex flex-col gap-6 border-t border-slate-200 pt-8 mt-2">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-widest">
                  Direct Channel
                </span>

                {/* Magnetic copy wrapper */}
                <div className="flex items-center gap-3">
                  <span className="text-lg md:text-xl font-bold text-[#0F172A] font-sans">
                    elsonaron54@gmail.com
                  </span>

                  <Magnetic range={40} strength={0.3}>
                    <button
                      onClick={copyEmailToClipboard}
                      className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 rounded-full transition-all border border-slate-200 cursor-pointer flex items-center justify-center"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    </button>
                  </Magnetic>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <a
                  href="www.linkedin.com/in/elson-benanzal-7451b129a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#64748B] hover:text-[#2563EB] uppercase tracking-wider transition-colors duration-250"
                >
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Elson18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#64748B] hover:text-[#2563EB] uppercase tracking-wider transition-colors duration-250"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/Elson18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#64748B] hover:text-[#2563EB] uppercase tracking-wider transition-colors duration-250"
                >
                  LeetCode
                </a>
                <a
                  href="https://codechef.com/users/elson18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#64748B] hover:text-[#2563EB] uppercase tracking-wider transition-colors duration-250"
                >
                  CodeChef
                </a>
              </div>

              {/* Resume download button */}
              <div className="mt-4">
                <Magnetic range={50} strength={0.25}>
                  <a
                    href="/assets/Elson_Benanzal_Resume.pdf"
                    download="Elson_Benanzal_Resume.pdf"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#0F172A] bg-slate-50 border border-slate-200 hover:bg-slate-900 hover:text-white px-6 py-3.5 rounded-full transition-all duration-300 shadow-md"
                  >
                    <Download size={13} className="text-[#2563EB]" />
                    <span>Download CV</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-100/40">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    disabled={loading}
                    placeholder="Name"
                    className={`w-full bg-slate-50 border rounded-xl py-3.5 px-4 focus:outline-none focus:ring-1 transition-all text-[#0F172A] placeholder-slate-400 font-sans text-sm ${formErrors.name
                      ? 'border-red-500/50 focus:border-red-400 focus:ring-red-400'
                      : 'border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]'
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
                  <label htmlFor="email" className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-widest">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    placeholder="name@example.com"
                    className={`w-full bg-slate-50 border rounded-xl py-3.5 px-4 focus:outline-none focus:ring-1 transition-all text-[#0F172A] placeholder-slate-400 font-sans text-sm ${formErrors.email
                      ? 'border-red-500/50 focus:border-red-400 focus:ring-red-400'
                      : 'border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]'
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
                  <label htmlFor="message" className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-widest">
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
                    className={`w-full bg-slate-50 border rounded-xl py-3.5 px-4 focus:outline-none focus:ring-1 transition-all text-[#0F172A] placeholder-slate-400 font-sans text-sm resize-none ${formErrors.message
                      ? 'border-red-500/50 focus:border-red-400 focus:ring-red-400'
                      : 'border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]'
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
                      className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      <span>MESSAGE SENT SUCCESSFULLY. THANK YOU.</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={14} className="text-red-600" />
                      <span>TRANSMISSION ERROR. PLEASE RETRY.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <div className="w-full mt-2">
                  <Magnetic range={50} strength={0.2} className="w-full">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 px-6 py-4.5 rounded-full shadow-lg disabled:opacity-50 transition-colors duration-250 cursor-pointer"
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
                  </Magnetic>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
