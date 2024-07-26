import { Component } from '@angular/core';
import { MainContentComponent } from './main-content/main-content.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieSelectorComponent } from "../movie-selector/movie-selector.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainContentComponent, MovieListComponent, MovieSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
