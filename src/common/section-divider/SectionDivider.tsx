import React, {FC} from 'react';
import {Box, Divider, Stack, Typography} from "@mui/material";

interface SectionTitle {
    title: string
}

const SectionDivider: FC<SectionTitle> = ({title}): JSX.Element => {
    return (
        <Box mt={4} mb={4}>
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
            >
                <Typography>
                    { title }
                </Typography>
            </Stack>
            <Divider/>
        </Box>
    );
};

export default SectionDivider;