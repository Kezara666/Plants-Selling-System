import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User=new User();
  userService: any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  public validOfSignUp:boolean=false;
  public password:number=0


  private url="http://localhost:9800/api/v1/user/saveUser";
  private temp="";
  private name=""

  changeMail(email:any,namePara:any){
    
    try{
      this.temp=email.value
      this.name=namePara;
      if(this.temp.includes("@")&& this.temp.length>1 &&namePara.value.length>3){
        this.validOfSignUp=true;
        this.password=this.getRandomInt(100000,9000000)    

          console.warn(this.user);
          var user_data={name:namePara.value,email:this.temp,password:this.password}
            
        
          this.httpClient.post(this.url,user_data).toPromise().then(data=>
            {console.warn(data)}); 
                  
      
      }
    
    }
    finally{
      
    
    }
    

  }

  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  
  

  

}
