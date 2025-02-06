import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent  {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private service:DataService) {
    this.registerForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        role: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  onSubmit() {
    this.submitted = true;
  
    // Check if the form is valid
    if (this.registerForm.valid) {

      // Call the service to submit the form data
      console.log(this.registerForm.value);
      const data = {
        firstname: this.registerForm.value.firstname,
        lastname: this.registerForm.value.lastname,
        phone: this.registerForm.value.phone,
        email: this.registerForm.value.email,
        password:this.registerForm.value.password,
        confirmPassword: this.registerForm.value.confirmPassword,
        dob: this.registerForm.value.dob,
        role: this.registerForm.value.role

        }
      this.service.signup(data).subscribe({
        
      
        next: (response) => {
          console.log('response',response)
          // Handle successful form submission
          console.log('Form Submitted Successfully', this.registerForm.value);
          console.log('Server Response:', response);
        },
        error: (error) => {
          // Handle errors from the API
          console.error('Error submitting form:', error);
        },
      });
    } else {
      // Log form validation errors
      console.log('Form is invalid');
      console.log('Validation Errors:', this.registerForm.errors);
    }
  }
  }


