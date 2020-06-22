import React from 'react';
import soundKits from './SoundKits';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundLabel: 'Sound',
      kit: 'Heater Kit',
      volume: 0.5,
    };
    this.playSound = this.playSound.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.toggleKit = this.toggleKit.bind(this);
  }

  toggleKit() {
    if (this.state.kit !== 'Smooth Piano Kit') {
      this.setState({
        kit: 'Smooth Piano Kit',
      });
    } else {
      this.setState({
        kit: 'Heater Kit',
      });
    }
  }

  sliderChange(e) {
    this.setState({
      volume: e.target.value / 100,
    });
  }

  playSound(pos) {
    this.setState({
      soundLabel: soundKits[this.state.kit][pos].label,
    });
    soundKits[this.state.kit][pos].sound.volume = this.state.volume;
    soundKits[this.state.kit][pos].sound.currentTime = 0;
    soundKits[this.state.kit][pos].sound.play();
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center min100vh">
          <div className="col">
            <DrumMachineCard>
              <div className="row">
                <div className="col-sm">
                  <div className="row">
                    <div className="col">
                      <SoundButton
                        label="Q"
                        play={this.playSound}
                        pos={0}
                        keyCode={81}
                      />
                      <SoundButton
                        label="W"
                        play={this.playSound}
                        pos={1}
                        keyCode={87}
                      />
                      <SoundButton
                        label="E"
                        play={this.playSound}
                        pos={2}
                        keyCode={69}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SoundButton
                        label="A"
                        play={this.playSound}
                        pos={3}
                        keyCode={65}
                      />
                      <SoundButton
                        label="S"
                        play={this.playSound}
                        pos={4}
                        keyCode={83}
                      />
                      <SoundButton
                        label="D"
                        play={this.playSound}
                        pos={5}
                        keyCode={68}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SoundButton
                        label="Z"
                        play={this.playSound}
                        pos={6}
                        keyCode={90}
                      />
                      <SoundButton
                        label="X"
                        play={this.playSound}
                        pos={7}
                        keyCode={88}
                      />
                      <SoundButton
                        label="C"
                        play={this.playSound}
                        pos={8}
                        keyCode={67}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row mb-2 mt-2 mt-sm-0">
                    <div className="col">
                      <div className="card">
                        <div className="card-body p-1">
                          {this.state.soundLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <div className="card">
                        <div className="card-body p-1">
                          <label htmlFor="volume" className="d-block">
                            Volume
                          </label>
                          <input
                            type="range"
                            id="volume"
                            name="volume"
                            min="0"
                            max="100"
                            value={this.state.volume * 100}
                            onChange={this.sliderChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <div className="card-body p-1">
                          <p>{this.state.kit}</p>
                          <ToggleSwitch toggleKit={this.toggleKit} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DrumMachineCard>
          </div>
        </div>
      </div>
    );
  }
}

class SoundButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonRef: null,
    };
    this.keyTriggerPlay = this.keyTriggerPlay.bind(this);
  }

  componentDidMount() {
    this.setState({
      buttonRef: document.getElementById(String(this.props.keyCode)),
    });
    document.addEventListener('keydown', this.keyTriggerPlay);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyTriggerPlay);
  }

  keyTriggerPlay(e) {
    if (e.keyCode === this.props.keyCode) {
      this.state.buttonRef.focus();
      this.state.buttonRef.click();
    }
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-primary sound-btn m-1"
        onClick={() => this.props.play(this.props.pos)}
        id={String(this.props.keyCode)}
      >
        {this.props.label}
      </button>
    );
  }
}

function DrumMachineCard(props) {
  return (
    <div className="card card-max text-center mx-auto">
      <div className="card-header">Drum Machine</div>
      <div className="card-body">{props.children}</div>
      <div className="card-footer text-muted">by Qvistsson</div>
    </div>
  );
}

function ToggleSwitch(props) {
  return (
    <label className="kit-switch">
      <input type="checkbox" onClick={props.toggleKit} />
      <span className="slider round"></span>
    </label>
  );
}

export default App;
