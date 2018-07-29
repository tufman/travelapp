import { Component, OnInit} from '@angular/core';
import { Trip, TripService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newTrip :Trip = new Trip();
  //this.newTrip.title = '111';
  dispalyAddTrip = true;
  //title = "";
  

  constructor(private tripService: TripService) {
  }

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
    console.log('onInit called...');
    this.tripService.getAllDocuments();
 }

  addTrip() {
    console.log('addTrip()');
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

  // deleteTrip(id:string, revision: string){
    deleteTrip(trip : Trip){
    console.log('delete trip clciked...');
    console.log('###############################')
    console.log('###       deleteTrip       ###')
    console.log('###############################')
    console.log('should delete the following id ' + trip._id)
    console.log('should delete the following revision ' + trip._rev)
    this.tripService.delete(trip).subscribe((result) => {
    	console.log(result);
    	this.newTrip = new Trip();	
    });
  }
}

