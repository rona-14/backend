import pool from '../config/db.js';

export const fetchAllStudent = async () => {
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;
};

export const insert = async (student) => {
    const [result] = await pool.query("INSERT INTO student (name, author) VALUES (?, ?)", [student.name, student.author]
    );

    return result.insertId;
}