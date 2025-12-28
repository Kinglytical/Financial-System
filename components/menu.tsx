import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    menu_items: [
      {
        icon: "/home.png",
        label: "Home",
        link: "/",
        visible: ["admin", "user"],
      },
      {
        icon: "/expenses.png",
        label: "Expenses",
        link: "/expenses",
        visible: ["admin", "user"],
      },
      {
        icon: "/general-ledger.png",
        label: "General Ledger",
        link: "/general-ledger",
        visible: ["admin", "user"],
      },
      {
        icon: "/reconcile.png",
        label: "Reconcile",
        link: "/reconcile",
        visible: ["admin", "user"],
      },
      {
        icon: "/reports.png",
        label: "Reports",
        link: "/reports",
        visible: ["admin", "user"],
      },
      {
        icon: "/revenue.png",
        label: "Revenue",
        link: "/revenue",
        visible: ["admin", "user"],
      },
    ],
  },
  {
    title: "OTHERS",
    menu_items: [
      {
        icon: "/setting.png",
        label: "Settings",
        link: "/settings",
        visible: ["admin", "user"],
      },
      {
        icon: "/help.png",
        label: "Help",
        link: "/help",
        visible: ["admin", "user"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        link: "/logout",
        visible: ["admin", "user"],
      }
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {menuItems.map((i) => (
        <div className="" key={i.title}>
          <span className="hidden lg:block">{i.title}</span>
          {i.menu_items.map((item) => (
            <Link
              href={item.link}
              key={item.label}
              className="flex gap-2 my-4 items-center outline-none p-2 rounded-xl hover:bg-amber-300"
            >
              <Image src={item.icon} width={20} height={20} alt=""></Image>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
