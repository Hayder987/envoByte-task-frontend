import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";

const FooterForm = () => {

    const formHandler = e =>{
        e.preventDefault()
        const form = e.target;
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent!",
            showConfirmButton: false,
            timer: 1500
          });
        form.reset()
    }

  return (
    <div>
      <form onSubmit={formHandler} className="text-white flex flex-col gap-6">
        {/*name & email  */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* name */}
          <div className="flex flex-col w-full">
            <label className="mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="border p-2 w-full rounded-md border-blue-900 bg-[#0A2C8C33]"
              required
              placeholder="Your Name"
            />
          </div>
          {/* email */}
          <div className="flex flex-col w-full">
            <label className="mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="border p-2 rounded-md border-blue-900 bg-[#0A2C8C33]"
              required
              placeholder="envobyte@gmail.com"
            />
          </div>
        </div>

        {/*Phone & Company  */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Phone */}
          <div className="flex flex-col w-full">
            <label className="mb-2">Phone</label>
            <input
              type="text"
              name="Phone"
              className="border p-2 w-full rounded-md border-blue-900 bg-[#0A2C8C33]"
              required
              placeholder="+8801771814597"
            />
          </div>
          {/* Company */}
          <div className="flex flex-col w-full">
            <label className="mb-2">Company</label>
            <input
              type="Text"
              name="company"
              className="border p-2 rounded-md border-blue-900 bg-[#0A2C8C33]"
              required
              placeholder="envoByte"
            />
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col w-full">
          <label className="mb-2">Message</label>
          <textarea
            required
            name="message"
            placeholder="Type your message here..."
            rows={3}
            cols={5}
            className="border p-2 resize-none rounded-md border-blue-900 bg-[#0A2C8C33]"
          ></textarea>
        </div>
        {/* submit */}
        <div className="">
          <button
            type="submit"
            className="flex items-center cursor-pointer gap-2 border py-2 px-4 rounded-md border-blue-900 bg-[#0A2C8C33]"
          >
            Send message
            <span className="">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
