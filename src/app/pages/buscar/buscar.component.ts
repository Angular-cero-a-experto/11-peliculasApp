import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  public movies: Movie[] = [];
  public textoBuscar: string = '';
  constructor(  private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {

  }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: any) => {

      this.textoBuscar = params.texto;
      // TODO: Llamar el servicio 
      this.peliculasService.buscarPeliculas( params.texto).subscribe( movies => {
        console.log(movies[0].title);
        this.movies = movies;
      });
      
    })
  }

}
