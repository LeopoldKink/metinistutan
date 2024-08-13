"use client";
import { Lato, Space_Mono } from '@next/font/google';
import './globals.css';
import { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { BackgroundMain } from '@/components/home/background-main';

const lato = Lato({
  weight: ['400', '300', '700'],
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Page(): React.JSX.Element {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        // Show text after fade out
        setTimeout(() => {
          setShowContent(true);
        }, 1000); // 1 second after video fade out
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isClient]);

  return (
    <main className={spaceMono.className}>
      <div className="relative w-full h-screen bg-black">
        {isClient && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
            autoPlay
            muted
          >
            <source src="/video/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {showContent && (
          <BackgroundMain/>
        )}
        <div>
      </div>
      </div>
    </main>
  );
}
