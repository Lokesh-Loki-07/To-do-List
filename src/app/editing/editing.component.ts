import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editing',
  standalone: false,
  
  templateUrl: './editing.component.html',
  styleUrl: './editing.component.scss'
})
export class EditingComponent {
  id: any;
  
  users: any[] = [];
  user: any = {
     
  };
  isEditing = false;
  selectedUserId: string | null = null;

   

  constructor(private service: DataService) {
  this.id =  localStorage.getItem('user_id')
  console.log(this.id)
  this.service.getUser(this.id).subscribe({
        
      
    next: (response) => {
      console.log(response)
      this.user = response
      // Handle successful form submission
      
      // this.router.navigate(['/users']);
    },
    error: (error) => {
      // Handle errors from the API
      console.error('Error submitting form:', error);
    },
  });

  }

  ngOnInit(){
    this.getUsers();
  }

  // Fetch all users
  getUsers() {
    this.service.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (error) => console.error('Error loading users:', error)
    });
  }

  // Save user (Create or Update)
  saveUser() {
    const data = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      phone: this.user.phone,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword,
      dob: this.user.dob,
      role:this.user.role
    }
      
      this.service.updateUser(this.id,data).subscribe({
        next: (response) => {
          console.log('User updated:', response);
          this.resetForm();
          this.getUsers();
        },
        error: (error) => console.error('Error updating user:', error)
      });
    
  }

  // Load user data for editing
  editUser(user: any) {
    this.isEditing = true;
    this.selectedUserId = user._id;
    this.user = { ...user };
  }

  // Delete user
  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteUser(userId).subscribe({
        next: () => {
          console.log('User deleted');
          this.getUsers();
        },
        error: (error) => console.error('Error deleting user:', error)
      });
    }
  }

  // Reset form
  resetForm() {
    this.user = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      dob: '',
      password: '',
      confirmPassword: '',
      role: ''
    };
    this.isEditing = false;
    this.selectedUserId = null;
  }

}
