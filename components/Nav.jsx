"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { useInbox } from "@/components/InboxContext";

const links = [
    {
        name: "home",
        path: "/",
    },
    
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/work",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "contact",
        path: "/contact",
    },
];
const Nav = () => {
    const pathname = usePathname();
    const { openInbox, notificationCount } = useInbox();
    return (
        <nav className="flex items-center gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname && "text-accent border-b-2 border-accent"
                        } capitalize font-medium hover:text-accent transition-all nav-underline`}
                    >
                        {link.name}
                    </Link>
                );
            })}
            <button
                type="button"
                onClick={openInbox}
                className="relative p-2 hover:bg-accent/10 rounded-full transition-all duration-300"
                aria-label="Inbox"
            >
                <MessageSquare className="w-6 h-6 text-accent" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </button>
        </nav>
    );
};
export default Nav;