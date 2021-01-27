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
  toggle = false;
  landToggle = false;
  yearToggle = false;
  status = 'Enable'; 
  disabled = false;
  INITIAL_INDEX = 0;
  selectedIndex = this.INITIAL_INDEX;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getSpaceXData();
  }

  getSpaceXData(){
    this.homeService.getSpaceData().subscribe(res=>{
      this.launchData = res;
      console.log("launch data..", this.launchData);
      for(let i in this.launchData){
        let land = this.launchData[i].rocket.first_stage.cores;
        console.log("land..", land);
      }
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
    this.toggle = !this.toggle
    if(this.toggle){
      this.launchParam = lauchParam;
      this.homeService.launchSuccessData(lauchParam).subscribe(res=>{
        this.launchData = res;
      })
    }
  }

  getLauchAndLandData(lauchParam, landParam){
    this.landToggle = !this.landToggle
    if(this.toggle){
      lauchParam = this.launchParam
    }
    if(this.landToggle){
      this.landParam = landParam;
      this.homeService.launchAndLandFilteredData(lauchParam, landParam).subscribe(res=>{
        this.launchData = res;
      })
    }
  }

  getLauchLandAnddYearData(lauchParam, landParam, yearParam, ind){
    this.selectedIndex = ind;
    this.yearToggle = !this.yearToggle
    if(this.toggle){
      lauchParam = this.launchParam
    }
    if(this.landToggle){
      landParam = this.landParam
    }
    if(this.yearToggle){
      this.homeService.launchLandAndYearFilteredData(lauchParam, landParam, yearParam).subscribe(res=>{
        this.launchData = res;
      })
    }
  }

}
