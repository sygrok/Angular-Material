import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

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

  onStartTraining(form:NgForm){
    this.trainingService.startExercise(form.value.exercise)
  }
}
