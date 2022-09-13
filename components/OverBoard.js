import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../assets/SketchSell-1.png";
import { supabase } from "../Utils/SupabaseClient";

function OverBoard() {
    const [Authenticated, setAuthenticated] = useState("");

    const router = useRouter();

    const runCheckOperation = () => {
        const authorized = supabase.auth.user();

        setAuthenticated(authorized.aud);

        if (Authenticated === null) {
            router.push("/login");
        } else {
            router.push("/home-page");
        }
    };

    async function fetchOperation() {}

    return (
        <header
            className="flex flex-row shadow-md sticky top-0 z-50
        max-w-7xl mx-auto
        "
        >
            {/* Left */}

            <div className="flex flex-grow items-center relative h-20 space-x-10">
                <p
                    className="font-montserrat font-extrabold text-3xl text-white
                    ml-10 cursor-pointer
                "
                >
                    SketchSell
                </p>

                <p
                    className="font-itim font-semibold text-xl text-gray-200/60
                hover:text-white cursor-pointer hover:scale-125"
                >
                    Home
                </p>
                <p
                    className="font-itim font-semibold text-xl text-gray-200/60
                hover:text-white cursor-pointer hover:scale-125"
                >
                    Explore
                </p>
                <p
                    className="font-itim font-semibold text-xl text-gray-200/60
                hover:text-white cursor-pointer hover:scale-125"
                >
                    Popular
                </p>
                <p
                    className="font-itim font-semibold text-xl text-gray-200/60
                hover:text-white cursor-pointer hover:scale-125"
                >
                    Photos
                </p>
            </div>

            {/* Right */}

            <div className="flex items-center flex-row space-x-5">
                <button
                    className="font-itim font-medium text-md text-white py-2 px-4 border border-white
                rounded-md hover:animate-pulse hover:text-black hover:bg-white"
                >
                    <span>+ Submit</span>
                </button>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        runCheckOperation();
                    }}
                    className="font-itim font-bold text-md text-black hover:animate-pulse bg-white
                px-5 py-2 rounded-md"
                >
                    <span>Sign in</span>
                </button>
            </div>
        </header>
    );
}

export default OverBoard;
