import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feladatfelvitel',
  templateUrl: './feladatfelvitel.component.html',
  styleUrl: './feladatfelvitel.component.css'
})
export class FeladatfelvitelComponent implements OnInit{
  constructor(private apiService: ApiService, private route: ActivatedRoute){}
  id:string|null=null;
  adatok:any[] =[];
  selectek:any[]=[];

  ngOnInit(): void {
    const url=`https://berenandor.moriczcloud.hu/projekt/listazas`;
      this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.selectek=response;
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    );
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    if(this.id!=null)
    {
      const url=`https://berenandor.moriczcloud.hu/feladat/listazas?keresendo=${this.id}`;
      this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.adatok=response;
        (document.getElementById('nev') as HTMLInputElement).value=this.adatok[0].nev;
        (document.getElementById('leiras') as HTMLInputElement).value=this.adatok[0].leiras;
        (document.getElementById('projektid') as HTMLSelectElement).value=this.adatok[0].projektid;
        if(this.adatok[0].statusz==1)
        {
          (document.getElementById('statusz') as HTMLInputElement).checked=true;
        }
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
