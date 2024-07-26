export interface MovieApiResponse {
    page:number;
    results: Movie[];
    total_pages: number;
    total_results: number;
    genreId:number
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    release_date: string;
    genre_ids:number[];
    popularity: number;
    video:boolean;
    vote_average: number;
    vote_count: number

}