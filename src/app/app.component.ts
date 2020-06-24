import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-tutorial';
  name = 'Hello Angular';
  trigger = false;

  constructor(
    private router: Router,
  ) { }

  buttonClick() {
    if (this.trigger === true) {
      this.trigger = false;
    } else {
      this.trigger = true;
    }
  }

  test1Click() {
    this.router.navigate(['test1']);
  }

  test2Click() {
    this.router.navigate(['test2']);
  }
}
