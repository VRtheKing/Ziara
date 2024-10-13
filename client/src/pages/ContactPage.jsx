import { useState } from "react";
import axios from "axios";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("All fields must be filled.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      clearForm();
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="bg-muted py-12 md:py-20 lg:py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-6 md:px-0 px-3">
              <div className="space-y-4">
                <h2 className="text-3xl text-customeRed font-bold md:text-4xl">
                  Contact Us
                </h2>
                <p className="text-gray-500 md:text-lg">
                  Have inquiries or want to collaborate? Fill out the form or
                  reach out using the information below.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="h-6 w-6 text-customeRed" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      Sri Eshwar College of Engineering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="h-6 w-6 text-customeRed" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">123-456-7990</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="h-6 w-6 text-customeRed" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <Link href="#" prefetch={false}>
                        contact@ziara.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-background shadow-lg">
              <form className="rounded-lg p-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-1 p-2 w-full border rounded"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1 p-2 w-full border rounded"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 w-full border rounded"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 p-2 w-full border rounded"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Subject</label>
                  <div className="block md:flex md:flex-wrap space-y-2 md:space-y-0 mt-2">
                    <label className="flex items-center mb-2 md:mb-0 md:mr-4">
                      <input
                        type="radio"
                        name="subject"
                        value="Inquiry"
                        className="mr-2"
                        onChange={handleChange}
                      />
                      <span>Inquiry</span>
                    </label>
                    <label className="flex items-center mb-2 md:mb-0 md:mr-4">
                      <input
                        type="radio"
                        name="subject"
                        value="Support"
                        className="mr-2"
                        onChange={handleChange}
                      />
                      <span>Support</span>
                    </label>
                    <label className="flex items-center mb-2 md:mb-0 md:mr-4">
                      <input
                        type="radio"
                        name="subject"
                        value="Technical"
                        className="mr-2"
                        onChange={handleChange}
                      />
                      <span>Technical</span>
                    </label>
                    <label className="flex items-center mb-2 md:mb-0 md:mr-4">
                      <input
                        type="radio"
                        name="subject"
                        value="Feedback"
                        className="mr-2"
                        onChange={handleChange}
                      />
                      <span>Feedback</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 p-2 w-full border rounded"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="bg-customeRed w-full text-white px-6 py-2 rounded shadow hover:bg-gray-800"
                >
                  {loading ? (
                    <svg
                      className="animate-spin border-white border-2 rounded-full h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
