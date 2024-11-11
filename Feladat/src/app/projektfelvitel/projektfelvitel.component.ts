import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projektfelvitel',
  templateUrl: './projektfelvitel.component.html',
  styleUrl: './projektfelvitel.component.css'
})
export class ProjektfelvitelComponent implements OnInit{
  constructor(private apiService: ApiService, private route: ActivatedRoute){}
  id:string|null=null;
  adatok:any[] =[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    if(this.id!=null)
    {
      const url=`https://berenandor.moriczcloud.hu/projekt/listazas?id=${this.id}`;
      this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.adatok=response;
        const adat = Object.values(this.adatok);
        console.log(adat);
        (document.getElementById('nev') as HTMLInputElement).value=adat[1];
        (document.getElementById('leiras') as HTMLInputElement).value=adat[2];
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    );
    }
  }

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
