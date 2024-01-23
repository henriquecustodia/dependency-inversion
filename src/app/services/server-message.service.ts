import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MessageService } from './abstract-message.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerMessageService extends MessageService {
  httpClient = inject(HttpClient);

  override getMessage(): Observable<string> {
    return this.httpClient
      .get<{ message: string }>('/assets/db.json')
      .pipe(map((response) => response.message));
  }
}
