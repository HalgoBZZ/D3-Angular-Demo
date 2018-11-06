import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { D3ScaleComponent } from './components/d3-scale/d3-scale.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/d3-scale', pathMatch: 'full'},
    { path: 'd3-scale', component: D3ScaleComponent }
];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
