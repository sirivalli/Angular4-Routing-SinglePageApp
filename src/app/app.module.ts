import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TalktomeComponent } from './talktome/talktome.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    TalktomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',  pathMatch: 'prefix', redirectTo: 'home'
      },
      {
        path: 'home',  component: HomeComponent
      },
       {
        path: 'about', component: AboutComponent
      },
      {
        path: 'gallery', component: GalleryComponent
      },
       {
        path: 'talktome', component: TalktomeComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
