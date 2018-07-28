import { Component } from '@angular/core';
import { Trip, TripService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTrip :Trip = new Trip();
  //this.newTrip.title = '111';
  dispalyAddTrip = true;
  //title = "";

  constructor(private tripService: TripService) {
  }

  addTrip() {
    
    console.log('***************************');
    console.log('title = ' + this.newTrip.title);
    console.log('***************************');
    console.log("Saving", this.newTrip + ' { ' + this.newTrip.title + ',' 
    + this.newTrip.country + ',' + this.newTrip.location + ',' 
    + this.newTrip.startDate + ',' + this.newTrip.endDate + ' }');
    this.tripService.save(this.newTrip).subscribe((result) => {
    	console.log(result);
    	this.newTrip = new Trip();	
    });
  }

  dispalyAddNewTripView(){
    this.dispalyAddTrip = true;
  }

  dispalyTripDetailsView(){
    this.dispalyAddTrip = false;
  }
}

