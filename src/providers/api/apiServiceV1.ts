import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * ApiServiceV1 is a REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiServiceV1 {
	url: string = 'https://api.themoviedb.org/3';

	constructor(public http: HttpClient) {
	}

	get(endpoint: string, params?: any, reqOpts?: any) {
		if (!reqOpts) {
			reqOpts = {
				params: new HttpParams()
			};
		}

		// Support easy query params for GET requests
		if (params) {
			reqOpts.params = new HttpParams();
			for (let k in params) {
				reqOpts.params.set(k, params[k]);
			}
		}

		return this.http.get(this.url + '/' + endpoint, reqOpts);
	}

	post(endpoint: string, body: any, reqOpts?: any) {
		return this.http.post(this.url + '/' + endpoint, body, reqOpts);
	}

	put(endpoint: string, body: any, reqOpts?: any) {
		return this.http.put(this.url + '/' + endpoint, body, reqOpts);
	}

	delete(endpoint: string, reqOpts?: any) {
		return this.http.delete(this.url + '/' + endpoint, reqOpts);
	}

	patch(endpoint: string, body: any, reqOpts?: any) {
		return this.http.put(this.url + '/' + endpoint, body, reqOpts);
	}

	getMoviesNowPlaying(apiKey, region?, language?) {
		//HttpParams is not working, querystring params are not sent, inspect why
		let params = new HttpParams();
		params.set('api_key', apiKey);

		return this.http.get<any>(this.url + "/movie/now_playing?api_key=" + apiKey);
	}
}
