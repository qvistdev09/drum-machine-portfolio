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
    this.sliderChange = this.sliderChange.bind(this);
    this.toggleKit = this.toggleKit.bind(this);
    this.setSoundLabel = this.setSoundLabel.bind(this);
  }

  setSoundLabel(label) {
    this.setState({
      soundLabel: label,
    });
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
                        keyCode={81}
                        soundObject={soundKits[this.state.kit][0]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                      <SoundButton
                        label="W"
                        keyCode={87}
                        soundObject={soundKits[this.state.kit][1]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                      <SoundButton
                        label="E"
                        keyCode={69}
                        soundObject={soundKits[this.state.kit][2]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SoundButton
                        label="A"
                        keyCode={65}
                        soundObject={soundKits[this.state.kit][3]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                      <SoundButton
                        label="S"
                        keyCode={83}
                        soundObject={soundKits[this.state.kit][4]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                      <SoundButton
                        label="D"
                        keyCode={68}
                        soundObject={soundKits[this.state.kit][5]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <SoundButton
                        label="Z"
                        keyCode={90}
                        soundObject={soundKits[this.state.kit][6]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                      <SoundButton
                        label="X"
                        keyCode={88}
                        soundObject={soundKits[this.state.kit][7]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                      <SoundButton
                        label="C"
                        keyCode={67}
                        soundObject={soundKits[this.state.kit][8]}
                        volume={this.state.volume}
                        setSoundLabel={this.setSoundLabel}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row mb-2 mt-2 mt-sm-0">
                    <div className="col">
                      <div className="card">
                        <div className="card-body p-1" id="display">
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
                            {this.state.volume < 0.02 ? (
                              <i className="fas fa-volume-off"></i>
                            ) : this.state.volume > 0.7 ? (
                              <i className="fas fa-volume-up"></i>
                            ) : (
                              <i className="fas fa-volume-down"></i>
                            )}
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

    this.buttonRef = null;
    this.soundObjectRef = null;

    this.keyTriggerPlay = this.keyTriggerPlay.bind(this);
    this.soundPlay = this.soundPlay.bind(this);
  }

  componentDidMount() {
    this.buttonRef = document.getElementById(String(this.props.keyCode));
    this.soundObjectRef = document.getElementById(this.props.label);
    document.addEventListener('keydown', this.keyTriggerPlay);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyTriggerPlay);
  }

  keyTriggerPlay(e) {
    if (e.keyCode === this.props.keyCode) {
      this.buttonRef.focus();
      this.buttonRef.click();
    }
  }

  soundPlay() {
    this.props.setSoundLabel(this.props.soundObject.label);
    this.soundObjectRef.volume = this.props.volume;
    this.soundObjectRef.currentTime = 0;
    this.soundObjectRef.play();
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-primary sound-btn m-1 drum-pad"
        onClick={this.soundPlay}
        id={String(this.props.keyCode)}
      >
        {this.props.label}
        <audio
          src={this.props.soundObject.sound.src}
          className="clip"
          id={this.props.label}
        />
      </button>
    );
  }
}

function DrumMachineCard(props) {
  return (
    <div className="card card-max text-center mx-auto" id="drum-machine">
      <div className="card-header">Drum Machine</div>
      <div className="card-body">{props.children}</div>
      <div className="card-footer text-muted">
        by{' '}
        <a
          href="https://github.com/qvistsson"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qvistsson
        </a>
      </div>
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
