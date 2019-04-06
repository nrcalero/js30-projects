import React from 'react';
import '../styles/drumkit.css';

class DrumKit extends React.Component {

  playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;  // Stop function from running altogether
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
  };

  removeTransition = (e) => {
    if(e.propertyName !== 'transform') return; // Skip if not a transform
    e.target.classList.remove('playing');
  };

  componentDidMount() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
    window.addEventListener('keydown', this.playSound);
  }

  render () {
    return (
      <div className="drum-kit-content">
        <div className="keys">
          <div data-key="65" className="key">
            <kbd>A</kbd>
            <span className="sound">clap</span>
          </div>
          <div data-key="83" className="key">
            <kbd>S</kbd>
            <span className="sound">hi-hat</span>
          </div>
          <div data-key="68" className="key">
            <kbd>D</kbd>
            <span className="sound">kick</span>
          </div>
          <div data-key="70" className="key">
            <kbd>F</kbd>
            <span className="sound">openhat</span>
          </div>
          <div data-key="71" className="key">
            <kbd>G</kbd>
            <span className="sound">boom</span>
          </div>
          <div data-key="72" className="key">
            <kbd>H</kbd>
            <span className="sound">ride</span>
          </div>
          <div data-key="74" className="key">
            <kbd>J</kbd>
            <span className="sound">snare</span>
          </div>
          <div data-key="75" className="key">
            <kbd>K</kbd>
            <span className="sound">tom</span>
          </div>
          <div data-key="76" className="key">
            <kbd>L</kbd>
            <span className="sound">tink</span>
          </div>
        </div>

        <audio data-key="65" src="../app/sounds/clap.wav"></audio>
        <audio data-key="83" src="../app/sounds/hihat.wav"></audio>
        <audio data-key="68" src="../app/sounds/kick.wav"></audio>
        <audio data-key="70" src="../app/sounds/openhat.wav"></audio>
        <audio data-key="71" src="../app/sounds/boom.wav"></audio>
        <audio data-key="72" src="../app/sounds/ride.wav"></audio>
        <audio data-key="74" src="../app/sounds/snare.wav"></audio>
        <audio data-key="75" src="../app/sounds/tom.wav"></audio>
        <audio data-key="76" src="../app/sounds/tink.wav"></audio>
      </div>
    )
  }
}

export default DrumKit;