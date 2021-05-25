import { IPage } from './i-page';

export class Page<T> implements IPage {
  constructor(public Index: number,  public Data: T[], public Size: number){

  }
}
