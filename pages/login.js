import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { supabase } from "../Utils/SupabaseClient";

function login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            const { user, session, error } = await supabase.auth.signIn({
                email: Email,
                password: Password,
            });

            setLoading(false);
            if (error) {
                alert(error.message);
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

            <div className="flex flex-col ">
                <div>
                    <h1 className="font-montserrat font-extrabold text-white text-2xl">
                        Login
                    </h1>
                    <h2 className="font-montserrat font-semibold text-gray-300/50 text-xl">
                        Please enter credentials for your account.
                    </h2>
                </div>
                <div className="flex bg-gray-500/10 w-50 h-10  rounded-xl mt-5 items-center ">
                    <input
                        className="text-base outline-none  bg-transparent font-itim font-medium  flex-grow ml-2 mr-2 text-white
                        placeholder-gray-400 "
                        placeholder="enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        type={"email"}
                    />
                </div>
                <div className="flex bg-gray-500/10 w-50 h-10  rounded-xl mt-5 items-center ">
                    <input
                        className="outline-none  bg-transparent font-itim font-medium text-base flex-grow ml-2 mr-2 text-white
                        placeholder-gray-400 "
                        placeholder="enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                    />
                </div>

                <Link href="/forgotPassword">
                    <button
                        className="flex justify-center items-center font-montserrat font-semibold text-white mt-5
                w-40 h-10 rounded-xl"
                    >
                        <h1>Forgot Password</h1>
                    </button>
                </Link>

                <div
                    className="h-12 border border-white w-50 rounded-xl mt-5 flex justify-center items-center
                cursor-pointer hover:animate-pulse"
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                    >
                        <span className="font-montserrat font-bold text-xl text-white">
                            LOGIN
                        </span>
                    </button>
                </div>

                <Link href="/signup">
                    <div
                        className="h-12 border border-white w-50 rounded-xl mt-5 flex justify-center items-center bg-white
                cursor-pointer hover:animate-pulse"
                    >
                        <button>
                            <span className="font-montserrat font-bold text-xl text-black">
                                REGISTER
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

export default login;
