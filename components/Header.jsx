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
                        {notificationCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {notificationCount}
                            </span>
                        )}
                    </button>
                    <MobileNav />
                </div>

            </div>
        </header>);
};

export default Header;