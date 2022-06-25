import React, {FC} from 'react';
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProjectSubrogation: FC = (): JSX.Element  => {
    return (
        <div>
            <Box mt={5} mb={5}>
                <Stack direction="column"
                       justifyContent="center"
                       alignItems="center"
                       spacing={2}>
                    <Button variant="outlined" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#F2F2F3', borderColor: '#F2F2F3', color: '#50545E', fontWeight: 600}}>No</Button>
                    <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#273576', color: '#ffffff', fontWeight: 600}}>Yes</Button>
                </Stack>
            </Box>
        </div>
    );
};

export default ProjectSubrogation;