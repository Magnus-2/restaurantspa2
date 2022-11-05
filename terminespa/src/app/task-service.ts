import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json'
 })
}
@Injectable()
export class TaskService {
 constructor(private http:HttpClient) {}
 //Hier sind die calls der storefront drinnen alle Gets Post Put delete
 getUserData() {
 return this.http.get('https://restaurantsv1.herokuapp.com/api/v1.0/User/all');
 }
 addUserData(postUser: Object) {
 let endPoint = "https://restaurantsv1.herokuapp.com/api/v1.0/User"
 this.http.post(endPoint, postUser).subscribe(data => {
 console.log(data);
 });
 }
 loginUserData(postUser: Object) {
        let endPoint = "https://restaurantsv1.herokuapp.com/api/v1.0/User/anmeldung"
        this.http.post(endPoint, postUser).subscribe(data => {
        console.log(data);
        });
    }
    addReservationsData(postReservations: Object) {
        let endPoint = "https://restaurantsv1.herokuapp.com/api/v1.0/Reservations"
        this.http.post(endPoint, postReservations).subscribe(data => {
        console.log(data);
        });
    }
    getReservationsData() {
        return this.http.get('https://restaurantsv1.herokuapp.com/api/v1.0/Reservations/all');
    }
}