import Link from "next/link";
import { Logo } from "../svg/Logo";

interface MenuItem {
  link: string;
  label: string;
  special: boolean;
}

export const Header = () => {
  const menuItems: MenuItem[] = [
    {
      link: "/ads/new",
      label: "Create new ad",
      special: true,
    },
    {
      link: "/login",
      label: "Login",
      special: true,
    },
    {
      link: "/register",
      label: "Register",
      special: true,
    },
    {
      link: "/help",
      label: "Help",
      special: false,
    },
    {
      link: "/terms-and-conditions",
      label: "Terms and conditions",
      special: false,
    },
  ];

  const specialLinkClasses =
    "bg-regal-blue text-regal-beige py-2 px-4 rounded-full cursor-pointer hover:bg-regal-blue-light";

  return (
    <header className="bg-regal-beige w-full">
      <div className="mx-auto container flex items-center justify-between px-12 py-4">
        <Link href="/" className="flex items-center py-2 px-4">
          <Logo width={240} />
        </Link>
        <ul className="flex items-center gap-3 px-3 py-2">
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem.link}
              href={menuItem.link}
              className={menuItem.special ? specialLinkClasses : undefined}
            >
              {menuItem.label}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};
