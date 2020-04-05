import types from './action-types';
import networkClient from '../network/network-client';


export function setBooks (books) {
    return {type: types.SET_BOOKS, payload: books}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

//Books

export function selectBook(book){
    return {type: types.SET_BOOK_DETAILS, payload: book};
}

export function addBook(book){
    return {type: types.ADD_BOOK, payload: book};
}

export function updateBook(id, book){
    return {type: types.UPDATE_BOOK, payload: book, id: id};
}

export function removeBook(index){
    return {type: types.REMOVE_BOOK, payload: index};
}

export function addIllustration(img){
    return {type: types.ADD_IMG, payload: img};
}

// Book Database
export function setBooksAPI (books) {
    return {type: types.SET_BOOKSAPI, payload: books}
}

// export function setCurrentBookPage (page) {
//     return {type: types.SET_CURRENTBOOK_PAGE, payload: page}
// }

// export function setTotalBooksPages (pages) {
//     return {type: types.SET_TOTALBOOKS_PAGES, payload: pages}
// }

export function selectBookAPI(book){
    return {type: types.SET_BOOKSAPI_DETAILS, payload: book};
}
