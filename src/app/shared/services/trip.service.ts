import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import { ApiService } from './api.service';
import { Trip } from '../models';

@Injectable()
export class TripService {
  private trips: Trip[] = [];
  constructor (
    private apiService: ApiService,
    
  ) {}

  

  // 
  // list(): Observable<any> {

  // }

  get(id): Observable<Trip> {
    return this.apiService.get(id, {})
           .map(data => data.trip);
  }

  save(trip : Trip): Observable<Trip> {
    // If we're updating an existing trip
    console.log('save()');
    if (trip._id) {
      return this.apiService.put(trip._id, {trip: trip})
             .map(data => data.trip);

    // Otherwise, create a new trip
    } else {
      return this.apiService.post({trip: trip}).map(data => {
        console.log(data);
        // Update id and revision
        trip._id = data.id;
        trip._rev = data.rev;

        // Save to the list of trips
        this.trips.push(trip);
        console.log(this.trips);

        return trip;
      });
    }
  }

  delete(trip) {
    let index = this.trips.indexOf(trip);
    if (index > -1) {
      this.trips.splice(index, 1);
    }
      return this.apiService.delete(trip);
  }

  getAllDocuments(){
    console.log('##############################################')
    console.log('### Get All Documents from DB [trip.service]###')
    console.log('##############################################')
    return this.apiService.getAllDocumentsFromDB();
    
  }



}