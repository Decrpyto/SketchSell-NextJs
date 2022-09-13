import React, { useState, useEffect } from "react";
import { supabase } from "../Utils/SupabaseClient";
import logo from "../assets/p-1.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "./Card";

function MainPage() {
    const [loading, setLoading] = useState(false);
    const [artsPost, setArtsPost] = useState([]);

    const router = useRouter();
    const getArts = async () => {
        try {
            const { data, error } = await supabase
                .from("arts")
                .select("id,arts_url,name, priced_at, uploaded_by")
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

    useEffect(() => {
        getArts();
    }, []);

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
                    {artsPost.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            priced_at={item.priced_at}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
