import React, { useState } from 'react';
import { Paper, Switch, FormControlLabel, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Divider, IconButton, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleOutline';

const TableDetails = () => {

  const [countMin, setCountMin] = useState<number>(1);
  const [countMax, setCountMax] = useState<number>(1);

  const handleIncrementMin = () => {
    setCountMin((prevCount) => Math.min(9, prevCount + 1));
  };
  const handleDecrementMin = () => {
    setCountMin((prevCount) => Math.max(1, prevCount - 1));
  }

  const handleIncrementMax = () => {
    setCountMax((prevCount) => Math.min(9, prevCount + 1));
  };
  const handleDecrementMax = () => {
    setCountMax((prevCount) => Math.max(1, prevCount - 1));
  }

  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6" align='center'>Table Details</Typography>
      <List>
        <ListItem>
          <ListItemText id='switch-list-label-name' secondary='Table Name' />
          <ListItemSecondaryAction>
            <TextField id="outlined-basic" size="small" variant="outlined" color="secondary" style={{ marginLeft: '50%'}}/>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText id="switch-list-label-maxCovers" secondary="Min Covers" />
          <ListItemSecondaryAction>
          <IconButton aria-label="delete" onClick={handleDecrementMin}><RemoveCircleIcon /></IconButton>
            {countMin}
            <IconButton color="secondary" aria-label="add" onClick={handleIncrementMin}><AddCircleIcon /></IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText id="switch-list-label-maxCovers" secondary="Max Covers" />
          <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={handleDecrementMax}><RemoveCircleIcon /></IconButton>
            {countMax}
            <IconButton color="secondary" aria-label="add" onClick={handleIncrementMax}><AddCircleIcon /></IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText id="switch-list-label-online" secondary="Online" />
          <ListItemSecondaryAction>
            <FormControlLabel
              value="start"
              control={<Switch/>}
              label="Active"
              labelPlacement="start"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText id="switch-list-label-advanced_setting" primary="Advanced Settings" />
          <ListItemSecondaryAction>
          <Checkbox
          // checked={checked}
          // onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  );
};

export default TableDetails;