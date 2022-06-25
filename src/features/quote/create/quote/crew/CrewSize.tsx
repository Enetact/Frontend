import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Crew from '../../../../../assets/icons/Crew.svg';
import ImageCheckBox from "../../../../../common/image-checkbox/ImageCheckBox";

const CrewSize: FC = (): JSX.Element  => {
    return (
        <div>
            <Box mt={5}>
                <Stack>
                    <Typography>
                        Crew Size
                    </Typography>
                </Stack>
            </Box>
            <Box>
                <ImageCheckBox
                    imageCheckbox={
                        [{
                            isChecked: true,
                            SvgIcons: [Crew, Crew],
                            label: "2 People"
                        },
                            {
                                isChecked: false,
                                SvgIcons: [Crew],
                                label: "Just me"
                            }]
                    }/>
        </Box>
        </div>
    );
};

export default CrewSize;