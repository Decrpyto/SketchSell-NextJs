import React, { useState, useRef, useId } from "react";
import Head from "next/head";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";
import { supabase } from "../Utils/SupabaseClient";

import { v4 as uuidv4 } from "uuid";

function upload({ userId }) {
    const [ArtsFileName, setArtsFileName] = useState(null);
    const id = useId(userId);

    const [TagName, setTagName] = useState([""]);

    const [Price, setPrice] = useState(0);
    const [Name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [StorageResponseURL, setStorageResponseURL] = useState("");

    const filePickerRef = useRef(null);
    const addImageToPost = (e) => {
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setArtsFileName(readerEvent.target.result);
        };
    };

    async function uploadImage() {
        const { data, error } = await supabase.storage
            .from("arts")
            .upload(`${id}/${uuidv4()}`, ArtsFileName, {
                cacheControl: "3600",
                upsert: false,
            });

        if (error) {
            alert(error.message);
        }

        if (data) {
            setStorageResponseURL(data.Key);

            updateDatabase();
        }
    }

    async function updateDatabase() {
        const { data, error } = await supabase.from("arts").insert({
            uploaded_by: id,
            priced_at: Price,
            arts_url: StorageResponseURL,
            is_purchased: false,
            name: Name,
            description: description,
        });

        if (data) {
            <div className="alert alert-success shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Your Image has been uploaded successfully.</span>
                </div>
            </div>;
        }

        if (error) {
            <div className="alert alert-error shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Error! Task failed successfully.</span>
                </div>
            </div>;
        }
    }

    return (
        <div className="h-screen bg-black">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mt-10">
                    <h1 className="font-montserrat text-6xl font-extrabold text-white">
                        UPLOAD ART
                    </h1>
                    <h2 className="font-montserrat text-2xl font-extrabold text-gray-400/80 mt-2">
                        upload your art that you want to sell.
                    </h2>
                </div>

                <div className="flex flex-row space-x-5">
                    <div className="flex flex-col">
                        <div className="flex justify-center items-center w-[600px] h-16 bg-gray-600/5 mt-5 rounded-md">
                            <div className="">
                                <h2 className="font-montserrat font-bold">
                                    REQUIRED INFORMATION
                                </h2>
                            </div>
                        </div>
                        <div className="mb-3 xl:w-96 mt-10">
                            <label
                                for="exampleFormControlTextarea1"
                                className="form-label inline-block mb-2  label-text font-montserrat font-semibold"
                            >
                                Art Description
                            </label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                className="
                                form-control
                                block
                                bg-gray-400/5
                                w-full
                                px-3
                                py-1.5

                                font-montserrat 
                                
                                text-base
                                h-[300px]
                                font-normal
                                text-gray-700
                                bg-clip-padding
                                border border-solid border-gray-400/5
                                rounded-xl
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-transparent focus:border-gray-400/20 focus:outline-none
                                "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="form-control w-full  max-w-md mt-5">
                            <label className="label">
                                <span className="label-text font-montserrat font-semibold">
                                    Enter Tags
                                </span>
                            </label>
                            <input
                                onClick={(e) => setTagName(e.target.value)}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md bg-gray-600/5 font-medium font-montserrat"
                            />
                        </div>

                        <div className="form-control w-full  max-w-md mt-5">
                            <label className="label">
                                <span className="label-text font-montserrat font-semibold">
                                    Enter Art Name
                                </span>
                            </label>
                            <input
                                onClick={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md bg-gray-600/5 font-medium font-montserrat"
                            />
                        </div>
                        <div className="flex flex-row space-x-2 ">
                            <div className="form-control w-[150px] mt-2">
                                <label className="label">
                                    <span className="label-text font-montserrat font-semibold text-sm">
                                        Enter Price
                                    </span>
                                </label>
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-sm bg-gray-600/5 font-medium font-montserrat"
                                />
                            </div>

                            <div className="mt-[44px]  bg-black border-2 border-gray-500/10 hover:bg-white  rounded-xl ">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        uploadImage();
                                    }}
                                    className="btn gap-2 w-28 bg-black "
                                >
                                    <ArrowUpOnSquareStackIcon className="text-white h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* right part */}
                    <div
                        className={`flex bg-gray-400/5 ${
                            ArtsFileName
                                ? "h-[580px] max-w-xl w-[576px]"
                                : "h-[655px] max-w-xl w-[576px]"
                        } mt-5 rounded-2xl ${
                            ArtsFileName ? "" : "justify-center items-center"
                        }`}
                    >
                        {ArtsFileName === null ? (
                            <div onClick={() => filePickerRef.current.click()}>
                                <div className="btn bg-black border-2 border-white ">
                                    <span>SELECT IMAGE</span>
                                </div>
                                <input
                                    ref={filePickerRef}
                                    type="file"
                                    onChange={addImageToPost}
                                    hidden
                                />
                            </div>
                        ) : (
                            <div className="bg-gray-400/5 border-2 border-white object-cover">
                                <img
                                    src={ArtsFileName}
                                    width={576}
                                    height={600}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default upload;
