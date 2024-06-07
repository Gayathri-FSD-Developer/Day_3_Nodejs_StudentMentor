import express from  "express"
import { createStudent, findMentor, findStudent, listNonAssignedStudent, mentorToStudent } from "../Controllers/student.controller.js"
import { createMentor, studentToMentor } from "../Controllers/mentor.controller.js"

// Default fun call. Router() fun is used to create a new router object
const Router=express.Router()

Router.post('/create-student',createStudent)    // http://localhost:4000/api/create-student
Router.post('/create-mentor',createMentor)  // http://localhost:4000/api/create-mentor
Router.put('/assign-mentor/:mentorId',studentToMentor)  //http://localhost:4000/api/assign-mentor/:id
Router.put('/assign-student/:id',mentorToStudent)  //http://localhost:4000/api/assign-student/:id
Router.get('/find/student-by-mentor/:id',findStudent)  //http://localhost:4000/api/find/student-by-mentor/:id
Router.get('/find/prev/mentor/:id',findMentor)  //http://localhost:4000/api/find/prev/mentor/:id
Router.get('/find/student/without/mentor',listNonAssignedStudent)  //http://localhost:4000/api/find/student/without/mentor

export default Router;