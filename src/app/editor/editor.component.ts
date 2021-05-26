import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import DOMPurify from 'dompurify';
import { Subject, Subscription } from 'rxjs';
import { ignoreElements, map, tap } from 'rxjs/operators';
import { IRange } from './i-range';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editor_element', { static: false }) editorElementRef: ElementRef;

  private readonly contentSubject = new Subject<string>();
  private readonly subscription: Subscription;
  private editorElement: HTMLDivElement;

  constructor() {
    this.subscription = this.contentSubject
      .pipe(map((content) => DOMPurify.sanitize(content) as string))
      .subscribe((content) => this.setElementContent(content));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.editorElement = this.editorElementRef.nativeElement;
  }

  public OnInputChanged($event: InputEvent) {
    let content = this.editorElement.innerHTML;
    console.log('Inject: ' + content);
    this.contentSubject.next(content);
  }

  private setElementContent(content: string) {
    let currentRange = this.getCaretIndex(this.editorElement);
    if (!currentRange) return;

    console.log('Result: ' + content);
    this.editorElement.innerHTML = content;
    console.log('HTML: ' + this.editorElement.innerHTML);
    // this.editorElement.focus();

    // let range = document.createRange();
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);

    range.setStart(currentRange.startContainer, currentRange.startOffset);
    range.setEnd(currentRange.endContainer, currentRange.endOffset);
    range.collapse(true);

    selection.addRange(range);
    // this.editorElement.focus();
    // range.detach();
  }

  private getCaretIndex(element: HTMLElement): IRange {
    let lastRange: IRange;
    if (window.getSelection) {
      const selection = window.getSelection();
      // Check if there is a selection (i.e. cursor in place)
      if (selection.rangeCount != 0) {
        // Store the original range
        const range = selection.getRangeAt(0);

        return {
          range: range,
          endContainer: range.endContainer,
          endOffset: range.endOffset,
          startContainer: range.startContainer,
          startOffset: range.startOffset,
        };
      }
    }
    return lastRange;
  }
}
