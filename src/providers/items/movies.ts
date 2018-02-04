import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ApiServiceV1 } from '../api/apiServiceV1';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Movies {

  public static TMDB_API_KEY = 'f317eb2d47cf7f7be461a00bc0d2d5cf';

  constructor(public api: ApiServiceV1) { }

  refreshNowPlayingList(page?: number):Observable<Movie[]> {
    return this.api.getMoviesNowPlaying(Movies.TMDB_API_KEY).map(res => {
		return res.results.map(movie => {
			return new Movie(
				movie.id,
				movie.adult,
				movie.backdrop_path,
				movie.poster_path,
				null,
				null,
				movie.genere_ids,
				null,
				null,
				movie.original_language,
				movie.title,
				movie.title,
				movie.overview,
				movie.popularity,
				null,
				null,
				movie.release_date,
				null,
				null,
				null,
				movie.video
			);
		});
	});
  }

}
