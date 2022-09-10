import Image from "next/image";
import React from "react";
import P1 from "../assets/p-1.jpg";

function Body() {
    return (
        <div className="flex-col mt-40 max-w-7xl flex mx-auto">
            <div>
                <h1 className="font-montserrat font-bold text-6xl text-center text-white">
                    Imagine,Create & Earn from SketchSell. A MarketPlace for
                    Digital Arts.
                </h1>
            </div>
            <div className="flex flex-row justify-evenly space-x-10 mt-40">
                <div className=" w-80 rounded-xl  flex-col flex cursor-pointer">
                    <div className="bg-gray-900/20 h-[330px] rounded-xl px-2 py-2 justify-center">
                        <div>
                            <Image
                                src={P1}
                                objectFit="contain"
                                className="h-20 rounded-xl"
                            />
                            <p className="font-montserrat font-semibold text-xl text-white ml-1">
                                Fantasy World
                            </p>
                            <p className="font-montserrat font-semibold text-md text-gray-500/80 ml-1">
                                @Jake_Paul
                            </p>

                            <button
                                className="w-[300px] border border-white rounded-md h-10 mt-4 
                            hover:animate-pulse hover:bg-white hover:text-black text-white"
                            >
                                <span className="font-montserrat text-xl font-bold ">
                                    Buy Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" w-80 rounded-xl  flex-col flex cursor-pointer">
                    <div className="bg-gray-900/20 h-[330px] rounded-xl px-2 py-2 justify-center">
                        <div>
                            <Image
                                src={P1}
                                objectFit="contain"
                                className="h-20 rounded-xl"
                            />
                            <p className="font-montserrat font-semibold text-xl text-white ml-1">
                                Fantasy World
                            </p>
                            <p className="font-montserrat font-semibold text-md text-gray-500/80 ml-1">
                                @Jake_Paul
                            </p>

                            <button
                                className="w-[300px] border border-white rounded-md h-10 mt-4 
                            hover:animate-pulse hover:bg-white hover:text-black text-white"
                            >
                                <span className="font-montserrat text-xl font-bold ">
                                    Buy Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" w-80 rounded-xl  flex-col flex cursor-pointer">
                    <div className="bg-gray-900/20 h-[330px] rounded-xl px-2 py-2 justify-center">
                        <div>
                            <Image
                                src={P1}
                                objectFit="contain"
                                className="h-20 rounded-xl"
                            />
                            <p className="font-montserrat font-semibold text-xl text-white ml-1">
                                Fantasy World
                            </p>
                            <p className="font-montserrat font-semibold text-md text-gray-500/80 ml-1">
                                @Jake_Paul
                            </p>

                            <button
                                className="w-[300px] border border-white rounded-md h-10 mt-4 
                            hover:animate-pulse hover:bg-white hover:text-black text-white"
                            >
                                <span className="font-montserrat text-xl font-bold ">
                                    Buy Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
