import React, { Fragment, Component} from 'react';
import { connect } from "react-redux";
import bookImg from '../assets/img/bookplaceholder.jpg';

class BookList extends Component {

  listView = () => {
    document.querySelector('.content').classList.remove('grid-group-wrapper');
    document.querySelector('.content').classList.add('list-group-wrapper');
    document.querySelector('.content').style.flexDirection = 'column';
    document.querySelector('.gridBtn').classList.remove('active');
    document.querySelector('.listBtn').classList.add('active');
  }

  gridView = () => {
    document.querySelector('.content').classList.remove('list-group-wrapper');
    document.querySelector('.content').classList.add('grid-group-wrapper');
    document.querySelector('.content').style.flexDirection = 'row';
    document.querySelector('.listBtn').classList.remove('active');
    document.querySelector('.gridBtn').classList.add('active');
  }

  render() {
    return (
      <Fragment>   
        <div className="listHeader">
          <h5>List of books</h5>             
          <div className="options">
            <button className="btn active listBtn" onClick={this.listView}><i className="fa fa-bars"></i> List</button>
            <button className="btn gridBtn" onClick={this.gridView}><i className="fa fa-th-large"></i> Grid</button>
          </div>
        </div>
        <ul className="content list-group list-group-wrapper">
          {this.props.books.length > 0 ? (
                  this.props.books.map(book => (
                  <li className="list-group-item"  key={book.id}> 
                    <img src={bookImg} className="book-img thumbnail img-responsive"/> 
                    <div className="book-info">  
                      <h4>{book.name}</h4>   
                      <p>{book.description}</p>
                      <div className="btnWrap">
                        <button type="button" onClick={() => this.props.deleteBook(book.id)} className="btn btn-danger pull-right remove-post">
                            <span className="glyphicon glyphicon-remove"></span>
                            <span className="hidden-xs">Delete</span>
                        </button>
                        <button type="button" onClick={() => {this.props.editRow(book)}}  className="btn btn-danger pull-right editBtn">
                          <span className="glyphicon glyphicon-remove"></span>
                          <span className="hidden-xs">Edit</span>
                        </button>
                        <button type="button" onClick={() => {this.props.selectBook(book)}} className="btn btn-danger pull-right detailsBtn">
                          <span className="glyphicon glyphicon-remove"></span>
                          <span className="hidden-xs">Details</span>
                        </button>
                      </div>
                    </div>
                </li>
              ))
              ) : (
                <div className="book-info">  
                  <p>No books</p>
                </div>
              )}
          </ul>
        </Fragment>     
    )
  }
}

const mapStateToProps = state => {
  return {
      books: state.books
  }
};

export default connect(mapStateToProps, null)(BookList);
