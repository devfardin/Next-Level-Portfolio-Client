import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import logo from '../../public/images/white-logo.png'
import { menuItems } from "./shared/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import { TbMenu2 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

const MobileMenu = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById("mobile-menu");
            const trigger = document.getElementById("menu-trigger");
            if (
                menu &&
                !menu.contains(event.target as Node) &&
                trigger &&
                !trigger.contains(event.target as Node) &&
                isOpen
            ) {
                closeMenu();
            }
        };
        document.addEventListener("keydown", handleEscKey);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleEscKey);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeMenu]);


    return (
        <div className="lg:hidden relative">
            <button
                id="menu-trigger"
                onClick={toggleMenu}
                className="bg-primery rounded-md text-white hover:text-white hover:bg-black 
          py-1.5 px-4 text-xl duration-300 transition-all"
                aria-label="Toggle menu"
                aria-expanded={isOpen}>
                {isOpen ? <RxCross1 size={30} /> : <TbMenu2 size={30} />}
            </button>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <div
                id="mobile-menu"
                role="navigation"
                aria-label="Mobile navigation menu"
                className={`fixed top-0 right-0 w-[300px] z-20 sm:w-[400px] h-full bg-black dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full overflow-y-auto">
                    <div className="p-7">
                        {/* Menu Header logo and close icon */}
                        <div className="flex justify-between items-center gap-4 border-b border-gray-500 text-white pb-2.5 mb-16">
                            <div>
                                <Image alt="Fardin's Logo" src={logo} width={200} height={200} />
                            </div>
                            <button
                                id="menu-trigger"
                                onClick={closeMenu}
                                className="bg-primery rounded-md text-white hover:bg-white hover:text-primery py-2 px-4 text-xl duration-300 transition-all"
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}>
                                <RxCross1 size={30} />
                            </button>

                        </div>
                        <nav className="space-y-6">
                            {
                                menuItems?.map((item, index) => <li key={index} className="hover:text-gray-600 list-none">
                                    <Link className={`${pathname === item.link
                                        ? "!text-primery font-bold text-2xl transition-colors duration-200"
                                        : "text-gray-700 hover:text-primery text-2xl ont-bold"
                                        } w-full inline-flex border-b border-gray-500 text-white pb-2.5 justify-between items-center gap-4`}
                                        href={`${item.link}`}> {item.label} <GoArrowUpRight size={30} /> </Link>
                                </li>)
                            }
                        </nav>
                        <Link
                            href="/contact"
                            className="relative inline-flex mt-6 items-center justify-start overflow-hidden font-medium transition-all bg-primery rounded-md hover:bg-primery group py-3 px-6 text-xl">
                            <span className="w-56 h-48 rounded-md bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
                            </span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-primery">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;