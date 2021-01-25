import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getSpaceData():Observable<any>{
    let url = "https://api.spaceXdata.com/v3/launches?limit=100"
    return this.http.get(url);
  }

  launchSuccessData(successParam):Observable<any>{
    let url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+successParam;
    return this.http.get(url);
  }

  launchAndLandFilteredData(launchParam, landParam):Observable<any>{
    let url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchParam +'&land_success='+landParam;
    return this.http.get(url);
  }

  launchLandAndYearFilteredData(launchParam, landParam, yearParam):Observable<any>{
    let url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchParam +'&land_success='+landParam +'&lauch_year='+yearParam;
    return this.http.get(url);
  }
}
