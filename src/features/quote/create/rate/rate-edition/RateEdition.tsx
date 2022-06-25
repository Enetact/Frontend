import React, {FC} from 'react';
import {
    Box,
    Chip,
    Divider,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
    Theme,
    Typography
} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useTheme} from "@mui/material/styles";
import BusinessLiabilityLimit from "../../coverage/business-liability-limit/BusinessLiabilityLimit";
import CrewSizeEdition from "./crew-size-edition/CrewSizeEdition";
import AdditionalInsuredEdition from "./additional-insured-edition/AdditionalInsuredEdition";
import ProjectTime from "../../quote/project-time/ProjectTime";
import Button from "@mui/material/Button";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Select Category',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface RateEditionParam {
    setEdition: Function
}

const RateEdition: FC<RateEditionParam> = ({setEdition}): JSX.Element => {
    const fieldLabelStyle = {
        fontWeight: "500",
        fontSize: 12,
        color: "#50545E"
    }

    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <>
            <Box>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Typography>
                        Project Details
                    </Typography>
                    <Link href="#" variant="body2" underline="hover" onClick={() => setEdition(false)}>
                        Cancel
                    </Link>
                </Stack>
                <Divider/>
            </Box>
            {/* First and Last Name*/}
            <Box mt={2}>
                <Stack
                    direction={'row'}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        sx={{
                            width:360
                        }}
                    >
                        <Typography
                            sx={fieldLabelStyle}
                        >
                            First Name
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            value={''}
                        />
                    </Stack>
                    <Stack
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        sx={{
                        width:360
                    }}
                    >
                        <Typography
                            sx={fieldLabelStyle}>
                            Last Name
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={''}
                        />
                    </Stack>
                </Stack>
            </Box>
            {/*    Business Address */}
            <Box mt={2}>
                <Stack
                    direction={'column'}
                    justifyContent={"center"}
                >
                    <Typography
                        sx={fieldLabelStyle}>
                        Business Address
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="businessAddress"
                        label="Business Address"
                        name="businessAddress"
                        value={''}
                    />
                </Stack>
            </Box>

            <Box mt={2} mb={3}>
                <Stack direction={"column"}>
                    <Typography
                        sx={fieldLabelStyle}>
                        Project Category
                    </Typography>
                    <FormControl>
                        <InputLabel id="demo-multiple-chip-label">Project Category</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Box>


            <Box mt={2} mb={4}>
                <Stack
                    direction={'column'}
                    justifyContent={"center"}
                >
                    <Typography
                        sx={fieldLabelStyle}>
                        Project Address
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="projectAddress"
                        label="Project Address"
                        name="projectAddress"
                        value={''}
                    />
                </Stack>
            </Box>

            <BusinessLiabilityLimit/>

            <CrewSizeEdition/>

            <AdditionalInsuredEdition/>

            <ProjectTime/>
            <Box mt={5} mb={5}>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button variant="contained" sx={{borderRadius: 1, paddingX: 3, paddingY: 1, width: 168, backgroundColor: '#E86825', fontWeight: 600}}>Save</Button>
                </Stack>
            </Box>
        </>
    );
};

export default RateEdition;