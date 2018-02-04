import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { Movies } from '../../providers/items/movies';
import { Movie } from '../../models/movie';

@IonicPage()
@Component({
	selector: 'page-list-master',
	templateUrl: 'list-master.html'
})
export class ListMasterPage {
	nowPlayingMovies: Movie[] = [];

	constructor(public navCtrl: NavController, public moviesService: Movies, public loader: LoadingController) {
		this.refreshNowPlaying();
	}

	/**
	 * The view loaded, let's query our items for the list
	 */
	ionViewDidLoad() {
	}

	/**
	 * Prompt the user to add a new item. This shows our ItemCreatePage in a
	 * modal and then adds the new item to our data source if the user created one.
	 */
	addItem() {
		// let addModal = this.modalCtrl.create('ItemCreatePage');
		// addModal.onDidDismiss(item => {
		//   if (item) {
		//     this.items.add(item);
		//   }
		// })
		// addModal.present();
		this.refreshNowPlaying();
	}

	/**
	 * Delete an item from the list of items.
	 */
	deleteItem(item) {
		// this.items.delete(item);
	}

	/**
	 * Navigate to the detail page for this item.
	 */
	openItem(movie: Movie) {
		this.navCtrl.push('ItemDetailPage', {
			movie: movie
		});
	}

	private refreshNowPlaying() {
		let progress = this.loader.create({
			content: "Please wait...",
			duration: 3000
		});

		this.moviesService.refreshNowPlayingList().subscribe(
			(data) => {
				this.nowPlayingMovies = this.nowPlayingMovies.concat(data);
				setTimeout(() => {
					this.nowPlayingMovies = this.nowPlayingMovies.concat(this.nowPlayingMovies);
				});
				progress.dismiss();
			},
			(error) => {
				progress.dismiss();
			}
		);

		progress.present();
	}
}
