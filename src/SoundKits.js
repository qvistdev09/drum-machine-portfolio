import heater1 from './sounds/Heater-1.mp3';
import heater2 from './sounds/Heater-2.mp3';
import heater3 from './sounds/Heater-3.mp3';
import heater4 from './sounds/Heater-4_1.mp3';
import clap from './sounds/Heater-6.mp3';
import openHH from './sounds/Dsc_Oh.mp3';
import kicknHat from './sounds/Kick_n_Hat.mp3';
import kick from './sounds/RP4_KICK_1.mp3';
import closedHH from './sounds/Cev_H2.mp3';

const soundKits = {
  kit1: [
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
};

export default soundKits;
