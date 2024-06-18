import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  backgroundColor: string = 'black';

  formData = {
    salutation: '',
    name: '',
    email: ''
  }

  submit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Data:', this.formData);
    } else {
      Object.keys(contactForm.controls).forEach(controlName => {
        contactForm.controls[controlName].markAsTouched();
      });
    }
    console.log(this.formData)
  }

}


