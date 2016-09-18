import React, { Component } from 'react'

class Map extends Component {
  render () {
    const { states, onClick } = this.props
    return (
      <div className='usa-viewport'>
        <svg className='usa'>
          <g>
            {
              states.map(function (state, key) {
                return <path key={key} onClick={onClick} {...state} />
              })
            }
            <text data-id="WA" onClick={onClick} x="70" y="50">Washington</text>
            <text data-id="OR" onClick={onClick} x="60" y="125">Oregon</text>
            <text data-id="ID" onClick={onClick} x="160" y="150">Idaho</text>
            <text data-id="MO" onClick={onClick} x="250" y="100">Montana</text>
            <text data-id="NV" onClick={onClick} x="100" y="240">Nevada</text>
            <text data-id="HI" onClick={onClick} x="90" y="500">Hawaii</text>
            <text data-id="CA" onClick={onClick} x="50" y="320">California</text>
            <text data-id="AZ" onClick={onClick} x="170" y="360">Arizona</text>
            <text data-id="UT" onClick={onClick} x="185" y="270">Utah</text>
            <text data-id="WY" onClick={onClick} x="260" y="185">Wyoming</text>
            <text data-id="CO" onClick={onClick} x="280" y="280">Colorado</text>
            <text data-id="NM" onClick={onClick} x="255" y="370">New Mexico</text>
            <text data-id="TX" onClick={onClick} x="400" y="450">Texas</text>
            <text data-id="OK" onClick={onClick} x="420" y="365">Oklahoma</text>
            <text data-id="KA" onClick={onClick} x="415" y="295">Kanas</text>
            <text data-id="NE" onClick={onClick} x="390" y="230">Nebraska</text>
            <text data-id="SD" onClick={onClick} x="365" y="160">South Dakota</text>
            <text data-id="ND" onClick={onClick} x="365" y="110">North Dakota</text>
            <text data-id="MN" onClick={onClick} x="470" y="95">Minnesota</text>
            <text data-id="IA" onClick={onClick} x="500" y="220">Iowa</text>
            <text data-id="IL" onClick={onClick} x="565" y="260">Illinois</text>
            <text data-id="WI" onClick={onClick} x="540" y="135">Wisconsin</text>
            <text data-id="MS" onClick={onClick} x="510" y="310">Missouri</text>
            <text data-id="AK" onClick={onClick} x="510" y="365">Arkansas</text>
            <text data-id="LA" onClick={onClick} x="527" y="480">Louisiana</text>
            <text data-id="MS" onClick={onClick} x="555" y="440">Mississippi</text>
            <text data-id="AL" onClick={onClick} x="620" y="410">Alabama</text>
            <text data-id="FL" onClick={onClick} x="680" y="465">Florida</text>
            <text data-id="GA" onClick={onClick} x="690" y="420">Georgia</text>
            <text data-id="SC" onClick={onClick} x="705" y="380">South Carolina</text>
            <text data-id="NC" onClick={onClick} x="722" y="340">North Carolina</text>
            <text data-id="VA" onClick={onClick} x="760" y="295">Virgina</text>
            <text data-id="WV" onClick={onClick} x="705" y="275">West Virgina</text>
            <text data-id="MD" onClick={onClick} x="752" y="250">Maryland</text>
            <text data-id="DE" onClick={onClick} x="825" y="255">Delaware</text>
            <text data-id="TN" onClick={onClick} x="610" y="350">Tenessee</text>
            <text data-id="KY" onClick={onClick} x="635" y="315">Kentucky</text>
            <text data-id="IN" onClick={onClick} x="615" y="240">Indiana</text>
            <text data-id="OH" onClick={onClick} x="680" y="240">Ohio</text>
            <text data-id="MI" onClick={onClick} x="632" y="180">Michigan</text>
            <text data-id="NY" onClick={onClick} x="770" y="175">New York</text>
            <text data-id="PA" onClick={onClick} x="730" y="215">Pennsylvania</text>
            <text data-id="NJ" onClick={onClick} x="830" y="230">New Jersey</text>
            <text data-id="CT" onClick={onClick} x="845" y="190">Connecticut</text>
            <text data-id="RI" onClick={onClick} x="870" y="178">Rhode Island</text>
            <text data-id="MA" onClick={onClick} x="850" y="163">Massachussetts</text>
            <text data-id="NH" onClick={onClick} x="855" y="142">New Hampshire</text>
            <text data-id="VT" onClick={onClick} x="815" y="120">Vermont</text>
            <text data-id="ME" onClick={onClick} x="875" y="90">Maine</text>
          </g>
        </svg>
      </div>
    )
  }
}

export default Map
