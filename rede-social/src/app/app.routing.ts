import { Routes, RouterModule} from '@angular/router';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import  { PostInputComponent } from './post-input/post-input.component';

const APP_ROUTES: Routes =[
    {path: "", redirectTo: "/linhadotempo", pathMatch:"full"},
    {path:"linhadotempo", component: LinhaDoTempoComponent},
    {path:"postar", component: PostInputComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);