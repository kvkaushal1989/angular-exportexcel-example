import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exportexcel-example';

  private _data = [
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' },
    { firstName: 'first', lastName: 'last', email: 'abc@gmail.com', address: '000 street city, ST', zipcode: '00000' }
  ];
  public get data() {
    return this._data;
  }
  public set data(value) {
    this._data = value;
  }
}
