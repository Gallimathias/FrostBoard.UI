import { IPaginator } from './i-paginator';

export class Paginator implements IPaginator {
  constructor(
    public Total: number,
    public Size: number,
    public Length: number
  ) {}
 
  static from(pagination: IPaginator): Paginator {
    return new Paginator(pagination.Total, pagination.Size, pagination.Length);
  }  
}
