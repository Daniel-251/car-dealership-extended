import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor(private router: Router) {}

  // Navigate to the global-view page
  onLogin(): void {
    this.router.navigate(['/global-view']);
  }
}
