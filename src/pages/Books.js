import React, { Fragment, Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookList from './BookList';
import AddBookForm from '../components/forms/AddBookForm';
import EditBookForm from '../components/forms/EditBookForm';
import * as actions from "../redux/actions";
import {withRouter} from 'react-router-dom';

class Books extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: this.props.books,
      currentBook: { id: null, name: '', year: '', author: '', genre: '', description: '', illustrations: [] },
      editing: false
    }
  }

  // Data from this.props.books - from the store from reducers
  // CRUD operations
  addBook = book => {
    book.id = this.props.books.length + 1;
    // this.setState([...this.state.books, book])
    this.props.addBook(book);
  }

  deleteBook = id => {
    // this.setState(this.state.books.filter(book => book.id !== id))
    this.props.removeBook(id-1);
  }

  selectBook = book => {
    this.props.selectBook(book);
    this.props.history.push(`/bookdetails/${book.id}`);
  }

  updateBook = (id, updatedBook) => {
    this.setState({editing: false});
    // this.setState(this.state.books.map(book => (book.id === id ? updatedBook : book)));
    this.props.updateBook(id, updatedBook);
  }

  editRow = book => {
    this.setState({editing: true});
    this.setState({ currentBook: { id: book.id, name: book.name, year: book.year, author: book.author, genre: book.genre, description: book.description }})
  }

  render() {
    return (
      <div className="book-container">
          <div className="book-form card">
              {this.state.editing ? (
                  <Fragment>
                      <h5>Edit book</h5>
                      <EditBookForm
                          editing={this.state.editing}
                          currentBook={this.state.currentBook}
                          updateBook={this.updateBook}
                      />
                  </Fragment>
              ) : (
                  <Fragment>
                      <h5>Add book</h5>
                      <AddBookForm addBook={this.addBook} />
                  </Fragment>
              )}
          </div>
          <div className="book-list">
              <BookList selectBook={this.selectBook} editRow={this.editRow} deleteBook={this.deleteBook}/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      books: state.books
  }
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators({
      selectBook: actions.selectBook,
      setBooks: actions.setBooks,
      addBook: actions.addBook,
      updateBook: actions.updateBook,
      removeBook: actions.removeBook
  }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Books));
