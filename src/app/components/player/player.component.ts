import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  constructor() {}

  ngOnInit(): void {}

  addImage(image: string) {
    this.player.image = image;
    this.player.date = new Date();
  }
}
