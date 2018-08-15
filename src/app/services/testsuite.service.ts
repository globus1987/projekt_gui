import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {TestCase,TestResult,TestSuite,User} from '../services/testsuite.models'
import { Observable } from 'rxjs';
import {RequestOptions, Request, Headers,RequestOptionsArgs,RequestMethod } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TestsuiteService {

  private readonly baseUrl = 'http://localhost:8090/MultiSpi-0.0.2-SNAPSHOT/TestTool/testsuite/all';
 

  constructor(private http: HttpClient) { }

  pobierz(): Observable<Array<TestSuite>> {
    const url = this.baseUrl;
    let requestOptions = new RequestOptions({ headers:null, withCredentials: 
      true });
    return  this.http.get<TestSuite[]>(url);
  }

  usun():void{
    const url = this.baseUrl;
   
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
  
      this.http.delete(url, options);
    

        
        
  }
}
