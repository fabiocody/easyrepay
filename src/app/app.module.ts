import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './elements/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {LoginComponent} from './pages/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MomentModule} from 'ngx-moment';
import {TranslationPipe} from './pipes/translation.pipe';
import {PeopleListComponent} from './pages/people-list/people-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PersonCardComponent} from './pages/people-list/person-card/person-card.component';
import {TranslationService} from './services/translation.service';
import {AvatarComponent} from './elements/avatar/avatar.component';
import {AddPersonComponent} from './dialogs/add-person/add-person.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TransactionsListComponent} from './pages/transactions-list/transactions-list.component';
import {SpinnerComponent} from './elements/spinner/spinner.component';
import {RequestInterceptorService} from './services/request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TranslationPipe,
    PeopleListComponent,
    PersonCardComponent,
    AvatarComponent,
    AddPersonComponent,
    TransactionsListComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule,
    MatButtonModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [TranslationService],
      useFactory: (translationService: TranslationService) => translationService.localeId
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
