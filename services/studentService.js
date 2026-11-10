import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const students = await studentModel.fetch();
    return students;
}

export const createStudent = async(student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
}

//UPDATE
export const updateStudent = async(student) =>{
    const updatedStudent = await studentModel.update(student);
    return updatedStudent;
}

//DELETE
export const deleteStudent = async(id) =>{
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}