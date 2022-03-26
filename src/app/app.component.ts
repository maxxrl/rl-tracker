import {Component} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {Tab} from "./model/tab.model";
import {PlayerStatsService} from "./service/player-stats.service";
import {PlaylistFilter} from "./model/stats.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  asyncTabs: Observable<Tab[]>;
  filterBy2s: PlaylistFilter = {playlist: "Doubles (Ranked)"};
  url = null;

  constructor(public playerService: PlayerStatsService) {
    let apiResponseMaxxRl = playerService.getStatsByPlayer("marx_89");
    let apiResponseTobi = playerService.getStatsByPlayer("Der_Dimpler");

    this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        // @ts-ignore
        observer.next([
          {player: 'Max', apiResponse: apiResponseMaxxRl},
          {player: 'Tobi', apiResponse: apiResponseTobi}
        ]);
      }, 1000);
    });
  }
  refresh():void{
    console.log("Clicked");
  }
}
