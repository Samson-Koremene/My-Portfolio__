"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // or "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast'; // Only react-hot-toast import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, Mail, User, MessageSquare } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

const SERVICE_ID = "service_8rcdqe7";
const TEMPLATE_ID = "template_b8o9w1r";
const USER_ID = "kyc5BKECXPS4jQK8a";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // 1) init EmailJS once
  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    console.log("Submitting form:", e.currentTarget);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget
      );
      console.log("EmailJS result:", result);

      // EmailJS success is usually indicated by result.status === 200 or result.text === 'OK'
      if (result.status === 200 || result.text === "OK") {
        console.log("About to show success toast"); // Debug log
        toast.success('Message sent successfully! We will get back to you shortly.', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#1E293B', // Dark gray background like your cards
            color: '#fff',
            border: '1px solid #374151', // Gray border
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)', // Blue shadow
            borderLeftColor: '#3B82F6', // Blue accent border
            borderLeftWidth: '4px',
          },
          iconTheme: {
            primary: '#3B82F6', // Blue icon
            secondary: '#fff',
          },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log(
          "Email failed with status:",
          result.status,
          "text:",
          result.text
        ); // Debug log
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#1E293B', // Dark gray background like your cards
            color: '#fff',
            border: '1px solid #374151', // Gray border
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.3)', // Red shadow for errors
            borderLeftColor: '#EF4444', // Red accent border for errors
            borderLeftWidth: '4px',
          },
          iconTheme: {
            primary: '#EF4444', // Red icon for errors
            secondary: '#fff',
          },
        });
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error('Oops! Something went wrong. Please check your connection and try again.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#1E293B', // Dark gray background like your cards
          color: '#fff',
          border: '1px solid #374151', // Gray border
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.3)', // Red shadow for errors
          borderLeftColor: '#EF4444', // Red accent border for errors
          borderLeftWidth: '4px',
        },
        iconTheme: {
          primary: '#EF4444', // Red icon for errors
          secondary: '#fff',
        },
      });
    } finally {
      setLoading(false); // Set loading to false when submission ends (success or failure)
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black flex justify-center items-center py-20 px-4">
      <RevealOnScroll>
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Let's collaborate and bring your ideas to life. Send me a message
              and I'll get back to you soon.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={16} />
                  Full Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  required
                  disabled={loading}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20 h-12 rounded-lg"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                  disabled={loading}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20 h-12 rounded-lg"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <MessageSquare size={16} />
                  Message
                </label>
                <Textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                  disabled={loading}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className={`w-full h-12 rounded-lg font-semibold text-base transition-all duration-200 ${
                  loading ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25"
                }`}
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-center text-gray-400 text-sm">
                Prefer email? Reach out directly at{" "}
                <a
                  href="mailto:daeviz15felix@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  daeviz15felix@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      
      {/* Toast Container */}
      <Toaster />
    </section>
  );
};

export default Contact;