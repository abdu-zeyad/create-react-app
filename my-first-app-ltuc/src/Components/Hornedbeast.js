import React from 'react';

class Hornedbeast extends React.Component {
  render() {
    return (
      <div>

        <p> Title: {this.props.title}</p>
        <img src={this.props.url} alt={this.props.alt}  width ='200px' hight='15s0px'/>
        <p className='description'>description: {this.props.description}</p>



      </div >
    )
  }
}

export default Hornedbeast;