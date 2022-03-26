import {Pipe, PipeTransform} from '@angular/core';
import {PlaylistFilter} from "../model/stats.model";

@Pipe({
  name: 'playlistFilter'
})
export class PlaylistFilterPipe implements PipeTransform {

  transform(items: any[], filter: PlaylistFilter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(value => value.playlist === filter.playlist);
  }
}
