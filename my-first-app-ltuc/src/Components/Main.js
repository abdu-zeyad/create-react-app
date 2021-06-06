import React from 'react';
import Hornedbeast1 from './Hornedbeast1'
import Hornedbeast2 from './Hornedbeast2'

class Main extends React.Component {

  render() {
    return (
      <div>
        <p>NATURE IS BEAUTIFUL</p>
        <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" alt="that is nature" width='100px' height='100px'  />
        <Hornedbeast1/>
        <Hornedbeast2/>

      </div>

    )
  }
}


export default Main;
