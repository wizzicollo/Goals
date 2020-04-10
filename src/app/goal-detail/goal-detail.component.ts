

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';
// import { ActivatedRoute } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  goal:Goal;


  // @Input() goal: Goal;
  // @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  // goalDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.goal=this.service.getGoal(id)
  }

}