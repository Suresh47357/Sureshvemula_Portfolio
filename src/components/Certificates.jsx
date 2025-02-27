import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cert1 from '../assets/ResearchPaper_certificates.jpg'
import cert2 from '../assets/rice_uni_cert.jpg'
import cert3 from '../assets/welfare_coertificate.jpg'
import cert4 from '../assets/ibm_cert.jpg'
import cert5 from '../assets/linkedin_cert_page-0001.jpg'
import cert6 from '../assets/infosys_cert_page-0001.jpg'
import { div } from "framer-motion/client";
import{motion} from 'framer-motion'

const certificates = [
  {
    title: "Certificate 1",
    description: "This is the description for certificate 1.",
    imageUrl: cert1
  },
  {
    title: "Certificate 2",
    description: "This is the description for certificate 2.",
    imageUrl: cert5
  },
  {
    title: "Certificate 3",
    description: "This is the description for certificate 3.",
    imageUrl: cert3
  },
  {
    title: "Certificate 4",
    description: "This is the description for certificate 3.",
    imageUrl: cert6
  },
  {
    title: "Certificate 4",
    description: "This is the description for certificate 3.",
    imageUrl: cert2
  },
  {
    title: "Certificate 4",
    description: "This is the description for certificate 3.",
    imageUrl: cert4
  }
];

const CertificateSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false, // Disabling default arrows
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="border-y-2  border-neutral-800 w-full p-4 h-auto">
      <div className="max-w-4xl mx-auto py-8 h-auto">
        <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-50}}
         transition={{duration:1.5}}
        className="text-white font-light text-4xl text-center my-6">Certificates</motion.h1>
      <Slider ref={sliderRef} {...settings}>
        {certificates.map((cert, index) => (
          <div key={index} className="relative group">
            <div className="bg-white  rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-[600px]  rounded-lg mb-4"
              />
              </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center ">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-gray-700 text-white p-2 rounded-full mr-4"
        >
          Previous
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-gray-700 text-white p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default CertificateSlider;
