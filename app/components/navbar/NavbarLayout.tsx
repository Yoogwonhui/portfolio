import DrawerComponent from "./DrawerComponent";
import NavbarMenuList from "./NavbarMenuList";
import Link from "next/link";
import Image from "next/image";
import bgImg from "@/public/backgroundImg.png";
export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <nav
        className="flex flex-col w-72 h-screen fixed hidden xl:block"
        style={{
          boxShadow: "0px 0px 6px 0px rgba(0, 21, 41, 0.12)",
        }}
      >
        <div
          className="flex items-center justify-center h-[80px] mx-4 box-border"
          style={{ borderBottom: "1px solid rgb(240, 242, 245)" }}
        >
          <Link href={"/"} className="no-underline">
            <div className="font-extrabold text-xl text-black">Logo</div>
          </Link>
        </div>
        <NavbarMenuList />
      </nav>

      <div className="flex flex-col flex-grow xl:pl-72 w-screen box-border">
        <nav
          className="flex justify-between items-center h-[80px] sticky top-0 bg-white/[0.8] backdrop-blur-sm p-6 box-border z-30"
          style={{
            boxShadow: "0px 0px 6px 0px rgba(0, 21, 41, 0.12)",
          }}
        >
          <div className="flex gap-10">
            <div className="xl:hidden ">
              <DrawerComponent />
            </div>
          </div>

          <div>Yoogwonhee</div>
        </nav>

        <Image
          className="absolute top-20 right-8 w-1/3 min-w-[200px] max-w-[300px] h-auto opacity-40 z-20"
          alt=""
          src={bgImg}
        />

        <div
          className="flex flex-grow p-8 box-border w-full"
          style={{
            minHeight: "calc(100vh - 80px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
