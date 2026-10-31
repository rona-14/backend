import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    return await bookModel.fetch();
}