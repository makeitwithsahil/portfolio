import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Reusable Input Field Component (outside ContactSection)
const InputField = ({ id, label, value, onChange, isTextarea = false, error }) => (
  <div className="relative w-full group">
    <motion.div
      animate={{
        boxShadow: ['0 0 0px #A87A58', '0 0 8px #C69A6D', '0 0 0px #A87A58'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="w-full p-[1px] bg-gradient-to-r from-[#A87A58] to-[#C69A6D] rounded-xl"
    >
      <div className="relative bg-[#1D2A23] p-4 rounded-xl">
        {isTextarea ? (
          <textarea
            id={id}
            name={id}
            rows="4"
            value={value}
            onChange={onChange}
            placeholder={label}
            required
            aria-labelledby={id}
            className="w-full bg-transparent text-[#E1DBCC] placeholder-[#CED3D3] focus:outline-none resize-none peer transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#A87A58] autofill-bg"
          />
        ) : (
          <input
            type={id === 'email' ? 'email' : 'text'}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={label}
            required
            aria-labelledby={id}
            className="w-full bg-transparent text-[#E1DBCC] placeholder-[#CED3D3] focus:outline-none peer transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#A87A58] autofill-bg"
          />
        )}
      </div>
    </motion.div>
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message cannot be empty';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meogkaal', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccessMessage('There was an issue sending your message, please try again!');
      }
    } catch (error) {
      setSuccessMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Autofill Background Fix with Feature Style
  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        setTimeout(() => {
          input.classList.add('autofill-active'); // Apply autofill feature styling
        }, 10);
      });
      input.addEventListener('blur', () => {
        input.classList.remove('autofill-active'); // Remove autofill styling after blur
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', () => {
          setTimeout(() => {
            input.classList.add('autofill-active');
          }, 10);
        });
        input.removeEventListener('blur', () => {
          input.classList.remove('autofill-active');
        });
      });
    };
  }, []);

  return (
    <section id="contact" className="bg-[#E1DBCC] text-[#1D2A23] py-20 px-6 md:px-20 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-[#A87A58]"
      >
        Contact <span className="text-[#C69A6D]">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#38483F] text-[#E1DBCC] p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#C69A6D]">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              id="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              id="email"
              label="Your Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              id="message"
              label="Your Message"
              value={formData.message}
              onChange={handleChange}
              isTextarea
              error={errors.message}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#A87A58] text-[#E1DBCC] font-bold rounded-lg hover:bg-[#1D2A23] hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {/* Success message after form submission */}
          {successMessage && (
            <p className="text-lg text-center text-[#A87A58] mt-4">{successMessage}</p>
          )}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-10"
        >
          <h3 className="text-2xl font-semibold text-[#A87A58]">Find Me On</h3>
          <div className="flex space-x-6">
            {[{
              icon: <FaGithub size={30} />,
              href: 'https://github.com/makeitwithsahil/About-Me',
            }, {
              icon: <FaLinkedin size={30} />,
              href: 'https://www.linkedin.com/in/sahil-maurya-525579260/',
            }, {
              icon: <FaTwitter size={30} />,
              href: 'https://twitter.com/makeitwithsahil',
            }].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, repeatType: 'loop', duration: 3 }}
                className="text-[#A87A58] hover:text-[#1D2A23] transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          <a
            href="https://sahilmaurya.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border px-6 py-2 border-2 border-transparent text-[#A87A58] rounded-full hover:bg-[#A87A58] hover:text-[#1D2A23] transition-all duration-300"
          >
            All Social Links
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
