"use client"
import Link from "next/link";
import logo from '../../../public/logo.png'
import Image from "next/image";
import { usePathname } from "next/navigation";
import HoverLink from "./HoverLink";
import MobileMenu from "../MobileMenu";
export const menuItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Services',
    link: '/services',
  },
  {
    label: 'Resumi',
    link: '/resumi',
  },
  {
    label: 'Portfolio',
    link: '/portfolio',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="container mx-auto flex items-center justify-between
    bg-white border-b py-4">
      <div className="flex items-center">
        <Link
          href="/"
          className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600"
        >
          <Image src={logo} width={200} height={150} alt="Fardin's Logo" />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex space-x-6 text-gray-800">
          {
            menuItems?.map((item, index) => <li key={index} className="hover:text-gray-600">
              <Link className={`${pathname === item.link
                ? "text-primery font-medium text-xl"
                : "text-gray-700 hover:text-primery text-xl"
                }`}
                href={`${item.link}`}> {item.label} </Link>
            </li>)
          }
        </ul>
      </div>

      <div className="flex items-center">
        <div className="hidden lg:block">
        <HoverLink label="Contact Us" link="/contact"/>
        </div>

        <MobileMenu/>
      </div>
    </div>
  );
};

export default Navbar;
