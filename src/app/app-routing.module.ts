import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatContainerComponent } from './features/chat-container/chat-container.component';

const routes: Routes = [
  { path: '', component: ChatContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
