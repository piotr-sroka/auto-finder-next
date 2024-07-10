import Link from "next/link";
import { Logo } from "../svg/Logo";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/app/(auth)/actions";

interface MenuItem {
  link: string;
  label: string;
  special: boolean;
  action?: any;
}

export const Header = async () => {
  let menuItems: MenuItem[] = [];
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    menuItems = [
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
  } else {
    menuItems = [
      {
        link: "/ads/new",
        label: "Create new ad",
        special: true,
      },
      {
        link: "/profile",
        label: "Profile",
        special: true,
      },
      {
        link: "",
        label: "Logout",
        special: true,
        action: logout,
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
  }

  const specialLinkClasses =
    "bg-regal-blue text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-blue-light";

  return (
    <header className="bg-regal-beige w-full">
      <div className="mx-auto container flex items-center justify-between px-12 py-4">
        <Link href="/" className="flex items-center py-2 px-4">
          <Logo width={240} />
        </Link>
        <ul className="flex items-center gap-3 px-3 py-2">
          {menuItems.map((menuItem) => (
            <li
              className={menuItem.special ? specialLinkClasses : undefined}
              key={menuItem.link}
            >
              {menuItem.action ? (
                <form>
                  <button formAction={menuItem.action}>{menuItem.label}</button>
                </form>
              ) : (
                <Link href={menuItem.link}>{menuItem.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
