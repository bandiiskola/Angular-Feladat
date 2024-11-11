import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-projektfelvitel',
  templateUrl: './projektfelvitel.component.html',
  styleUrl: './projektfelvitel.component.css'
})
export class ProjektfelvitelComponent {
  constructor(private apiService: ApiService){}

  callAPI(){
    let nev = (document.getElementById('nev') as HTMLInputElement).value;
    let leiras = (document.getElementById('leiras') as HTMLInputElement).value;
    const url=`https://berenandor.moriczcloud.hu/projekt/feltoltes/${nev}/${leiras}`;
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
  }
}
