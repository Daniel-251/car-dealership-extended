import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarDealershipService {
  private carDataUrl = 'assets/carData.json'; // Path to JSON file in assets folder

  constructor(private http: HttpClient) {}

  // Fetch car data from JSON file
  getCarData(): Observable<any[]> {
    return this.http.get<any[]>(this.carDataUrl).pipe(
      catchError((error) => {
        console.error('Error fetching car data:', error);
        return throwError(() => new Error('Failed to fetch car data. Please try again later.'));
      })
    );
  }
}


