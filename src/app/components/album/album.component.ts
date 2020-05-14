import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from 'src/app/models/player';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  players: Player[] = [];

  constructor(private svcAlbum: AlbumService) {}

  ngOnInit(): void {
    this.svcAlbum.getPlayers().subscribe((players) => {
      this.players = players;
    });
  }

  addPlayer(name: string): void {
    this.svcAlbum.addPlayer(new Player(this.players.length, name));
  }

  ngOnDestroy(): void {
    console.log('Destroyeed.');
  }
}
