export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerCenter">
        <div className="footerCopy">
          © 2025 TynecXio — All Rights Reserved
        </div>

        <nav className="footerNav">
          <a href="#home">Home</a>
          <span>•</span>
          <a href="#services">Services</a>
          <span>•</span>
          <a href="#about">About</a>
          <span>•</span>
          <a href="#packages">Packages</a>
          <span>•</span>
          <a href="#portfolio">Portfolio</a>
          <span>•</span>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footerMeta">
          <div>📧 career@tynecxio.com</div>
          <div>🌍 Working with clients worldwide</div>
        </div>
      </div>
    </footer>
  );
}
