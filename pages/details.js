import React from "react";
import logo from "../assets/p-1.jpg";
import Image from "next/image";
import Head from "next/head";

function Details() {
    return (
        <div className="h-screen bg-black flex  justify-center items-center">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div className="max-w-7xl mx-auto h-[800px] w-[1500px] rounded-3xl bg-gray-400/5">
                <div className="card h-[800px] lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://placeimg.com/200/280/arch"
                            alt="Album"
                            className="h-[800px] w-[750px] object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-montserrat">
                            New album is released!
                        </h2>
                        <p className="font-montserrat font-medium text-md">
                            this took half a way of designing and work ethics
                            from me i call myself a imaginative person. There
                            are times, when i wish there was a fantasy world
                            where there was no pain. Things get hard a lot of
                            times. There's only one thing i'll say is never let
                            yourself get beaten down. if the good time didn't
                            last the bad time won't run for long either. Just
                            have FAITH in Lord Krishna and Lord Shiva. It'll all
                            be good.
                        </p>
                        <p className="font-montserrat font-medium text-md">
                            Dimensions : 1920 x 1080
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
