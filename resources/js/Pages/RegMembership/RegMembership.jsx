import React from "react";
import { useState, useEffect, Suspense, lazy } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import { useTheme, styled } from "@mui/material/styles";
import {
    useMediaQuery,
    Typography,
    TextField,
    InputAdornment,
    Button,
    FormControlLabel,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Box,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import MainLayouts from "../../Layouts/Dashboard/Layouts";
import { mediaRegMembership } from "../../assets/reg-membership";
import { syaratdanketentuan } from "./syaratKetentuan";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegMembership() {
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

    //calender
    const [selectedDate, setSelectedDate] = useState(null);

    //upload file
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    //dialog spk
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //Handle Input Data Start
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        alamat: "",
        nomorIdentitas: "",
    });
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setInputData((prevState) => ({
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

    const [fileUpload, setFileUpload] = useState(null);
    const [confirmSPK, setConfirmSPK] = useState(false);

    const allFieldsFilled = Object.values(inputData).every(
        (value) => value !== "" && value !== null && value !== undefined
    );

    const allConditionsMet = !emailError && confirmSPK && fileUpload !== null;
    //Handle Input Data End

    //Handle Registrasi Start
    const handleRegistrasi = (e) => {
        e.preventDefault();

        console.log(inputData);
        console.log(dayjs(selectedDate).format("YYYY-MM-DD"));
        console.log(fileUpload);
    };
    //Handle Registrasi End

    return (
        <>
            <Head title="Registrasi Membership - Saloka Membership" />
            <Suspense fallback={<LazyLoading />}>
                {desktop ? (
                    <>
                        <MainLayouts
                            title={"Membership"}
                            subTitle={"Registrasi Membership"}
                        >
                            <div className="max-w-full w-full flex gap-12 mt-4 px-4">
                                <div className="w-full">
                                    <img
                                        src={mediaRegMembership[0]}
                                        alt="Gambar Banner"
                                        className="rounded-xl w-full h-auto object-cover object-center mb-3"
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "700",
                                            color: "#0a0a0a",
                                        }}
                                    >
                                        Berwisata lebih hemat dengan Membership
                                        Saloka. Hanya dengan Rp. 250.000,- sudah
                                        bisa bebas main ke Saloka selama 6
                                        bulan.
                                    </Typography>
                                </div>
                                <div className="w-full">
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: "700",
                                            color: "#0a0a0a",
                                        }}
                                    >
                                        Daftar Saloka Membership
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#525252",
                                        }}
                                    >
                                        Dapatkan Membership Benefit dan Rasakan
                                        Keceriaannya!
                                    </Typography>
                                    <form
                                        action=""
                                        className="w-full grid grid-cols-1 gap-4 mt-9"
                                    >
                                        <TextField
                                            autoFocus
                                            label="Nama Lengkap"
                                            id="nama-lengkap"
                                            value={inputData.name}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    name: e.target.value,
                                                })
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                            type="email"
                                            label="Email"
                                            id="email-member"
                                            value={inputData.email}
                                            onChange={handleEmailChange}
                                            error={emailError}
                                            helperText={
                                                emailError
                                                    ? "Email tidak valid"
                                                    : ""
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                        <TextField
                                            id="alamat-member"
                                            label="Alamat"
                                            value={inputData.alamat}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    alamat: e.target.value,
                                                })
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                            placeholder="Masukan alamat "
                                            autoComplete="off"
                                        />
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                sx={{
                                                    width: "100%",
                                                    maxWidth: "28rem",
                                                    "& .MuiInputLabel-root.Mui-focused":
                                                        {
                                                            color: "#169870",
                                                        },
                                                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                        {
                                                            borderColor:
                                                                "#169870",
                                                        },
                                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                        {
                                                            borderColor:
                                                                "#169870",
                                                        },
                                                }}
                                                label="Select Date"
                                                value={selectedDate}
                                                onChange={(newValue) => {
                                                    setSelectedDate(newValue);
                                                }}
                                                slots={{
                                                    textField: (params) => (
                                                        <TextField
                                                            {...params}
                                                        />
                                                    ),
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <TextField
                                            type="number"
                                            label="Nomor KTP"
                                            id="no-ktp"
                                            value={inputData.nomorIdentitas}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    nomorIdentitas:
                                                        e.target.value,
                                                })
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                            placeholder="Masukan nomor ktp"
                                            autoComplete="off"
                                            onWheel={(e) => e.target.blur()}
                                        />
                                        <Button
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
                                                backgroundColor: "transparent",
                                                paddingY: ".7rem",
                                                border: "1px solid #d4d4d4",
                                                boxShadow: "none",
                                                color: "#525252",
                                                ":hover": {
                                                    backgroundColor:
                                                        "transparent",
                                                    boxShadow: "none",
                                                    border: "1px solid #d4d4d4",
                                                },
                                                ":active": {
                                                    backgroundColor:
                                                        "transparent",
                                                    boxShadow: "none",
                                                    border: "1px solid #d4d4d4",
                                                },
                                            }}
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload foto wajah
                                            <VisuallyHiddenInput
                                                type="file"
                                                accept="image/*"
                                                capture="environment"
                                                onChange={(e) => {
                                                    setFileUpload(
                                                        e.target.files[0]
                                                    );
                                                }}
                                            />
                                        </Button>
                                    </form>
                                    <div className="w-full mt-6">
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
                                            label={
                                                <Box
                                                    component="span"
                                                    display="flex"
                                                    alignItems="center"
                                                    flexWrap={"wrap"}
                                                    gap={".5rem"}
                                                >
                                                    Saya setuju dengan{" "}
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClickOpen
                                                        }
                                                        className="font-semibold text-blue-600"
                                                    >
                                                        Syarat dan Ketentuan
                                                    </button>{" "}
                                                    yang berlaku.
                                                </Box>
                                            }
                                        />
                                        {allFieldsFilled && allConditionsMet ? (
                                            <Button
                                                sx={{
                                                    width: "100%",
                                                    maxWidth: "28rem",
                                                    backgroundColor: "#169870",
                                                    color: "#fff",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "#107254",
                                                    },
                                                    paddingY: ".7rem",
                                                    marginTop: ".5rem",
                                                }}
                                                onClick={(e) =>
                                                    handleRegistrasi(e)
                                                }
                                                variant="contained"
                                            >
                                                Registrasi Sekarang
                                            </Button>
                                        ) : (
                                            <Button
                                                sx={{
                                                    width: "100%",
                                                    maxWidth: "28rem",
                                                    paddingY: ".7rem",
                                                    marginTop: ".5rem",
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
                        </MainLayouts>
                    </>
                ) : (
                    <>
                        <MainLayouts
                            title={"Membership"}
                            subTitle={"Registrasi Membership"}
                        >
                            <div className="max-w-full w-full flex flex-col gap-12 mt-4 px-2">
                                <div className="w-full">
                                    <img
                                        src={mediaRegMembership[0]}
                                        alt="Gambar Banner"
                                        className="rounded-xl w-full h-auto object-cover object-center mb-3"
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "700",
                                            color: "#0a0a0a",
                                        }}
                                    >
                                        Berwisata lebih hemat dengan Membership
                                        Saloka. Hanya dengan Rp. 250.000,- sudah
                                        bisa bebas main ke Saloka selama 6
                                        bulan.
                                    </Typography>
                                </div>
                                <div className="w-full px-2">
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: "700",
                                            color: "#0a0a0a",
                                        }}
                                    >
                                        Daftar Saloka Membership
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#525252",
                                        }}
                                    >
                                        Dapatkan Membership Benefit dan Rasakan
                                        Keceriaannya!
                                    </Typography>
                                    <form
                                        action=""
                                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-9"
                                    >
                                        <TextField
                                            autoFocus
                                            label="Nama Lengkap"
                                            id="nama-lengkap"
                                            value={inputData.name}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    name: e.target.value,
                                                })
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                            type="email"
                                            label="Email"
                                            id="email-member"
                                            value={inputData.email}
                                            onChange={handleEmailChange}
                                            error={emailError}
                                            helperText={
                                                emailError
                                                    ? "Email tidak valid"
                                                    : ""
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                        <TextField
                                            id="alamat-member"
                                            label="Alamat"
                                            value={inputData.alamat}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    alamat: e.target.value,
                                                })
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                            placeholder="Masukan alamat "
                                            autoComplete="off"
                                        />
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                sx={{
                                                    width: "100%",
                                                    maxWidth: "28rem",
                                                    "& .MuiInputLabel-root.Mui-focused":
                                                        {
                                                            color: "#169870",
                                                        },
                                                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                                        {
                                                            borderColor:
                                                                "#169870",
                                                        },
                                                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                        {
                                                            borderColor:
                                                                "#169870",
                                                        },
                                                }}
                                                label="Select Date"
                                                value={selectedDate}
                                                onChange={(newValue) => {
                                                    setSelectedDate(newValue);
                                                }}
                                                slots={{
                                                    textField: (params) => (
                                                        <TextField
                                                            {...params}
                                                        />
                                                    ),
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <TextField
                                            type="number"
                                            label="Nomor KTP"
                                            id="no-ktp"
                                            value={inputData.nomorIdentitas}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    nomorIdentitas:
                                                        e.target.value,
                                                })
                                            }
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
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
                                            placeholder="Masukan nomor ktp"
                                            autoComplete="off"
                                            onWheel={(e) => e.target.blur()}
                                        />
                                        <Button
                                            sx={{
                                                width: "100%",
                                                maxWidth: "28rem",
                                                backgroundColor: "transparent",
                                                paddingY: ".7rem",
                                                border: "1px solid #d4d4d4",
                                                boxShadow: "none",
                                                color: "#525252",
                                                ":hover": {
                                                    backgroundColor:
                                                        "transparent",
                                                    boxShadow: "none",
                                                    border: "1px solid #d4d4d4",
                                                },
                                                ":active": {
                                                    backgroundColor:
                                                        "transparent",
                                                    boxShadow: "none",
                                                    border: "1px solid #d4d4d4",
                                                },
                                            }}
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload foto wajah
                                            <VisuallyHiddenInput
                                                type="file"
                                                accept="image/*"
                                                capture="environment"
                                                onChange={(e) => {
                                                    setFileUpload(
                                                        e.target.files[0]
                                                    );
                                                }}
                                            />
                                        </Button>
                                    </form>
                                    <div className="w-full mt-6">
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
                                            label={
                                                <Box
                                                    component="span"
                                                    display="flex"
                                                    alignItems="center"
                                                    flexWrap={"wrap"}
                                                    gap={".5rem"}
                                                >
                                                    Saya setuju dengan{" "}
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClickOpen
                                                        }
                                                        className="font-semibold text-blue-600"
                                                    >
                                                        Syarat dan Ketentuan
                                                    </button>{" "}
                                                    yang berlaku.
                                                </Box>
                                            }
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
                                                    marginTop: ".5rem",
                                                }}
                                                onClick={(e) =>
                                                    handleRegistrasi(e)
                                                }
                                                variant="contained"
                                            >
                                                Registrasi Sekarang
                                            </Button>
                                        ) : (
                                            <Button
                                                sx={{
                                                    width: "100%",
                                                    paddingY: ".7rem",
                                                    marginTop: ".5rem",
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
                        </MainLayouts>
                    </>
                )}

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        {"Syarat dan Ketentuan Membership Saloka"}
                    </DialogTitle>
                    <DialogContent>
                        {syaratdanketentuan.length > 0 &&
                            syaratdanketentuan.map((item, index) => (
                                <Box
                                    component="span"
                                    display="flex"
                                    alignItems="start"
                                    gap={".5rem"}
                                    key={index}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {index + 1}.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} sx={{ color: "#169870" }}>
                            Tutup
                        </Button>
                    </DialogActions>
                </Dialog>
            </Suspense>
        </>
    );
}
