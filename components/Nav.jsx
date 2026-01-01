"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import InboxDropdown from "./InboxDropdown";

const links = [
    {
        name: "home",
        path: "/",
    },
    
    {
        name: "resume",
        path: "/resume",
    },
    ,{
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
            {/* Add Inbox Dropdown */}
            <InboxDropdown />
        </nav>
    );
};
export default Nav;