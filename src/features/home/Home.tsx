import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Home() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('fullName'),
      password: data.get('zipCode'),
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 600,
          }}
        >
          <Typography component="p" variant="body2">
            Hi, I’m Mascot, whats your full name and zipcode?
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container mt={1} spacing={1}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="fullName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="zipCode"
                  label="Zip Code"
                  id="zipCode"
                  autoComplete="zip-code"
                />
              </Grid>
              <Box m="auto" sx={{}}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 7, width: 250 }}
                >
                  GET MY QUOTE!
                </Button>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
