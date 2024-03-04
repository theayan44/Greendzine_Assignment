import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#232E2A",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#245E2E",
        border: "2px solid #36A54680"
    },
}));


const ProgressBar = ({ value }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={value} />
        </Box>
    );
}

export default ProgressBar