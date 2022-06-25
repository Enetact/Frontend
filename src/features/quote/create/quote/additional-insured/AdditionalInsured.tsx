import React, {FC} from 'react';
import {Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Box from "@mui/material/Box";

const AdditionalInsured: FC = (): JSX.Element => {
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
            <Box mt={5} mb={5} p={1}>
                <Stack direction="column"
                       spacing={2}>
                    <TextField
                        margin="normal"
                        required
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        placeholder="Full Name"
                        fullWidth
                        sx={{mt: 0}}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="address"
                        label="Address"
                        name="address"
                        placeholder="123 Main St ,Apt 1, City, State 00000"
                        fullWidth
                        sx={{mt: 0}}
                    />
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center">
                        <Button variant="text">Delete</Button>
                        <Button variant="text" startIcon={<AddOutlinedIcon/>}>Add</Button>
                    </Stack>
                </Stack>
            </Box>
            <Box mt={5} mb={5}>
                <Stack
                       justifyContent="center"
                       alignItems="center"
                       spacing={2}>
                    <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#E86825', fontWeight: 600}}>Continue</Button>
                </Stack>
            </Box>
        </div>
    );
}

export default AdditionalInsured;