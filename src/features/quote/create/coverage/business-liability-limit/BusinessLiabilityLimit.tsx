import React, {FC} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";

const BusinessLiabilityLimit: FC = (): JSX.Element => {
    return (
        <>
            <Box  mb={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"center"}
                    alignItems={"center"}
                >

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Business liability limit</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Business liability limit"
                            onChange={() => console.log('calender clicked')}
                        >
                            <MenuItem value={10}>Select liability limit</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
        </>
    );
};

export default BusinessLiabilityLimit;