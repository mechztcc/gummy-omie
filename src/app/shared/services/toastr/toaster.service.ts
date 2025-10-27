import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  isRunning: boolean = false;

  msg: string = '';
  type: 'success' | 'error' = 'success';

  constructor() {}

  onHandle(message: string, type: 'success' | 'error'): void {
    this.msg = message;
    this.type = type;
    this.isRunning = true;
    scrollTo(0, 0);

    timer(3000).subscribe(() => {
      this.onClose();
    });
  }

  onClose() {
    this.isRunning = false;
    this.msg = '';
    this.type = 'success';
  }

  onHandleInfinite(message: string, type: 'success' | 'error') {
    this.msg = message;
    this.type = type;
    this.isRunning = true;
    scrollTo(0, 0);
  }
}
