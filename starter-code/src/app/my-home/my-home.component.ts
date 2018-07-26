import { Component, OnInit } from '@angular/core';
import { MoviesInformationService } from '../movies-information.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<any>
  constructor(private service: MoviesInformationService) { }

  ngOnInit() {
    this.movies = this.service.getMovies()
  }

}
