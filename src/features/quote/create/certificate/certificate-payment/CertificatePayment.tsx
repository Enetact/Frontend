import React, {FC} from 'react';
import EstimatedRate from "../../../../../common/estimated-rate/EstimatedRate";
import SectionDivider from "../../../../../common/section-divider/SectionDivider";
import {Box, Stack, Typography} from "@mui/material";
import ChatBubble from "../../../../../common/chat-bubble/ChatBubble";
import Button from "@mui/material/Button";

interface CertificatePaymentParam {
    setHasPaid: Function
}

const CertificatePayment: FC<CertificatePaymentParam> = ({ setHasPaid }): JSX.Element  =>  {

    const fieldLabelStyle = {
        fontWeight: "600",
        fontSize: 12,
        color: "#202532",
        paddingTop: 0.2
    }

    return (
        <>
            <EstimatedRate/>
            <ChatBubble messages={[
                {
                    message: 'Cool! Create an account & enter your payment and billing info to get your certificate! '
                },
            ]}/>
            <SectionDivider title={"Summary"}/>
            <Box>
                <Stack
                    direction={"column"}
                    spacing={2}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                    >
                        <Stack
                            direction={"row"}
                            spacing={2}
                        >
                            <Typography sx={fieldLabelStyle}>
                                Hourly
                            </Typography>
                            <Typography>
                                $8 per hr
                            </Typography>
                        </Stack>

                        <Stack
                            direction={"row"}
                            spacing={2}>
                            <Typography sx={fieldLabelStyle}>
                                Taxes
                            </Typography>
                            <Typography>
                                $0.50
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"row"}>
                        <Stack
                            direction={"row"}
                            spacing={2}>
                            <Typography sx={fieldLabelStyle}>
                                Total
                            </Typography>
                            <Typography>
                                $50.50
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
            </Box>

            <SectionDivider title={"Payment"}/>

            <Box mt={5} mb={5}>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button  onClick={() => setHasPaid(true)} variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, minWidth: 168, backgroundColor: '#E86825', fontWeight: 600}}>Get Covered Now!</Button>
                </Stack>
            </Box>
        </>
    );
};

export default CertificatePayment;