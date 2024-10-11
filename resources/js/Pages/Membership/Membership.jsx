import { useState, useEffect, Suspense, lazy } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import MainLayouts from "../../Layouts/Dashboard/Layouts";
import { mediaMembership } from "../../assets/membership";

export default function Membership() {
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("1024"));

    //rederect
    const redirect = (route) => {
        Inertia.visit(route);
    };

    //lazy loading
    const LazyLoading = lazy(() =>
        import("../../Components/LazyLoading/LazyLoading")
    );

    return (
        <>
            <Head title="Membership - Saloka Membership" />
            <Suspense fallback={<LazyLoading />}>
                {desktop ? (
                    <>
                        <MainLayouts
                            title={"Membership"}
                            subTitle={"Detail Membership"}
                        >
                            <div className="max-w-full w-full flex gap-12 mt-4 px-4">
                                <div className="w-full">
                                    <div className="w-full flex items-center gap-2 p-2 rounded-xl border border-gray-200">
                                        <img
                                            src={mediaMembership[1]}
                                            alt="Gambar QR Code Membership"
                                        />
                                        <div className="w-full">
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                    marginTop: "1rem",
                                                }}
                                            >
                                                Agnes Cherrly
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    color: "#525252",
                                                }}
                                            >
                                                Membership
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Salatiga, Jawa Tengah
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="w-full px-2 py-4 rounded-lg border border-gray-200 mt-6">
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                paddingX: "1rem",
                                            }}
                                        >
                                            Detail Profil
                                        </Typography>
                                        <div className="w-full grid grid-cols-2 gap-4 mt-3">
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Nama Lengkap
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    Agnes Cherrly
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Alamat Email
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                        wordBreak: "break-all",
                                                    }}
                                                >
                                                    agnescherrlyy.94@gmail.com
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Alamat
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    Jalan kemiri candi, gang
                                                    pertama, Salatiga, Jawa
                                                    Tengah
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Tempat dan Tanggal Lahir
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    19 Januari 2002
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    No KTP
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    33115544887799464
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <img
                                        src={mediaMembership[0]}
                                        alt="Gambar Card Membership"
                                        className="w-full h-84 object-cover object-center rounded-lg overflow-hidden"
                                    />
                                </div>
                            </div>
                        </MainLayouts>
                    </>
                ) : (
                    <>
                        <MainLayouts
                            title={"Membership"}
                            subTitle={"Detail Membership"}
                        >
                            <div className="max-w-full w-full flex flex-col gap-12 mt-4 px-2">
                                <div className="w-full">
                                    <img
                                        src={mediaMembership[0]}
                                        alt="Gambar Card Membership"
                                        className="w-full h-84 object-cover object-center rounded-lg overflow-hidden"
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex items-center gap-2 p-2 rounded-xl border border-gray-200">
                                        <img
                                            src={mediaMembership[1]}
                                            alt="Gambar QR Code Membership"
                                        />
                                        <div className="w-full">
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                    marginTop: "1rem",
                                                }}
                                            >
                                                Agnes Cherrly
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    color: "#525252",
                                                }}
                                            >
                                                Membership
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                Salatiga, Jawa Tengah
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="w-full px-2 py-4 rounded-lg border border-gray-200 mt-6">
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                paddingX: "1rem",
                                            }}
                                        >
                                            Detail Profil
                                        </Typography>
                                        <div className="w-full grid grid-cols-2 gap-4 mt-3">
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Nama Lengkap
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    Agnes Cherrly
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Alamat Email
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                        wordBreak: "break-all",
                                                    }}
                                                >
                                                    agnescherrlyy.94@gmail.com
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Alamat
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    Jalan kemiri candi, gang
                                                    pertama, Salatiga, Jawa
                                                    Tengah
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    Tempat dan Tanggal Lahir
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    19 Januari 2002
                                                </Typography>
                                            </div>
                                            <div className="w-ful flex flex-col gap-1">
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "500",
                                                        paddingX: "1rem",
                                                        color: "#525252",
                                                    }}
                                                >
                                                    No KTP
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "700",
                                                        paddingX: "1rem",
                                                    }}
                                                >
                                                    33115544887799464
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MainLayouts>
                    </>
                )}
            </Suspense>
        </>
    );
}
