import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Contact = () => {
  
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
          Accept: "application/json"
        },
        body: json
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
    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-6xl">
      {/* Toast Container for notifications */}
      <ToastContainer />
      
      <div>
        <h1 className="text-grey text-4xl font-bold">
          <span className="text-purple">Support</span> and <span className="text-purple">Feedbacks</span>
        </h1>
        <p className="text-sm text-grey mt-4">
          We appreciate to hear your feedback. And your support is a lot to us to publish MyGPA in Google PlayStore
        </p>

        <div className="mt-12">
          <h2 className="text-grey text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple hover:scale-105 transition-all duration-300 ease-in-out shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#8471BE'
                  viewBox="0 0 479.058 479.058" className="transition-transform duration-300 ease-in-out">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
              </div>

              <a href="javascript:void(0)" className="text-purple text-sm ml-4">
                <small className="block">Mail</small>
                <strong>sineth21404@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Check our Github Repository...</h2>

          <ul className="flex mt-4 space-x-4">
            <li className="bg-white h-10 w-10 rounded-full flex items-center justify-center hover:shadow-purple hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out shrink-0">
              <a href="https://github.com/Darkhenrhal/MyGPA.git" target="_blank">
                <FaGithub className="text-2xl text-purple transition-transform duration-300 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form className="ml-auto space-y-4" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-grey-100 text-grey text-sm outline-purple focus:bg-transparent" />
        <input type="email" name="email" placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-grey-100 text-grey text-sm outline-purple focus:bg-transparent" />
        <input type="text" name="subject" placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-grey-100 text-grey text-sm outline-purple focus:bg-transparent" />
        <textarea name="message" placeholder="Message" rows="6"
          className="w-full rounded-md px-4 bg-grey-100 text-grey text-sm pt-3 outline-purple focus:bg-transparent"></textarea>
        <button type="submit"
          className="bg-grey hover:bg-black text-greylight font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-200 active:scale-95">
          Send&nbsp; <IoIosSend />
        </button>
      </form>
    </div>
  );
};

export default Contact;
