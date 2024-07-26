import { Component, OnInit, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounce, filter, interval, map } from 'rxjs';
import { TmdbService } from '../services/tmdb.service';
import { Movie } from '../services/model/movie';
import { MovieCardComponent } from '../movie-list/movie-card/movie-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);

  tmdbService = inject(TmdbService);

  movies: Movie[] | undefined;


  constructor() {
    effect(() => {
      let moviesResponse = this.tmdbService.search().value;
      if(moviesResponse !== undefined) {
        this.movies = moviesResponse.results;
      }
    });
  }

  ngOnInit(): void {
    this.onSearchTerm();
  }

  private onSearchTerm(): void {
    this.activatedRoute.queryParams.pipe(
      filter(queryParam => queryParam['q']),
      debounce(() => interval(300)),
      map(queryParam => queryParam['q']),
    ).subscribe({
      next: term => this.tmdbService.searchByTerm(term)
    })
  }
}
