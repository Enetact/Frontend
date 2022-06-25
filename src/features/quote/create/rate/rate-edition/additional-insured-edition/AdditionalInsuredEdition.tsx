import React, {FC} from 'react';
import {Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Box from "@mui/material/Box";

const AdditionalInsuredEdition: FC = (): JSX.Element => {
    return (
        <>
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
        </>
    );
};

export default AdditionalInsuredEdition;