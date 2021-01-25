import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDatabookAnoPage } from './lista-databook-ano.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDatabookAnoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDatabookAnoPage]
})
export class ListaDatabookAnoPageModule {}
