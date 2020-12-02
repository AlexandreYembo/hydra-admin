import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

import { SharedModule } from '../shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
    declarations: [AuthComponent],
    imports: [  SharedModule, 
                FormsModule,
                ReactiveFormsModule,
                MatCardModule,
                MatIconModule,
                MatProgressSpinnerModule,
                MatInputModule,
                MatButtonModule,
                MatSnackBarModule,
                MatTabsModule,
                AuthRoutingModule]
})
export class AuthModule {}