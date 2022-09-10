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
} from "@heroicons/react/24/outline";

function SideBar() {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const menus = [
        {
            title: "Home",
            icon: <HomeIcon />,
        },
        {
            title: "Trending",
            icon: <FireIcon />,
        },
        {
            title: "Community",
            icon: <UserGroupIcon />,
        },
        {
            title: "Upload",
            icon: <ArrowUpOnSquareStackIcon />,
        },
        {
            title: "Projects",
        },

        {
            title: "Account",
            icon: <UserIcon />,
        },
        {
            title: "Logout",
            icon: <ArrowRightOnRectangleIcon />,
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
                                                setSubmenuOpen(!submenuOpen)
                                            }
                                        />
                                    )}
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
