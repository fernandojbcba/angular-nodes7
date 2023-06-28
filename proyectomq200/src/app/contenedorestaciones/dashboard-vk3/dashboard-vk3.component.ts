import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-vk3',
  templateUrl: './dashboard-vk3.component.html',
  styleUrls: ['./dashboard-vk3.component.css']
})
export class DashboardComponent_vk3 implements OnInit {
  estaciones: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerEstaciones();

    // Actualizar las estaciones cada 500 ms
    setInterval(() => {
      this.obtenerEstaciones();
    }, 500);
  }

  obtenerEstaciones() {
    this.http.get<any[]>('http://localhost:3050/vk3').subscribe(data => {
      this.estaciones = data;
     // console.log(this.estaciones);
    });
  }

  getEstacionClass(estacion: any): any {
    const { bit0, bit2, bit3 } = estacion;
    if (bit0) {
      if (bit2) {
        return { verde: true };
      } else if (bit3) {
        return { violeta: true };
      } else if (!bit2 && !bit3) {
        return { rojo: true };
      } else {
        return {};
      }
    } else {
      return { violeta: true };
    }
  }
}
