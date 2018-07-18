import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() mpProp: string;

  text = 'Hello from component property!';

  photoUrl = 'photo.jpg';

  handleClick() {
    alert('Hello!');
  }
}
