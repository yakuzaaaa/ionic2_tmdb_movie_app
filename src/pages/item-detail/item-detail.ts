import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-item-detail',
	templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
	movie: any;
	
	constructor(public navCtrl: NavController, navParams: NavParams) {
		this.movie = navParams.get('movie');
	}

}
