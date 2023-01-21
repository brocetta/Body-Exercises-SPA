import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material';
import ActionButton from "./components/ActionButton"
import AddExercise from './components/AddExercise';
import Form from './components/Form'
import { useState } from 'react';
import { muscles, exercises } from './components/Exercises'
import ExercisesContainer from "./components/ExercisesContainer" 

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
  setExercise(exercises.find(ex => ex.id === id));
  setEditMode(false);
};
const handleExerciseCreate = (exercise) => {
  setExercises(prevExercises => [...prevExercises, exercise])
}
const handleExerciseDelete = (id) => {
  setExercises(prevExercises => prevExercises.filter(ex => ex.id !== id));
  if (exercise.id === id) {
    setExercise({});
    setEditMode(false);
  }
};
const handleExerciseSelectEdit = id => {
  setExercise(exercises.find(ex => ex.id === id));
  setEditMode(true);
};
const handleExerciseEdit = exercise => {
  const updatedExercises = exercises.filter(ex => ex.id !== exercise.id);
  const newExercises = [...updatedExercises, exercise];
  setExercises(newExercises);
  setExercise(exercise);
  setEditMode(false);
};
const groupedExercises = getExercisesByMuscles();
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
    <ExercisesContainer
                exercises={getExercisesByMuscles()}
                category={category}
                onSelectItem={handleExerciseSelect}
                individualExercise={exercise}
                onDelete={handleExerciseDelete}
                onSelectEdit={handleExerciseSelectEdit}
                onEdit={handleExerciseEdit}
                editMode={editMode}
                muscles={muscles}
                groupedExercises={groupedExercises}
            />
    </>
  );
}

export default App;
