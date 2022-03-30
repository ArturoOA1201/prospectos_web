import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProspectosService } from 'src/app/services/prospectos/prospectos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  closeResult = '';
  submitted = false;
  constructor(private router:Router, private modalService: NgbModal, private formBuilder:FormBuilder, private prospectoService:ProspectosService) { }
  prospecto: FormGroup|any;
  ngOnInit(): void {
    this.prospecto = this.formBuilder.group({
      nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: '',
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      colonia: ['', Validators.required],
      cp: ['', Validators.required],
      telefono: ['', Validators.required],
      rfc: ['', Validators.required]
    })
  }
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
  salir(){
    this.router.navigate([''])
  }
  get f(){return this.prospecto.controls;}
  save(){
    this.submitted = true;
    if (this.prospecto.invalid){
      return
    }else{
      this.prospectoService.AgregarProspectos(this.prospecto.value).subscribe((res:any)=>{
        console.log(res);
      })
      alert("Guardado con exito");
      console.log(this.prospecto.value);
      this.salir()
    }
    }
}
