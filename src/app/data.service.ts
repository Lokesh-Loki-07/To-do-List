import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  createUser(data: { firstname: any; lastname: any; phone: any; email: any; password: any; dob: any; role: any; }) {
    throw new Error('Method not implemented.');
  }
  users(data: any) {
    throw new Error('Method not implemented.');
  }
  getUsers() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3002/users'; // 🔹 Replace with your actual API URL

   

  constructor(private http: HttpClient) {}

  // 🔹 1. Register (Signup)
  signup(userData: any)  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(this.apiUrl+'/createuser', userData);
    return this.http.post(this.apiUrl+'/createuser', userData, { headers });
  }

  // 🔹 2. Login (Signin)
  signin(credentials: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/signinuser`, credentials,{headers});
  }

  // 🔹 3. Get All Users
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getusers`);
  }

  getUser(id: any,): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getuser/${id}`);
  }

  // 🔹 4. Update User
  updateUser(id: any, userData: any) {
    return this.http.put(`${this.apiUrl}/updateuser/${id}`, userData);
  }

  // 🔹 5. Delete User
  deleteUser(id: any) {
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`);
  }
}
