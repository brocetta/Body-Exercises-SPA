import React, { useState } from "react";
import Form from "./Form";
import Fab from '@mui/material/Fab';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";

export default function MyComponent(props) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  }; 
  const handleFormSubmit = (exercise) => {
    handleToggle();
    props.onCreate(exercise);
  };
  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        size="small"
        onClick={handleToggle}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleToggle}>
        <DialogTitle>Create new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out form below</DialogContentText>
          <Form muscles={props.muscles} onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>
    </>
  );
}