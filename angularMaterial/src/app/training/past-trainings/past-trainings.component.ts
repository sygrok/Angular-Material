import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit{
  displayedColumns = ['date','name','duration','calories','state']
  dataSource = new MatTableDataSource<Exercise>()
  @ViewChild(MatSort) sort: MatSort

  constructor(private trainingService:TrainingService){}

  ngOnInit(){
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort
  }
}
