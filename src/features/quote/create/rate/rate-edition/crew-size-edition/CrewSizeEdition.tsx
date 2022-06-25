import React, {FC} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";

const CrewSizeEdition: FC = (): JSX.Element => {
    return (
        <>
            <Box  mt={2} mb={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"center"}
                    alignItems={"center"}
                >

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Crew Size</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Business liability limit"
                            onChange={() => console.log('calender clicked')}
                        >
                            <MenuItem value={10}>Select crew size</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
        </>
    );
};

export default CrewSizeEdition;