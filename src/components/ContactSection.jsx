import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

export const ContactSection = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xldlgnwl");
  const formRef = useRef(null);
  const [ref, inView] = useInView();

  // Client-side email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Custom submit handler
  const onSubmit = (e) => {
    const form = e.target;
    const email = form.email.value;
    if (!validateEmail(email)) {
      e.preventDefault();
      toast({
        title: "Invalid email address!",
        description: "Please enter a valid email before submitting.",
      });
      return;
    }
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    }
    if (!state.submitting && state.errors && state.errors.length > 0) {
      toast({
        title: "Failed to send message!",
        description: "Please check your input and try again.",
      });
    }
  }, [state.succeeded, state.errors, state.submitting, toast]);


  return (
    <section id="contact" ref={ref} className={`py-24 px-4 relative bg-secondary/30 section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
<div className="flex items-start space-x-4">
  <div className="p-3 rounded-full bg-primary/10">
    <Mail className="h-6 w-6 text-primary" />
  </div>
  <div className="text-left">
    <h4 className="font-medium">Email</h4>
    <a
      href="mailto:simerdeepsingh567@gmail.com"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      simerdeepsingh567@gmail.com
    </a>
  </div>
</div>

<div className="flex items-start space-x-4">
  <div className="p-3 rounded-full bg-primary/10">
    <Phone className="h-6 w-6 text-primary" />
  </div>
  <div className="text-left">
    <h4 className="font-medium">Phone</h4>
    <a
      href="tel:+91 7455897944"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      +91 7455897944
    </a>
  </div>
</div>

<div className="flex items-start space-x-4">
  <div className="p-3 rounded-full bg-primary/10">
    <MapPin className="h-6 w-6 text-primary" />
  </div>
  <div className="text-left">
    <h4 className="font-medium">Location</h4>
    <p className="text-muted-foreground hover:text-primary transition-colors">
      Agra, Uttar Pradesh, India
    </p>
  </div>
</div>

            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/simerdeep-singh-gandhi-5569a7279"
                  target="_blank"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/simerdeep4848" target="_blank" aria-label="Twitter profile">
                  <Twitter />
                </a>
                <a href="https://github.com/SimerdeepSingh4" target="_blank" aria-label="GitHub profile">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Simerdeep Singh"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="e.g., simerdeep@gmail.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="I'd like to discuss a potential collaboration opportunity..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
