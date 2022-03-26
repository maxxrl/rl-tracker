import {Injectable} from '@angular/core';
import * as data from './example-rldata.json';
import {ApiResponse} from "../model/stats.model";
import {tierMapping} from "./tier-mapping";

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor() {
  }

  public getStatsByPlayer(playerName: string): ApiResponse {
    // @ts-ignore
    return data;
  }


  public getRankIconPath(rank: string): any {
    let iconByRank = PlayerStatsService.getIconByRank(rank);
    console.log(iconByRank);
    console.log(rank);
    return "/assets/tiers/" + iconByRank;
  }

  private static getIconByRank(rank: string): any {
    switch (rank) {
      case "BRONZE I": // @ts-ignore
        return "no-rank.png";
      case "BRONZE II": // @ts-ignore
        return "no-rank.png";
      case "BRONZE III": // @ts-ignore
        return "no-rank.png";
      case "SILBER I": // @ts-ignore
        return "no-rank.png";
      case "SILBER II": // @ts-ignore
        return "no-rank.png";
      case "SILBER III": // @ts-ignore
        return "no-rank.png";
      case "GOLD I": // @ts-ignore
        return "no-rank.png";
      case "GOLD II": // @ts-ignore
        return "g2.png";
      case "GOLD III": // @ts-ignore
        return "no-rank.png";
      case "PLATIN I": // @ts-ignore
        return "no-rank.png";
      case "PLATIN II": // @ts-ignore
        return "p2.png";
      case "PLATIN III": // @ts-ignore
        return "p3.png";
      case "Diamond I": // @ts-ignore
        return "d1.png";
      case "Diamond II": // @ts-ignore
        return "d2.png";
      case "Diamond III": // @ts-ignore
        return "d3.png";
      case "Champion I": // @ts-ignore
        return "c1.png";
      case "Champion II": // @ts-ignore
        return "c2.png";
      case "Champion III": // @ts-ignore
        return "c3.png";
      case "Grand Champion I": // @ts-ignore
        return "gc1.png";
      case "Grand Champion II": // @ts-ignore
        return "gc2.png";
      case "Grand Champion III": // @ts-ignore
        return "gc3.png";
      case "bronze_1": // @ts-ignore
        return "ssl.png";

    }
  }
}
