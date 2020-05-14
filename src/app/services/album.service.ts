import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private players: Player[] = [];
  private tracker = new BehaviorSubject<Player[]>(this.players);

  constructor() {}

  /** Création de l'observable afin de pouvoir y souscrire. */
  getPlayers(): Observable<Player[]> {
    return this.tracker.asObservable();
  }

  addPlayer(player: Player): void {
    this.players.push(player);
    this.tracker.next(this.players);
  }
}
