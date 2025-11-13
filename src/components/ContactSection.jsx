import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Clock,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactSection (){
  const { toast: shadowToast } = useToast();
  const [state, handleSubmit] = useForm("xldlgnwl");
  const formRef = useRef(null);
  const [ref, inView] = useInView();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  // Client-side validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    
    return errors;
  };

  // Custom submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      handleSubmit(e);
    } else {
      toast.error('Please fix the form errors before submitting');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Copy to clipboard functions
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast.success(`${type === 'email' ? 'Email' : 'Phone Number'} copied to clipboard!`);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    }
    if (!state.submitting && state.errors && state.errors.length > 0) {
      toast.error('Failed to send message. Please try again.');
    }
  }, [state.succeeded, state.errors, state.submitting]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" ref={ref} className={`py-24 px-4 relative bg-secondary/30 section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-5xl z-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto ">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
          
          {/* Availability Status */}
          <motion.div
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Open to Job Opportunities
          </motion.div>
          
          <motion.p
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Clock className="inline w-4 h-4 mr-1" />
            Typically responds within 24 hours
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-card border border-border/50 group hover:border-primary/20 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0"> {/* min-w-0 allows flex child to shrink */}
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:simerdeepsingh567@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors block break-all text-sm sm:text-base"
                  >
                    simerdeepsingh567@gmail.com
                  </a>
                </div>
                <motion.button
                  onClick={() => copyToClipboard('simerdeepsingh567@gmail.com', 'email')}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                </motion.button>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-card border border-border/50 group hover:border-primary/20 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+917455897944"
                    className="text-muted-foreground hover:text-primary transition-colors block text-sm sm:text-base"
                  >
                    +91 7455897944
                  </a>
                </div>
                <motion.button
                  onClick={() => copyToClipboard('+917455897944', 'phone')}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                </motion.button>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-card border border-border/50 group hover:border-primary/20 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Agra, Uttar Pradesh, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div className="pt-8" variants={itemVariants}>
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex items-center justify-center space-x-4">
                {[
                  { 
                    icon: Linkedin, 
                    href: "https://www.linkedin.com/in/simerdeep-singh-gandhi/", 
                    label: "LinkedIn", 
                    brandColor: "#0077B5"
                  },
                  { 
                    icon: Twitter, 
                    href: "https://x.com/simerdeep4848", 
                    label: "Twitter", 
                    brandColor: "#1DA1F2"
                  },
                  { 
                    icon: Github, 
                    href: "https://github.com/SimerdeepSingh4", 
                    label: "GitHub", 
                    brandColor: "#5b6abf"
                  },
                ].map((social, index) => {
                  const [isHovered, setIsHovered] = useState(false);
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} profile`}
                      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 text-muted-foreground transition-all duration-300 group hover:border-primary/20"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <social.icon 
                        size={18} 
                        className="transition-all duration-300 group-hover:scale-110" 
                        style={{
                          color: isHovered ? social.brandColor : 'inherit',
                          filter: isHovered ? 
                            `drop-shadow(0 0 6px ${social.brandColor}) drop-shadow(0 0 12px ${social.brandColor}40) brightness(1.2)` : 
                            'none',
                          transition: 'all 0.3s ease'
                        }}
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                        {social.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-card p-8 rounded-lg shadow-xs border border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-semibold">Send a Message</h3>
                {state.succeeded && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-500"
                  >
                    <CheckCircle size={20} />
                  </motion.div>
                )}
              </div>

              <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                      formErrors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-input"
                    )}
                    placeholder="e.g., Enter your name"
                  />
                  {formErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {formErrors.name}
                    </motion.p>
                  )}
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                      formErrors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-input"
                    )}
                    placeholder="e.g., you@example.com"
                  />
                  {formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {formErrors.email}
                    </motion.p>
                  )}
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary resize-none",
                      formErrors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-input"
                    )}
                    placeholder="I'd like to discuss a potential collaboration opportunity..."
                  />
                  {formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {formErrors.message}
                    </motion.p>
                  )}
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <div className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 relative overflow-hidden",
                    state.submitting && "opacity-70 cursor-not-allowed"
                  )}
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                >
                  {state.submitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
