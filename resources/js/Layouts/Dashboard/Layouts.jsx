import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from "@mui/icons-material/Settings";
import CallIcon from "@mui/icons-material/Call";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { mediaAllAccess } from "../../assets/all-access";
export default function MainLayouts({ children, title, subTitle }) {
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("1024"));

    //rederect
    const redirect = (route) => {
        Inertia.visit(route);
    };

    const [sidebarHide, setSidebarHide] = useState(false);
    const [sidebarShow, setSidebarShow] = useState(false);

    const toggleSidebar = (e) => {
        e.preventDefault();
        setSidebarHide(!sidebarHide);
    };

    const isHomeActive = location.pathname === "/home";
    const isMembershipActive = location.pathname === "/membership";

    return (
        <>
            <Head title="Dashboard - Saloka Membership" />
            <main className="w-full max-w-full h-full min-h-full">
                {desktop ? (
                    <>
                        <section
                            className={`sidebar ${sidebarHide ? "close" : ""}`}
                        >
                            <div className="w-full flex items-center justify-center px-2">
                                <img
                                    src={mediaAllAccess[0]}
                                    alt="Logo Saloka"
                                    className={`${
                                        sidebarHide ? "w-20" : "w-32"
                                    } h-auto object-cover object-center`}
                                />
                            </div>
                            <div className="w-full px-3 mt-10">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        color: "#9ca3af",
                                    }}
                                >
                                    OVERVIEW
                                </Typography>
                            </div>
                            <ul className="w-full mt-2 py-2 px-3">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => redirect("/home")}
                                        className={`w-full ${
                                            sidebarHide
                                                ? "blcok"
                                                : "flex  items-center gap-2"
                                        } px-2.5 py-2.5 ${
                                            isHomeActive
                                                ? "bg-[#eefbf5] mb-1"
                                                : "hover:bg-[#f5f5f5]"
                                        } rounded-lg transition-all ease-in-out`}
                                    >
                                        <DashboardIcon
                                            sx={{
                                                fontSize: sidebarHide
                                                    ? "24px"
                                                    : "20px",
                                                color: isHomeActive
                                                    ? "#169870"
                                                    : "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: isHomeActive
                                                    ? "#169870"
                                                    : "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Dashboard
                                        </Typography>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => redirect("/membership")}
                                        className={`w-full ${
                                            sidebarHide
                                                ? "blcok"
                                                : "flex  items-center gap-2"
                                        } px-2.5 rounded-lg py-2.5 ${
                                            isMembershipActive
                                                ? "bg-[#eefbf5] my-1"
                                                : "hover:bg-[#f5f5f5]"
                                        }`}
                                    >
                                        <CardMembershipIcon
                                            sx={{
                                                fontSize: sidebarHide
                                                    ? "24px"
                                                    : "20px",
                                                color: isMembershipActive
                                                    ? "#169870"
                                                    : "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: isMembershipActive
                                                    ? "#169870"
                                                    : "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Membership
                                        </Typography>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`w-full ${
                                            sidebarHide
                                                ? "blcok"
                                                : "flex  items-center gap-2"
                                        } px-2.5 rounded-lg py-2.5 hover:bg-[#f5f5f5]`}
                                    >
                                        <InboxIcon
                                            sx={{
                                                fontSize: sidebarHide
                                                    ? "24px"
                                                    : "20px",
                                                color: "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Inbox
                                        </Typography>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`w-full ${
                                            sidebarHide
                                                ? "blcok"
                                                : "flex  items-center gap-2"
                                        } px-2.5 rounded-lg py-2.5 hover:bg-[#f5f5f5]`}
                                    >
                                        <SettingsIcon
                                            sx={{
                                                fontSize: sidebarHide
                                                    ? "24px"
                                                    : "20px",
                                                color: "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Setting
                                        </Typography>
                                    </button>
                                </li>
                            </ul>
                            <div className="w-full px-3 mt-10 absolute bottom-0 pb-6">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        color: "#9ca3af",
                                        marginBottom: "8px",
                                    }}
                                >
                                    SETTING
                                </Typography>
                                <button
                                    type="button"
                                    className={`w-full ${
                                        sidebarHide
                                            ? "block"
                                            : "flex items-center gap-2"
                                    } px-2.5 py-2.5 rounded-lg transition-all ease-in-out hover:bg-[#eefbf5]`}
                                >
                                    <CallIcon
                                        sx={{
                                            fontSize: sidebarHide
                                                ? "24px"
                                                : "20px",
                                            color: "#169870",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            color: "#169870",
                                            paddingTop: "2px",
                                        }}
                                    >
                                        SaloMin Call
                                    </Typography>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => redirect("/")}
                                    className={`w-full ${
                                        sidebarHide
                                            ? "block"
                                            : "flex items-center gap-2"
                                    } px-2.5 py-2.5 rounded-lg transition-all ease-in-out hover:bg-[#fff1f2] hover:mt-1`}
                                >
                                    <LogoutIcon
                                        sx={{
                                            fontSize: sidebarHide
                                                ? "24px"
                                                : "20px",
                                            color: "#e11d48",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            color: "#e11d48",
                                            paddingTop: "2px",
                                        }}
                                    >
                                        Logout
                                    </Typography>
                                </button>
                            </div>
                        </section>
                        <section className="home-section">
                            <nav className="w-full h-16 flex items-center justify-between gap-4 border px-3 rounded-t-xl">
                                <div className="w-fit flex items-center gap-4">
                                    <button
                                        onClick={(e) => toggleSidebar(e)}
                                        type="button"
                                    >
                                        <MenuIcon sx={{ fontSize: "28px" }} />
                                    </button>
                                    <div className="w-fit">
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#525252",
                                            }}
                                        >
                                            {subTitle}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="fit flex gap-2 pl-4 border-l border-gray-200">
                                    <img
                                        src={mediaAllAccess[1]}
                                        alt="Avatar Users"
                                        className="w-9 h-9 rounded-full"
                                    />
                                    <div className="w-fit">
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "700",
                                            }}
                                        >
                                            Agnes Cherrly
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                color: "#525252",
                                            }}
                                        >
                                            Membership
                                        </Typography>
                                    </div>
                                </div>
                            </nav>
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
                ) : (
                    <>
                        <section
                            className={`w-full max-w-64 h-screen fixed top-0 ${
                                !sidebarShow ? "-left-full" : "left-0"
                            } bg-white py-8 transition-all ease-in-out duration-300 border-r border-gray-100 z-50 overflow-visible`}
                        >
                            <div className="w-full flex items-center justify-center px-2">
                                <img
                                    src={mediaAllAccess[0]}
                                    alt="Logo Saloka"
                                    className={`w-32 h-auto object-cover object-center`}
                                />
                            </div>
                            <div className="w-full px-3 mt-10">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        color: "#9ca3af",
                                    }}
                                >
                                    OVERVIEW
                                </Typography>
                            </div>
                            <ul className="w-full mt-2 py-2 px-3">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => redirect("/home")}
                                        className={`w-full flex items-center gap-2 px-2.5 py-2.5 ${
                                            isHomeActive
                                                ? "bg-[#eefbf5] mb-1"
                                                : "hover:bg-[#f5f5f5]"
                                        } rounded-lg transition-all ease-in-out`}
                                    >
                                        <DashboardIcon
                                            sx={{
                                                fontSize: "20px",
                                                color: isHomeActive
                                                    ? "#169870"
                                                    : "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: isHomeActive
                                                    ? "#169870"
                                                    : "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Dashboard
                                        </Typography>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => redirect("/membership")}
                                        className={`w-full flex items-center gap-2 px-2.5 rounded-lg py-2.5 ${
                                            isMembershipActive
                                                ? "bg-[#eefbf5] my-1"
                                                : "hover:bg-[#f5f5f5]"
                                        }`}
                                    >
                                        <CardMembershipIcon
                                            sx={{
                                                fontSize: "20px",
                                                color: isMembershipActive
                                                    ? "#169870"
                                                    : "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: isMembershipActive
                                                    ? "#169870"
                                                    : "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Membership
                                        </Typography>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`w-full flex items-center gap-2" px-2.5 rounded-lg py-2.5 hover:bg-[#f5f5f5]`}
                                    >
                                        <InboxIcon
                                            sx={{
                                                fontSize: "20px",
                                                color: "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Inbox
                                        </Typography>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={`w-full flex items-center gap-2 
                                        px-2.5 rounded-lg py-2.5 hover:bg-[#f5f5f5]`}
                                    >
                                        <SettingsIcon
                                            sx={{
                                                fontSize: "20px",
                                                color: "#525252",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#525252",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            Setting
                                        </Typography>
                                    </button>
                                </li>
                            </ul>
                            <div className="w-full px-3 mt-10 absolute bottom-0 pb-6">
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        color: "#9ca3af",
                                        marginBottom: "8px",
                                    }}
                                >
                                    SETTING
                                </Typography>
                                <button
                                    type="button"
                                    className={`w-full flex items-center gap-2 px-2.5 py-2.5 rounded-lg transition-all ease-in-out hover:bg-[#eefbf5]`}
                                >
                                    <CallIcon
                                        sx={{
                                            fontSize: "20px",
                                            color: "#169870",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            color: "#169870",
                                            paddingTop: "2px",
                                        }}
                                    >
                                        SaloMin Call
                                    </Typography>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => redirect("/")}
                                    className={`w-full flex items-center gap-2 px-2.5 py-2.5 rounded-lg transition-all ease-in-out hover:bg-[#fff1f2] hover:mt-1`}
                                >
                                    <LogoutIcon
                                        sx={{
                                            fontSize: "20px",
                                            color: "#e11d48",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            color: "#e11d48",
                                            paddingTop: "2px",
                                        }}
                                    >
                                        Logout
                                    </Typography>
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSidebarShow(false)}
                                className={`${
                                    !sidebarShow ? "hidden" : "block"
                                } absolute bottom-4 -right-5 z-[9999] p-1 rounded-full bg-white shadow-lg border border-gray-100`}
                            >
                                <CancelIcon
                                    sx={{ fontSize: "40px", color: "#F39F19" }}
                                />
                            </button>
                        </section>
                        <section className="max-w-full w-full relative left-0 top-0 min-h-screen h-full transition-all duration-300 ease-in-out bg-white p-2">
                            {/* Sidebar Show Start */}
                            <div
                                className={`${
                                    !sidebarShow ? "hidden" : "block"
                                } max-w-full w-full h-screen fixed top-0 left-0 bg-black opacity-30 overflow-hidden transition-all ease-linear duration-200 z-10`}
                            ></div>
                            {/* Sidebar Show End */}
                            <nav className="w-full h-16 flex items-center justify-between gap-4 border px-3 rounded-t-xl">
                                <div className="w-fit flex items-center gap-4">
                                    <button
                                        onClick={() => {
                                            setSidebarShow(!sidebarShow);
                                        }}
                                        type="button"
                                    >
                                        <MenuIcon sx={{ fontSize: "28px" }} />
                                    </button>
                                    <div className="w-fit">
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#525252",
                                            }}
                                        >
                                            {subTitle}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="fit flex gap-2 pl-4 border-l border-gray-200">
                                    <img
                                        src={mediaAllAccess[1]}
                                        alt="Avatar Users"
                                        className="w-9 h-9 rounded-full"
                                    />
                                </div>
                            </nav>
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
