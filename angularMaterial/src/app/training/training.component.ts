import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  ongoingTraining = false;

  constructor(){}

  ngOnInit():void {
  }
}
