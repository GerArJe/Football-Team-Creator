import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {
  public players$: Observable<Player[]>;
  public selectedPlayer: Player;
  public shwoModal = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers();
  }

  newPlayer() {
    this.shwoModal = true;
    this.selectedPlayer = null;
    setTimeout(() => {
      window.location.replace('#open-modal');
    }, 0);
  }
}
