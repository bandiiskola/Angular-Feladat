import { Component} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feladatfelvitel',
  templateUrl: './feladatfelvitel.component.html',
  styleUrl: './feladatfelvitel.component.css'
})
export class FeladatfelvitelComponent {
  constructor(private apiService: ApiService){}

  callAPI(){
    let nev = (document.getElementById('nev') as HTMLInputElement).value;
    let leiras = (document.getElementById('leiras') as HTMLInputElement).value;
    let projektid = (document.getElementById('projektid') as HTMLSelectElement).value;
    let statusz = (document.getElementById('statusz') as HTMLInputElement).checked ? 1 : 0;
    const url=`https://berenandor.moriczcloud.hu/feladat/feltoltes/${nev}/${leiras}/${projektid}/${statusz}`;
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
