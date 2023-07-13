import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit{
  @Output() trainingStart= new EventEmitter<void>()
  exercises: Exercise[] = []

  constructor(private trainingService:TrainingService){}

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises()
  }

  onStartTraining(){
    this.trainingStart.emit()
  }
}
