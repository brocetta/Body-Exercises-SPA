import React, { Fragment } from "react";
import Form from "./Form";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 500,
  overflowY: "auto",
});

export default function ExercisesContainer(props) {
    const {
        muscles,
        groupedExercises,
        onSelectItem,
        onDelete,
        onSelectEdit,
        onEdit,
        individualExercise,
        editMode,
        category,
      } = props;
      
      const {
        id,
        title = "Welcome!!!",
        description = "Click on the workout list to get some more information",
      } = individualExercise || {};
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <StyledPaper>
          {groupedExercises.map(([group, exercises], index) => {
            if (!category || category === group) {
              return (
                <Fragment key={group}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map((exercise, index) => {
                      return (
                        <ListItem
                          key={exercise.id}
                          button
                          onClick={() => onSelectItem(exercise.id)}
                        >
                          <ListItemText primary={exercise.title} />
                          <ListItemSecondaryAction>
                            <IconButton onClick={() => onSelectEdit(exercise.id)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => onDelete(exercise.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      );
                    })}
                  </List>
                </Fragment>
              );
            }
            return null;
          })}
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledPaper>
          {editMode && (
            <Form
              key={individualExercise.id}
              exercise={individualExercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          )}
          {!editMode && (
            <Fragment>
              <Typography variant="h5" style={{ textTransform: "capitalize" }}>
                {title}
              </Typography>
              <Typography variant="body1" style={{ marginTop: 20 }}>
                {description}
              </Typography>
            </Fragment>
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
