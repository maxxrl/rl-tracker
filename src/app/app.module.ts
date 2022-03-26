import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BackgroundModule} from "maxxrl-background";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {PlayerRankComponent} from './component/player-rank/player-rank.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {PlaylistFilterPipe} from './pipe/playlist-filter.pipe';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    PlayerRankComponent,
    PlaylistFilterPipe
  ],
  imports: [
    BrowserModule,
    BackgroundModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
