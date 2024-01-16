"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import clsx from "clsx";

import BedtimeIcon from "@mui/icons-material/Bedtime";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";

import CakeIcon from "@mui/icons-material/Cake";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import ConstructionIcon from "@mui/icons-material/Construction";

import EmailIcon from "@mui/icons-material/Email";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const styles = {
  icon: {
    fontSize: 20,
  },
};

export default function NavbarMenuList() {
  const pathname = usePathname(); // 현재 경로를 알 수 있다.

  const menuList = [
    {
      title: "Home",
      subList: [
        {
          title: "1",
          icon: <AccountCircleIcon style={styles.icon} />,
          href: "/",
        },
        {
          title: "2",
          icon: <GitHubIcon style={styles.icon} />,
          href: "/a",
        },
        {
          title: "3",
          icon: <WebIcon style={styles.icon} />,
          href: "/b",
        },
      ],
    },
  ];

  return (
    <div
      className="flex flex-col overflow-auto p-6"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {menuList.map((menu, index) => (
        <div key={index} className="flex flex-col mb-8">
          <div className="mb-4 font-semibold">{menu.title}</div>
          {menu.subList.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              style={{ fontSize: 14 }}
              className={clsx(
                "flex items-center gap-3 no-underline py-2 ml-2 font-medium text-black hover:text-sky-400",
                {
                  "text-sky-500": pathname === sub.href,
                }
              )}
            >
              {"-"}
              {sub.icon}
              <span className="pb-[2px]">{sub.title}</span>
            </Link>
          ))}
          <BedtimeIcon /> <BrightnessLowIcon /> <CakeIcon /> <ColorLensIcon />
          <EmailIcon /> <HomeIcon /> <ImportContactsIcon /> <LaptopMacIcon />
          <ConstructionIcon /> <PhoneIphoneIcon /> <RocketLaunchIcon />
          <SchoolIcon /> <SportsEsportsIcon />
        </div>
      ))}
    </div>
  );
}
