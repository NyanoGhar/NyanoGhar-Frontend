import { Home, Search } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { Separator } from "../ui/separator";

const Navbar = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const hamButtonRef = useRef<HTMLButtonElement>(null);

    const handleMenuExpand = () => {
        setMenuExpanded(!menuExpanded);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && hamButtonRef.current && !menuRef.current.contains(event.target as Node) && !hamButtonRef.current.contains(event.target as Node)) {
                setMenuExpanded(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });


    return (
        <div className="w-screen flex gap-4 relative justify-around items-center bg-primary text-primary-foreground p-4 pr-0">
            <div className="text-lg font-bold">
            <Home size={32} />
            </div>
            <div className="flex grow justify-items-stretch relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-input rounded-lg px-2 py-1 grow"
                />
                <Button className="absolute right-0 h-[33.6px]" variant={"ghost"}>
                    <Search size={20} color="#000000" absoluteStrokeWidth />
                </Button>
            </div>
            <div ref={menuRef} className={(menuExpanded ? " absolute right-2 top-[71px] flex flex-col bg-primary gap-3 w-44 py-4 rounded-b-md shadow-lg" : "hidden md:flex")}>
                <a href="/login" className="text-primary-foreground ml-4">
                Login
                </a>
                <Separator  />
                <a href="/register" className="text-primary-foreground ml-4">
                    Register
                </a>
            </div>
            <div className="flex md:hidden">
                <Button ref={hamButtonRef} variant={"ghost"}
                    onClick={handleMenuExpand}
                >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;