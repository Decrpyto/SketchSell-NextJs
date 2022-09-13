import React from "react";

function Card({ name, priced_at }) {
    return (
        <div className="h-[350px] w-[350px] bg-gray-800/20 rounded-xl p-2 m-5 flex flex-col">
            <Image
                src={logo}
                className="h-[300px] object-contain w-[320] rounded-xl"
            />
            <div>
                <div className="mt-5 ml-2 font-montserrat font-semibold text-white text-xl">
                    <h1>Fantasy World</h1>
                </div>
            </div>

            <div
                className="border border-white h-14 rounded-xl text-white font-montserrat
                            font-extrabold bg-black hover:text-black hover:bg-white hover:animate-pulse
                            justify-center items-center flex mt-5
                        "
                onClick={(e) => {
                    router.push("/details");
                }}
            >
                <span>ADD TO CART</span>
            </div>
        </div>
    );
}

export default Card;
