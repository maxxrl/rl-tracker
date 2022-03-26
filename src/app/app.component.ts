import {Component} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {Tab} from "./model/tab.model";
import {PlayerStatsService} from "./service/player-stats.service";
import {PlaylistFilter} from "./model/stats.model";
import {ApiService} from "./service/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  asyncTabs: Observable<Tab[]>;
  filterBy2s: PlaylistFilter = {playlist: "Doubles (Ranked)"};
  url = null;
  tobiEpicId = "DerDimpler";
  maxEpicId = "maxx227";

  constructor(
    public playerService: PlayerStatsService,
    private apiService: ApiService
  ) {
    let localDataMax = playerService.getStatsByPlayer(this.maxEpicId);
    let localDataTobi = playerService.getStatsByPlayer(this.tobiEpicId);

    this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        // @ts-ignore
        observer.next([
          {player: 'Max', apiResponse: localDataMax},
          {player: 'Tobi', apiResponse: localDataTobi}
        ]);
      }, 1000);
    });
  }
  refresh():void{

    this.apiService.getPlayerRank("maxx227").subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error, "Error");
    })

  }
}
