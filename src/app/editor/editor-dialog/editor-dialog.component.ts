import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditorComponent } from '../editor.component';
import { IEditorDialogData } from './i-editor-dialog-data';

@Component({
  selector: 'app-editor-dialog',
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.scss'],
})
export class EditorDialogComponent implements AfterViewInit{
  @ViewChild('editor', { static: false }) editorChild?: EditorComponent;
  public EditorContent: string;

  constructor(
    public dialogRef: MatDialogRef<EditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEditorDialogData
  ) {
    this.EditorContent = data.content;
    if (this.editorChild != undefined) this.editorChild.Content = data.content;
  }

  ngAfterViewInit(): void {
    // if (this.editorChild != undefined) this.editorChild.Content = this.EditorContent;
  }
}
