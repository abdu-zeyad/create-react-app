import React from 'react';


class Hornedbeast2 extends React.Component {

  render() {
    return (
      <div>
        <h2>tiger</h2>
      <img src="data:image/jpeg;base64,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" alt="tiger" />
      <p>tiger is the king</p>

    </div>
    )
  }
}


export default Hornedbeast2;