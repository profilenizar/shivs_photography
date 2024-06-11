import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  backgroundColor: string = 'black';
  // loginForm!: FormGroup;
  public validate = false;
  
  public submit() {
    this.validate = !this.validate;
  }


}
