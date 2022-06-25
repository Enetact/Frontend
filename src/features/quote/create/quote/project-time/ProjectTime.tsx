import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, RadioGroup, Select, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DateRangePicker from "../../../../../common/date-range-picker/DateRangePicker";

const ProjectTime: FC = (): JSX.Element  =>  {
    const buttonStyle = {
        borderRadius: 1,
        paddingX: 3,
        paddingY: 1,
        width: 120,
        backgroundColor: '#F2F2F3',
        borderColor: '#F2F2F3',
        color: '#50545E',
        fontWeight: 600
    }
    const activeButtonStyle = {
        borderRadius: 1,
        paddingX: 3,
        paddingY: 1,
        width: 120,
        backgroundColor: '#273576',
        color: '#ffffff',
        fontWeight: 60
    }
    return (
        <div>
            <Box mt={5} mb={5}>
                <Stack direction="row"
                       justifyContent="center"
                       alignItems="flex-start"
                >
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <Stack direction="row"
                                   justifyContent="center" spacing={5}>
                                <Button variant="outlined" sx={activeButtonStyle}>Hours</Button>
                                <Button variant="outlined" sx={buttonStyle}>1 Day</Button>
                                <Button variant="outlined" sx={buttonStyle}>Days</Button>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </Stack>
            </Box>
            <Box mt={5} mb={5} p={1}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    spacing={2}>
                    <DateRangePicker/>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Age"
                            onChange={() => console.log('calender clicked')}
                        >
                            <MenuItem value={10}>7 Days</MenuItem>
                            <MenuItem value={20}>1 Week</MenuItem>
                            <MenuItem value={30}>2 Weeks</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
            <Box mt={5} mb={5}>
                <Stack direction="row" spacing={20}>
                    <Box>
                        <Stack direction="column">
                            <Typography variant="caption">Start</Typography>
                            <Typography variant="h3" color={'#273576'}
                                        sx={{fontWeight: "700"}}>Today</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="column">
                            <Typography variant="caption">Finish</Typography>
                            <Typography variant="h3" color={'#273576'}
                                        sx={{fontWeight: "700"}}>Today</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </div>
    );
}

export default ProjectTime;