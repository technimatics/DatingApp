import { Routes } from "@angular/router";
import { BuddiesComponent } from "./buddies/buddies.component";
import { FriendoComponent } from "./friendo/friendo.component";
import { HomeComponent } from "./home/home.component";
import { MessagesComponent } from "./messages/messages.component";
import { SignInRegisterComponent } from "./SignInRegister/SignInRegister.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes= [
    {path: '', component:SignInRegisterComponent},
    {path:'', runGuardsAndResolvers:'always', canActivate:[AuthGuard], children: [
        { path: 'station', component: HomeComponent},
        { path: 'friendo', component: FriendoComponent},
        { path: 'buddies', component: BuddiesComponent},
        { path: 'messages', component: MessagesComponent},
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];