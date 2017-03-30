import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotrone',
  templateUrl: 'jumbotrone.component.html',

})
export class JumbotroneComponent {
  //объявлили переменную строковую
  public jbtHeading: string;
  public jbtText: string;
  public jbtBtnText: string;


  constructor(){
    //присваиваем переменным значения
    this.jbtHeading = "Hello World";
    this.jbtText = "This is JUMBOTRONE Style";
    this.jbtBtnText = "Read more";

  }
}
