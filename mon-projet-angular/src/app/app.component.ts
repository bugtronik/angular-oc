import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	secondes: number;
	counterSubscription: Subscription;

	constructor(private authService: AuthService, private router: Router) {
		
	}

	ngOnInit() {
		const counter = Observable.interval(1000);
		this.counterSubscription = counter.subscribe(
			(value) => {
				this.secondes = value;
			},
			(error) => {
				console.log("Uh-oh, an error occured! : " + error);
			},
			() => {
				console.log('Observable completed!');
			}
		);
	}

	ngOnDestroy() {
		this.counterSubscription.unsubscribe();
	}
	
}
