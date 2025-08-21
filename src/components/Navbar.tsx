"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <div className="flex gap-4 text-lg ">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
            <MenuItem setActive={setActive} active={active} item="our-courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                <HoveredLink href="/courses">Advanced Music Theory</HoveredLink>
                <HoveredLink href="/courses">Music Production</HoveredLink>
                <HoveredLink href="/courses">Music History</HoveredLink>
              </div>
            </MenuItem>
             <Link href="/contact">
              <MenuItem setActive={setActive} active={active} item="Contact us">
             
            </MenuItem>
                
              </Link>
           
          </div>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
