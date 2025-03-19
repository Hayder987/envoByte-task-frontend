import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const faqs = [
  { id: 1, question: "What Is Included In Your Web Development Service?", answer: "Our web development service includes frontend and backend development, UI/UX design, SEO optimization, and ongoing maintenance." },
  { id: 2, question: "What Technologies Do You Use For Web Development?", answer: "We use modern technologies such as React, Node.js, MongoDB, Tailwind CSS, and Firebase to ensure your website is scalable, secure, and responsive." },
  { id: 3, question: "What If I Need Ongoing Support After The Website Is Launched?", answer: "We provide ongoing support, including bug fixes, performance optimization, and feature enhancements based on client needs." },
  { id: 4, question: "Can I Customize My Website According To My Business Needs?", answer: "Yes! We offer fully customized web solutions tailored to your specific business requirements and branding." },
  { id: 5, question: "Do You Offer SEO Services As Part Of Your Web Development?", answer: "Yes, we provide SEO-friendly development, including keyword optimization, fast loading times, and mobile responsiveness." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="max-w-[800px] mx-auto mt-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          className="border-y border-gray-300 p-4 mb-3 rounded-lg shadow-sm bg-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex items-center gap-4">
              <motion.span
                className="text-blue-500 font-bold text-lg"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                {String(index + 1).padStart(2, "0")}.
              </motion.span>
              <h3 className={`text-lg font-semibold transition-all ${openIndex === index ? "text-blue-800" : "text-gray-800"}`}>
                {faq.question}
              </h3>
            </div>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
              {openIndex === index ? <RxCross2 className="text-blue-600 text-xl" /> : <FaPlus className="text-gray-500 text-lg" />}
            </motion.div>
          </div>

          {openIndex === index && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-gray-600 leading-relaxed overflow-hidden"
            >
              {faq.answer}
            </motion.p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Faq;
