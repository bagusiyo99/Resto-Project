import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth-services/storage-service/storage.service';

const BASIC_URL ="http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

   postCategory(categoryDto:any):Observable<any>{
    console.log(this.createdAuthorizationHeader())
    return this.http.post<[]>(BASIC_URL + "api/admin/category", categoryDto,
    {
      headers:this.createdAuthorizationHeader()
    })
    
  }

     getAllCategories(categoryDto:any):Observable<any>{
    console.log(this.createdAuthorizationHeader())
    return this.http.post<[]>(BASIC_URL + "api/admin/category", categoryDto,
    {
      headers:this.createdAuthorizationHeader()
    })
    
  }

createdAuthorizationHeader(): HttpHeaders {
  let authHeaders: HttpHeaders = new HttpHeaders();
  return authHeaders.set("Authorization", "Bearer " + StorageService.getToken());
}

}
