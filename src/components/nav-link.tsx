"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps {
href: string,
icon: React.JSX.Element,
label:string
}

const NavLink = ({ item }: {item: ItemProps}  ) => {
  const pathname = usePathname();
  const isActive = pathname === item.href ? true: false
  return (
    <Link href={item.href} className={`${isActive ? "text-red-600" : "text-primary"} flex items-center flex-col`}>
     <div>{item.icon}</div>
     <p>{item.label}</p>
    </Link>
  );
};

export default NavLink;