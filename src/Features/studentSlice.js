import { createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    students:[
        {id:1, Name: "Shruti tiwari", Course:"Mern" , Age:"19", Batch:"October"}
    ],
};

const studentSlice = createSlice({
    name : 'Students',
    initialState,
    reducers: {
        addStudent: (state,action)=>{
            const{Name,Course, Age,Batch} = action.payload;
            const objstudent={
                id: nanoid(),
                Name,
                Course,
                Age,
                Batch
            };
            state.students.push(objstudent);
        },
        editStudent: (state,action)=>{
            const{id,Name,Course, Age,Batch} = action.payload;
            const studentIndex =state.students.findIndex((student)=>student.id===id);
            if(studentIndex!== -1){
                state.students[studentIndex]={
                    id,
                    Name,
                    Course,
                    Age,
                    Batch
                }
            }
        },
       deleteStudent: (state,action)=>{           
            state.students = state.students.filter((student)=>student.id!==action.payload);
        }
    }
})

export const {addStudent,editStudent,deleteStudent} = studentSlice.actions;
export default studentSlice.reducer;