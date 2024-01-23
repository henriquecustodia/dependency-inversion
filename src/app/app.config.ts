import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { MessageService } from './services/abstract-message.service';
import { ServerMessageService } from './services/server-message.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: MessageService,
      useClass: ServerMessageService,
    },
  ],
};
