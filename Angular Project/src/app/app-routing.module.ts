// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { HomeComponent } from './home/home.component';
import { ExaminationsectionComponent } from './examinationsection/examinationsection.component';
import { RulesComponent } from './rules/rules.component';
import { AudiovideoComponent } from './audiovideo/audiovideo.component';
import { TestpageComponent } from './testpage/testpage.component';
import { ResultComponent } from './result/result.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsectionComponent } from './adminsection/adminsection.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddrulesComponent } from './addrules/addrules.component';
import { UpdaterulesComponent } from './updaterules/updaterules.component';
import { SetparameterComponent } from './setparameter/setparameter.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { UpdatequestionsComponent } from './updatequestions/updatequestions.component';
import { AdminresultComponent } from './adminresult/adminresult.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home',component:HomeComponent},
  { path: 'login', component: StudentloginComponent },
  {path:'examsection',component: ExaminationsectionComponent},
  {path:'rules',component: RulesComponent},
  {path:'access',component: AudiovideoComponent},
  {path:'test',component: TestpageComponent},
  {path:'result',component: ResultComponent},
  {path:'adminlogin',component: AdminloginComponent},
  {path:'adminsection',component: AdminsectionComponent},
  {path:'studentregister',component:StudentregistrationComponent},
  {path:'updatestudent',component:UpdatestudentComponent},
  {path:'addrules',component:AddrulesComponent},
  {path:'updaterules',component:UpdaterulesComponent},
  {path:'set',component:SetparameterComponent},
  {path:'addquestion',component:AddquestionComponent},
  {path:'updatequestion',component:UpdatequestionsComponent},
  {path:'adminresult',component:AdminresultComponent},
  { path: 'forgot', component: ForgotpasswordComponent }
  // { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }