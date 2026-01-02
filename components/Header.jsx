"use client";

import Link from "next/link";
import {Button} from "./ui/button";
import { MessageSquare } from "lucide-react";

import Nav from "./Nav"; 
import MobileNav from "./MobileNav";
import { useInbox } from "@/components/InboxContext";

const BlinkingExclamation = () => (
    <span className="inline-block animate-blink animate-color">
        !
    </span>
);

const Header = () => {
    const { openInbox, notificationCount } = useInbox();
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold logo-hover">
                        Tuh<BlinkingExclamation />N<span className="logo-dot-animated">.</span>
                    </h1>
                </Link>


                {/* {desktop nav & hire me button} */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                        <Link href="/contact">
                            <Button>Hire me</Button>
                        </Link>
                </div>

                {/* {mobile nav} */}
                <div className="xl:hidden flex items-center gap-2">
                    <button
                        type="button"
                        onClick={openInbox}
                        className="relative p-2 hover:bg-accent/10 rounded-full transition-all duration-300"
                        aria-label="Inbox"
                    >
                        <MessageSquare className="w-6 h-6 text-accent" />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    </button>
                    <MobileNav />
                </div>

            </div>
        </header>);
};

export default Header;