import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['large', 'medium', 'small'],
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error', 'success', 'warning'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
    startIcon: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
    endIcon: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
      <b><Typography variant={'subheading'}>Primary</Typography>
        </b>
        <p><b>
        <Typography variant={'subheading'}>Contained</Typography>
        </b></p>
      </Grid>
      <Button variant="outlined" color='primary'>
        Button
      </Button>
      <Button variant={'outlined'} variant={'contained'} color={'primary'}>
        Button
      </Button>
      <Button
  endIcon
  size="large"
  variant="contained"
>
  Button
</Button>
     <Button
  disabled
  endIcon
  size="large"
  startIcon
  variant="contained"
>
  Button
</Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <p><b>
        <Typography variant={'subheading'}>Outlined</Typography>
        </b></p>
      </Grid>
      <Button variant="outlined" color='primary'>
        Button
      </Button>
      <Button variant={'outlined'} variant={'contained'} color={'primary'}>
        Button
      </Button>
      <Button onClick={() => {alert('clicked');}}>
       Button
     </Button>
      <Button color='primary' variant="contained" disabled>
       Disabled
      </Button>
    </Grid>

  
    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
      <b><Typography variant={'subheading'}>Error</Typography>
        </b>
        <p><b>
        <Typography variant={'subheading'}>Contained</Typography>
        </b></p>
      </Grid>
      <Button variant="outlined" color='error'>
        Button
      </Button>
      <Button variant={'outlined'} variant={'contained'} color={'error'}>
        Button
      </Button>
      <Button color={'error'} onClick={() => {alert('clicked');}}>
       Button
     </Button>
      <Button color='error' variant="contained" disabled>
       Disabled
      </Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <p><b>
        <Typography variant={'subheading'}>Outlined</Typography>
        </b></p>
      </Grid>
      <Button variant="outlined" color='error'>
        Button
      </Button>
      <Button variant={'outlined'} variant={'contained'} color={'error'}>
        Button
      </Button>
      <Button color={'error'} onClick={() => {alert('clicked');}}>
       Button
     </Button>
      <Button color='error' variant="contained" disabled>
       Disabled
      </Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
      <b><Typography variant={'subheading'}>Success</Typography>
        </b>
        <p><b>
        <Typography variant={'subheading'}>Contained</Typography>
        </b></p>
      </Grid>
      <Button variant="outlined" color='success'>
        Button
      </Button>
      <Button variant={'outlined'} variant={'contained'} color={'success'}>
        Button
      </Button>
      <Button color={'success'} onClick={() => {alert('clicked');}}>
       Button
     </Button>
      <Button color='success' variant="contained" disabled>
       Disabled
      </Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <p><b>
        <Typography variant={'subheading'}>Contained</Typography>
        </b></p>
      </Grid>
      <Button variant="outlined" color='success'>
        Button
      </Button>
      <Button variant={'outlined'} variant={'contained'} color={'success'}>
        Button
      </Button>
      <Button color={'success'} onClick={() => {alert('clicked');}}>
       Button
     </Button>
      <Button color='success' variant="contained" disabled>
       Disabled
      </Button>
    </Grid>
  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
