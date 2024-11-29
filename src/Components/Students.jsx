import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, editStudent, deleteStudent } from '../Features/studentSlice';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Students.students);

  const [studentData, setStudentData] = useState({
    Name: "",
    Course: "",
    Age: "",
    Batch: "",
  });

  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentData.Name && studentData.Course && studentData.Age && studentData.Batch) {
      if (editingStudent) {
        dispatch(editStudent({ ...studentData, id: editingStudent.id }));
        setEditingStudent(null);
      } else {
        dispatch(addStudent(studentData));
      }
      setStudentData({ Name: "", Course: "", Age: "", Batch: "" });
      setShowForm(false);
    }
  };

  const handleEdit = (student) => {
    setStudentData(student);
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingStudent(null);
    setStudentData({ Name: "", Course: "", Age: "", Batch: "" });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "20px" }}
        onClick={() => setShowForm(true)}
      >
        Add Student
      </Button>

      <Dialog fullScreen open={showForm} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              {editingStudent ? "Edit Student" : "Add Student"}
            </Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }} className="form-container">
          <TextField
            label="Name"
            name="Name"
            value={studentData.Name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Course"
            name="Course"
            value={studentData.Course}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            type="number"
            name="Age"
            value={studentData.Age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Batch"
            name="Batch"
            value={studentData.Batch}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "20px" }}
          >
            {editingStudent ? "Update Student" : "Add Student"}
          </Button>
        </form>
      </Dialog>

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 600,
          margin: "auto",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>Age</strong></TableCell>
              <TableCell align="right"><strong>Course</strong></TableCell>
              <TableCell align="right"><strong>Batch</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.Name}</TableCell>
                  <TableCell align="right">{student.Age}</TableCell>
                  <TableCell align="right">{student.Course}</TableCell>
                  <TableCell align="right">{student.Batch}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginRight: "10px" }}
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No students available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Students;
