import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (<nav className="  flex items-center justify-between py-6">
    <div className="text-5xl text-gray-200 font-semibold pl-6 pr-12">VSK</div>
    <div className="flex justify-around items-center gap-4 text-3xl text-gray-200 pr-4">
      <a href="https://www.linkedin.com/in/suresh-kumar-vemula-242235250" target="_blank"><FaLinkedin />
      </a>
      <a href="https://github.com/Suresh47357" target="_blank"><FaGithub />
      </a>
      <a href="https://www.instagram.com/suresh.vemula_/" target="_blank"><FaInstagram />
      </a>
      <a href="https://x.com/@surivemula3" target="_blank"><FaSquareXTwitter />
      </a>
    </div>
  </nav>)
}

export default Navbar
