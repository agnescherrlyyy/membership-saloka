import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import { mediaAuth } from "../../assets/auth";

export default function Layouts({ children, image }) {
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("1024"));

    return (
        <>
            <main
                className={`w-full max-w-full h-full min-h-screen ${
                    desktop ? "flex" : ""
                }`}
            >
                {desktop ? (
                    <>
                        <section className="w-[45%] 2xl:w-2/5 h-screen overflow-auto py-10 px-10">
                            {children}
                            <div className="w-full flex items-center justify-center mt-12">
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    © 2024 Saloka Theme Park, All rights
                                    reserved.
                                </Typography>
                            </div>
                        </section>
                        <section className="w-[55%] 2xl:w-3/5 h-screen flex items-center justify-center overflow-hidden bg-[#eefbf5]">
                            <img
                                src={image}
                                alt="Gambar Registrasi/Login"
                                className="w-full max-w-lg h-auto object-contain"
                            />
                        </section>
                    </>
                ) : (
                    <>
                        <section className="max-w-full w-full mih-h-screen h-full">
                            {children}
                            <div className="w-full flex items-center justify-center mt-12 pb-6">
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    © 2024 Saloka Theme Park, All rights
                                    reserved.
                                </Typography>
                            </div>
                        </section>
                    </>
                )}
            </main>
        </>
    );
}
