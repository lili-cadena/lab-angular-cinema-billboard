import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesInformationService } from '../movies-information.service'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  id: any
  movie: any = {}
  constructor(
    private activeRoute: ActivatedRoute,
    private service: MoviesInformationService
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id
      this.movie = this.service.getMovie(this.id)
    })
  }

}
