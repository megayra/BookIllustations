import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import bookImg from '../assets/img/bookpl.jpg';
import ImgList from './ImgList';

let editedBook;

class BookDetails extends Component {

    constructor() {
        super();
    }
    handleSubmit = event => {
        let illustId = this.props.bookDetails.illustrations.length + 1;
        if(event.target.elements.name.value && event.target.elements.img.value){
            this.editedBook = {...this.props.bookDetails, illustrations: [...this.props.bookDetails.illustrations, {id: illustId, name: event.target.elements.name.value, img: event.target.elements.img.value}]}
            this.props.updateBook(this.props.bookDetails.id, this.editedBook);
            event.target.elements.name.value = '';
            event.target.elements.img.value = '';
            this.props.selectBook(this.editedBook);
        }
    }

    render() {
        return (
            <div className="row book-details">
                <div className="card">
                    <div className="card-body">
                        <h2>{this.props.bookDetails.name}</h2>
                        <div className="details-content">
                            <img src={bookImg} className="book-img thumbnail img-responsive"/>
                            <div className="book-content">
                                <p>Description:</p>
                                <p>{this.props.bookDetails.description}</p>
                                <p>Author: <span>{this.props.bookDetails.author}</span></p>
                                <p>Genre:  <span>{this.props.bookDetails.genre}</span></p>
                                <p>Year:  <span>{this.props.bookDetails.year}</span></p>
                            </div>            
                        </div>
                    </div>
                </div>
                <div className="card form-card">
                    <form onSubmit={event => {
                        event.preventDefault();
                        this.handleSubmit(event);
                    }}>         
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Illustration URL</label>
                        <input type="text" name="img" />
                        <button>Add Illustration</button>
                    </form>
                </div>
                <ImgList />
                {/* {this.props.bookDetails.illustrations ? (
                    this.props.bookDetails.illustrations.map(illustration => (
                    <div className="card form-card illust-card"  key={illustration.id}> 
                        <h4>{illustration.name}</h4>
                        <img src={illustration.img} className="book-img thumbnail img-responsive"/>     
                    </div>
                ))
                ) : (<div></div> )} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bookDetails: state.bookDetails,
    }
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators({
      selectBook: actions.selectBook,
      updateBook: actions.updateBook
  }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)
        (withRouter(BookDetails));
