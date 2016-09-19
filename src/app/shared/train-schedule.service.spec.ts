/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrainScheduleService } from './train-schedule.service';

describe('Service: TrainSchedule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainScheduleService]
    });
  });

  it('should ...', inject([TrainScheduleService], (service: TrainScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
