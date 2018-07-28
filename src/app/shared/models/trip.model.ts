
export class Trip {
  _id: string;          // a database document id
  _rev: string;
  
  type: string = 'trip';

  title: string = '';
  country: string = '';
  location: string;
  startDate: string;
  endDate: string;

  createdAt: string;
  updatedAt: string;
}