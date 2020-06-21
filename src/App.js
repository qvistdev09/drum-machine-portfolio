import React from 'react';
import heater1 from './sounds/Heater-1.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
      sound1: new Audio(heater1)
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    this.state.sound1.play();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center min100vh">
          <DrumMachineCard>
            <div className="row justify-content-center">
              <SoundButton
                label="Q"
                play={this.playSound}
              />
              <SoundButton
                label="W"
                play={function () {
                  alert('hey');
                }}
              />
              <SoundButton
                label="E"
                play={function () {
                  alert('hey');
                }}
              />
            </div>
            <div className="row justify-content-center">
              <SoundButton
                label="A"
                play={function () {
                  alert('hey');
                }}
              />
              <SoundButton
                label="S"
                play={function () {
                  alert('hey');
                }}
              />
              <SoundButton
                label="D"
                play={function () {
                  alert('hey');
                }}
              />
            </div>
            <div className="row justify-content-center">
              <SoundButton
                label="Z"
                play={function () {
                  alert('hey');
                }}
              />
              <SoundButton
                label="X"
                play={function () {
                  alert('hey');
                }}
              />
              <SoundButton
                label="C"
                play={function () {
                  alert('hey');
                }}
              />
            </div>
          </DrumMachineCard>
        </div>
      </div>
    );
  }
}

function SoundButton(props) {
  return (
    <button
      type="button"
      className="btn btn-outline-primary sound-btn m-1"
      onClick={props.play}
    >
      {props.label}
    </button>
  );
}

function DrumMachineCard(props) {
  return (
    <div className="card text-center mx-auto">
      <div className="card-header">Drum Machine</div>
      <div className="card-body">{props.children}</div>
      <div className="card-footer text-muted">by Qvistsson</div>
    </div>
  );
}

export default App;
