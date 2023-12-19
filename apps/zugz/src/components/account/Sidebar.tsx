import Link from "next/link";
import { Home, LogOut, Settings, ShoppingBag, User } from "react-feather";

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-auto pb-2 md:w-2/6 2xl:w-4/12 md:pr-8 rtl:md:pl-8 lg:pr-12 rtl:lg:pl-12 xl:pr-16 rtl:xl:pl-16 2xl:pr-20 rtl:2xl:pl-20 md:pb-0  bg-black rounded-md border border-neutral-800">
      <Link
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
        href="/my-account"
      >
        <Home className="w-5 h-5" />
        <span className="pl-2 rtl:pr-2">Dashboard</span>
      </Link>
      <Link
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
        href="/my-account/orders"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="pl-2 rtl:pr-2">Orders</span>
      </Link>
      <Link
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
        href="/my-account/account-details"
      >
        <User className="w-5 h-5" />
        <span className="pl-2 rtl:pr-2">Account Details</span>
      </Link>
      <Link
        className="font-black flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 "
        href="/my-account/change-password"
      >
        <Settings className="w-5 h-5" />
        <span className="pl-2 rtl:pr-2">Change Password</span>
      </Link>
      <Link
        href="/"
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
      >
        <LogOut className="w-5 h-5" />
        <span className="pl-2 rtl:pr-2">Logout</span>
      </Link>
    </nav>
  );
}
