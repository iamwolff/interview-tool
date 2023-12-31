import { Injectable } from '@angular/core';
import { interviewdata } from './interview-data';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  public getInterviewTopics(): Interview {
    return interviewdata;
  }
}

export interface Interview {
  name: string;
  phases: Phase[];
}

export interface Phase {
  name: string;
  sections: Section[];
}

export interface Section {
  name: string;
  topics: Topic[];
  selected?: boolean;
}

export interface Topic {
  isInstruction?: boolean;
  text: string;
  selected?: boolean;
}
