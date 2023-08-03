import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('router',[
      transition('HomePage=>cartPage ,HomePage=>loginPage,loginPage=>HomePage ,HomePage=>signupPage ,signupPage=>HomePage ,loginPage=>signupPage,signupPage=>loginPage,cartPage=>addPage,addPage=>cartPage ,addPage=>dashboardPage ,dashboardPage=>addPage' ,[
        group([
          query(':enter' ,[
             style({
              transform: 'translateX(100%)',

             }),
             animate(500,style({
              transform: 'translateX(0)',

             }))
          ]),
        query(':leave',[
          style({
            transform: 'translateX(0)',

           }),
           animate(500,style({
            transform: 'translateX(-100%)',

           }))
        ])
      ])

       ])
    ])

  ],
})
export class AppComponent {
  title = 'angAndFirebase';

}
