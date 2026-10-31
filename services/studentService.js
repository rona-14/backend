import * as studentModel from '../models/studentModel.js';

export const fetchAllStudent = async() =>{
    return await studentModel.fetchAllStudent();
}

export const createStudent = async(student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
}
