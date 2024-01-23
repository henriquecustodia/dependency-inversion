import { Injectable } from '@angular/core';
import { MessageService } from './abstract-message.service';
import { Observable, of } from 'rxjs';
import { randQuote } from '@ngneat/falso';

@Injectable({
  providedIn: 'root',
})
export class FalsoMessageService extends MessageService {
  override getMessage(): Observable<string> {
    return of(randQuote());
  }
}
