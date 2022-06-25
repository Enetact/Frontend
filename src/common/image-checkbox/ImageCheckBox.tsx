import React, { FC } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Stack, SvgIconTypeMap } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '../../assets/icons/Checkbox.svg';
import Typography from '@mui/material/Typography';

interface ImageCheckBoxConfig {
  label: string;
  Icons?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>[];
  SvgIcons?: string[];
  isChecked: boolean;
}

interface ImageCheckBoxContainer {
  imageCheckbox: ImageCheckBoxConfig[];
}
const ImageCheckBox: FC<ImageCheckBoxContainer> = ({ imageCheckbox }): JSX.Element => {
  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
          {imageCheckbox.map((checkbox, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                border: '1px solid grey',
                width: 134,
                height: 129,
                alignContent: 'center',
                borderRadius: 3,
                backgroundColor: checkbox.isChecked ? '#273576' : '#8F9DDA',
                position: 'relative',
              }}
            >
              <Stack
                direction={'row'}
                justifyContent="flex-end"
                alignItems="flex-end"
                sx={{ display: checkbox.isChecked ? 'flex' : 'none' }}
              >
                <img src={Checkbox} alt={'Checkbox'} height={40} width={28} />
              </Stack>
              <Stack spacing={1} sx={{ position: 'absolute', top: 40 }}>
                <Stack direction={'row'} spacing={0.8}>
                  {checkbox.Icons &&
                    checkbox.Icons.map((Icon, index) => (
                      <div key={index}>
                        <Icon
                          sx={{
                            color: checkbox.isChecked ? '#8F9DDA' : '#D9DADD',
                            width: 34.13,
                            height: 41.92,
                          }}
                        />
                      </div>
                    ))}
                  {checkbox.SvgIcons &&
                    checkbox.SvgIcons.map((SvgIcons, index) => (
                      <div key={index}>
                        <img src={SvgIcons} alt={'checkbox'} height={40} width={28} />
                      </div>
                    ))}
                </Stack>
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {checkbox.label}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default ImageCheckBox;
