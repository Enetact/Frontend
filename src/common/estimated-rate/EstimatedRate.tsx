import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const EstimatedRate = () => {
    return (
        <>
            <Box  mt={5} mb={5}>
                <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Typography
                        fontWeight={'400'}
                        fontSize={16}
                        color={'#273576'}
                    >
                        YOUR ESTIMATED RATE
                    </Typography>
                    <Stack direction={'row'}>
                        <Typography fontSize={35.63}>
                            $
                        </Typography>
                        <Typography
                            fontSize={104.67}
                            lineHeight={0.9}
                            color={'#273576'}
                            fontWeight={'700'}
                        >
                            8
                        </Typography>
                        <Stack direction={'column'}>
                            <Typography fontSize={29.67}>
                                per hour
                            </Typography>
                            <Typography
                                fontSize={19.78}
                                color={'#E86825'}
                                fontWeight={500}
                            >
                                $50.50 total
                            </Typography>
                            <Typography fontSize={9}>
                                TAXES NOT INCLUDED
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default EstimatedRate;