import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Notify, NotifyService } from '../../services/notify.service';

export type SnackbarType = 'success' | 'alert' | 'danger' | 'info';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  snackbarSubs$: Subscription | undefined;

  title: string = '';
  time: string | Date = '';
  message: string = '';
  clase: SnackbarType = 'success';

  constructor(private notifyService: NotifyService) {}

  ngOnInit(): void {
    this.snackbarSubs$ = this.notifyService.showNotify$
      .pipe(
        map((notify: Notify) => {
          this.title = notify.title;
          this.message = notify.message;
          this.clase = notify.clase;
          this.time = notify.time ? notify.time : '';
        })
      )
      .subscribe((response) => {
        this.openSnackbar();
      });
  }

  ngOnDestroy(): void {
    this.snackbarSubs$?.unsubscribe();
  }

  openSnackbar() {
    let snackBar: any = document.getElementById('snackbar');
    snackBar.className = 'show';

    setTimeout(() => {
      snackBar.className = snackBar.className.replace('show', '');
    }, 4000);
  }
}
