import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';


export function Todo1() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Complete UC System NSP" />
      <FormControlLabel control={<Checkbox />} label="Sign contracts" />
      <FormControlLabel control={<Checkbox />} label="Send update to project manager" />
      <FormControlLabel control={<Checkbox />} label="Close out completed negotiations" />
    </FormGroup>
  );
}
