import {
  FiMail,
  FiGlobe
} from "react-icons/fi";

import {
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaXTwitter,
  FaPinterest,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">

        {/* Brand Section */}
        <div className="footerCol">
          <div className="footerLogo">TynecXio</div>
          <p className="footerDesc">
            A product-focused digital studio helping startups and businesses
            design, build, and grow modern digital experiences.
          </p>
        </div>

        {/* Services */}
        <div className="footerCol">
          <div className="footerTitle">Services</div>
          <ul>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>E-Commerce</li>
            <li>Mobile App UI</li>
            <li>Brand Identity</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footerCol">
          <div className="footerTitle">Quick Links</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footerContact">
          <div className="contactItem">
            <FiMail className="contactIcon" />
            <span>career@tynecxio.com</span>
          </div>

          <div className="contactItem">
            <FiGlobe className="contactIcon" />
            <span>Working Worldwide</span>
          </div>
        </div>


      </div>

      {/* Social Media */}
      <div className="footerSocial">
        <a href="https://www.linkedin.com/company/110906789/admin/dashboard/"><FaLinkedinIn /></a>
        <a href="https://x.com/tynecxio"><FaXTwitter /></a>
        <a href="https://www.instagram.com/tynecxio/"><FaInstagram /></a>
        <a href="https://www.threads.com/@tynecxio"><FaThreads /></a>
        <a href="https://www.facebook.com/profile.php?id=61585890573503"><FaFacebookF /></a>
        <a href="https://www.youtube.com/@TynecXio"><FaYoutube /></a>
        <a href="https://www.tiktok.com/@tynecxio?_r=1&_t=ZS-93rECbmzZnp"><FaTiktok /></a>
        <a href="https://www.pinterest.com/tynecxio/"><FaPinterest /></a>
      </div>

      {/* Bottom Strip */}
      <div className="footerBottom">
        © 2026 TynecXio. All Rights Reserved.
      </div>
    </footer>
  );
}
