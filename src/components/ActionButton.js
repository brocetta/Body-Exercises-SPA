import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ flexGrow: '1' }}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}