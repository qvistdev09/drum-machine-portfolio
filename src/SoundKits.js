import heater1 from './sounds/Heater-1.mp3';
import heater2 from './sounds/Heater-2.mp3';
import heater3 from './sounds/Heater-3.mp3';
import heater4 from './sounds/Heater-4_1.mp3';
import clap from './sounds/Heater-6.mp3';
import openHH from './sounds/Dsc_Oh.mp3';
import kicknHat from './sounds/Kick_n_Hat.mp3';
import kick from './sounds/RP4_KICK_1.mp3';
import closedHH from './sounds/Cev_H2.mp3';

import chord1 from './sounds/Chord_1.mp3';
import chord2 from './sounds/Chord_2.mp3';
import chord3 from './sounds/Chord_3.mp3';
import shaker from './sounds/Give_us_a_light.mp3';
import pianoOpenHH from './sounds/Dry_Ohh.mp3';
import pianoClosedHH from './sounds/Bld_H1.mp3';
import punchyKick from './sounds/punchy_kick_1.mp3';
import sideStick from './sounds/side_stick_1.mp3';
import snare from './sounds/Brk_Snr.mp3';

const soundKits = {
  'Heater Kit': [
    { label: 'Heater 1', sound: new Audio(heater1) },
    { label: 'Heater 2', sound: new Audio(heater2) },
    { label: 'Heater 3', sound: new Audio(heater3) },
    { label: 'Heater 4', sound: new Audio(heater4) },
    { label: 'Clap', sound: new Audio(clap) },
    { label: 'Open high hat', sound: new Audio(openHH) },
    { label: 'Kick n hat', sound: new Audio(kicknHat) },
    { label: 'Kick', sound: new Audio(kick) },
    { label: 'Closed High Hat', sound: new Audio(closedHH) },
  ],
  'Smooth Piano Kit': [
    { label: 'Chord 1', sound: new Audio(chord1) },
    { label: 'Chord 2', sound: new Audio(chord2) },
    { label: 'Chord 3', sound: new Audio(chord3) },
    { label: 'Shaker', sound: new Audio(shaker) },
    { label: 'Open high hat', sound: new Audio(pianoOpenHH) },
    { label: 'Closed high hat', sound: new Audio(pianoClosedHH) },
    { label: 'Punchy kick', sound: new Audio(punchyKick) },
    { label: 'Side stick', sound: new Audio(sideStick) },
    { label: 'Snare', sound: new Audio(snare) },
  ],
};

export default soundKits;
