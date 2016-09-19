import { Injectable } from '@angular/core';
import { TRAIN_SCHEDULES } from './mock-train-schedules'

@Injectable()
export class TrainScheduleService {

  constructor() { }

  getTrainSchedule() {
    return TRAIN_SCHEDULES;
  }

  filterTrainSchedule(list: any[], filterBy: string[], filterValue: any[]) {

    for (let i in filterBy) {
      list = list.filter(item => item[filterBy[i]].indexOf(filterValue[i]) !== -1);
    }

    return list;
  }

  sortByNumber(list: any[], sortBy: string, ascending: boolean) {
    if(ascending){
      list.sort(function(a, b) {
        return ((a[sortBy] - b[sortBy]) ===0)? 0 : (a[sortBy] - b[sortBy]);
      });
    } else {
      list.sort(function(a, b) {
        return ((a[sortBy] - b[sortBy]) ===0)? 0 : (b[sortBy] - a[sortBy]);
      });
    }

    return list;
  }

  sortByAlphabet(list: any[], sortBy: string, ascending: boolean) {
    if(ascending) {
      list.sort(function(a, b) {
        var nameA=a[sortBy].toLowerCase(), nameB=b[sortBy].toLowerCase();
        if (nameA < nameB) //sort string ascending
          return -1;
        if (nameA > nameB)
          return 1;
        return 0; //default return value (no sorting)
      });
    } else {
      list.sort(function(a, b) {
        var nameA=a[sortBy].toLowerCase(), nameB=b[sortBy].toLowerCase();
        if (nameA < nameB) //sort string ascending
          return 1;
        if (nameA > nameB)
          return -1;
        return 0; //default return value (no sorting)
      });
    }

    return list;
  }
}
