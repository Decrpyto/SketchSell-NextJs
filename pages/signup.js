import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { supabase } from "../Utils/SupabaseClient";

function signup() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);
    const handleSignup = async () => {
        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signUp({
                email: Email,
                password: Password,
            });
            setLoading(false);
            if (error) {
                alert(error.message);
            }

            if (user) {
                alert(
                    "please confirm you email by clicking on the verification link sent to your email"
                );
            }
        } catch (error) {
            alert("incorrect credentials");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="h-screen bg-black flex justify-center items-center">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <div className="flex flex-col">
                <div>
                    <h1 className="font-montserrat font-extrabold text-white text-2xl">
                        Create Account
                    </h1>
                    <h2 className="font-montserrat font-semibold text-gray-300/50 text-xl">
                        Please enter credentials for your account.
                    </h2>
                </div>

                <div className="flex bg-gray-500/10 w-50 h-10  rounded-xl mt-5 items-center ">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-base outline-none  bg-transparent font-itim font-medium  flex-grow ml-2 mr-2 text-white
                        placeholder-gray-400 "
                        placeholder="enter email"
                        type={"text"}
                    />
                </div>
                <div className="flex bg-gray-500/10 w-50 h-10  rounded-xl mt-5 items-center ">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="outline-none  bg-transparent font-itim font-medium text-base flex-grow ml-2 mr-2 text-white
                        placeholder-gray-400 "
                        placeholder="enter password"
                        type={"password"}
                    />
                </div>

                <button
                    className="flex justify-center items-center font-montserrat font-semibold text-white mt-5
                w-40 h-10 rounded-xl"
                >
                    <h1>Forgot Password</h1>
                </button>

                <div
                    onClick={(e) => {
                        e.preventDefault();
                        handleSignup();
                    }}
                    className="h-12 border border-white w-50 rounded-xl mt-5 flex justify-center items-center
                cursor-pointer hover:animate-pulse"
                >
                    <button>
                        <span className="font-montserrat font-bold text-xl text-white">
                            CREATE ACCOUNT
                        </span>
                    </button>
                </div>

                <Link href="/login">
                    <div
                        className="h-12 border border-white w-50 rounded-xl mt-5 flex justify-center items-center bg-white
                cursor-pointer hover:animate-pulse"
                    >
                        <button>
                            <span className="font-montserrat font-bold text-xl text-black">
                                ALREADY HAVE AN ACCOUNT
                            </span>
                        </button>
                    </div>
                </Link>

                <div className="flex space-x-2 w-50 mt-5 items-center justify-center">
                    <span className="bg-gray-300 h-px flex-1 " />
                    <span className="font-semibold font-montserrat text-white">
                        Or
                    </span>
                    <span className="bg-gray-300 h-px flex-1 " />
                </div>
                <div
                    className="h-12 border border-white w-50 rounded-xl mt-5 flex justify-center items-center
                cursor-pointer hover:animate-pulse"
                >
                    <button>
                        <span className="font-montserrat font-bold text-xl text-white">
                            LOGIN with GOOGLE
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default signup;
