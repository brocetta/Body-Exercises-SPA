import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material';
import ActionButton from "./components/ActionButton"
import AddExercise from './components/AddExercise';
import Form from './components/Form'
import { useState } from 'react';
import { muscles, exercises } from './components/Exercises'

function App() {
  const [exercises, setExercises] = useState([]);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);

const getExercisesByMuscles = () => {
  const initExercises = muscles.reduce((allmuscles, category) => {
      return {
          ...allmuscles,
          [category]: []
      };
  }, {});
  return Object.entries(
      exercises.reduce((acc, curr) => {
          const { muscles } = curr;
          acc[muscles] = [...acc[muscles], curr];
          return acc;
      }, initExercises)
  );
};
const handleCategorySelect = (category) => {
  setCategory(category);
};
const handleExerciseSelect = id => {
  const selectedExercise = exercises.find(ex => ex.id === id);
  setExercise(selectedExercise);
  setEditMode(false);
};








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
