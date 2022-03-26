import {Component, Input, OnInit} from '@angular/core';
import {Rank} from "../../model/stats.model";

@Component({
  selector: 'app-player-rank',
  templateUrl: './player-rank.component.html',
  styleUrls: ['./player-rank.component.scss']
})


export class PlayerRankComponent implements OnInit {

  // @ts-ignore
  @Input rank: Rank;

  // @ts-ignore
  @Input rankIcon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
