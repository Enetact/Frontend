import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChatBubble from "../../../../common/chat-bubble/ChatBubble";
import ProjectSelect from "./project/ProjectSelect";
import CrewSize from "./crew/CrewSize";
import SocialProof from "../../../../common/social-proof/SocialProof";
import AdditionalInsured from "./additional-insured/AdditionalInsured";
import Address from "./address/Address";
import ProjectTime from "./project-time/ProjectTime";
import ProjectSubrogation from "./project-subrogation/ProjectSubrogation";

const Quote: FC = (): JSX.Element => {
    return (
        <>
            <Box sx={{width: '100%'}} mt={5}>

                <React.Fragment>
                    <ChatBubble messages={[
                        {
                            message: 'Good news Joe! We cover Fairport, NY!'
                        },
                        {
                            message: 'Now lets get you insured'
                        },
                    ]}/>

                    <SocialProof currentStep={"QUOTE"} referenceUser={{fullName: "John Locke", location: "Fairport, NY"}}/>

                    <ChatBubble messages={[
                        {
                            message: 'Now tell us a bit about your project fits in.'
                        },
                    ]}/>

                    <ProjectSelect/>

                    <CrewSize/>

                    <SocialProof currentStep={"QUOTE"} referenceUser={{fullName: "John Locke", location: "Fairport, NY"}}/>

                    <ChatBubble messages={[
                        {
                            message: 'Where will you be working?'
                        },
                    ]}/>

                    <Address/>

                    <ChatBubble messages={[
                        {
                            message: 'Adding any additional insured parties'
                        },
                    ]}/>

                    <AdditionalInsured/>

                    <ChatBubble messages={[
                        {
                            message: 'Do you require a waiver of subrogation?'
                        },
                    ]}/>

                    <ProjectSubrogation/>

                    <Box mt={5} mb={5}>
                        <Stack>
                            <Typography>
                                Date & Time
                            </Typography>
                        </Stack>
                    </Box>

                    <ChatBubble messages={[
                        {
                            message: 'How long will the project take in total?'
                        },
                    ]}/>

                    <ProjectTime/>


                    <Box mt={5} mb={5}>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#E86825', fontWeight: 600}}>Next</Button>
                        </Stack>
                    </Box>

                </React.Fragment>
            </Box>
        </>
    );
}

export default Quote;