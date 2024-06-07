import {Mentor} from "../Models/mentor.schema.js";

// Create Mentor
export const createMentor = async (req,res)=>{
    try{
        const newMentor= new Mentor(req.body)
        await newMentor.save()
        console.log(newMentor);
        res.status(200).json({message: "Mentor added successfully", data: newMentor})
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({error:"Internal server error"})
    }
}

// Assign student to mentor
export const studentToMentor = async(req,res)=>{
    try {
        const mentor_id= req.params.mentorId
        const student_id =req.body.studentIds
        const assignStudent = await Mentor.findByIdAndUpdate(mentor_id,{studentIds:student_id},{new:true})
        console.log(assignStudent,"assignedStudn");
        res.status(200).json({ message: "Student Assigned successfully", data: assignStudent })
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
}

