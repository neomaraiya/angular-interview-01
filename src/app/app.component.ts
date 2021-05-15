import { Component, VERSION } from '@angular/core';

// 1. Create two text box - first name and last name
// 2. Add a button "Add User".
// 3. Add a list to display users
// 4. Once user clicks on the "Add User", add the fullname to the list

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
