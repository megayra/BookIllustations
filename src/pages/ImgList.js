import React, { Fragment, Component} from 'react';
import { connect } from "react-redux";
import bookImg from '../assets/img/bookplaceholder.jpg';

class ImgList extends Component {

  render() {
    return (
        <div>
          {this.props.bookDetails.illustrations ? (
                this.props.bookDetails.illustrations.map(illustration => (
                <div className="card form-card illust-card"  key={illustration.id}> 
                <h4>{illustration.name}</h4>
                <img src={illustration.img} className="book-img thumbnail img-responsive"/>     
            </div>
            ))
            ) : (<div></div> )}
        </div>     
    )
  }
}

const mapStateToProps = state => {
    return {
        bookDetails: state.bookDetails
    }
};

export default connect(mapStateToProps, null)(ImgList);
