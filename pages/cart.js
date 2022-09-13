import React, { useState } from "react";
import Head from "next/head";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import List from "../components/list";
import logo from "../assets/p-1.jpg";
import { supabase } from "../Utils/SupabaseClient";
function Cart({ userId }) {
    const [CartContents, setCartContents] = useState([]);

    const [total, setTotal] = useState(0);

    async function getUserCartContents() {
        const { data, error } = await supabase
            .from("cart")
            .select("art_url,dimensions,priced_at")
            .eq("owner_id", userId);

        if (data) {
            setCartContents(data);
        }

        const sum = CartContents.priced_at;

        calculateTotal(sum);

        function calculateTotal(item) {
            sumAmount += item;

            setTotal(sumAmount);
        }

        if (error) {
            alert(error.message || "something went wrong");
        }
    }

    return (
        <div className="bg-black h-screen w-screen p-10 ">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h1 className="font-montserrat font-extrabold text-6xl text-white ">
                        CART
                    </h1>
                    <div className="flex justify-center items-center w-[600px] h-16 bg-gray-600/5 mt-5 rounded-md">
                        <div className="">
                            <h2 className="font-montserrat font-bold">
                                PAYMENT SECTION
                            </h2>
                        </div>
                    </div>
                    <div
                        className="flex  h-16 w-60 bg-gray-700/10 rounded-md mt-10 
                    items-center justify-center "
                    >
                        <div className="flex flex-row font-montserrat text-white space-x-4 items-center">
                            <CreditCardIcon className="h-8 w-8" />
                            <div>
                                <h1>Credit / Debit Card</h1>
                            </div>
                        </div>
                    </div>

                    <div className="form-control w-full  max-w-md mt-10">
                        <label className="label">
                            <span className="label-text font-montserrat font-semibold">
                                Enter Card Number*
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-md bg-gray-600/5 font-medium font-montserrat"
                        />
                    </div>
                    <div className="flex flex-row space-x-2 ">
                        <div className="form-control w-[150px] mt-2">
                            <label className="label">
                                <span className="label-text font-montserrat font-semibold text-sm">
                                    Valid Month
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-sm bg-gray-600/5 font-medium font-montserrat"
                            />
                        </div>
                        <div className="form-control w-[150px] mt-2">
                            <label className="label">
                                <span className="label-text font-montserrat font-semibold text-sm">
                                    Valid Year
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-sm bg-gray-600/5 font-medium font-montserrat"
                            />
                        </div>
                        <div className="form-control w-[150px] mt-2">
                            <label className="label">
                                <span className="label-text font-montserrat font-semibold text-sm">
                                    CVV*
                                </span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-sm bg-gray-600/5 font-medium font-montserrat"
                            />
                        </div>
                        <div className="mt-[44px]  bg-black border-2 border-gray-500/10 hover:bg-white  rounded-xl">
                            <button class="btn gap-2 w-28 bg-black">
                                PAY ${total}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-[0.2px] mt-20 ml-16 border-white h-[700px] w-[500px] rounded-xl">
                    <div className="flex m-5 flex-col">
                        <div>
                            <div className="flex h-[560px] flex-grow  flex-col">
                                <h1 className="font-montserrat font-semibold text-xl">
                                    In Your Cart
                                </h1>
                                <div class="flex flex-col w-full border-opacity-50">
                                    <div className="divider"></div>
                                </div>
                                {CartContents.length === 0 ? (
                                    <div className="flex justify-center items-center h-[700px]">
                                        <h1 className="font-montserrat font-semibold text-gray-300 text-lg">
                                            Your cart is empty.
                                        </h1>
                                    </div>
                                ) : (
                                    CartContents.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-row space-x-5"
                                        >
                                            <img
                                                src={item.arts_url}
                                                className="rounded-xl"
                                                height={60}
                                                width={60}
                                            />
                                            <div className="flex flex-col">
                                                <h1 className="font-montserrat font-bold text-base text-white">
                                                    {item.name}
                                                </h1>
                                                <h4 className="font-montserrat font-semibold text-sm">
                                                    Dimensions :{" "}
                                                    <span className="font-montserrat font-semibold text-sm text-white">
                                                        {item.dimensions}
                                                    </span>
                                                </h4>
                                                <h6 className="font-montserrat font-semibold text-sm mt-3">
                                                    {item.priced_at}
                                                </h6>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="bg-gray-600/5 h-20 rounded-xl mt-5 mb-5 flex flex-row space-x-2 p-5">
                                <h1 className="font-montserrat font-semibold text-xl text-white ">
                                    TOTAL :
                                </h1>
                                <span className="font-montserrat font-bold text-white text-xl ">
                                    ${total}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
