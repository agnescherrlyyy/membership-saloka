import { useState, useEffect, Suspense, lazy } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MainLayouts from "../../Layouts/Dashboard/Layouts";
import { mediaDashboard } from "../../assets/dashboard";
import { dataDummy } from "./dataDummy";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
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
            <Head title="Dashboard - Saloka Membership" />
            <Suspense fallback={<LazyLoading />}>
                {desktop ? (
                    <>
                        <MainLayouts
                            title={"Home"}
                            subTitle={"Analisis Dashboard Membership"}
                        >
                            <div className="max-w-full w-full grid grid-cols-3 gap-2 mt-2 px-4">
                                <div className="col-span-2 row-span-2 relative">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={false}
                                        modules={[
                                            Autoplay,
                                            Pagination,
                                            Navigation,
                                        ]}
                                        className="mySwiper"
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src={mediaDashboard[0]}
                                                alt="Gambar Banner"
                                                className="w-full h-full object-cover object-center rounded-2xl shadow-md"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src={mediaDashboard[0]}
                                                alt="Gambar Banner"
                                                className="w-full h-full object-cover object-center rounded-2xl shadow-md"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div
                                        className="w-2/5 h-full absolute flex flex-col justify-center top-0 right-0 z-10 rounded-r-xl px-4"
                                        style={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "24px",
                                                fontWeight: "700",
                                                color: "white",
                                                textAlign: "left",
                                            }}
                                        >
                                            Lebih Ceria Bersama Saloka
                                            Membership
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: "500",
                                                color: "#fafafa",
                                                textAlign: "left",
                                            }}
                                        >
                                            Belum bergabung?
                                        </Typography>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                redirect(
                                                    "/registrasi-membership"
                                                )
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontWeight: "800",
                                                    color: "#F39F19",
                                                    textAlign: "left",
                                                    ":hover": {
                                                        color: "#f5b247",
                                                    },
                                                    textDecoration: "underline",
                                                    textUnderlinePosition:
                                                        "under",
                                                    textUnderlineOffset: "3px",
                                                }}
                                            >
                                                Daftar Sekarang!
                                            </Typography>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-1 row-span-2">
                                    <img
                                        src={mediaDashboard[1]}
                                        alt="Gambar Banner"
                                        className="w-full h-full object-cover object-center rounded-2xl shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="max-w-full w-full mt-9 px-4">
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                    }}
                                >
                                    Membership Benefit HS
                                </Typography>
                                <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-2">
                                    {dataDummy.length > 0 &&
                                        dataDummy.map((item, index) => (
                                            <div
                                                className="w-full flex flex-col gap-1 mt-2"
                                                key={index}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt="Gambar Banner"
                                                    className="w-full h-full object-cover object-center rounded-xl mb-2"
                                                />
                                                <Typography
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: "700",
                                                        color: "#0a0a0a",
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                        color: "#0a0a0a",
                                                        textAlign: "justify",
                                                    }}
                                                >
                                                    {item.desc}
                                                </Typography>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        redirect(
                                                            "/benefit-membership"
                                                        )
                                                    }
                                                    className="flex items-center gap-2 mt-1 group"
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: "14px",
                                                            fontWeight: "700",
                                                            color: "#169870",
                                                            "&:hover": {
                                                                color: "#107254",
                                                            },
                                                        }}
                                                    >
                                                        Cari lebih lanjut
                                                    </Typography>
                                                    <ArrowForwardIcon
                                                        sx={{
                                                            fontSize: "18px",
                                                            color: "#169870",
                                                            "&:hover": {
                                                                color: "#107254",
                                                            },
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </MainLayouts>
                    </>
                ) : (
                    <>
                        <MainLayouts
                            title={"Home"}
                            subTitle={"Analisis Dashboard Membership"}
                        >
                            <div className="max-w-full w-full grid grid-cols-1 gap-2 mt-2 px-2">
                                <div className="relative">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={false}
                                        modules={[
                                            Autoplay,
                                            Pagination,
                                            Navigation,
                                        ]}
                                        className="mySwiper"
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src={mediaDashboard[0]}
                                                alt="Gambar Banner"
                                                className="w-full h-full object-cover object-center rounded-2xl shadow-md"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src={mediaDashboard[0]}
                                                alt="Gambar Banner"
                                                className="w-full h-full object-cover object-center rounded-2xl shadow-md"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div
                                        className="w-1/2 h-full absolute flex flex-col justify-center top-0 right-0 z-10 rounded-r-xl px-4"
                                        style={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "700",
                                                color: "white",
                                                textAlign: "left",
                                            }}
                                        >
                                            Lebih Ceria Bersama Saloka
                                            Membership
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#fafafa",
                                                textAlign: "left",
                                            }}
                                        >
                                            Belum bergabung?
                                        </Typography>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                redirect(
                                                    "/registrasi-membership"
                                                )
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                    color: "#F39F19",
                                                    textAlign: "left",
                                                    ":hover": {
                                                        color: "#f5b247",
                                                    },
                                                }}
                                            >
                                                Daftar Sekarang!
                                            </Typography>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-full w-full mt-9 px-2">
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                    }}
                                >
                                    Membership Benefit
                                </Typography>
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    {dataDummy.length > 0 &&
                                        dataDummy.map((item, index) => (
                                            <div
                                                className="w-full flex flex-col gap-1 mt-2"
                                                key={index}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt="Gambar Banner"
                                                    className="w-full h-full object-cover object-center rounded-xl mb-2"
                                                />
                                                <Typography
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: "700",
                                                        color: "#0a0a0a",
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                        color: "#0a0a0a",
                                                        textAlign: "justify",
                                                    }}
                                                >
                                                    {item.desc}
                                                </Typography>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        redirect(
                                                            "/benefit-membership"
                                                        )
                                                    }
                                                    className="flex items-center gap-2 mt-1 group"
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: "14px",
                                                            fontWeight: "700",
                                                            color: "#169870",
                                                            "&:hover": {
                                                                color: "#107254",
                                                            },
                                                        }}
                                                    >
                                                        Cari lebih lanjut
                                                    </Typography>
                                                    <ArrowForwardIcon
                                                        sx={{
                                                            fontSize: "18px",
                                                            color: "#169870",
                                                            "&:hover": {
                                                                color: "#107254",
                                                            },
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </MainLayouts>
                    </>
                )}
            </Suspense>
        </>
    );
}
