import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Stack, Typography} from "@mui/material";
import logo from "../../../../assets/images/MU-Logo.svg";


export default function QuoteByPolicyQuote() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Stack direction="row"
                       justifyContent="center"
                       alignItems="center">
                    <img src={logo} className="App-logo" alt="logo" width={200}/>
                </Stack>
                <Stack direction="column"
                       justifyContent="center"
                       alignItems="center" spacing={2}>
                    <Typography component="h1" variant="body1">
                        Retrieve Quote
                    </Typography>
                    <Typography component="p" variant="body2" sx={{
                        justifyContent:"center"}}>
                        Enter in your policy number to retrieve your past quotes, or create an account to save your past quotes.
                    </Typography>
                </Stack>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="policyNumber"
                        label="Policy Number"
                        id="policyNumber"
                        autoComplete="policy-number"
                    />
                    <Box>
                        <Stack direction="row">
                            <Box>
                                <Link href="#" variant="body2" underline="hover">
                                    Resend Quote
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: 7, }}
                    >
                        RETRIEVE POLICY
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}