import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab variant="outlined" color="secondary" aria-label="add" onClick={handleClickOpen} size="medium">
        <AddIcon />
      </Fab>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create New Exercise
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField gutterbottom sx={{mb:"20px"}}
            margin="dense"
            label="Title"
            // value="Title"
            fullWidth
            variant="standard"
          />
          <FormControl gutterbottom sx={{width: "100%"}}>
              <InputLabel style={{marginBottom: '16px'}}>Select Muscle</InputLabel>
              <Select
                label="Muscles"
              >
                <MenuItem value="Shoulders">Shoulders</MenuItem>
                <MenuItem value="Chest">Chest</MenuItem>
                <MenuItem value="Arms">Arms</MenuItem>
                <MenuItem value="Back">Back</MenuItem>
                <MenuItem value="Legs">Legs</MenuItem>
              </Select>
            </FormControl>
          <TextField gutterbottom
            multiline
            rows={5}
            margin="dense"
            label="Description"
            // value="Description"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Create
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
