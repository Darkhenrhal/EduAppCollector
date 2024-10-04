import Hero from "./Hero";
import Navbar from "./Navbar";



const Page = () => {
    return (
      <main className="overflow-x-hidden h-screen bg-white text-dark">
        <Navbar/>
        <div id="hero"><Hero className="z-1" /></div> 
        {/* <div id="subscribe"><Subscribe /></div> 
        <div id="services"><Services /></div> 
        <div id="banner2"><Banner2 /></div>
        {/* <div id="banner"><Banner /></div> ]
        <div id="contact"><Contact /></div> 
        <Footer /> */}
      </main>
    );
  };
  
  export default Page;