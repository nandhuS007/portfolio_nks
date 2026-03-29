import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // clear error for that field
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('sending');

      try {
        const response = await fetch("https://formsubmit.co/ajax/nandhanandha2426@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
          }),
        });

        const result = await response.json();

        if (result.success === "true" || response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(''), 5000);
        } else {
          console.error("Form error:", result);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
        }
      } catch (error) {
        console.error("Submit error:", error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">Leave a message and I'll get back to you soon.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 glass-dark p-8 md:p-12 rounded-3xl border border-white/5 shadow-glass w-full"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's talk about everything!</h3>
            <p className="text-slate-400 mb-8">
              Don't like forms? Send me an email. 👋
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <span className="p-4 bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/20">
                  <Mail size={24} />
                </span>
                <div>
                  <h4 className="text-slate-300 font-medium">Email Me</h4>
                  <p className="text-accent-cyan cursor-pointer hover:underline transition-all hover:shadow-neon-cyan"><a href="mailto:nandhanandha2426@gmail.com">nandhanandha2426@gmail.com</a></p> 
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                <p className="w-full text-slate-400 font-semibold uppercase tracking-widest text-sm mb-2 block">Social Links</p>
                <div className="flex gap-4 cursor-pointer w-full">
                  <a href="https://www.linkedin.com/in/nandhakumar-s-ab129b301" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-accent-purple/20 text-slate-300 hover:text-accent-purple border border-white/10 hover:border-accent-purple/50 rounded-full transition-all">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://github.com/nandhuS007" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/20 text-slate-300 hover:text-white border border-white/10 hover:border-white/50 rounded-full transition-all">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6 glass-dark p-8 md:p-12 rounded-3xl border border-white/5 h-full">
              
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-slate-400 font-semibold" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-accent-cyan'} text-white p-4 rounded-xl outline-none transition-colors duration-300`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-slate-400 font-semibold" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-accent-purple'} text-white p-4 rounded-xl outline-none transition-colors duration-300`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-slate-400 font-semibold" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-accent-pink'} text-white p-4 rounded-xl outline-none transition-colors duration-300 resize-none`}
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-purple hover:to-accent-cyan text-white font-bold rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-neon-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white relative rounded-full" />
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </button>
              
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-sm text-center font-medium mt-4"
                  >
                    Your message has been sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm text-center font-medium mt-4"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
