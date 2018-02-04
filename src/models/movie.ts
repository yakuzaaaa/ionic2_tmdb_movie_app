
import { MovieBelongsToCollection } from './moviebelongstocollection';
import { Genre } from './genre';
import { Company } from './company';
import { Country } from './country';

export class Movie {
	private static TMDBImagePath = 'https://image.tmdb.org/t/p/w500/';
	constructor(
		public id?: string,
		public adult?: boolean,
		public backdropImagePath?: string,
		public posterImagePath?: string,
		public belongsToCollection?: MovieBelongsToCollection,
		public budget?: number,
		public genres?: Genre[],
		public homepageUrl?: string,
		public imdbId?: string,
		public language?: string,
		public title?: string,
		public tagLine?: string,
		public overview?: string,
		public popularity?: number,
		public productionCompanies?: Company,
		public productionCountries?: Country,
		public releaseDate?: string,
		public revenue?: number,
		public runtime?: number,
		public status?: string,
		public hasVideo?: boolean,
		public averageVote?: number,
		public voteCount?: number,
	) {}

	get posterWithUrl() {
		return Movie.TMDBImagePath + this.posterImagePath;
	}

	get backdropWithUrl() {
		return Movie.TMDBImagePath + this.posterImagePath;
	}

}
