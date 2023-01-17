import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material';
import ActionButton from "./components/ActionButton"
import AddExercise from './components/AddExercise';
import Form from './components/Form'
import { useState } from 'react';

const MyComponent = () => {
  const [exercises, setExercises] = useState([]);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);
}

function App() {
  return (
    <>
    <CssBaseline />
    <AppBar>
    <Toolbar>
      <Typography variant="h3" style={{flexGrow:"1"}}>Body Exercises</Typography>
      {/* <ActionButton /> */}
      <Form />
      {/* <AddExercise /> */}
    </Toolbar>
    </AppBar>
    </>
  );
}

export default App;
