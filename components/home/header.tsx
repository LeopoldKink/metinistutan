import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export function Header() {
    return (
        <div className="z-50 text-center">
          <h1 className="text-white text-4xl uppercase mt-8">Metin Istutan</h1>
          <h2 className="text-white text-1xl lowercase mt-4">your video artist</h2>
          <h2 className="text-white text-1xl lowercase mt-4">worked with artists and businesses</h2>
          <h2 className="text-white text-1xl lowercase mt-4">Since 1930</h2>
          <div className="flex justify-center space-x-4 mt-12">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 mt-20" />
            </Link>
            <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 mt-20" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 mt-20" />
            </Link>
          </div>
        </div>
      );
}