import { Component, OnInit } from '@angular/core';
import  { TrainScheduleService } from '../shared/train-schedule.service';

@Component({
  selector: 'app-train-schedule-table',
  templateUrl: './train-schedule-table.component.html',
  styleUrls: ['./train-schedule-table.component.less'],
  providers: [TrainScheduleService]
})
export class TrainScheduleTableComponent implements OnInit {
  currentTime;
  trainSchedules;
  displayedSchedule;
  filterList = [];
  filterValueList = [];
  alertClass: string;
  showAlert: boolean;
  changedSchedule;

  constructor(private _trainScheduleService: TrainScheduleService) { }

  ngOnInit() {
    this.currentTime = new Date().getTime();
    this.trainSchedules = this._trainScheduleService.getTrainSchedule();
    this.displayedSchedule = this.trainSchedules;
    this.showAlert = false;

    setInterval(() => {
          this.currentTime = new Date().getTime();
          var scheduleLength = this.displayedSchedule.length;
          var statusList = ['On Time', 'Boarding', 'Delay', 'TBD', 'All Aboard', 'Cancelled', 'Departed', 'At Hold'];

          var scheduleIndex = Math.floor(Math.random() * scheduleLength);
          var statusIndex = Math.floor(Math.random() * statusList.length);

          var status = statusList[statusIndex];
          this.changedSchedule = this.displayedSchedule[scheduleIndex];

          switch(status) {
            case 'Boarding':
              this.showAlert = true;
              this.alertClass = 'alert-success';
              break;
            case 'On Time':
              this.showAlert = true;
              this.alertClass = 'alert-success';
              break;
            case 'Delay':
              this.showAlert = true;
              this.alertClass = 'alert-warning';
              break;
            case 'TBD':
              this.showAlert = true;
              this.alertClass = 'alert-warning';
              break;
            case 'Cancelled':
              this.showAlert = true;
              this.alertClass = 'alert-danger';
              break;
            case 'All Aboard':
              this.showAlert = true;
              this.alertClass = 'alert-info';
              break;
            case 'Departed':
              this.showAlert = true;
              this.alertClass = 'alert-info';
              break;
            default:
              this.showAlert = false;
          }

            this.changedSchedule.currentStatus = status;
        }, 30000);
  }

  doFilter(filterBy: string, filterValue: any) {
    //check whether filter exist
    let index = this.filterList.indexOf(filterBy);
    if(index !== -1){
      this.filterValueList[index] = (filterValue);
    } else {
      this.filterList.push(filterBy);
      this.filterValueList.push(filterValue);
    }

    this.displayedSchedule = this._trainScheduleService.filterTrainSchedule(this.trainSchedules, this.filterList, this.filterValueList);
  }

  removeFilter() {
    this.filterList = [];
    this.filterValueList = [];
    this.displayedSchedule = this.trainSchedules;
  }

  doSorting(sortBy: string, ascending: boolean, isNum: boolean) {
    if(isNum){
      this.displayedSchedule = this._trainScheduleService.sortByNumber(this.displayedSchedule, sortBy, ascending);
    } else {
      this.displayedSchedule = this._trainScheduleService.sortByAlphabet(this.displayedSchedule, sortBy, ascending);
    }
  }

}
