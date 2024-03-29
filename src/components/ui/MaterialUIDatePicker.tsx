import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialUIPicker() {
    const [value, setValue] = useState<Dayjs | null>(
        dayjs(new Date()),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
        if (newValue) {
            console.log(newValue)
        } else {
            console.log('Nah ah')
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    views={['year', 'month']}
                    label="Year and Month"
                    minDate={dayjs('2012-03-01')}
                    maxDate={dayjs('2023-06-01')}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField sx={{ pl: 1, width: 180 }} size="small" {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}
