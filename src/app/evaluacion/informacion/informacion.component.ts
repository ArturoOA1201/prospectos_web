import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProspectosService } from 'src/app/services/prospectos/prospectos.service';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  closeResult = '';
  submitted = false;
  abili = false;
  abali=true;
  constructor(private router:Router, private modalService: NgbModal, private formBuilder:FormBuilder,private prospectoService:ProspectosService) { }
  prospecto: FormGroup|any;
  observacion: FormGroup|any;
  ngOnInit(): void {
    this.prospecto = this.formBuilder.group({
      nombre: '',
      primer_apellido: '',
      segundo_apellido: '',
      calle: '',
      numero: '',
      colonia: '',
      cp: '',
      telefono: '',
      rfc: '',
      observaciones:''
    })
    this.observacion = this.formBuilder.group({
      observaciones:""
    })
    this.prospecto.patchValue(this.prospectoService.arraytempo)
    if(this.prospectoService.arraytempo.status != 1){
      this.abali = false;
      this.abili = true;
    }
  }
  get f(){return this.prospecto.controls;}
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  regresar(){
    this.prospectoService.arraytempo = null;
    this.router.navigate([''])
  }
  aceptar(){
    this.observacion.value.observaciones =  this.prospecto.value.observaciones;
    console.log(this.observacion)
    this.prospectoService.AceptarProspecto(this.prospectoService.arraytempo.id, this.observacion.value).subscribe((res:any)=>{
      console.log(res);
      alert("Cambios guardados");
      this.router.navigate([''])
    })
  }
  rechazar(){
    this.observacion.value.observaciones =  this.prospecto.value.observaciones;
    console.log(this.observacion)
    this.prospectoService.RechazarProspecto(this.prospectoService.arraytempo.id, this.observacion.value).subscribe((res:any)=>{
      console.log(res);
      alert("Cambios guardados");
      this.router.navigate([''])
    })
  }
}
