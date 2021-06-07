import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
  render() {
    return (


      <div>

        <Hornedbeast title={'Markhor'} alt={'firsthorned'} description={'The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat. It’s extremely endangered, with an estimated 2,500 left in the wild in part due to hunting for its absurdly spectacular corkscrewed horns, which can grow to more than five feet long.'} url={'https://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg'} />
        <Hornedbeast title={'Saiga'} alt={'sexondhorned'} description={'Native to the dusty steppes of Kazakhstan, Russia, and sometimes Uzbekistan during migrations, the saiga is a truly absurd-looking and delightful antelope. Its fleshy, shotgun-like nose is used to filter out dust in its habitat and also, we think, to warm cold winter air before it makes its way to the animal’s lungs. Its spiralled horns are a light, dusky pink, with the luster of jade. It’s also incredibly endangered; read this for more about the plight of the noble, floppy-nosed saiga.'} url={'https://modernfarmer.com/wp-content/uploads/2014/08/nubianibex.jpg'} />
        <Hornedbeast title={'Nubian Ibex'} alt={'thirdhorned'} description={'The Nubian ibex’s gigantic, backward-curling horns are even more impressive when you consider that the ibex uses them to smash into male competitors while on top of scary mountains in North Africa and Arabia. There are a few different types of ibex and nobody’s quite sure whether they’re the same species or not, so please, alpine ibex fans, don’t be upset that the Nubian variety is up here instead.'} url={'https://modernfarmer.com/wp-content/uploads/2014/08/bharal.jpg'} />

      </div>
    )
  }
}

export default Main;