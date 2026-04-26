"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE - FORM */}
        <div>
          <h2 className="text-4xl md:text-6xl font-light mb-10 tracking-widest">
            <span className="text-[#d6c29f]">CONTACT</span> US
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Phone No."
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm mb-2 text-white/70">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d6c29f] transition"
              />
            </div>

            <button
              type="submit"
              className="bg-[#d6c29f] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - CONTACT DETAILS */}
        <div className="flex flex-col justify-center space-y-10">

          <ContactDetail
            icon={<PhoneIcon className="w-6 h-6" />}
            title="Phone"
            text="+91 9188330605"
          />

          <ContactDetail
            icon={<EnvelopeIcon className="w-6 h-6" />}
            title="Email"
            text=" edamdesignstudio.eds@gmail.com"
          />

          <ContactDetail
            icon={<MapPinIcon className="w-6 h-6" />}
            title="Address"
            text="Vattiyoorkkav Puliyarakkonam Rd,Puliyarakonam, Vilappil, Kerala 695573"
          />

        </div>

      </div>
    </section>
  );
}

/* Reusable Input Field */
function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-white/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d6c29f] transition"
      />
    </div>
  );
}

/* Contact Detail Block */
function ContactDetail({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#d6c29f]">{icon}</div>
      <div>
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-white/70 mt-1">{text}</p>
      </div>
    </div>
  );
}
