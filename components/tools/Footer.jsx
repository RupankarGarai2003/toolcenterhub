
import "../Styles/Footer.css";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-dark">

      {/* MAIN */}
      <div className="footer-main">

        {/* COMPANY */}
        <div className="footer-col">
          <h3>ToolsCenterHub</h3>
          <p>
            Free online tools for images, PDFs, and developers.
            Fast, secure, and easy to use.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>Products</h4>
          <Link href="#">Image Tools</Link>
          <Link href="#">PDF Tools</Link>
          <Link href="#">Developer Tools</Link>
          <Link href="#">Converters</Link>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <Link href="/about-us">About</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/help">Help</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/blog">Blogs</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>

          <p>
            <MapPin size={14} />
            India
          </p>

          <p>
            <Mail size={14} />
            <a href="mailto:support@toolscenterhub.com">
              support@toolscenterhub.com
            </a>
          </p>

          <p>
            <Phone size={14} />
            <a href="tel:+918391808784">
              +91 8391808784
            </a>
          </p>

          <p>
            <Phone size={14} />
            <a href="tel:+917679109146">
              +91 7679109146
            </a>
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ToolsCenterHub. All rights reserved.
      </div>

    </footer>
  );
}