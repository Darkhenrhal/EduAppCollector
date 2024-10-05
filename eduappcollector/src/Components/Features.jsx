import React from "react";
import { RiProhibited2Line } from "react-icons/ri";
import { TbFreeRights } from "react-icons/tb";



const Features = () => {
    return(
        <section class="max-w-6xl mx-auto">
            <h2 class="sm:text-4xl text-2xl md:text-5xl font-bold text-center mb-16 text-grey"><span className="text-purple font-extrabold">Features</span> You get</h2>

            <div class="grid mb-14 lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
                <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12 bg-greylight p-3 rounded-lg shrink-0" viewBox="0 0 32 32">
                        <RiProhibited2Line className="text-3xl text-grey" />
                </svg>
                <div>
                    <h3 class="text-black text-xl font-semibold mb-3">Ad-Free & Open Source</h3>
                    <p class="text-grey text-sm">Enjoy a clean, distraction-free experience with no ads. Our open-source code ensures full transparency, with zero privacy or security concerns.</p>
                </div>
                </div>

                <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12 bg-greylight p-3 rounded-lg shrink-0" viewBox="0 0 682.667 682.667">
                    <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                    </defs>
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                    <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                    </g>
                </svg>
                <div>
                    <h3 class="text-black text-xl font-semibold mb-3">Customizable Grading Scale</h3>
                    <p class="text-grey text-sm">Tailor your GPA calculations to match your institution's grading system. MyGPA enables you to customize grading scales, so you can accurately reflect your academic performance based on your specific requirements.</p>
                </div>
                </div>

                <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12 bg-greylight p-3 rounded-lg shrink-0" viewBox="0 0 512.001 512.001">
                    <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
                </svg>
                <div>
                    <h3 class="text-black text-xl font-semibold mb-3">Inbuilt Database for Offline Usage</h3>
                    <p class="text-grey text-sm">No internet? No problem! MyGPA features an inbuilt database that allows you to use the app offline. You can track your GPA anytime, anywhere, without worrying about connectivity.</p>
                </div>
                </div>

                <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12 bg-greylight p-3 rounded-lg shrink-0" viewBox="0 0 32 32">
                        <TbFreeRights className="text-4xl text-grey" />

                </svg>
                <div>
                    <h3 class="text-black text-xl font-semibold mb-3">Free</h3>
                    <p class="text-grey text-sm">MyGPA is completely free for all users. There are no hidden fees or subscriptions, just a straightforward tool to help you manage your academic success.</p>
                </div>
                </div>

                <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12 bg-greylight p-3 rounded-lg shrink-0" viewBox="0 0 682.667 682.667">
                    <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                    </defs>
                    <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="30" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30" data-original="#000000" />
                    </g>
                </svg>
                <div>
                    <h3 class="text-black text-xl font-semibold mb-3">From Community for Community</h3>
                    <p class="text-grey text-sm">MyGPA thrives on community contributions and feedback, ensuring it meets the needs of its users. Join the movement and help improve the app!</p>
                </div>
                </div>
            </div>
        </section>
    );

}

export default Features;
