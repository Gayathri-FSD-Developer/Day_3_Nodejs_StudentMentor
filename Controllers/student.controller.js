import { Student } from "../Models/mentor.schema.js";

// Create Student
export const createStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save()
        console.log(newStudent);
        res.status(200).json({ message: "Student added successfully", data: newStudent })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" })
    }
}

// Assign mentor to student
export const mentorToStudent = async (req, res) => {
    try {
        const student_id = req.params.id
        const mentor_id = req.body.mentorId
        const assignMentor = await Student.findByIdAndUpdate(student_id, { mentorId: mentor_id }, { new: true })
        console.log(mentor_id, "mentorid");
        console.log(student_id, "student_id");
        console.log(assignMentor, "assignedStudn");
        res.status(200).json({ message: ",entor Assigned successfully", data: assignMentor })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" })
    }
}

//  API to show all students for a particular mentor
export const findStudent = async (req, res) => {
    try {
        const mentId = req.params.id
        const studentForMentor = await Student.find({ mentorId: mentId })
        console.log(mentId)
        console.log(studentForMentor);
        res.status(200).json({ message: "Students details", data: studentForMentor })
    } catch (error) {
        console.log(error);
        res.status(505).json({ message: "Internal server error" })
    }
}

//API to show the previously assigned mentor for a particular student.
export const findMentor = async (req, res) => {
    try {
        const studId = req.params.id
        // Eg: populate('mentorId')This part of the query instructs Mongoose 
        // to replace the mentorId field in each student document
        // with the corresponding mentor document from the School collection.
        const assignedMentor = await Student.findById(studId).populate('mentorId')
        res.status(200).json({ message: "Previously assigned mentor details", data: assignedMentor })
    } catch (error) {
        console.error(error);
        res.status(505).json({ message: "Internal server error" })
    }
}

// API to list the students not assigned to mentors
export const listNonAssignedStudent = async (req, res) => {
    try {
        // $exist query to find the mentorId non exist field students details  
        const studentsWithoutMentor = await Student.find({ mentorId: { $exists: false } })
        res.status(200).json({ message: "Non assigned students list ", data: studentsWithoutMentor })
    } catch (error) {
        console.log(error);
        res.status(505).json({ message: "Internal server error" })
    }
}