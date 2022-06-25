import React, {FC} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Address: FC = (): JSX.Element  =>  {
    return (
        <div>
            <Box mt={5} mb={5}>
                <TextField
                    label="Address"
                    placeholder="123 Main St ,Apt 1, City, State 00000"
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                />
            </Box>
        </div>
    );
}

export default Address;