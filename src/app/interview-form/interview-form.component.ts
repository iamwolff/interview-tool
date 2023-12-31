import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Interview, Phase, Section, Topic, TopicService } from '../topic.service';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.scss']
})
export class InterviewFormComponent implements OnInit {

  public editMode: boolean = true;

  @ViewChild('fileInput')
  myInputVariable: ElementRef;

  public interview: Interview = { name: '', phases: [] };

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.interview = this.topicService.getInterviewTopics();
  }

  allComplete(section: Section): boolean {
    return section.topics.every(t => t.selected || t.isInstruction);
  }

  someComplete(section: Section): boolean {
    return section.topics.some(t => t.selected) && !this.allComplete(section);
  }

  setAll(section: Section, selected: boolean): void {
    section.topics.forEach(s => {
      s.selected = selected;
    });
  }

  onAddTopic(section: Section) {
    section.topics.push({ text: '', isInstruction: false, selected: false } as Topic);
  }

  onRemoveTopic(section: Section, index: number) {
    section.topics.splice(index, 1);
  }

  onAddSection(phase: Phase) {
    phase.sections.push({ name: '', selected: false, topics: [] } as Section);
  }

  onRemoveSection(phase: Phase, index: number) {
    phase.sections.splice(index, 1);
  }

  onAddPhase(interview: Interview) {
    interview.phases.push({ name: '', sections: [] } as Phase);
  }

  onMoveUp(items: any[], index: number) {
    if (index <= 0) return;

    let temp = items[index - 1];
    items[index - 1] = items[index];
    items[index] = temp;
  }

  onMoveDown(items: any[], index: number) {
    if (index >= items.length - 1) return;

    let temp = items[index - 1];
    items[index - 1] = items[index];
    items[index] = temp;
  }

  onDownloadData(): void {
    let content = JSON.stringify(this.interview);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(content));
    element.setAttribute('download', "interview-data.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  onFileSelected(fileInputEvent: any) {

    if (fileInputEvent.target.files.length === 0) return;

    let reader = new FileReader();
    reader.onload = () => {
      // this 'text' is the content of the file
      var text = reader.result as string;
      this.interview = JSON.parse(text);

      this.myInputVariable.nativeElement.value = "";
    }
    reader.readAsText(fileInputEvent.target.files[0]);

    // const inputNode: any = document.querySelector('#file');
  
    // if (typeof (FileReader) !== 'undefined') {
    //   const reader = new FileReader();
  
    //   reader.onload = (e: any) => {
    //     //this.srcResult = e.target.result;
    //     console.log(e);
    //   };
  
    //   reader.readAsArrayBuffer(inputNode.files[0]);
    //}
  }
}
