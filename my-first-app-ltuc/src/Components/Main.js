import React from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
  render() {
    return (


      <div>

        <Hornedbeast title={'Lion'} alt={'firstbeast'} description={'The lion is a large felid of the genus Panthera native mainly to Africa. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.'} url={'https://www.goway.com/media/cache/aa/79/aa79264f49aae4d4b2d77f0abdeb16fc.jpg'} />
        <Hornedbeast title={'Tiger'} alt={'sexondbeast'} description={'The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar'} url={'https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/hero_full/Medium_WW226365.jpg?1574452099'} />
        <Hornedbeast title={'Cheatah'} alt={'thirdbeast'} description={'The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h with the fastest reliably recorded speeds being 93 and 98 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail.'} url={'https://media.mehrnews.com/d/2019/05/29/4/3141354.jpg'} />

      </div>
    )
  }
}

export default Main;