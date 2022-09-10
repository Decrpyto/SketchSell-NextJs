import React from "react";
import Image from "next/image";
import logo from "../assets/anime-boy-pfp-430x454.webp";

function RightBar() {
    return (
        <div className="w-80  bg-black/80 ">
            <div className="bg-black/95 flex items-center flex-col h-screen">
                <div className="mt-10 ">
                    <h1 className="font-montserrat font-bold text-2xl text-white">
                        TRENDING
                    </h1>
                </div>
                <div className="w-72 bg-gray-500/10 h-72 flex flex-col justify-center rounded-3xl mt-10 ">
                    <h1 className="font-montserrat font-bold text-lg text-white flex justify-center">
                        TRENDING ARTISTS
                    </h1>
                    <div className="flex flex-row space-x-10 justify-center ">
                        <div className="h-20 w-12 flex flex-col items-center  mt-5 ">
                            <Image
                                src={logo}
                                className="h-20 w-14 object-contain rounded-full"
                            />
                            <h1 className="font-montserrat font-bold text-white">
                                Sam
                            </h1>
                        </div>
                        <div className="h-20 w-12 flex flex-col items-center mt-5 ">
                            <Image
                                src={logo}
                                className="h-20 w-14 object-contain rounded-full"
                            />
                            <h1 className="font-montserrat font-bold text-white">
                                Sam
                            </h1>
                        </div>
                        <div className="h-20 w-12 flex flex-col items-center  mt-5 ">
                            <Image
                                src={logo}
                                className="h-20 w-14 object-contain rounded-full"
                            />
                            <h1 className="font-montserrat font-bold text-white">
                                Sam
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-10 justify-center">
                        <div className="h-20 w-12 flex flex-col items-center  mt-10 ">
                            <Image
                                src={logo}
                                className="h-20 w-14 object-contain rounded-full"
                            />
                            <h1 className="font-montserrat font-bold text-white">
                                Sam
                            </h1>
                        </div>
                        <div className="h-20 w-12 flex flex-col items-center mt-10 ">
                            <Image
                                src={logo}
                                className="h-20 w-14 object-contain rounded-full"
                            />
                            <h1 className="font-montserrat font-bold text-white">
                                Sam
                            </h1>
                        </div>
                        <div className="h-20 w-12 flex flex-col items-center  mt-10 ">
                            <Image
                                src={logo}
                                className="h-20 w-14 object-contain rounded-full"
                            />
                            <h1 className="font-montserrat font-bold text-white">
                                Sam
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="w-72 bg-gray-500/10 h-[500px]  rounded-3xl mt-10">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-montserrat font-bold text-lg text-white flex justify-center mt-4">
                            TRENDING TAGS
                        </h1>
                        <div className="flex flex-row m-5 items-center space-x-2">
                            <div className="flex items-center justify-center rounded-full bg-white h-10 w-10">
                                <h1 className="font-itim font-semibold text-black">
                                    #1
                                </h1>
                            </div>
                            <div>
                                <h2 className="font-itim font-medium text-xl text-white ">
                                    #FantasyWorld
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;
