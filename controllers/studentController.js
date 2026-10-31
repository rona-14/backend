import * as studentService from '../services/studentService.js';

export const fetchAllStudent = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudent();
        res.status(200).json(students);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createStudent = async (req, res) => {
    console.log(req.body);
    const { name, srcode, program } = req.body; 
    const student = { name, srcode, program };

    try {
        const studentId = await studentService.createStudent(student);
        res.status(201).json({ success: true, message: studentId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};