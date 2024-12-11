import { useFormContext, Controller } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

const ColorPickerField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="color"
      control={control}
      render={({ field }) => (
        <Box sx={{ ml: 0.5, display: 'grid', gap: 2 }}>
          <Typography fontWeight="semi-bold">Choose Color:</Typography>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: field.value as string,
              border: '1px solid #ccc',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <input
              type="color"
              {...field}
              style={{
                position: 'absolute',
                opacity: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
              }}
            />
          </Box>
        </Box>
      )}
    />
  );
};

export default ColorPickerField;
