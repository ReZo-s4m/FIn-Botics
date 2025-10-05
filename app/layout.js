import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TypeFinance",
  description: "Finance Management at FingerTips",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="min-h-screen pt-0">{children}</main>

          {/* Toaster for notifications */}
          <Toaster richColors />

          {/* Footer */}
          <footer className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Logo / Description */}
                <div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Empowering your financial future with AI-driven insights and
                    seamless management.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/dashboard"
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-sm block"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-sm block"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/features"
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-sm block"
                      >
                        Features
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Legal
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-sm block"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-sm block"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-blue-100 hover:text-white transition-colors duration-300 text-sm block"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Us
                  </h4>
                  <div className="flex justify-center md:justify-end space-x-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-blue-400/30 pt-8 text-center">
                <p className="text-blue-200 text-sm">
                  &copy; {new Date().getFullYear()} TypeFinance. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
