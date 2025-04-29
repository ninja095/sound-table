import { of } from 'rxjs';
import {AudioRecord} from "./audio.model";

export const mockAudioItems$ = of<AudioRecord[]>([
  {
    id: 1,
    name: 'Rain Sounds',
    fileName: 'rain.mp3',
    fileUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    name: 'Ocean Waves',
    fileName: 'ocean.mp3',
    fileUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 3,
    name: 'Forest Ambience',
    fileName: 'forest.mp3',
    fileUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 4,
    name: 'Thunderstorm',
    fileName: 'thunder.mp3',
    fileUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  }
])
