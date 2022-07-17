import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppServiceV1 } from './services/v1.service';
import { AppServiceV2 } from './services/v2.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddPersonV1 } from './component/v1/person/addPerson.v1.component';
import { FilterPersonV1 } from './component/v1/person/filterPerson.v1.component';
import { TableV1 } from './component/v1/table/table.v1.component';
import { Button } from './component/others/button/button.component';
import { AddPersonV2 } from './component/v2/person/addPerson.v2.component';
import { FilterPersonV2 } from './component/v2/person/filterPerson.v2.component';
import { TableV2 } from './component/v2/table/table.v2.component';
import { AddPersonV3 } from './component/v3/person/addPerson.v3.component';
import { AddPersonV3Dialog } from './component/v3/person/addPerson.v3.dialog';
import { DeletePersonV3Dialog } from './component/v3/table/deletePerson.v3.dialog';
import { TableV3 } from './component/v3/table/table.v3.component';
import { AddPersonV4 } from './component/v4/person/addPerson.v4.component';
import { AddPersonV4Dialog } from './component/v4/person/addPerson.v4.dialog';
import { FilterPersonV4 } from './component/v4/person/filterPerson.v4.component';
import { DeletePersonV4Dialog } from './component/v4/table/deletePerson.v4.dialog';
import { TableV4 } from './component/v4/table/table.v4.component';
import { HomeV1 } from './component/v1/home/home.v1.component';
import { HomeV2 } from './component/v2/home/home.v2.component';
import { HomeV3 } from './component/v3/home/home.v3.component';
import { HomeV4 } from './component/v4/home/home.v4.component';
import { HomeOther } from './component/others/home/home.other.component';
import { ExpansionPanel } from './component/others/expansionPanel/expansionPanel.component';
import { Grid } from './component/others/grid/grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Nav } from './mainComponent/nav/nav.component';
import { Header } from './mainComponent/header/header.component';
import { Toolbar } from './mainComponent/toolbar/toolbar.component';
import { SideNav } from './mainComponent/sideNav/sidenav.component';


@NgModule({
  declarations: [
    Nav,Header,Toolbar,SideNav,
    AddPersonV1,FilterPersonV1,TableV1,HomeV1,
    AddPersonV2,FilterPersonV2,TableV2,HomeV2,
    AddPersonV3,AddPersonV3Dialog,DeletePersonV3Dialog,TableV3,HomeV3,
    AddPersonV4,AddPersonV4Dialog,DeletePersonV4Dialog,TableV4,FilterPersonV4,HomeV4,
    Button,Grid,ExpansionPanel,HomeOther,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [AppServiceV1,AppServiceV2], 
  bootstrap: [Nav]
})
export class AppModule {
  
 }
