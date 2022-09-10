import Image from "next/image";
import React from "react";
import logo from "../assets/p-1.jpg";
import Head from "next/head";
import {
    AiFillInstagram,
    AiFillTwitterCircle,
    AiFillFacebook,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

function profile() {
    return (
        <div className="h-screen flex flex-row bg-black px-5 py-10 space-x-10 ">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="flex flex-col space-y-5 justify-center">
                <div className="bg-gray-600/20 h-[300px] w-72 rounded-2xl flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full items-center mt-5">
                        <Image
                            src={logo}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <h1 className="font-montserrat font-extrabold text-white text-xl mt-2">
                        SamDoesArt
                    </h1>
                    <div className="flex justify-evenly items-center flex-row space-x-16 mt-10">
                        <div className="flex flex-col items-center">
                            <h1 className="font-montserrat font-bold text-gray-500/90 text-2xl">
                                ARTS
                            </h1>
                            <h1 className="font-montserrat font-bold text-gray-500/90 text-xl">
                                250
                            </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-montserrat font-bold text-gray-500/90 text-2xl">
                                RATING
                            </h1>
                            <h1 className="font-montserrat font-bold text-gray-500/90 text-xl">
                                5.4
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="h-[600px] w-72 bg-gray-600/20 rounded-xl justify-start">
                    <div className="flex flex-col px-5">
                        <h1 className="font-montserrat font-semibold text-white mt-5">
                            Other Social Media Accounts Links.
                        </h1>
                        <div className="flex flex-row mt-5 justify-evenly space-x-10">
                            <div className="bg-gray-600/20 h-16 w-16 rounded-full items-center justify-center flex">
                                <AiFillInstagram className="text-white h-8 w-8" />
                            </div>
                            <div className="bg-gray-600/20 h-16 w-16 rounded-full items-center justify-center flex">
                                <AiFillTwitterCircle className="text-white h-8 w-8" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 justify-evenly space-x-10">
                            <div className="bg-gray-600/20 h-16 w-16 rounded-full items-center justify-center flex">
                                <AiFillFacebook className="text-white h-8 w-8" />
                            </div>
                            <div className="bg-gray-600/20 h-16 w-16 rounded-full items-center justify-center flex">
                                <BsPinterest className="text-white h-8 w-8" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <h1 className="font-montserrat font-semibold text-md text-white">
                                People who purchased your arts.
                            </h1>
                            <div className=" flex flex-row  mt-5 space-x-2 items-center">
                                <div className="relative h-12 w-12 rounded-full">
                                    <Image
                                        src={logo}
                                        objectFit="cover"
                                        layout="fill"
                                        className="rounded-full"
                                    />
                                </div>
                                <h1 className="font-montserrat font-semibold text-white">
                                    Jake Paul
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-grow bg-gray-600/20 rounded-xl justify-evenly">
                <div className="grid grid-cols-4 justify-evenly">
                    <div className="h-[350px] w-[350px] bg-gray-800/20 rounded-xl p-2 m-5 flex flex-col">
                        <Image
                            src={logo}
                            className="h-[300px] object-contain w-[320] rounded-xl"
                        />
                        <div>
                            <div className="mt-5 ml-2 font-montserrat font-semibold text-white text-xl">
                                <h1>Fantasy World</h1>
                            </div>
                        </div>

                        <div
                            className="border border-white h-14 rounded-xl text-white font-montserrat
                            font-extrabold bg-black hover:text-black hover:bg-white hover:animate-pulse
                            justify-center items-center flex mt-5
                        "
                            onClick={(e) => {}}
                        >
                            <span>ADD TO CART</span>
                        </div>
                    </div>
                    <div className="h-[350px] w-[350px] bg-gray-800/20 rounded-xl p-2 m-5 flex flex-col">
                        <Image
                            src={logo}
                            className="h-[300px] object-contain w-[320] rounded-xl"
                        />
                        <div>
                            <div className="mt-5 ml-2 font-montserrat font-semibold text-white text-xl">
                                <h1>Fantasy World</h1>
                            </div>
                        </div>

                        <div
                            className="border border-white h-14 rounded-xl text-white font-montserrat
                            font-extrabold bg-black hover:text-black hover:bg-white hover:animate-pulse
                            justify-center items-center flex mt-5
                        "
                            onClick={(e) => router.push("/profile")}
                        >
                            <span>ADD TO CART</span>
                        </div>
                    </div>
                    <div className="h-[350px] w-[350px] bg-gray-800/20 rounded-xl p-2 m-5 flex flex-col">
                        <Image
                            src={logo}
                            className="h-[300px] object-contain w-[320] rounded-xl"
                        />
                        <div>
                            <div className="mt-5 ml-2 font-montserrat font-semibold text-white text-xl">
                                <h1>Fantasy World</h1>
                            </div>
                        </div>

                        <div
                            className="border border-white h-14 rounded-xl text-white font-montserrat
                            font-extrabold bg-black hover:text-black hover:bg-white hover:animate-pulse
                            justify-center items-center flex mt-5 cursor-pointer
                        "
                        >
                            <span>ADD TO CART</span>
                        </div>
                    </div>
                    <div className="h-[350px] w-[350px] bg-gray-800/20 rounded-xl p-2 m-5 flex flex-col">
                        <Image
                            src={logo}
                            className="h-[300px] object-contain w-[320] rounded-xl"
                        />
                        <div>
                            <div className="mt-5 ml-2 font-montserrat font-semibold text-white text-xl">
                                <h1>Fantasy World</h1>
                            </div>
                        </div>

                        <div
                            className="border border-white h-14 rounded-xl text-white font-montserrat
                            font-extrabold bg-black hover:text-black hover:bg-white hover:animate-pulse
                            justify-center items-center flex mt-5 cursor-pointer
                        "
                        >
                            <span>ADD TO CART</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profile;
