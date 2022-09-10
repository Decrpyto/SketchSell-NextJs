import React from "react";
import Head from "next/head";

function confirmPassword() {
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
                        Confirm Password
                    </h1>
                    <h2 className="font-montserrat font-semibold text-gray-300/50 text-xl">
                        Please enter the registered email of the account.
                    </h2>
                </div>
                <div className="flex bg-gray-500/10 w-50 h-10  rounded-xl mt-5 items-center ">
                    <input
                        className="text-base outline-none bg-transparent font-itim font-medium  flex-grow ml-2 mr-2 text-white
                        placeholder-gray-400 "
                        placeholder="enter email"
                        type={"email"}
                    />
                </div>

                <div
                    className="h-12 border border-white w-50 rounded-xl mt-5 flex justify-center items-center
                cursor-pointer hover:animate-pulse"
                >
                    <button>
                        <span className="font-montserrat font-bold text-xl text-white">
                            CHANGE PASSWORD
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default confirmPassword;
