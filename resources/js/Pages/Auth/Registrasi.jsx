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

export default function Registrasi() {
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

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleClickShowPassword = (type) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //Handle Input Data Start
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmSPK, setConfirmSPK] = useState(false);
    const [dataInput, setDataInput] = useState({
        namaLengkap: "",
        nomorTelphone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setDataInput((prevState) => ({
            ...prevState,
            email: value,
        }));

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailPattern.test(value)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setDataInput((prevState) => ({
            ...prevState,
            password: value,
        }));

        if (value.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setDataInput((prevState) => ({
            ...prevState,
            confirmPassword: value,
        }));

        if (value !== dataInput.password) {
            setConfirmPasswordError(true);
        } else {
            setConfirmPasswordError(false);
        }
    };

    const allFieldsFilled = Object.values(dataInput).every(
        (value) => value !== "" && value !== null && value !== undefined
    );
    const allConditionsMet =
        !passwordError && !confirmPasswordError && !emailError && confirmSPK;
    //Handle Input Data End

    return (
        <>
            <Head title=" Registrasi - Saloka Membership" />
            <Suspense fallback={<LazyLoading />}>
                {desktop ? (
                    <>
                        <Layouts image={mediaAuth[0]}>
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
                                Masukan data lengkap untuk bergabung.
                            </Typography>
                            <div className="w-full mt-9">
                                <Typography
                                    sx={{
                                        fontWeight: "700",
                                        fontSize: "20px",
                                    }}
                                >
                                    Registrasi Membership
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: "500",
                                        textAlign: "left",
                                    }}
                                >
                                    Sudah punya akun?
                                    <button
                                        type="button"
                                        className="px-2 mt-2"
                                        onClick={() => redirect("/")}
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
                                            Login disini.
                                        </Typography>
                                    </button>
                                </Typography>
                                <form
                                    action=""
                                    className="w-full max-w-2xl grid grid-cols-2 gap-4 mt-9"
                                >
                                    <TextField
                                        autoFocus
                                        label="Nama Lengkap"
                                        id="nama-lengkap"
                                        value={dataInput.namaLengkap}
                                        onChange={(e) => {
                                            setDataInput({
                                                ...dataInput,
                                                namaLengkap: e.target.value,
                                            });
                                        }}
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
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"></InputAdornment>
                                            ),
                                        }}
                                        placeholder="Masukan nama lengkap"
                                        autoComplete="off"
                                    />
                                    <TextField
                                        type="number"
                                        label="Nomor Telphone"
                                        id="nomor-telphone"
                                        value={dataInput.nomorTelphone}
                                        onChange={(e) => {
                                            setDataInput({
                                                ...dataInput,
                                                nomorTelphone: e.target.value,
                                            });
                                        }}
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
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"></InputAdornment>
                                            ),
                                        }}
                                        placeholder="Masukan nomor telphone"
                                        onWheel={(e) => e.target.blur()}
                                        autoComplete="off"
                                    />
                                    <TextField
                                        type="email"
                                        label="Email"
                                        id="alamat-email"
                                        value={dataInput.email}
                                        onChange={handleEmailChange}
                                        error={emailError}
                                        helperText={
                                            emailError
                                                ? "Email tidak valid"
                                                : ""
                                        }
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: emailError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: emailError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: emailError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"></InputAdornment>
                                            ),
                                        }}
                                        placeholder="Masukan alamat email aktif"
                                        autoComplete="off"
                                    />
                                    <FormControl
                                        error={passwordError}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: passwordError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: passwordError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: passwordError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                        }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="password">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            type={
                                                showPassword.password
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={dataInput.password}
                                            onChange={(e) =>
                                                handlePasswordChange(e)
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() =>
                                                            handleClickShowPassword(
                                                                "password"
                                                            )
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showPassword.password ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            placeholder="Masukan password"
                                            autoComplete="off"
                                        />
                                        <FormHelperText
                                            id="password-helper-text"
                                            sx={{
                                                color: "",
                                            }}
                                        >
                                            Minimal 8 karakter
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl
                                        error={confirmPasswordError}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "24rem",
                                            "& .MuiInputLabel-root.Mui-focused":
                                                {
                                                    color: confirmPasswordError
                                                        ? "#f44336"
                                                        : "#169870",
                                                },
                                            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor:
                                                        confirmPasswordError
                                                            ? "#f44336"
                                                            : "#169870",
                                                },
                                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor:
                                                        confirmPasswordError
                                                            ? "#f44336"
                                                            : "#169870",
                                                },
                                        }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="confirm-password">
                                            Confirm Password
                                        </InputLabel>
                                        <OutlinedInput
                                            id="confirm-password"
                                            type={
                                                showPassword.confirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={dataInput.confirmPassword}
                                            onChange={(e) =>
                                                handleConfirmPasswordChange(e)
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() =>
                                                            handleClickShowPassword(
                                                                "confirmPassword"
                                                            )
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showPassword.confirmPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Confirm Password"
                                            placeholder="Masukan konfirmasi password"
                                            autoComplete="off"
                                        />
                                        {confirmPasswordError && (
                                            <FormHelperText
                                                id="password-helper-text"
                                                sx={{
                                                    color: "",
                                                }}
                                            >
                                                Password tidak sama
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </form>
                                <div className="w-full max-w-2xl flex flex-col gap-2 mt-6">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#F39F19",
                                                    },
                                                }}
                                                checked={confirmSPK}
                                                onChange={() => {
                                                    setConfirmSPK(!confirmSPK);
                                                }}
                                            />
                                        }
                                        label="I've read and agree with terms of service and our privecy policy."
                                    />
                                    {allFieldsFilled && allConditionsMet ? (
                                        <Button
                                            sx={{
                                                width: "100%",
                                                backgroundColor: "#169870",
                                                color: "#fff",
                                                "&:hover": {
                                                    backgroundColor: "#107254",
                                                },
                                                paddingY: ".7rem",
                                            }}
                                            variant="contained"
                                        >
                                            Registrasi Sekarang
                                        </Button>
                                    ) : (
                                        <Button
                                            sx={{
                                                width: "100%",
                                                paddingY: ".7rem",
                                            }}
                                            variant="contained"
                                            disabled
                                        >
                                            Registrasi Sekarang
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Layouts>
                    </>
                ) : (
                    <>
                        <Layouts>
                            <div className="w-full pt-10 px-4 md:px-10">
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
                                    Masukan data lengkap untuk bergabung.
                                </Typography>
                                <div className="w-full mt-9">
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Registrasi Membership
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            fontWeight: "500",
                                            textAlign: "left",
                                        }}
                                    >
                                        Sudah punya akun?
                                        <button
                                            type="button"
                                            className="px-2 mt-2"
                                            onClick={() => redirect("/")}
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
                                                Login disini.
                                            </Typography>
                                        </button>
                                    </Typography>
                                    <form
                                        action=""
                                        className="w-full max-w-2xl grid grid-cols-1 gap-4 mt-9"
                                    >
                                        <TextField
                                            autoFocus
                                            label="Nama Lengkap"
                                            id="nama-lengkap"
                                            value={dataInput.namaLengkap}
                                            onChange={(e) => {
                                                setDataInput({
                                                    ...dataInput,
                                                    namaLengkap: e.target.value,
                                                });
                                            }}
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
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start"></InputAdornment>
                                                ),
                                            }}
                                            placeholder="Masukan nama lengkap"
                                            autoComplete="off"
                                        />
                                        <TextField
                                            type="number"
                                            label="Nomor Telphone"
                                            id="nomor-telphone"
                                            value={dataInput.nomorTelphone}
                                            onChange={(e) => {
                                                setDataInput({
                                                    ...dataInput,
                                                    nomorTelphone:
                                                        e.target.value,
                                                });
                                            }}
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
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start"></InputAdornment>
                                                ),
                                            }}
                                            placeholder="Masukan nomor telphone"
                                            onWheel={(e) => e.target.blur()}
                                            autoComplete="off"
                                        />
                                        <TextField
                                            type="email"
                                            label="Email"
                                            id="alamat-email"
                                            value={dataInput.email}
                                            onChange={handleEmailChange}
                                            error={emailError}
                                            helperText={
                                                emailError
                                                    ? "Email tidak valid"
                                                    : ""
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "24rem",
                                                "& .MuiInputLabel-root.Mui-focused":
                                                    {
                                                        color: emailError
                                                            ? "#f44336"
                                                            : "#169870",
                                                    },
                                                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor: emailError
                                                            ? "#f44336"
                                                            : "#169870",
                                                    },
                                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor: emailError
                                                            ? "#f44336"
                                                            : "#169870",
                                                    },
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start"></InputAdornment>
                                                ),
                                            }}
                                            placeholder="Masukan alamat email aktif"
                                            autoComplete="off"
                                        />
                                        <FormControl
                                            error={passwordError}
                                            sx={{
                                                width: "100%",
                                                maxWidth: "24rem",
                                                "& .MuiInputLabel-root.Mui-focused":
                                                    {
                                                        color: passwordError
                                                            ? "#f44336"
                                                            : "#169870",
                                                    },
                                                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor:
                                                            passwordError
                                                                ? "#f44336"
                                                                : "#169870",
                                                    },
                                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor:
                                                            passwordError
                                                                ? "#f44336"
                                                                : "#169870",
                                                    },
                                            }}
                                            variant="outlined"
                                        >
                                            <InputLabel htmlFor="password">
                                                Password
                                            </InputLabel>
                                            <OutlinedInput
                                                id="password"
                                                type={
                                                    showPassword.password
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={dataInput.password}
                                                onChange={(e) =>
                                                    handlePasswordChange(e)
                                                }
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() =>
                                                                handleClickShowPassword(
                                                                    "password"
                                                                )
                                                            }
                                                            onMouseDown={
                                                                handleMouseDownPassword
                                                            }
                                                            edge="end"
                                                        >
                                                            {showPassword.password ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                                placeholder="Masukan password"
                                                autoComplete="off"
                                            />
                                            <FormHelperText
                                                id="password-helper-text"
                                                sx={{
                                                    color: "",
                                                }}
                                            >
                                                Minimal 8 karakter
                                            </FormHelperText>
                                        </FormControl>
                                        <FormControl
                                            error={confirmPasswordError}
                                            sx={{
                                                width: "100%",
                                                maxWidth: "24rem",
                                                "& .MuiInputLabel-root.Mui-focused":
                                                    {
                                                        color: confirmPasswordError
                                                            ? "#f44336"
                                                            : "#169870",
                                                    },
                                                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor:
                                                            confirmPasswordError
                                                                ? "#f44336"
                                                                : "#169870",
                                                    },
                                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor:
                                                            confirmPasswordError
                                                                ? "#f44336"
                                                                : "#169870",
                                                    },
                                            }}
                                            variant="outlined"
                                        >
                                            <InputLabel htmlFor="confirm-password">
                                                Confirm Password
                                            </InputLabel>
                                            <OutlinedInput
                                                id="confirm-password"
                                                type={
                                                    showPassword.confirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={
                                                    dataInput.confirmPassword
                                                }
                                                onChange={(e) =>
                                                    handleConfirmPasswordChange(
                                                        e
                                                    )
                                                }
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() =>
                                                                handleClickShowPassword(
                                                                    "confirmPassword"
                                                                )
                                                            }
                                                            onMouseDown={
                                                                handleMouseDownPassword
                                                            }
                                                            edge="end"
                                                        >
                                                            {showPassword.confirmPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Confirm Password"
                                                placeholder="Masukan konfirmasi password"
                                                autoComplete="off"
                                            />
                                            {confirmPasswordError && (
                                                <FormHelperText
                                                    id="password-helper-text"
                                                    sx={{
                                                        color: "",
                                                    }}
                                                >
                                                    Password tidak sama
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </form>
                                    <div className="w-full max-w-2xl flex flex-col gap-2 mt-6">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    sx={{
                                                        "&.Mui-checked": {
                                                            color: "#F39F19",
                                                        },
                                                    }}
                                                    checked={confirmSPK}
                                                    onChange={() => {
                                                        setConfirmSPK(
                                                            !confirmSPK
                                                        );
                                                    }}
                                                />
                                            }
                                            label="I've read and agree with terms of service and our privecy policy."
                                        />
                                        {allFieldsFilled && allConditionsMet ? (
                                            <Button
                                                sx={{
                                                    width: "100%",
                                                    backgroundColor: "#169870",
                                                    color: "#fff",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "#107254",
                                                    },
                                                    paddingY: ".7rem",
                                                }}
                                                variant="contained"
                                            >
                                                Registrasi Sekarang
                                            </Button>
                                        ) : (
                                            <Button
                                                sx={{
                                                    width: "100%",
                                                    paddingY: ".7rem",
                                                }}
                                                variant="contained"
                                                disabled
                                            >
                                                Registrasi Sekarang
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Layouts>
                    </>
                )}
            </Suspense>
        </>
    );
}
