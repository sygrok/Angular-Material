import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Firestore, collection, addDoc, query, doc, onSnapshot, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit{
  @Output() trainingStart= new EventEmitter<void>()
  // exercises: Exercise[] = []
  exercises: Observable<any[]>;

  constructor(private trainingService:TrainingService, private db: Firestore){}

  ngOnInit(): void {
    // this.exercises = collectionData<any>(query(this.db, 'availableExercises'));
    const queryRef = collection(this.db, 'availableExercises');
    this.exercises = collectionData(queryRef, { idField: 'id' });
    
  }

  onStartTraining(form:NgForm){
    this.trainingService.startExercise(form.value.exercise)
  }
}
