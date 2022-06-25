import React, {FC} from 'react';
import ChatBubble from "../../../../../common/chat-bubble/ChatBubble";
import {Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import SectionDivider from "../../../../../common/section-divider/SectionDivider";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import PolicyCertificate from "../../../../../common/policy-certificate/PolicyCertificate";

interface CertificateAccountParam {
    setHasPaid: Function
}

const CertificateAccount: FC<CertificateAccountParam> = ({ setHasPaid }): JSX.Element  =>  {
    const fieldLabelStyle = {
        fontWeight: "500",
        fontSize: 12,
        color: "#50545E"
    }
    return (
        <>
            <ChatBubble messages={[
                {
                    message: 'Great! Just a few more details and you can receive your policy!'
                },
            ]}/>

            <Box mt={2}>
                <Stack
                    direction={'column'}
                    justifyContent={"center"}
                >
                    <Typography
                        sx={fieldLabelStyle}>
                        Additional Project Details
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="additionalProjectDetails"
                        label="Additional Project Details"
                        name="additionalProjectDetails"
                        value={''}
                    />
                </Stack>
            </Box>
            <SectionDivider title={"Account Creation"}/>
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        sx={{
                        width:360
                    }}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            First Name
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            value={''}
                        />
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        sx={{
                            width:360
                        }}
                    >
                        <Typography
                            sx={fieldLabelStyle}>
                            Last Name
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={''}
                        />
                    </Stack>
                </Stack>
            </Box>

            <Box component="form" onSubmit={() => console.log('submit clicked')} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={''}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                />
                <Box>
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Link href="#" variant="body2" underline="hover">
                                Verify your e-mail address to log into your account.
                            </Link>
                        </Box>
                    </Stack>
                </Box>

                <Box mt={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant="caption">I have read the Electronic delivery terms and agree to paperless delivery</Typography>} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant="caption">I allow you to send any marketing emails that can include coupons, deals and promotions.</Typography>} />

                    </FormGroup>
                </Box>
                <Box mt={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Typography variant="caption">
                        We guarantee 100% your privacy. We wont spam you.
                    </Typography>
                </Box>

                <Box mt={5} mb={5}>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#E86825', fontWeight: 600}}>LOOKS GOOD</Button>
                    </Stack>
                </Box>
            </Box>
            <ChatBubble messages={[
                {
                    message: 'Awesome! You can now download or email your certificate below'
                },
            ]}/>
            <PolicyCertificate/>
            <Box mt={5} mb={5}>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 1,
                            paddingX: 3,
                            paddingY: 1,
                            width: 194,
                            backgroundColor: '#E86825',
                            fontWeight: 600,
                            fontSize: 12
                    }}
                    >
                        Go to my account
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default CertificateAccount;