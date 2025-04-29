import {AfterViewChecked, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AudioService } from './audio.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {AudioRecord} from "./audio.model";
import {mockAudioItems$} from "./data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  private audioService = inject(AudioService);

  audioItems$!: Observable<AudioRecord[]>;
  selectedItem: AudioRecord | null = null;
  private audioNeedsUpdate = false;

  displayedColumns: string[] = ['id', 'name', 'fileName'];

  ngOnInit() {
    this.audioItems$ = mockAudioItems$;

    this.audioService.selectedItem$.subscribe(item => {
      if (item) {
        this.selectedItem = item;
        this.audioNeedsUpdate = true;
      }
    });
  }

  ngAfterViewChecked() {
    if (this.audioNeedsUpdate && this.audioPlayerRef) {
      const player = this.audioPlayerRef.nativeElement;
      player.load();
      player.play().catch(err => {
        console.error('[AUDIO] Ошибка при воспроизведении:', err);
      });
      this.audioNeedsUpdate = false;
    }
  }

  onPlay(id: number) {
    this.audioService.requestPlay(id);
  }
}
