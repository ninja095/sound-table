import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, filter, map, Observable, switchMap } from "rxjs";
import {mockAudioItems$} from "./data";
import {AudioRecord} from "./audio.model";

@Injectable({ providedIn: 'root' })
export class AudioService {
  private selectedId$ = new BehaviorSubject<number | null>(null);

  requestPlay(id: number) {
    this.selectedId$.next(id);
  }

  get selectedItem$(): Observable<AudioRecord | null> {
    return this.selectedId$.pipe(
      filter((id): id is number => id !== null),
      distinctUntilChanged(),
      switchMap(id =>
        mockAudioItems$.pipe(
          map(items => items.find(item => item.id === id) || null),
        )
      )
    );
  }
}
