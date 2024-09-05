"use client";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/AnimatedModal";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

const menuItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Muzyka",
    href: "#music",
  },
  {
    title: "Zespół",
    href: "#zespol",
  },
  {
    title: "Kontakt",
    href: "#kontakt",
  },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <header className="fixed top-5 z-50    w-full ">
      <div className="flex w-full h-[50px] border  border-gray-neutral-400 shadow-lg rounded-full bg-[rgba(255,255,255,0.7)] backdrop-blur-md max-w-xl mx-auto px-4">
      
        <div className="flex items-center justify-between   w-full">
        
          <div className="hidden xl:block w-full">
            <ul className="flex justify-around  text-neutral-600 p-2 font-semibold text-sm w-full tracking-wide">
              {menuItems.map((item, index) => (
                <li key={index} className="hover:bg-neutral-100 transition-all p-2 px-8 rounded-md">
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-black dark:text-white h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="mb-8">
              <Logo />
            </div>
            <div className="mb-4">
              <ul className="text-neutral-500 text-md hover:bg-neutral-200">
                {menuItems.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
