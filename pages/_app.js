import "../styles/globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../Utils/SupabaseClient";
import { useRouter } from "next/router";




function MyApp({ Component, pageProps }) {
    const [AuthenticatedState, setAuthenticatedState] =
        useState("not-authenticated");
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                handleAuthChange(event, session);
                if (event === "SIGNED_IN") {
                    setAuthenticatedState("authenticated");
                    setLoading(false);
                }
                if (event === "SIGNED_OUT") {
                    setAuthenticatedState("not-authenticated");
                    setLoading(false);

                    router.push("/home");
                }
            }
        );

        checkUser();

        return () => {
            authListener?.unsubscribe();
        };
    }, [AuthenticatedState]);

    async function handleAuthChange(event, session) {
        await fetch("/api/auth", {
            method: "POST",
            headers: new Headers({ "Content-type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
        });
    }

    async function checkUser() {
        const user = await supabase.auth.user();
        if (user) {
            setAuthenticatedState("authenticated");
        }
    }

    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
