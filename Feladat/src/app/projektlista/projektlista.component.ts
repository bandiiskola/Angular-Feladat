import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-projektlista',
  templateUrl: './projektlista.component.html',
  styleUrl: './projektlista.component.css'
})
export class ProjektlistaComponent implements OnInit{
  constructor(private apiService: ApiService){}
  adatok :any[] = [];

  ngOnInit(): void {
      const url=`https://berenandor.moriczcloud.hu/projekt/listazas`;
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

    torol(id: string){
      const url=`https://berenandor.moriczcloud.hu/projekt/torles/${id}`;
      console.log(url);
      this.apiService.apiHivas(url).subscribe(
        response =>{
          console.log('Api válasz: ',response);
          this.adatok = response
          location.reload();
        },
        error =>{
          console.error('Hiba az API hívás során:')
        }
      )
    }
}
