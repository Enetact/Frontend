import React, {FC} from 'react';
import {Box, Chip, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import {Circle} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import Typography from "@mui/material/Typography";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const options = [
    'Cancel Policy',
    'Duplicate Policy',
    'Download Certificate',
    'Delete Draft Policy',
];

const ITEM_HEIGHT = 48;

export function CertificationOptions() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
const PolicyCertificate: FC = (): JSX.Element => {
    return (
        <>
            <Box mt={2} mb={2} py={3}
                   sx={{
                       paddingTop: 1,
                       PaddingBottom: 2,
                       paddingLeft: 2,
                       paddingRight: 2,
                       maxWidth: {xs: 400, sm: 650, md: 770},
                       width: 800,
                       backgroundColor: 'primary.white',
                       borderRadius: 2,
                       boxShadow: "0px 6px 20px -2px rgba(18, 110, 255, 0.14), 0px 4px 6px #E3E8FF",
                       alignContent: 'center'
                   }}>
                <Stack direction="row" justifyContent="space-between">
                    <Chip icon={<Circle sx={{width: 10, height: 10}}/>} label="Active" color="success" variant="outlined" />
                    <CertificationOptions/>
                </Stack>
                <Box sx={{
                    p: 2,
                    border: '1px solid #ABB5E3',
                    alignContent: 'center',
                    borderRadius: 3,
                    backgroundColor: '#E3E8FF3D'
                }}>
                    <Stack direction={"row"} spacing={1} mt={3} mb={3} justifyContent={"center"} alignItems={"center"}>
                        <HandymanOutlinedIcon sx={{color: "#3D54B8", width: 64, height: 78}}/>
                        <HandymanOutlinedIcon sx={{color: "#3D54B8", width: 64, height: 78}}/>
                    </Stack>
                </Box>
                <Stack direction={"row"} my={3}>
                    <Typography
                        fontWeight={600}
                        fontSize={16}
                        color={"#273576"}
                    >
                        Lawn care, Adding a GFCI
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                >
                    <Stack direction={"column"}>
                        <Typography
                            color={"#086343"}
                            fontWeight={700}
                            fontSize={12}
                        >
                            WHEN
                        </Typography>
                        <Typography>
                            1/7 - 1/3
                        </Typography>
                        <Typography>
                            2:30 - 8:00pm EST
                        </Typography>
                    </Stack>
                    <Stack direction={"column"}>
                        <Typography
                            color={"#086343"}
                            fontWeight={700}
                            fontSize={12}>
                            WHERE
                        </Typography>
                        <Typography>
                            25 Main St.Apt 1 Fairport, NY, 14450
                        </Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" spacing={3} justifyContent="space-between">
                    <Stack direction="column" spacing={1}>
                        <Typography variant="body1">
                            Policy Number
                        </Typography>
                        <Typography
                            fontWeight={400}
                            color={"#1D1D1D"}
                        >
                            #192039203
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="flex-end" justifyContent="space-around">
                        <FileDownloadOutlinedIcon />
                        <ShareOutlinedIcon />
                        <EmailOutlinedIcon />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default PolicyCertificate;