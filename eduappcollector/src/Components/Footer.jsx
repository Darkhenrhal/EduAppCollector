import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { toast } from "react-toastify"; // Make sure you have this import

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a75430a1-81fb-43c8-add5-20bcb10f7aa3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!");
        event.target.reset(); // Clear the form fields
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="font-sans tracking-wide bg-grey py-12 px-16">
      <div className="grid max-md:grid-cols-1 lg:grid-cols-2 gap-20">
        <section>
          <h4 className="text-greylight font-bold text-lg">About Us</h4>
          <p className="text-sm mt-6 mb-12 text-greylight text-justify">
            At MyGPA, we believe that education should be accessible, ad-free, and powered by the community. As a free and open-source app store, we are dedicated to providing students with high-quality, open-source educational tools that are easy to use, secure, and completely free.
          </p>
          <h4 className="text-greylight font-bold text-lg">Contact</h4>

          <ul className="grid mt-6 sm:grid-cols-2 gap-2">
            <li className="flex items-center max-sm:mb-8">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaPhone className="text-1xl text-greylight" />
              </div>
              <a href="tel:+94701731320" className="text-gray-100 text-sm ml-4" aria-label="Phone Number">
                <small className="block">Tel</small>
                <strong>+94-70-173-1320</strong>
              </a>
            </li>
            <li className="flex items-center">
              <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <IoMail className="text-2xl text-greylight" />
              </div>
              <a href="mailto:sineth21404@gmail.com" className="text-gray-100 text-sm ml-4" aria-label="Email Address">
                <small className="block">Mail</small>
                <strong>sineth21404@gmail.com</strong>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-gray-100 font-bold text-lg">For Collaboration</h4>
          <p className="text-sm mt-6 text-gray-300 text-justify">
            We’re on a mission to build the largest free and open-source app store for educational tools. Whether you're a developer, educator, or simply passionate about open-source projects, we welcome your collaboration.
          </p>

          <form onSubmit={onSubmit} className="bg-[#343538] flex px-2 py-1 rounded-full mt-12">
            <input
              type='email'
              name="email"
              placeholder='Enter your email'
              className="w-full outline-none text-gray-300 text-sm bg-[#343538] pl-4 placeholder:text-greylight transition-all duration-200"
              required
              aria-label="Email Input"
            />
            <button
              type='submit'
              className="bg-gray-100 hover:bg-white transition-all text-grey font-semibold text-sm rounded-full px-5 py-2 ml-4"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
