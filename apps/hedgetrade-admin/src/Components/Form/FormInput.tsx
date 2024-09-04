import { Grid, FormControl, InputLabel, Select, MenuItem, TextField as MuiTextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

interface FormInputProps {
  name: string;
  label: string;
  defaultValue?: any;
  type?: 'text' | 'select'; 
  options?: { value: string; label: string }[]; 
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  defaultValue = '',
  type = 'text',
  options = [],
}) => {
  return (
    <Grid item xs={12}>
      {type === 'text' ? (
        <Controller
          name={name}
          defaultValue={defaultValue}
          render={({ field }) => (
            <MuiTextField
              {...field}
              label={label}
              variant="outlined" 
              fullWidth
            />
          )}
        />
      ) : type === 'select' ? (
        <Controller
          name={name}
          defaultValue={defaultValue}
          render={({ field }) => (
            <FormControl fullWidth variant="outlined">
              <InputLabel>{label}</InputLabel>
              <Select
                {...field}
                label={label}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      ) : null}
    </Grid>
  );
};

export default FormInput;
