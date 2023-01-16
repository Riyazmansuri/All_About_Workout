import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <Stack direction="row">
                    <img src={Logo} alt="Logo" width="70px" height="50px" />
                    <Typography variant="h4" color="#ff2625" mt="10px" ml="15px">
                        All About Workout
                    </Typography>
                </Stack>
                <Typography variant="h5" pb="40px">
                    Made to make you stronger than yesterday
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer