import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  ongoingTraining = false;
  exerciseSubscription: Subscription

  constructor(private trainingService:TrainingService){}

  ngOnInit():void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise => {
      if(exercise){
        this.ongoingTraining= true
      }else{
        this.ongoingTraining= false
      }
    })
  }
}
