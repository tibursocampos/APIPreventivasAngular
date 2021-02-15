import { CronogramasComponent } from './../cronogramas.component';
import { Cronograma } from './../../models/Cronograma';
import { CronogramaService } from './../../services/cronograma.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cronogramas',
  templateUrl: './editar-cronogramas.component.html',
  styleUrls: ['./editar-cronogramas.component.css']
})
export class EditarCronogramasComponent implements OnInit {
  
  public title = "Editar Cronograma";
  public cronogramaEditForm: FormGroup = 
  this.fb.group({
    idCronograma:[''],
    idSupervisor:[''],
    mes:[''],
    ano:['']
  });
  public cronograma: Cronograma;
  public cronogramaId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cronogramaService: CronogramaService    
  ) { }

  ngOnInit(): void {
  }
  
  editarForm(cronograma: Cronograma){
    this.cronogramaEditForm.setValue({
      idCronograma: cronograma.idCronograma,
      idSupervisor: cronograma.idSupervisor,
      mes: cronograma.mes,
      ano: cronograma.ano
    });
  }
  
  salvar(){
    const cronograma: Cronograma = this.cronogramaEditForm.value;
    cronograma.idCronograma = Number(cronograma.idCronograma);
    cronograma.idSupervisor = Number(cronograma.idSupervisor);
    this.cronogramaService.editCronograma(cronograma.idCronograma, cronograma).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Cronograma alterado com sucesso !!!");
        this.cronogramaEditForm.reset();
        this.router.navigate(['cronogramas']);
      }
    );
  }
  
  voltar(){
    this.router.navigate(['cronogramas']);
  }

}
