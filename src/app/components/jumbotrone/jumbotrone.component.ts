import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotrone',
  templateUrl: 'jumbotrone.component.html',

})
export class JumbotroneComponent {
  //объявлили внутреннюю переменную строковую
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor(){
    //присваиваем переменным значения
    this.jbtHeading = "Hello World";
    this.jbtText = "This is JUMBOTRONE Style";
    this.jbtBtnText = "Read more";
    this.jbtBtnUrl = "/about";
  }
}
