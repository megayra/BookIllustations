import {combineReducers} from "redux";
import types from "./action-types";

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

// Books

function books(state = [
    { id: 1, name: 'The picture of Dorian Gray', year: '1890', author: 'Oscar Wilde', genre: 'fantasy', description: 'The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincotts Monthly Magazine.', illustrations: [{id: 1, name: 'The sins of Dorian', img: 'http://santacruzcomic.es/wp-content/uploads/2019/06/02.-Dorian-Gray.jpeg'}] },
    { id: 2, name: 'The Green Mile', year: '1996', author: 'Stephen King', genre: 'fantasy', description: 'The Green Mile is a 1996 serial novel by American writer Stephen King. It tells the story of death row supervisor Paul Edgecombes.', illustrations: [] },
    { id: 3, name: 'The Lord of the Rings', year: '1954', author: 'J. R. R. Tolkien', genre: 'fantasy', description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar ... Structurally, the novel is divided internally into six books, two per volume, with several appendices of background material included at the end.', illustrations: [{id: 1, name: 'The return of the king', img: 'https://images-cdn.fantasyflightgames.com/filer_public/74/69/7469be23-7075-4b02-a193-fdad66aca7ce/mec62_first_2.png'}] }       
], action){
    switch (action.type) {
        case types.ADD_BOOK: {
            return [...state, action.payload];
        }
        case types.REMOVE_BOOK: {
            state.splice(action.payload, 1)
            return [...state];
        }
        case types.UPDATE_BOOK: {     
            return state.map(book => (book.id === action.id ? action.payload : book));
        }
        default:
            return state;
    }
}

function bookDetails(state = {}, action) {
    switch (action.type) {
        case types.SET_BOOK_DETAILS: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

// Books API
function booksAPI(state = [], action) {
    switch (action.type) {
        case types.SET_BOOKSAPI: {
            return [...action.payload];
        }
        default:
            return state;
    }
}

function bookAPIDetails(state = {}, action) {
    switch (action.type) {
        case types.SET_BOOKSAPI_DETAILS: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

// function currentbookPage(state = 1, action) {
//     switch (action.type) {
//         case types.SET_CURRENTBOOK_PAGE: {
//             return action.payload;
//         }
//         default:
//             return state;
//     }
// }

// function totalbooksPages(state = 0, action) {
//     switch (action.type) {
//         case types.SET_TOTALBOOKS_PAGES: {
//             return action.payload;
//         }
//         default:
//             return state;
//     }
// }

export default combineReducers({
    error, 
    books,
    bookDetails,
    booksAPI, 
    bookAPIDetails,
    // currentbookPage,
    // totalbooksPages
});