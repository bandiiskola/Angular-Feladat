import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ProjektfelvitelComponent } from './projektfelvitel/projektfelvitel.component';
import { FeladatfelvitelComponent } from './feladatfelvitel/feladatfelvitel.component';
import { ProjektlistaComponent } from './projektlista/projektlista.component';
import { FeladatlistaComponent } from './feladatlista/feladatlista.component';

const routes: Routes = [
  {path:'/',component:FooldalComponent},
  {path:'/projekt/feltolt',component:ProjektfelvitelComponent},
  {path:'/feladat/feltolt',component:FeladatfelvitelComponent},
  {path:'/projekt/lista',component:ProjektlistaComponent},
  {path:'/feladat/lista',component:FeladatlistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
