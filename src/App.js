import React from "react"
 
export default class App extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      arr: [],
      arrE: [],
    }
  }

  componentDidMount1() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    this.div.appendChild(script);
    
  }
  componentDidMount(){
    document.addEventListener("keydown",this.czywcisnieto)
}

czywcisnieto=(event)=> {
  
    event.preventDefault()
if (event.keyCode === 81) {
  this.setState({arr:["Q"]})
  const audioEl = document.getElementsByClassName("clip")[0]
  audioEl.play() 
  
}
else if (event.keyCode === 87) {
  this.setState({arr:["W"]})
  const audioEl = document.getElementsByClassName("clip")[1]
  audioEl.play() 
  
}
else if (event.keyCode === 69) {
  this.setState({arr:["E"]})
  const audioEl = document.getElementsByClassName("clip")[2]
  audioEl.play() 
  
}
else if (event.keyCode === 65) {
  this.setState({arr:["A"]})
  const audioEl = document.getElementsByClassName("clip")[3]
  audioEl.play() 
  
}
  else if (event.keyCode === 83) {
    this.setState({arr:["S"]})
    const audioEl = document.getElementsByClassName("clip")[4]
    audioEl.play() 
    
  }
  else if (event.keyCode === 68) {
    this.setState({arr:["D"]})
    const audioEl = document.getElementsByClassName("clip")[5]
    audioEl.play() 
    
    
  }
  else if (event.keyCode === 90) {
    this.setState({arr:["Z"]})
    const audioEl = document.getElementsByClassName("clip")[6]
    audioEl.play() 
    
  }
  else if (event.keyCode === 88) {
    this.setState({arr:["X"]})
    const audioEl = document.getElementsByClassName("clip")[7]
    audioEl.play() 
    
  }
  else if (event.keyCode === 67) {
    this.setState({arr:["C"]})
    const audioEl = document.getElementsByClassName("clip")[8]
    audioEl.play() 
    
  }
  }
  

 

  playAudio0=()=> {
    this.setState({arr:["Q"]})
    const audioEl = document.getElementsByClassName("clip")[0]
    audioEl.play()
  }
  playAudio1=()=> {
    this.setState({arr:["W"]})
    const audioEl = document.getElementsByClassName("clip")[1]
    audioEl.play()
  }
  playAudio2=()=> {
    this.setState({arr:["E"]})
    const audioEl = document.getElementsByClassName("clip")[2]
    audioEl.play()
  }
  playAudio3=()=> {
    this.setState({arr:["A"]})
    const audioEl = document.getElementsByClassName("clip")[3]
    audioEl.play()
  }
  playAudio4=()=> {
    this.setState({arr:["S"]})
    const audioEl = document.getElementsByClassName("clip")[4]
    audioEl.play()
  }
  playAudio5=()=> {
    this.setState({arr:["D"]})
    const audioEl = document.getElementsByClassName("clip")[5]
    audioEl.play()
  }
  playAudio6=()=> {
    this.setState({arr:["Z"]})
    const audioEl = document.getElementsByClassName("clip")[6]
    audioEl.play()
  }
  playAudio7=()=> {
    this.setState({arr:["X"]})
    const audioEl = document.getElementsByClassName("clip")[7]
    audioEl.play()
  }
  playAudio8=()=> {
    this.setState({arr:["C"]})
    const audioEl = document.getElementsByClassName("clip")[8]
    audioEl.play()
  }
 
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
        <div className="drum-machine"  id="drum-machine"  >
          <div id="display">{this.state.arrE.length===0&&this.state.arr.length===0&&<div>0</div>}
          {this.state.arrE.map(item => (
            <div style={{display:"inline"}} key={item}>{item}</div>
          ))}
          {this.state.arr.map(item => (
            <div style={{display:"inline"}} key={item}>{item}</div>
          ))}</div>

        <button className="drum-pad" id="Q" onClick={this.playAudio0}>Q
        <audio className="clip" id="Q" src="https://www.fesliyanstudios.com/play-mp3/3542" />
        </button>
        <button className="drum-pad" id="W" onClick={this.playAudio1}>W
        <audio className="clip" id="W" src="https://www.fesliyanstudios.com/play-mp3/5432"/>
        </button>
        <button className="drum-pad" id="E" onClick={this.playAudio2}>E
        <audio className="clip" id="E"  src="https://www.fesliyanstudios.com/play-mp3/6165"/>
        </button>
        <button className="drum-pad" id="A" onClick={this.playAudio3}>A
        <audio className="clip" id="A" src="https://www.fesliyanstudios.com/play-mp3/6625"/>
        </button>
        <button className="drum-pad" id ="S" onClick={this.playAudio4}>S
        <audio className="clip" id="S" src="https://www.fesliyanstudios.com/play-mp3/635"/>
        </button>
        <button className="drum-pad" id="D" onClick={this.playAudio5}>D
        <audio className="clip" id="D" src="https://www.fesliyanstudios.com/play-mp3/1665"/>
        </button>
        <button className="drum-pad" id="Z" onClick={this.playAudio6}>Z
        <audio className="clip" id="Z" src="https://www.fesliyanstudios.com/play-mp3/2665"/>
        </button>
        <button className="drum-pad" id="X" onClick={this.playAudio7}>X
        <audio className="clip" id="X" src="https://www.fesliyanstudios.com/play-mp3/3665"/>
        </button>
        <button className="drum-pad" id="C" onClick={this.playAudio8}>C
        <audio className="clip" id="C" src="https://www.fesliyanstudios.com/play-mp3/2635"/>
        </button>
        </div>
      </div>
    )
  }
}
