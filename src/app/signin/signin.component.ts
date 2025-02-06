import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule

],
 
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signinForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router,private service: DataService) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onRegister(){
    this.router.navigate(['/register'])
  }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      this.service.signin(this.signinForm.value).subscribe({
        
      
        next: (response) => {
          console.log('response',response)
          const res = response as { token: string, message: string, user: any };
          localStorage.setItem('token',res.token)
          
          console.log('Form Submitted Successfully', this.signinForm.value);
          console.log('Server Response:', response);
          this.router.navigate(['/users']);
        },
        error: (error) => {
          // Handle errors from the API
          console.error('Error submitting form:', error);
          
        },
      });
    } else {
      // Log form validation errors
      console.log('Form is invalid');
      console.log('Validation Errors:', this.signinForm.errors);
    }
  }
      // console.log('Sign In Successful:', this.signinForm.value);
      // alert('Sign In successful!');
      // Navigate to dashboard or other page
      
    }
  
