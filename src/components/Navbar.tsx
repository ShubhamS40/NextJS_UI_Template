"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p>
        </div>
    );
}

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
               <Link href={"/"}> <MenuItem active={active} setActive={setActive} item="Home">
               </MenuItem></Link>
                <MenuItem active={active} setActive={setActive} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
               
               <Link href={"/contact"}>
               <MenuItem active={active} setActive={setActive} item="Contact">
                </MenuItem>
               </Link>
            </Menu>
        </div>
    );
}
