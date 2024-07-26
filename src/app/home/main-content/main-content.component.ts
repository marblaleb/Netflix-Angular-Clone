import { Component, effect, inject } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../services/model/movie';
import { fontAwesomeIcons } from '../../shared/font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  tmdbService = inject(TmdbService);

  trendMovie: Movie | undefined;

  constructor() {
    effect(() => {
      const trendMovieResponse = this.tmdbService.fetchTrendMovie().value;
      if(trendMovieResponse) {
        this.trendMovie = trendMovieResponse.results[0];
      }
    });
  }

  ngOnInit(): void {
    this.fetchMovieTrends();
  }
  fetchMovieTrends(): void {
    this.tmdbService.getTrends();
  }

}
