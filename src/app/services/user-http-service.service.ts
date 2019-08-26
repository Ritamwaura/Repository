import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {
  users:User[]=[];
  constructor(private http:HttpClient) { } 


  searchUser(searchTerm:string){
    
    let searchEndpoint= `https://api.github.com/search/users?access_token=${environment.API_KEY}&q=${searchTerm}+repos:repos:%3E10`;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.users=[];
            for(let i=0; i<results["items"].length; i++){
              let name =results["items"][i]["login"];
              let picture = results["items"][i]["avatar_url"];  
              let id = results["items"][i]["id"];
              let score = results["items"][i]["score"];                 
              let user = new User(id,name,picture,score);
              this.users.push(user);              
            }
            console.log(this.users);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}

