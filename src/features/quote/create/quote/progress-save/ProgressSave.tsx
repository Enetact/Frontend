import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {blue, grey} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProgressSave: FC = (): JSX.Element => {
    return (
        <div>
            <Stack
                mt={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: 50,
                    p: 8,
                    backgroundColor: blue[900],
                }}
            >
                <Typography color={"white"}>
                    ESTIMATED HOURLY RATE
                </Typography>
                <Typography color={"white"}>
                    $8.00 per hour
                </Typography>
                <Typography color={"white"}>
                    Finish Later
                </Typography>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: 250,
                    p: 8,
                    backgroundColor: '#D6E3FF',
                }}
            >
                <Typography color={grey[600]}>
                    Create an account or enter your email and we will send you this quote to complete later.
                </Typography>

                <Stack direction="column"
                       justifyContent="center"
                       alignItems="center" component="form" onSubmit={() => console.log('clicked')} noValidate
                       sx={{mt: 1, width: 300}}>
                    <TextField
                        margin="normal"
                        required
                        id="email"
                        label="Email"
                        name="email"
                        sx={{mt: 0, width: 400}}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, borderRadius: 7,}}
                    >
                        SUBMIT
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default ProgressSave;