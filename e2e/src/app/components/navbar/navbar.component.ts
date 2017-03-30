import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',

})
export class NavbarComponent {
public branding: string;

  constructor() {
  this.branding = 'MyWebsite'
  }
}
