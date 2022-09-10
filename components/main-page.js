import React, { useState, useEffect } from "react";
import { supabase } from "../Utils/SupabaseClient";
import logo from "../assets/p-1.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

function MainPage() {
    const [loading, setLoading] = useState(false);
    const [artsPost, setArtsPost] = useState([]);

    const router = useRouter();
    const getArts = async () => {
        try {
            const { data, error } = await supabase
                .from("arts")
                .select("id,picture_url,picture_title, priced_at")
                .eq("is_purchased", false)
                .limit(12);

            if (error != null) {
                alert(error.message || "something went wrong");
            }

            if (data) {
                setArtsPost(data);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex-grow flex bg-black justify-center">
            <div>
                <div>
                    <h1 className="text-white font-montserrat font-bold mt-20 text-5xl flex justify-center items-center">
                        Featured Arts.
                    </h1>
                    <h2 className="mt-5 text-gray-400 font-montserrat font-medium text-xl text-center px-14">
                        Our featured gallery with featured arts from upcoming
                        artists who are recently getting popular.
                    </h2>
                </div>

                <div className="grid grid-cols-3 mt-20 px-5 ">
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
                </div>
            </div>
        </div>
    );
}

export default MainPage;
