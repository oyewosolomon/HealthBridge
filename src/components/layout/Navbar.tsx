import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-800 dark:text-white hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <>
      {/* Fixed Logo (stays in place on scroll) */}
      <Link 
        href="/" 
        className="fixed left-8 top-8 z-50 flex items-center space-x-2"
      >
        <svg 
          width="45px" 
          height="45px" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 ${isScrolled ? "text-red-500" : "text-white"}`}
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M8.96173 18.4687C6.01943 16.2137 2 12.4886 2 8.96653C2 3.08262 7.50016 0.885859 12 5.43111C16.4998 0.885859 22 3.08262 22 8.9665C22 12.4887 17.9806 16.2137 15.0383 18.4687C13.7063 19.4896 13.0403 20 12 20C10.9597 20 10.2937 19.4896 8.96173 18.4687ZM16.5 6.25C16.9142 6.25 17.25 6.58579 17.25 7V8.25002H18.5C18.9142 8.25002 19.25 8.5858 19.25 9.00002C19.25 9.41423 18.9142 9.75002 18.5 9.75002H17.25V11C17.25 11.4142 16.9142 11.75 16.5 11.75C16.0858 11.75 15.75 11.4142 15.75 11V9.75002L14.5 9.75002C14.0858 9.75002 13.75 9.41423 13.75 9.00002C13.75 8.5858 14.0858 8.25002 14.5 8.25002H15.75V7C15.75 6.58579 16.0858 6.25 16.5 6.25Z" 
            fill="currentColor" // Now controlled by text-color class
          />
        </svg>
        <div className={`font-bold ${isScrolled ? 'hidden':'flex' } text-gray-800 dark:text-white text-xl`}>HealthBridge</div>
      </Link>

      {/* Scrollable Navbar (rest of the content) */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-24">
        <div className="container flex h-16 items-center">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4">
                <NavLinks />
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex justify-center items-center space-x-6 ml-6 flex-1">
              <NavLinks />
            </nav>
          )}

          <div className={`${isMobile ? 'mr-2' : 'ml-auto'}`}>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}