"use client";

import React from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-red-100/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logotypeface.png"
            alt="logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Right-side Auth & Dashboard */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <Button variant="outline" asChild>
              <Link href="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/transaction/create" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                <PenBox size={18} />
                <span className="hidden md:inline">Transaction</span>
              </Link>
            </Button>

            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </div>
  );
};

export default Header;
