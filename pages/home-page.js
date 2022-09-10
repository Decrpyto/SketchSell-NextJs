import React from "react";
import Head from "next/head";
import SideBar from "../components/sideBar";
import RightBar from "../components/rightBar";
import MainPage from "../components/main-page";

function HomePage() {
    return (
        <div className="h-screen flex justify-between flex-row">
            <Head>
                <title>SketchSell</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,500;0,700;0,800;1,100;1,200;1,300;1,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            {/* SIDEBAR */}
            <SideBar />
            <MainPage />
            <RightBar />
        </div>
    );
}

export default HomePage;
