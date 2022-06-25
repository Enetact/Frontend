import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {Avatar, Stack} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import Grid from "@mui/material/Grid";
import Message from "../message/Message";

interface MessageContent {
    message: string,
}

interface ChatMessage {
    messages: MessageContent[],
}

const ChatBubble: FC<ChatMessage> = ({ messages}): JSX.Element => {

    return (
        <Box  mt={5} mb={5}>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
            >
                <Box>
                    <Avatar sx={{bgcolor: "#273576", width: 55, height: 55}}>
                        <FaceIcon/>
                    </Avatar>
                </Box>
                <Box>
                    <Grid container
                          direction="column"
                    >
                        {messages.map((chat, index) => (
                            <Grid item key={index}>
                            <Message message={chat.message}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Stack>
        </Box>
    );
};

export default ChatBubble;