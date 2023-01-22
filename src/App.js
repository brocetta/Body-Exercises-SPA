import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import { muscles, exercises } from './components/Exercises'
import ExercisesContainer from "./components/ExercisesContainer" 


function App() {
  const [exercisesState, setExercisesState] = useState([]);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("Exercises state updated: ", exercisesState);
    // re-render the ExercisesContainer component here
  }, [exercisesState, exercise]);
 
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
  const newExercisesState = [...exercisesState, exercise];
  setExercisesState(newExercisesState);
}
const handleExerciseDelete = (id) => {
  const newExercisesState = exercisesState.filter(ex => ex.id !== id);
  setExercisesState(newExercisesState);
  if (exercise.id === id) {
    setExercise({});
    setEditMode(false);
  }
};
const handleExerciseSelectEdit = id => {
  setExercise(exercises.find(ex => ex.id === id));
  setEditMode(true);
};
const handleExerciseEdit = (exercise) => {
  const updatedExercises = [...exercisesState];
  const exerciseIndex = updatedExercises.findIndex((ex) => ex.id === exercise.id);
  updatedExercises[exerciseIndex] = exercise;
  setExercisesState([...exercisesState, exercise])
  setExercise(exercise);
  setEditMode(false);
};
const groupedExercises = getExercisesByMuscles();

  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
    <Toolbar>
      <Typography variant="h3" style={{flexGrow:"1"}}>Body Exercises</Typography>
      <Form onCreate={handleExerciseCreate} />
    </Toolbar>
    </AppBar>
    <ExercisesContainer
                exercisesState={exercisesState}
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