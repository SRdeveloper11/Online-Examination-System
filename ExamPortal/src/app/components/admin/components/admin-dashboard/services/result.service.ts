import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from 'src/app/components/admin/components/admin-dashboard/model/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  addResURL : string;
  getResURL : string;

  constructor(private http : HttpClient) {

    this.addResURL = 'http://localhost:8080/res/addResult';
    this.getResURL = 'http://localhost:8080/res/getAll';

   }

   addResult(res : Result): Observable<Result> {
     return this.http.post<Result>(this.addResURL,res);
   }

   getAllResults(): Observable<Result[]>{
     return this.http.get<Result[]>(this.getResURL);
   }

}
