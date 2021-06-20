import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ignoreElements, map, tap } from 'rxjs/operators';
import DOMPurify from 'dompurify';
import TurndownService from 'turndown';
import {gfm} from 'joplin-turndown-plugin-gfm';
import StarterKit from '@tiptap/starter-kit';
import { Editor } from '@tiptap/core';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Underline from '@tiptap/extension-underline';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnDestroy {
  private readonly contentSubject = new Subject<string>();
  private readonly subscription: Subscription;
  public editor: Editor = new Editor({
    extensions: [StarterKit, Image, Table, TableRow, TableCell, TableHeader, Underline],
    content: '<p>Please start typing here!</p>',
  });

  private readonly turnDownService: TurndownService = new TurndownService();

  constructor() {
    this.subscription = this.contentSubject
      .pipe(map((content: string) => DOMPurify.sanitize(content) as string))
      .subscribe((content: string) => {});

    this.editor
      .chain()
      .setContent('<p>Please <b>start</b> typing here!</p>')
      .run();

    this.turnDownService.use(gfm);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.editor.destroy();
  }

  public OnSave(): void {
    let currentContent = this.editor.getHTML();
    let jsonContent = this.editor.getJSON();
    console.log('HTML Content: ' + currentContent);
    console.log('JSON Content: ' + jsonContent)
    let markdown = this.turnDownService.turndown(currentContent);
    console.log('Markdown Result: ' + markdown);
  }

  public OnTableInsert(): void {
    this.editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  }

  public OnInputChanged($event: InputEvent) {
    // let content = this.editorElement.innerHTML;
    // console.log('Inject: ' + content);
    // this.contentSubject.next(content);
  }
}
