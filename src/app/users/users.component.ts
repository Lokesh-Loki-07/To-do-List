import { Component } from '@angular/core';
 
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
saveUser() {
throw new Error('Method not implemented.');
}
  users: any = [  ];
isEditing: any;

  constructor(private service:DataService,private router:Router) {
    console.log('UsersComponent initialized');

  }

  ngOnInit() {
    this.service.getAllUsers().subscribe(
      (res: any) => {
        // Assign the response to the users property
        for(let i = 0;i <= res.length - 1; i++) {
          this.users[i] = res[i]
        }
        console.log(this.users)
        this.users = res;
        console.log(res)
        console.log('Users loaded successfully:', this.users);
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
  // loadUsers() {
  //   this.service.getUsers().subscribe ({
  //     next: (response: { firstname: string; lastname: string; email: string; phone: string; dob: string; }[]) => {
  //       this.users = response;
  //       console.log('Users loaded successfully:', this.users);
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   });

  updateUser(id: any, userData: any) {
    localStorage.setItem('user_id',id);
    this.router.navigate(['/editing'])


    // this.service.updateUser(id, userData).subscribe({
    //   next: (response) => {
    //     console.log('User updated successfully:', response);
    //     // Reload users after update
    //   },
    //   error: (error) => {
    //     console.error('Error updating user:', error);
    //   }
    // });
  }

  // Delete user
  deleteUser(id: any){
    console.log("delete",id)
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteUser(id).subscribe({
        next: (response) => {
          console.log('User deleted successfully:', response);
          this.users = this.users.filter((user:any) => user.id !== id); // Remove from list
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }




  }



  




 

