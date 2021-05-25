import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('richtext', { static: false }) richtTextRef: ElementRef;
  private richText: HTMLDivElement;

  constructor() {}

  ngAfterViewInit(): void {
    this.richText = this.richtTextRef.nativeElement;
  }

  ngOnInit(): void {
    
  }

  public OnInputChanged($event: InputEvent): void {
    console.log('New event: ' + $event.data);
    console.log('Current Content: ' + this.richText.innerHTML);
  }
}
