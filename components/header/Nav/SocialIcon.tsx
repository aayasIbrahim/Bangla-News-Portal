import Link from "next/link";
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialIcons: React.FC = () => (
  <div className="flex items-center justify-center space-x-3 text-gray-500">
    <Link
      href="https://www.facebook.com/profile.php?id=61580525746851&rdid=4ZQJckp4cVdkdZxF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Mqzv3wXUC%2F#"
      aria-label="Facebook"
      className="hover:text-blue-600 transition"
      target="_blank"
    >
     <FaFacebookF  size={25} className="text-blue-600" />
    </Link>

    <Link
      href="https://www.youtube.com/@tsbvisionnews"
      aria-label="YouTube"
      className="hover:text-red-600 transition"
      target="_blank"
    >
     <FaYoutube  size={25} className="text-red-600" />
    </Link>

    <Link
      href="https://www.instagram.com/yourprofile"
      aria-label="Instagram"
      className="hover:text-pink-500 transition"
      target="_blank"
    >
      <FaInstagram  size={25} className="text-pink-600" />
    </Link>

    <Link
      href="https://wa.me/+8801929450836"
      aria-label="WhatsApp"
      className="hover:text-green-600 transition"
      target="_blank"
    >
     
       <IoLogoWhatsapp size={28} className="text-green-500" />
    </Link>
  </div>
);

export default SocialIcons;
