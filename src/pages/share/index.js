import React, { Component } from 'react'
import './index.css'

import bambam from '../../static/images/share/bambam.png'
import cj from '../../static/images/share/cj.png'
import gwen_alex from '../../static/images/share/gwen_alex.png'
import hayley from '../../static/images/share/hayley.png'
import jordon from '../../static/images/share/jordon.png'
import missy from '../../static/images/share/missy.png'
import newton from '../../static/images/share/newton.png'
import willie from '../../static/images/share/willie.png'
import mundi from '../../static/images/share/mundi.jpg'

import App from '../../app'

const primates = [
  {
    id: 'bambam',
    name: 'Bam Bam',
    src: bambam
  },
  {
    id: 'cj',
    name: 'CJ',
    src: cj
  },
  {
    id: 'gwen_alex',
    name: 'Gwen & Alex',
    src: gwen_alex
  },
  {
    id: 'hayley',
    name: 'Hayley',
    src: hayley
  },
  {
    id: 'jordon',
    name: 'Jordon',
    src: jordon
  },
  {
    id: 'missy',
    name: 'Missy',
    src: missy
  },
  {
    id: 'newton',
    name: 'Newton',
    src: newton
  },
  {
    id: 'willie',
    name: 'Willie',
    src: willie
  }
]

class Share extends Component {

  constructor (props) {
    super(props)
    this.state = {
      primateId: primates[0].id,
      image: mundi
    }
    this.loadImage = this.loadImage.bind(this)
    this.clickPrimate = this.clickPrimate.bind(this)
  }

  loadImage (e) {
    const _this = this
    const file = e.currentTarget.files[0]
    var reader = new FileReader()
    reader.onload = function(event) {
      _this.setState({
        image: event.target.result
      })
    }
    reader.readAsDataURL(file)
  }

  clickPrimate (e) {
    this.setState({
      primateId: e.currentTarget.id
    })
  }

  render () {
    const { image, primateId } = this.state
    const clickPrimate = this.clickPrimate
    const primate = primates.find(function (primate) {
      return primate.id === primateId
    })
    let thingy
    if( image ) {
      thingy = (
        <div>
          <div>
            <div className="thingy-container">
              <div className="thingy">
                <div className='thingy-overlay' style={{backgroundImage: `url(${primate.src})` }}></div>
                <img src={image} />
              </div>
              We are primates<br/>&amp; we are not pets!
            </div>
          </div>
          {
            primates.map(function (primate, key) {
              return (
                <div key={key} className='primate'>
                  <img id={primate.id} onClick={clickPrimate} src={`static/images/share/${primate.id}_full.jpg`} />
                  {primate.name}
                </div>
              )
            })
          }
        </div>
      )
    }

    return (
      <App>
        <h2 className='h2'>Share Your Support</h2>
        <div style={{padding: '1em'}}>
          <h3>Create your own to share on...</h3>
          <div>
            <img className='social' src='static/images/share/twitter.png' />
            <img className='social' src='static/images/share/facebook.png' />
            <img className='social' src='static/images/share/snapchat.png' />
            <img className='social' src='static/images/share/instagram.png' />
          </div>

          <p>
            <input type='file' onChange={this.loadImage} multiple />
          </p>
          {thingy}
          <h3>Examples</h3>
          <p>
            <img className='share' src='static/images/share/sample1.png' />
          </p>
          <p>
            <img className='share' src='static/images/share/sample2.png' />
          </p>
        </div>
      </App>
    )
  }
}

export default Share
