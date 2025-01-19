import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = formData;

    const url = "https://script.google.com/macros/s/AKfycbyOKbmkmyMZzNjJgQR_HIBYqEtuintBsc_sczMrLKj_Mm-wZVJWrp96rmja9RJO0Milmw/exec";
    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch(url, {
        method: "Post",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      });
      const result = await response.json();
      setResponseMessage("Your message has been sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("There was an error sending your message");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        {" "}
        I'd love to hear from you! If you have any questions, comments, or
        feedback,please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></motion.textarea>
        {responseMessage&&<p className="text-center text-sm text-gray-700">{responseMessage}</p>}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          disabled={isSubmitting}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          {isSubmitting ? "Submitting..." : "send Message"}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
