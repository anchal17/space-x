import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launchData: any;
  launchParam: any;
  landParam: any;
  lauchYearData = [];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getSpaceXData();
  }

  getSpaceXData(){
    this.homeService.getSpaceData().subscribe(res=>{
      this.launchData = res;
      this.lauchYearData = [];
      for(let i in this.launchData){
        if(this.lauchYearData.indexOf(this.launchData[i].launch_year) == -1){
          this.lauchYearData.push(this.launchData[i].launch_year);
        }
      }
    },err=>{

    })
  }

  getLauchSuccessData(lauchParam){
    this.launchParam = lauchParam;
      this.homeService.launchSuccessData(lauchParam).subscribe(res=>{
        this.launchData = res;
      })
  }

  getLauchAndLandData(lauchParam, landParam){
    if(this.launchParam !== undefined){
      lauchParam = this.launchParam
    }
    this.landParam = landParam;
    this.homeService.launchAndLandFilteredData(lauchParam, landParam).subscribe(res=>{
      this.launchData = res;
    })
  }

  getLauchLandAnddYearData(lauchParam, landParam, yearParam){
    if(this.launchParam){
      lauchParam = this.launchParam
    }
    if(this.landParam){
      landParam = this.landParam
    }
    this.homeService.launchLandAndYearFilteredData(lauchParam, landParam, yearParam).subscribe(res=>{
      this.launchData = res;
    })
  }

}
