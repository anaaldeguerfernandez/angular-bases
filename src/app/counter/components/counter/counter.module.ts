import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [ // Sólo se puede usar dentro de todo el scope del componente.
    CounterComponent
  ],
  exports: [ // Se puede usar fuera del scope del componente.
    CounterComponent
  ]
})
export class CounterModule {

}
