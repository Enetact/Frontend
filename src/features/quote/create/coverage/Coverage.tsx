import React, {FC} from 'react';
import SocialProof from "../../../../common/social-proof/SocialProof";
import EstimatedRate from "../../../../common/estimated-rate/EstimatedRate";
import ChatBubble from "../../../../common/chat-bubble/ChatBubble";
import BusinessLiabilityLimit from "./business-liability-limit/BusinessLiabilityLimit";
import WeCoverNotCover from "./we-cover-not-cover/WeCoverNotCover";
import {Checkbox, FormControlLabel, FormGroup, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Coverage: FC = (): JSX.Element => {
    return (
        <>
            <EstimatedRate/>
            <SocialProof currentStep={"COVERAGE"}/>
            <ChatBubble messages={[
                {
                    message: 'What business liability limit would you like to set?'
                },
            ]}/>
            <BusinessLiabilityLimit/>
            <WeCoverNotCover
                title={'What we cover'}
                type={'COVERED'}
                coverages={
                [
                    "Damage to client’s property",
                    "Client’s medical payments",
                    "Legal fees from lawsuits"
                ]
                }
            />
            <WeCoverNotCover
                title={'Whats not covered'}
                type={'NOT_COVERED'}
                coverages={
                    [
                        "Your own physical injuries, your property, your car to damaged caused by excluded activities",
                    ]
                }
            />
            <Box mt={2}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label={<Typography>I have read and confirmed that I am not doing any excluded activities.</Typography>} />
                </FormGroup>
            </Box>
            <Box mt={5} mb={5}>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#E86825', fontWeight: 600}}>Next</Button>
                </Stack>
            </Box>
        </>
    );
};

export default Coverage;