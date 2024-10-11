import { useState, useEffect, Suspense, lazy } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography, TextField, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mediaAuth } from "../../assets/auth";

export default function ForgetPassword() {
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("1024"));

    //Rederect
    const redirect = (route) => {
        Inertia.visit(route);
    };

    //Lazy Loading
    const LazyLoading = lazy(() =>
        import("../../Components/LazyLoading/LazyLoading")
    );

    return (
        <>
            <Head title="Lupa Password - Saloka Membership" />
            <main className="w-full max-w-full h-screen overflow-hidden flex items-center justify-center bg-gray-100 px-6">
                <Suspense fallback={<LazyLoading />}>
                    {desktop ? (
                        <>
                            <section className="w-full max-w-2xl p-10 bg-white rounded-3xl flex flex-col items-center justify-center">
                                <img
                                    src={mediaAuth[2]}
                                    alt="Gambar Lupa Password"
                                    className="w-32 h-auto object-cover object-center"
                                />
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        fontWeight: "800",
                                        marginTop: "20px",
                                    }}
                                >
                                    Lupa Password
                                </Typography>
                                <div className="w-full max-w-md mt-2">
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}
                                    >
                                        Lupa password? Jangan khawatir, ketikan
                                        email yang telah didaftarkan dan klik
                                        kirim, kami akan mengirimkan link reset
                                        password.
                                    </Typography>
                                </div>
                                <div className="w-full max-w-md mt-6">
                                    <TextField
                                        sx={{
                                            width: "100%",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: "#169870",
                                                },
                                            "& .MuiInput-underline:before": {
                                                borderBottomColor: "#169870",
                                            },
                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                                                {
                                                    borderBottomColor:
                                                        "#169870",
                                                },
                                            "& .MuiInput-underline:after": {
                                                borderBottomColor: "#169870",
                                            },
                                        }}
                                        required
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        name="email"
                                        label="Almat Email"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        autoComplete="off"
                                        placeholder="Masukkan email aktif yang telah didaftarkan"
                                    />
                                </div>
                                <div className="w-full flex items-center justify-between gap-4 mt-9 pt-2 border-t border-gray-200">
                                    <Button
                                        sx={{
                                            width: "fit-content",
                                            "&:hover": {
                                                backgroundColor: "#eff6ff",
                                            },
                                            paddingY: ".6rem",
                                            color: "#3b82f6",
                                        }}
                                        onClick={() => redirect("/")}
                                        startIcon={
                                            <ChevronLeftIcon
                                                sx={{
                                                    color: "#3b82f6",
                                                    fontSize: "2rem",
                                                }}
                                            />
                                        }
                                    >
                                        Kembali
                                    </Button>
                                    <Button
                                        sx={{
                                            width: "fit-content",
                                            backgroundColor: "#169870",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#107254",
                                            },
                                            paddingY: ".6rem",
                                            marginTop: "1rem",
                                        }}
                                        variant="contained"
                                    >
                                        Kirim
                                    </Button>
                                </div>
                            </section>
                        </>
                    ) : (
                        <>
                            <section className="w-full max-w-2xl p-6 bg-white rounded-3xl flex flex-col items-center justify-center">
                                <img
                                    src={mediaAuth[2]}
                                    alt="Gambar Lupa Password"
                                    className="w-32 h-auto object-cover object-center"
                                />
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        fontWeight: "800",
                                        marginTop: "20px",
                                    }}
                                >
                                    Lupa Password
                                </Typography>
                                <div className="w-full max-w-md mt-2">
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            textAlign: "center",
                                        }}
                                    >
                                        Lupa password? Jangan khawatir, ketikan
                                        email yang telah didaftarkan dan klik
                                        kirim, kami akan mengirimkan link reset
                                        password.
                                    </Typography>
                                </div>
                                <div className="w-full max-w-md mt-6">
                                    <TextField
                                        sx={{
                                            width: "100%",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: "#169870",
                                                },
                                            "& .MuiInput-underline:before": {
                                                borderBottomColor: "#169870",
                                            },
                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                                                {
                                                    borderBottomColor:
                                                        "#169870",
                                                },
                                            "& .MuiInput-underline:after": {
                                                borderBottomColor: "#169870",
                                            },
                                        }}
                                        required
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        name="email"
                                        label="Almat Email"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        autoComplete="off"
                                    />
                                    <Button
                                        sx={{
                                            width: "100%",
                                            backgroundColor: "#169870",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#107254",
                                            },
                                            paddingY: ".6rem",
                                            marginTop: "1.2rem",
                                        }}
                                        variant="contained"
                                    >
                                        Kirim
                                    </Button>
                                </div>
                                <div className="w-full flex items-center justify-between gap-4 mt-9 pt-2 border-t border-gray-200">
                                    <Button
                                        sx={{
                                            width: "fit-content",
                                            "&:hover": {
                                                backgroundColor: "#eff6ff",
                                            },
                                            paddingY: ".6rem",
                                            color: "#3b82f6",
                                        }}
                                        onClick={() => redirect("/")}
                                        startIcon={
                                            <ChevronLeftIcon
                                                sx={{
                                                    color: "#3b82f6",
                                                    fontSize: "2rem",
                                                }}
                                            />
                                        }
                                    >
                                        Kembali
                                    </Button>
                                </div>
                            </section>
                        </>
                    )}
                </Suspense>
            </main>
        </>
    );
}
