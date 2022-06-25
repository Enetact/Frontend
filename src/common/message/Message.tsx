import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

interface MessageContent {
    message: string,
}

const Message: FC<MessageContent> = ({message}): JSX.Element => {
    return (
        <>
            <Box
                sx={{
                    marginBottom: 2,
                    paddingTop: 2,
                    PaddingBottom: 1,
                    paddingLeft: 2,
                    paddingRight: 2,
                    maxWidth: {xs: 400, sm: 650, md: 770},
                    minHeight: 65,
                    width: 720,
                    backgroundColor: 'primary.white',
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    boxShadow: "0px 2px 8px rgba(32, 37, 50, 0.08), 0px 2px 4px rgba(32, 37, 50, 0.03)",
                    alignContent: 'center'
                }}
            >
                <Stack
                    mt={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={1}>
                    <Typography>
                        {message}
                    </Typography>
                    <HelpOutlineOutlinedIcon sx={{color: "#E86825", marginTop: 2}}/>
                </Stack>
            </Box>
        </>
    );
}

export default Message;