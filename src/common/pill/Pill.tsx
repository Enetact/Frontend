import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {Chip, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


interface PillConfig {
    label: string,
}
interface PillContainer {
    pills: PillConfig[]
}

const Pill: FC<PillContainer> = ({pills}): JSX.Element => {
    return (
        <>
            <Box>

                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {pills.map(pill => (
                        <Chip
                            key={pill.label}
                            label={pill.label}
                            sx={{
                                backgroundColor: "#E86825",
                                color: '#FFFFFF',
                                fontSize: 12,
                                fontWeight: 600,
                                borderRadius: 1
                            }}
                            onDelete={() => console.log('clicked')}
                            deleteIcon={<CloseIcon sx={{color: "#ffffff !important"}}/>}
                        />
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export default Pill;