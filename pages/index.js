import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Body from "../components/Body";
import OverBoard from "../components/OverBoard";
import styles from "../styles/Home.module.css";
import { supabase } from "../Utils/SupabaseClient";

export default function Home() {
    return (
        <div className="h-screen bg-black">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <main>
                {/* OverBoarding Page */}

                <OverBoard />

                {/* Body */}

                <Body />
            </main>
        </div>
    );
}
