import mongoose, { model } from "mongoose";

// Define the structure of the Mentor collection
const MentorSchema = new mongoose.Schema({
    name: String,
    subject: String,
    studentIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
})

// Define the structure of the Mentor collection
// By specifying "mongoose.Schema.Types.ObjectId", indicating that this field will store the unique identifier (object_id)
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    mentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }
})

// Assign the schema to the Mentor&Student(collection name) collection or model
export const Mentor = mongoose.model('Mentor', MentorSchema)
export const Student = mongoose.model('Student', StudentSchema)

