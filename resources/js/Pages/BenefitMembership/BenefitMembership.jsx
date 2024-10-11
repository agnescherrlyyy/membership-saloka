import { useState, useEffect, Suspense, lazy } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MainLayouts from "../../Layouts/Dashboard/Layouts";
import { mediaBenefitMembership } from "../../assets/benefit-membership";
import { Padding } from "@mui/icons-material";

export default function BenefitMembership() {
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

    //handle tab
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Head title="Benefit Membership - Saloka Membership" />
            <Suspense fallback={<LazyLoading />}>
                {desktop ? (
                    <>
                        <MainLayouts
                            title={"Benefit Membership"}
                            subTitle={"Benefit Membership"}
                        >
                            <div className="w-full px-4 mt-4">
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                    }}
                                >
                                    Membership Benefit
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        marginTop: ".2rem",
                                    }}
                                >
                                    Lebih Ceria Menjadi Membership Saloka
                                </Typography>
                                <Box
                                    sx={{
                                        width: "fit-content",
                                        marginTop: "2rem",
                                    }}
                                >
                                    <TabContext value={value}>
                                        <Box
                                            sx={{
                                                width: "fit-content",
                                                borderBottom: 1,
                                                borderColor: "divider",
                                            }}
                                        >
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                                sx={{
                                                    "& .MuiTabs-indicator": {
                                                        backgroundColor:
                                                            "#169870",
                                                    },
                                                    "& .MuiTab-root": {
                                                        color: "#525252",
                                                        "&.Mui-selected": {
                                                            color: "#169870",
                                                        },
                                                    },
                                                }}
                                            >
                                                <Tab
                                                    label="Staycation"
                                                    value="1"
                                                />
                                                <Tab label="Event" value="2" />
                                                <Tab
                                                    label="Kulineran"
                                                    value="3"
                                                />
                                            </TabList>
                                        </Box>
                                        {/* Staycation Content Start  */}
                                        <TabPanel value="1">
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                    marginTop: "1rem",
                                                    marginBottom: ".8rem",
                                                }}
                                            >
                                                Staycation Lebih Seru Dengan
                                                Promo Membership
                                            </Typography>
                                            <div className="w-full grid grid-cols-4 gap-4">
                                                {mediaBenefitMembership
                                                    .filter(
                                                        (item, index) =>
                                                            index < 4
                                                    )
                                                    .map((item, index) => (
                                                        <div
                                                            className="w-full flex flex-col gap-1 mt-2"
                                                            key={index}
                                                        >
                                                            <img
                                                                src={item}
                                                                alt="Gambar Benefit Membership"
                                                                className="w-full h-full object-cover object-center rounded-xl mb-3"
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "700",
                                                                    color: "#0a0a0a",
                                                                }}
                                                            >
                                                                Lebih ceria
                                                                dengan menikmati
                                                                promo staycation
                                                                di haris hotel
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
                                                                        fontSize:
                                                                            "14px",
                                                                        fontWeight:
                                                                            "700",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                >
                                                                    Cari lebih
                                                                    lanjut
                                                                </Typography>
                                                                <ArrowForwardIcon
                                                                    sx={{
                                                                        fontSize:
                                                                            "18px",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                />
                                                            </button>
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPanel>
                                        {/* Staycation Content End  */}

                                        {/* Event Content Start  */}
                                        <TabPanel value="2">
                                            <div className="w-full grid grid-cols-4 gap-4">
                                                {mediaBenefitMembership
                                                    .filter(
                                                        (item, index) =>
                                                            index >= 4
                                                    )
                                                    .map((item, index) => (
                                                        <div
                                                            className="w-full flex flex-col gap-1 mt-2"
                                                            key={index}
                                                        >
                                                            <img
                                                                src={item}
                                                                alt="Gambar Benefit Membership"
                                                                className="w-full h-full object-cover object-center rounded-xl mb-3"
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "700",
                                                                    color: "#0a0a0a",
                                                                }}
                                                            >
                                                                Lebih ceria
                                                                dengan menikmati
                                                                promo staycation
                                                                di haris hotel
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
                                                                        fontSize:
                                                                            "14px",
                                                                        fontWeight:
                                                                            "700",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                >
                                                                    Cari lebih
                                                                    lanjut
                                                                </Typography>
                                                                <ArrowForwardIcon
                                                                    sx={{
                                                                        fontSize:
                                                                            "18px",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                />
                                                            </button>
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPanel>
                                        {/* Event Content End  */}

                                        {/* Kulineran Content Start  */}
                                        <TabPanel value="3">
                                            Kulineran Content
                                        </TabPanel>
                                        {/* Kulineran Content Start  */}
                                    </TabContext>
                                </Box>
                            </div>
                        </MainLayouts>
                    </>
                ) : (
                    <>
                        <MainLayouts
                            title={"Benefit Membership"}
                            subTitle={"Benefit Membership"}
                        >
                            <div className="w-full px-2 mt-4">
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                    }}
                                >
                                    Membership Benefit
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        marginTop: ".2rem",
                                    }}
                                >
                                    Lebih Ceria Menjadi Membership Saloka
                                </Typography>
                                <Box
                                    sx={{
                                        width: "fit-content",
                                        marginTop: "2rem",
                                    }}
                                >
                                    <TabContext value={value}>
                                        <Box
                                            sx={{
                                                width: "fit-content",
                                                borderBottom: 1,
                                                borderColor: "divider",
                                            }}
                                        >
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                                sx={{
                                                    "& .MuiTabs-indicator": {
                                                        backgroundColor:
                                                            "#169870",
                                                    },
                                                    "& .MuiTab-root": {
                                                        color: "#525252",
                                                        "&.Mui-selected": {
                                                            color: "#169870",
                                                        },
                                                    },
                                                }}
                                            >
                                                <Tab
                                                    label="Staycation"
                                                    value="1"
                                                />
                                                <Tab label="Event" value="2" />
                                                <Tab
                                                    label="Kulineran"
                                                    value="3"
                                                />
                                            </TabList>
                                        </Box>
                                        {/* Staycation Content Start  */}
                                        <TabPanel value="1" sx={{ p: ".5rem" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                    marginTop: "1rem",
                                                    marginBottom: ".8rem",
                                                }}
                                            >
                                                Staycation lebih seru dengan
                                                promo membership
                                            </Typography>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {mediaBenefitMembership
                                                    .filter(
                                                        (item, index) =>
                                                            index < 4
                                                    )
                                                    .map((item, index) => (
                                                        <div
                                                            className="w-full flex flex-col gap-1 mt-2"
                                                            key={index}
                                                        >
                                                            <img
                                                                src={item}
                                                                alt="Gambar Benefit Membership"
                                                                className="w-full h-full object-cover object-center rounded-xl mb-3"
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "700",
                                                                    color: "#0a0a0a",
                                                                }}
                                                            >
                                                                Lebih ceria
                                                                dengan menikmati
                                                                promo staycation
                                                                di haris hotel
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
                                                                        fontSize:
                                                                            "14px",
                                                                        fontWeight:
                                                                            "700",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                >
                                                                    Cari lebih
                                                                    lanjut
                                                                </Typography>
                                                                <ArrowForwardIcon
                                                                    sx={{
                                                                        fontSize:
                                                                            "18px",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                />
                                                            </button>
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPanel>
                                        {/* Staycation Content End  */}

                                        {/* Event Content Start  */}
                                        <TabPanel value="2" sx={{ p: ".5rem" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                    marginTop: "1rem",
                                                    marginBottom: ".8rem",
                                                }}
                                            >
                                                Nikmati event yang menarik promo
                                                membership
                                            </Typography>
                                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {mediaBenefitMembership
                                                    .filter(
                                                        (item, index) =>
                                                            index >= 4
                                                    )
                                                    .map((item, index) => (
                                                        <div
                                                            className="w-full flex flex-col gap-1 mt-2"
                                                            key={index}
                                                        >
                                                            <img
                                                                src={item}
                                                                alt="Gambar Benefit Membership"
                                                                className="w-full h-full object-cover object-center rounded-xl mb-3"
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "700",
                                                                    color: "#0a0a0a",
                                                                }}
                                                            >
                                                                Lebih ceria
                                                                dengan menikmati
                                                                promo staycation
                                                                di haris hotel
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
                                                                        fontSize:
                                                                            "14px",
                                                                        fontWeight:
                                                                            "700",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                >
                                                                    Cari lebih
                                                                    lanjut
                                                                </Typography>
                                                                <ArrowForwardIcon
                                                                    sx={{
                                                                        fontSize:
                                                                            "18px",
                                                                        color: "#169870",
                                                                        "&:hover":
                                                                            {
                                                                                color: "#107254",
                                                                            },
                                                                    }}
                                                                />
                                                            </button>
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPanel>
                                        {/* Event Content End  */}

                                        {/* Kulineran Content Start  */}
                                        <TabPanel value="3" sx={{ p: ".5rem" }}>
                                            Kulineran Content
                                        </TabPanel>
                                        {/* Kulineran Content Start  */}
                                    </TabContext>
                                </Box>
                            </div>
                        </MainLayouts>
                    </>
                )}
            </Suspense>
        </>
    );
}
