import { Component, inject } from '@angular/core';
import { MessageService } from './services/abstract-message.service';
import { FalsoMessageService } from './services/falso-message.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'dependency-inversion-root',
  providers: [
    {
      provide: MessageService,
      useClass: FalsoMessageService,
    },
  ],
  imports: [AsyncPipe],
  template: `
    <p>
      {{ $message | async }}
    </p>
  `,
})
export class AppComponent {
  
  $message = inject(MessageService).getMessage()

}
