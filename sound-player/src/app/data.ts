import { of } from 'rxjs';
import {AudioRecord} from "./audio.model";

export const mockAudioItems$ = of<AudioRecord[]>([
  {
    id: 1,
    name: 'Pull Away - So Many Times',
    fileName: 'Dust.mp3',
    fileUrl: 'https://ia800401.us.archive.org/9/items/1972-dust-hard-attack/01.%20Pull%20Away%20-%20So%20Many%20Times.mp3'
  },
  {
    id: 2,
    name: 'Walk In The Soft Rain',
    fileName: '20Rain.mp3',
    fileUrl: 'https://ia600401.us.archive.org/9/items/1972-dust-hard-attack/02.%20Walk%20In%20The%20Soft%20Rain.mp3'
  },
  {
    id: 3,
    name: 'Thusly Spoken',
    fileName: 'Spoken.mp3',
    fileUrl: 'https://ia800401.us.archive.org/9/items/1972-dust-hard-attack/03.%20Thusly%20Spoken.mp3'
  },
  {
    id: 4,
    name: 'Learning To Die',
    fileName: 'Die.mp3',
    fileUrl: 'https://ia800401.us.archive.org/9/items/1972-dust-hard-attack/04.%20Learning%20To%20Die.mp3'
  },
  {
    id: 5,
    name: 'Alma\'s Cove',
    fileName: 'yuuf.mp3',
    fileUrl: 'https://ninjatune.net/audio-player/?mp3=yuuf/GB-CFB-25-00180-1&random=9a16a3d33cabe363de84b7fa79304f650a57c256'
  },
  {
    id: 6,
    name: 'barry-can-t-swim',
    fileName: 'barry.mp3',
    fileUrl: 'https://ninjatune.net/audio-player/?mp3=barry-can-t-swim/GB-CFB-25-01489-1&random=14d1e0d638d8fbdb4eb993c027fa07fe9a3c9b1e'
  },
  {
    id: 7,
    name: 'Suicide',
    fileName: 'Suicide.mp3',
    fileUrl: 'https://ia600401.us.archive.org/9/items/1972-dust-hard-attack/09.%20Suicide.mp3'
  },
  {
    id: 8,
    name: 'Ivory',
    fileName: 'Ivory.mp3',
    fileUrl: 'https://ia600401.us.archive.org/9/items/1972-dust-hard-attack/07.%20Ivory.mp3'
  }
])
