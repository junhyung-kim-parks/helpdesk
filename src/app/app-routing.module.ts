import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TableFooComponent } from './table-foo/table-foo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestingComponent } from './testing/testing.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageViewComponent } from './components/message-view/message-view.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ChooseUserComponent } from './components/choose-user/choose-user.component';
import { AuthguardGuard } from './_guards/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/choose', pathMatch: 'full' },
  { path: 'listMessages',
    component: MessageListComponent,
    canActivate: [AuthguardGuard] },
  { path: 'newMessage',
    component: MessageViewComponent,
    canActivate: [AuthguardGuard]
  },
  { path: 'viewMessage/:action/:rowID', component: MessageViewComponent },
  { path: 'viewMessage/:rowID', component: MessageViewComponent },
  { path: 'choose', component: ChooseUserComponent },
  { path: 'table', component: TableFooComponent },
  { path: 'foo', component: DashboardComponent },
  { path: 'testing', component: TestingComponent},
  { path: 'messages', component: MessagesListComponent },
  { path: '**', component: HomeComponent },
];

@ NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
