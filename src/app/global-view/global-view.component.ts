import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-view',
  standalone: true,
  templateUrl: './global-view.component.html',
  styleUrls: ['./global-view.component.css'],
  imports: [CommonModule],
})
export class GlobalViewComponent implements OnInit {
  cars: any[] = []; // Holds all cars data
  filteredCars: any[] = []; // Filtered car list for display
  selectedCar: any | null = null; // Holds the selected car details

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadCarData();
  }

  // Load car data from JSON file
  loadCarData() {
    this.http.get<any[]>('assets/carData.json').subscribe(
      (data) => {
        this.cars = data;
        this.filteredCars = [...this.cars]; // Initialize filtered list
      },
      (error) => {
        console.error('Error loading car data:', error);
      }
    );
  }

  // View details of the clicked car
  viewDetails(car: any) {
    this.selectedCar = car; // Store the clicked car details
  }

  // Return back to the list view
  backToCars() {
    this.selectedCar = null; // Clear selected car
  }

  // Filter functionality for search bar
  filterCars(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCars = this.cars.filter(
      (car) =>
        car.make.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
    );
  }
}
