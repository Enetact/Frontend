import React, {FC} from 'react';
import {Box, Divider, Link, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Pill from "../../../../../common/pill/Pill";

interface RateDetailParam {
    setEdition: Function
}
const RateDetail: FC<RateDetailParam> = ({setEdition}): JSX.Element => {
    const fieldLabelStyle = {
        fontWeight: "500",
        fontSize: 12,
        color: "#50545E"
    }
    const fieldTextStyle = {
        fontWeight: "600",
        fontSize: 14
    }
    return (
        <>
            <Box>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Typography>
                        Project Details
                    </Typography>
                    <Link href="#" variant="body2" underline="hover" onClick={() => setEdition(true)}>
                        Edit
                    </Link>
                </Stack>
                <Divider/>
            </Box>
            {/* First and Last Name*/}
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            First Name
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            John
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}>
                            Last Name
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            Doe
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            {/*    Label and Project Address*/}
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}>
                            Label
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            Handyman INC
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-end"}
                    >
                        <Typography
                            sx={fieldLabelStyle}>
                            Project Address
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            25 Main St.Apt 1 Fairport, NY, 14450
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <Box mt={2}>
                <Stack direction={"column"}>
                    <Typography
                        sx={fieldLabelStyle}>
                        Project Category
                    </Typography>
                    <Pill pills={[
                        {
                            label: "Yard & Outdoor"
                        },
                        {
                            label: "Yard & Outdoor."
                        }
                    ]}/>
                </Stack>
            </Box>


            {/*    Label and Project Address*/}
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            Business Liability
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            300,000
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            Crew Size
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            Just Me
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            {/* Additional insured  and Parties*/}
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            Additional insured?
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            Yes
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            Additional Parties
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            <ul>
                                <li>Joe Muro</li>
                                <li>John Muro</li>
                            </ul>
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            {/*    Starts and Ends*/}
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            Start
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            Today
                        </Typography>
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            End
                        </Typography>
                        <Typography
                            sx={fieldTextStyle}
                        >
                            January 13th
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <Box mt={5} mb={5}>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#E86825', fontWeight: 600}}>Looks Good</Button>
                </Stack>
            </Box>
        </>
    );
};

export default RateDetail;