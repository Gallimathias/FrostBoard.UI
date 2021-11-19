import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'FrostBoardUi';

  private subs: Subscription;  
  constructor(private auth: AuthService){
    this.subs = auth.Sessions.subscribe();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
