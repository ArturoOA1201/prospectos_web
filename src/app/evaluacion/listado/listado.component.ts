import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Prospecto } from 'src/app/models/prospectos';
import { ProspectosService } from 'src/app/services/prospectos/prospectos.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  array:Prospecto | any
  displayedColumns: string[] = ['nombre', 'primer', 'segundo', 'estatus', 'accion'];
  dataSource = new MatTableDataSource();
  constructor(private router:Router,  private prospectoService:ProspectosService ) {}

  ngOnInit(): void {
    this.listadoProspectos();
  }
  listadoProspectos(){
    this.prospectoService.getProspectos().subscribe(
      res=>{
        console.log(res);
        this.array = res
        this.dataSource = new MatTableDataSource(<any>res)
      }
    )
  }
  abrit(id:any){
    console.log(id);
    console.log(this.array.length)
    for(let x=0;x < this.array.length;x++){
      if(this.array[x].id == id){
        this.prospectoService.arraytempo = this.array[x]
      }
    }
    console.log(this.prospectoService.arraytempo);
    this.router.navigate(['informacion'])
  }
  abrir(){
    this.router.navigate(['prospectos'])
  }
}
