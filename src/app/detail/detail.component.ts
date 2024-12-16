import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-detail',
  standalone: true, // Mark component as standalone
  imports: [CommonModule], // Import CommonModule for *ngIf and other common directives
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  car: any = null; // Holds the car details

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve car ID from route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.fetchCarDetails(id);
    } else {
      console.error('Invalid car ID');
      this.goBack();
    }
  }

  // Fetch car details from the JSON file
  fetchCarDetails(id: number): void {
    this.http.get<any[]>('assets/carData.json').subscribe(
      (data) => {
        this.car = data.find((c) => c.id === id);
        if (!this.car) {
          console.error('Car not found!');
          this.goBack();
        }
      },
      (error) => {
        console.error('Error loading car data:', error);
        this.goBack();
      }
    );
  }

  // Navigate back to the global car view
  goBack(): void {
    this.router.navigate(['/global-view']);
  }
}
