import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import { GridsterModule } from "angular-gridster2";

import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from "ngx-bootstrap/modal";
import { ChartsModule } from 'ng2-charts';

import { DemoMaterialModule } from "./material-module";

import { AgmCoreModule } from "@agm/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserNameDisplayComponent } from './components/user-name-display/user-name-display.component';
import { WidgetSelectionComponent } from './components/widget-selection/widget-selection.component';
import { BarchartDataSelectionComponent } from './components/barchart-data-selection/barchart-data-selection.component';
import { MapComponent } from './components/map/map.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { TextfieldComponent } from './components/textfield/textfield.component';

import localeDe from "@angular/common/locales/de";
import { TableComponent } from './components/table/table.component';
registerLocaleData(localeDe);

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppAsideModule,
        FormsModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        NgbModule,
        GridsterModule,
        DemoMaterialModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCRmGq9fSrKt-P5Bmf3mc_RgcnUL4ofV_8'
        }),
        RouterModule.forRoot(
            [
                { path: "", component: AppComponent }
            ]
        )
    ],
    declarations: [
        AppComponent,
        BarchartComponent,
        LayoutComponent,
        UserNameDisplayComponent,
        WidgetSelectionComponent,
        BarchartDataSelectionComponent,
        MapComponent,
        CardComponent,
        ModalComponent,
        TextfieldComponent,
        TableComponent,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        {
            provide: LOCALE_ID,
            useValue: 'de'
        },
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
