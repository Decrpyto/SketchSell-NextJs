import React, { useState } from "react";
import {
    ChevronDoubleDownIcon,
    HomeIcon,
    FireIcon,
    MagnifyingGlassIcon,
    UserGroupIcon,
    ArrowUpOnSquareStackIcon,
    UserIcon,
    ArrowRightOnRectangleIcon,
    ArrowDownOnSquareStackIcon,
    PencilSquareIcon,
    UserCircleIcon,
    Bars3BottomRightIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function SideBar() {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const menus = [
        {
            title: "Home",
            icon: <HomeIcon />,
            link: "/home-page",
        },

        {
            title: "Upload",
            icon: <ArrowUpOnSquareStackIcon />,
            link: "/upload",
        },
        {
            title: "Cart",
            link: "/cart",
            icon: <ShoppingCartIcon />,
        },

        {
            title: "Account",
            icon: <UserIcon />,
            link: "/profile",
        },
    ];
    return (
        <div className="w-80 bg-black/95">
            <div className="flex">
                <div className="bg-black/80 h-screen p-5 pt-8 w-80">
                    <Bars3BottomRightIcon className="text-gray-100 h-10 w-10" />
                    <div className="inline-flex mt-5">
                        <p className="font-bold text-3xl text-white">
                            SketchSell
                        </p>
                    </div>
                    <div
                        className="flex rounded-md items-center bg-gray-500/5
                mt-10 px-4 py-2  "
                    >
                        <MagnifyingGlassIcon className="h-5 w-5 mr-2 text-white" />
                        <input
                            className="text-base bg-transparent w-full text-white focus:outline-none 
                        font-montserrat font-medium"
                            type={"search"}
                            placeholder="search art title"
                        ></input>
                    </div>
                    <ul className="pt-2">
                        {menus.map((menu, index) => (
                            <>
                                <li
                                    key={index}
                                    className={`font-montserrat text-lg font-medium text-gray-300 flex items-center
                                gap-x-4 hover:animate-pulse cursor-pointer p-2 rounded-md mt-10
                                hover:bg-white hover:text-black`}
                                >
                                    <Link href={menu.link} key={index}>
                                        <div
                                            className="flex flex-row space-x-2 items-center"
                                            key={index}
                                        >
                                            <span className="h-8 w-8 text-2xl block float-left">
                                                {menu.icon ? (
                                                    menu.icon
                                                ) : (
                                                    <ArrowDownOnSquareStackIcon />
                                                )}
                                            </span>
                                            <h4>{menu.title}</h4>
                                            {menu.submenu && (
                                                <ChevronDoubleDownIcon
                                                    className="h-4 w-4"
                                                    onClick={() =>
                                                        setSubmenuOpen(
                                                            !submenuOpen
                                                        )
                                                    }
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            </>
                        ))}
                    </ul>
                    <div className="p-7"></div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
