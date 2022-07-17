import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonV1 } from './component/v1/person/addPerson.v1.component';
import { FilterPersonV1 } from './component/v1/person/filterPerson.v1.component';
import { Button } from './component/others/button/button.component';
import { AddPersonV2 } from './component/v2/person/addPerson.v2.component';
import { FilterPersonV2 } from './component/v2/person/filterPerson.v2.component';
import { AddPersonV3 } from './component/v3/person/addPerson.v3.component';
import { AddPersonV4 } from './component/v4/person/addPerson.v4.component';
import { FilterPersonV4 } from './component/v4/person/filterPerson.v4.component';
import { Grid } from './component/others/grid/grid.component';
import { ExpansionPanel } from './component/others/expansionPanel/expansionPanel.component';
import { HomeV1 } from './component/v1/home/home.v1.component';
import { HomeV2 } from './component/v2/home/home.v2.component';
import { HomeV3 } from './component/v3/home/home.v3.component';
import { HomeV4 } from './component/v4/home/home.v4.component';
import { HomeOther } from './component/others/home/home.other.component';

const routes: Routes = [
  {path:"v1/add",component:AddPersonV1},
  {path:"v1/filter",component:FilterPersonV1},
  {path:"v1/home",component:HomeV1},
  {path:"v2/add",component:AddPersonV2},
  {path:"v2/filter",component:FilterPersonV2},
  {path:"v2/home",component:HomeV2},
  {path:"v3/add",component:AddPersonV3},
  {path:"v3/home",component:HomeV3},
  {path:"v4/add",component:AddPersonV4},
  {path:"v4/filter",component:FilterPersonV4},
  {path:"v4/home",component:HomeV4},
  {path:"other/button",component:Button},
  {path:"other/grid",component:Grid},
  {path:"other/expansionPanel",component:ExpansionPanel},
  {path:"other/home",component:HomeOther},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
