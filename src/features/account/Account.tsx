import React from 'react';
import Container from "@mui/material/Container";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Chip,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import {Done} from "@mui/icons-material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const options = [
    'Cancel Policy',
    'Duplicate Policy',
    'Download Certificate',
    'Delete Draft Policy',
];

const ITEM_HEIGHT = 48;

export function LongMenu() {
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

export function PolicyCard() {
    return (
        <>

            <Accordion
                expanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        backgroundColor: "lightskyblue"
                    }}
                >
                    <Typography>Upcoming Policies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>

                        <Stack direction="row" justifyContent="space-between">
                            <Grid container>
                                <Typography variant="body1">
                                    Project Name
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Chip icon={<Done />} label="Future" color="primary" />
                                <LongMenu/>
                            </Grid>
                        </Stack>
                        <Stack direction="row" spacing={3} justifyContent="space-between">
                            <Typography variant="subtitle1" sx={{ color: "lightskyblue", }}>
                                Location
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: "lightskyblue", }}>
                                Start Date - End Date
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={3} justifyContent="space-between">
                            <Stack direction="column" spacing={1}>
                                <Typography variant="body1">
                                    Policy Number
                                </Typography>
                                <Typography variant="body1">
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
                </AccordionDetails>
            </Accordion>
        </>
    );
}

const Account = () => {
    return (
        <div>
            <Container component="main" maxWidth="md">


                <Grid container mt={5}>
                    <Grid container xs={6}>
                        <Typography component="h2" variant="h5">
                            My Dashboard
                        </Typography>
                    </Grid>
                    <Grid container xs={6} justifyContent="flex-end">
                        <Button variant="contained" sx={{ borderRadius: 7, }}>
                            NEW QUOTE
                        </Button>
                    </Grid>
                </Grid>
                <Grid container xs justifyContent="center" mt={5} px={10}>
                    <TextField
                        fullWidth
                        id="fullWidth"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}/>
                </Grid>
                <Box sx={{ m: 3 }}>
                    <Stack direction="row" spacing={3}>
                        <Typography variant="body1" sx={{ color: "blue", }}>
                            All
                        </Typography>
                        <Typography variant="body1" sx={{ color: "lightgray", }}>
                            Active
                        </Typography>
                        <Typography variant="body1" sx={{ color: "lightgray", }}>
                            Draft
                        </Typography>
                        <Typography variant="body1" sx={{ color: "lightgray", }}>
                            Closed
                        </Typography>
                    </Stack>
                </Box>
                {/*TODO: Refactor Policy Card*/}
                <PolicyCard/>
                <PolicyCard/>
                <PolicyCard/>
                <PolicyCard/>
            </Container>
        </div>
    );
};

export default Account;