import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-feladatlista',
  templateUrl: './feladatlista.component.html',
  styleUrl: './feladatlista.component.css'
})
export class FeladatlistaComponent implements OnInit{
  constructor(private apiService: ApiService,
    private route: ActivatedRoute){}
  adatok :any[] = [];
  id: string | null = null;
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    if(this.id!=null)
    {
      const url=`https://berenandor.moriczcloud.hu/feladat/listazas?id=${this.id}`;
      console.log(url);
      this.apiService.apiHivas(url).subscribe(
        response =>{
          console.log('Api válasz: ',response);
          this.adatok = response
        },
        error =>{
          console.error('Hiba az API hívás során:')
        }
      )
    }
    }
    torol(param: string) :void{
      const url=`https://berenandor.moriczcloud.hu/feladat/torles/${this.id}`;
      console.log(url);
      this.apiService.apiHivas(url).subscribe(
        response =>{
          console.log('Api válasz: ',response);
          this.adatok = response
        },
        error =>{
          console.error('Hiba az API hívás során:')
        }
      )
    }
      
}
