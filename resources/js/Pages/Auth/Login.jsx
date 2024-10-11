import { useState, useEffect, Suspense, lazy } from "react";
import Layouts from "../../Layouts/Auth/Layouts";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useTheme } from "@mui/material/styles";
import {
    useMediaQuery,
    Typography,
    TextField,
    InputAdornment,
    InputLabel,
    IconButton,
    FormControl,
    OutlinedInput,
    Button,
    FormControlLabel,
    Checkbox,
    FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Head } from "@inertiajs/inertia-react";
import { mediaAuth } from "../../assets/auth";
import { mediaAllAccess } from "../../assets/all-access";

export default function Login() {
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

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Head title=" Login - Saloka Membership" />
            <Suspense fallback={<LazyLoading />}>
                {desktop ? (
                    <>
                        <Layouts image={mediaAuth[1]}>
                            <div className="w-full max-w-2xl flex flex-col items-center">
                                <div className="w-full max-w-sm flex flex-col">
                                    <img
                                        src={mediaAllAccess[0]}
                                        alt="Logo Saloka"
                                        className="w-32 h-auto pb-10"
                                    />
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Sugeng Rawuh!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Masuk dengan User ID atau daftar untuk
                                        bergabung bersama Saloka.
                                    </Typography>
                                </div>
                            </div>
                            <div className="w-full mt-9">
                                <div className="w-full max-w-2xl flex flex-col items-center gap-2">
                                    <div className="w-full max-w-sm flex flex-col">
                                        <Typography
                                            sx={{
                                                fontWeight: "700",
                                                fontSize: "20px",
                                            }}
                                        >
                                            Login Membership
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 16,
                                                fontWeight: "500",
                                                textAlign: "left",
                                            }}
                                        >
                                            Belum punya akun?
                                            <button
                                                type="button"
                                                className="px-2 mt-2"
                                                onClick={() =>
                                                    redirect("/registrasi")
                                                }
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 16,
                                                        fontWeight: "600",
                                                        textAlign: "left",
                                                        color: "#2563eb",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Registrasi disini.
                                                </Typography>
                                            </button>
                                        </Typography>
                                    </div>
                                </div>
                                <form
                                    action=""
                                    className="w-full max-w-2xl flex flex-col items-center justify-center gap-4 mt-12"
                                >
                                    <TextField
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: "#169870",
                                                },
                                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#169870",
                                                },
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#169870",
                                                },
                                        }}
                                        id="user-id"
                                        label="User ID"
                                        variant="outlined"
                                        autoComplete="off"
                                    />
                                    <FormControl
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: "#169870",
                                                },
                                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#169870",
                                                },
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#169870",
                                                },
                                        }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-password">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={
                                                            handleClickShowPassword
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            placeholder="Masukan password disini"
                                            autoComplete="off"
                                        />
                                    </FormControl>
                                </form>
                                <div className="w-full max-w-2xl flex flex-col items-center gap-2 mt-9">
                                    <div className="w-full max-w-sm flex items-center gap-1">
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Lupa password?
                                        </Typography>
                                        <button
                                            type="button"
                                            className="text-[#169870] font-semibold"
                                            onClick={() =>
                                                redirect("/lupa-password")
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    color: "#2563eb",
                                                }}
                                            >
                                                Atur Ulang Password
                                            </Typography>
                                        </button>
                                    </div>
                                    <Button
                                        onClick={() => redirect("/home")}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            backgroundColor: "#169870",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#107254",
                                            },
                                            paddingY: ".7rem",
                                            marginTop: "1rem",
                                        }}
                                        variant="contained"
                                    >
                                        Masuk Sekarang
                                    </Button>
                                </div>
                            </div>
                        </Layouts>
                    </>
                ) : (
                    <>
                        <Layouts>
                            <div className="w-full pt-10 px-4 sm:px-10">
                                <img
                                    src={mediaAllAccess[0]}
                                    alt="Logo Saloka"
                                    className="w-32 h-auto pb-10"
                                />
                                <Typography
                                    sx={{
                                        fontWeight: "700",
                                        fontSize: "20px",
                                    }}
                                >
                                    Sugeng Rawuh!
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "16px",
                                    }}
                                >
                                    Masuk dengan User ID atau daftar untuk
                                    bergabung bersama Saloka.
                                </Typography>
                                <div className="w-full mt-9">
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Login Membership
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            fontWeight: "500",
                                            textAlign: "left",
                                        }}
                                    >
                                        Belum punya akun?
                                        <button
                                            type="button"
                                            className="px-2 mt-2"
                                            onClick={() =>
                                                redirect("/registrasi")
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: "600",
                                                    textAlign: "left",
                                                    color: "#2563eb",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Registrasi disini.
                                            </Typography>
                                        </button>
                                    </Typography>
                                    <form
                                        action=""
                                        className="w-full grid grid-cols-1 gap-4 mt-12"
                                    >
                                        <TextField
                                            sx={{
                                                width: "100%",
                                                maxWidth: "24rem",
                                                "& .MuiInputLabel-root.Mui-focused":
                                                    {
                                                        color: "#169870",
                                                    },
                                                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor: "#169870",
                                                    },
                                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor: "#169870",
                                                    },
                                            }}
                                            id="user-id"
                                            label="User ID"
                                            variant="outlined"
                                            autoComplete="off"
                                        />
                                        <FormControl
                                            sx={{
                                                width: "100%",
                                                maxWidth: "24rem",
                                                "& .MuiInputLabel-root.Mui-focused":
                                                    {
                                                        color: "#169870",
                                                    },
                                                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor: "#169870",
                                                    },
                                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor: "#169870",
                                                    },
                                            }}
                                            variant="outlined"
                                        >
                                            <InputLabel htmlFor="outlined-adornment-password">
                                                Password
                                            </InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={
                                                                handleClickShowPassword
                                                            }
                                                            onMouseDown={
                                                                handleMouseDownPassword
                                                            }
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                                placeholder="Masukan password disini"
                                                autoComplete="off"
                                            />
                                        </FormControl>
                                    </form>
                                    <div className="w-full max-w-sm flex items-center gap-1 mt-6">
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Lupa password?
                                        </Typography>
                                        <button
                                            type="button"
                                            className="text-[#169870] font-semibold"
                                            onClick={() =>
                                                redirect("/lupa-password")
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    color: "#2563eb",
                                                }}
                                            >
                                                Atur Ulang Password
                                            </Typography>
                                        </button>
                                    </div>
                                    <Button
                                        onClick={() => redirect("/home")}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            backgroundColor: "#169870",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#107254",
                                            },
                                            paddingY: ".7rem",
                                            marginTop: "1rem",
                                        }}
                                        variant="contained"
                                    >
                                        Masuk Sekarang
                                    </Button>
                                </div>
                            </div>
                        </Layouts>
                    </>
                )}
            </Suspense>
        </>
    );
}
