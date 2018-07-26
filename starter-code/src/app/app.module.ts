import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesInformationService } from './movies-information.service';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: MyHomeComponent},
  {path:'movie/:id', component: MyMovieComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [MoviesInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
