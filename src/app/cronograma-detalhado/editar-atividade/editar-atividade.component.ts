import { AlvoService } from './../../services/alvo.service';
import { UsuarioService } from './../../services/usuario.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from './../../models/Usuario';
import { TipoAtividadeEnum } from './../../models/enum/TipoAtividadeEnum';
import { Atividade } from './../../models/Atividade';
import { Component, OnInit } from '@angular/core';
import { Alvo } from 'src/app/models/Alvo';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-editar-atividade',
  templateUrl: './editar-atividade.component.html',
  styleUrls: ['./editar-atividade.component.css']
})
export class EditarAtividadeComponent implements OnInit {
  
  public title: "Editar Atividade";
  public atividade: Atividade;
  public idAtividade: number;
  public idAlvo: number;
  public alvo: Alvo;
  public idUsuario: number;
  public usuario: Usuario;
  public tecnicos: Usuario[];
  public tipoAtividadeList = TipoAtividadeEnum;
  public tipoAtividadeArray: string[] = [];
  public atividadeEditForm: FormGroup;
  public dataVazia :Date = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private atividadeService: AtividadeService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.carregarForm();
    this.carregarTecnicos();    
    this.carregarTipoAtividade();
    this.route.params.subscribe((params: Params) => this.idAtividade = params['idAtividade']);
    this.atividadeService.getAtividade(this.idAtividade).subscribe(
      x => this.editarForm(x)
    );
  }
  
  carregarForm(){
    this.atividadeEditForm = this.fb.group({
      idAtividade: [''],
      idAlvo: [''],
      idTecnico: [''],
      tipoAtividade: [''],
      dataProgramacao: [''],
      dataConclusao: ['']
    });
  }
  
  editarForm(atividade: Atividade){
    this.atividadeEditForm.setValue({
      idAtividade: atividade.idAtividade,
      idAlvo: atividade.idAlvo,
      idTecnico: atividade.idTecnico,
      tipoAtividade: atividade.tipoAtividade,
      dataProgramacao: atividade.dataProgramacao,
      dataConclusao: atividade.dataConclusao
    });
  }
  
  salvar(){
    const atividade: Atividade =  this.atividadeEditForm.value;
    atividade.idTecnico = Number(atividade.idTecnico);
    !atividade.dataProgramacao ? atividade.dataProgramacao = null : atividade.dataProgramacao;
    !atividade.dataConclusao ? atividade.dataConclusao = null : atividade.dataConclusao;
    this.atividadeService.editAtividade(this.idAtividade, atividade).subscribe(
      dados => { 
        console.log(dados);
    },
      error => console.error(error),
      () => {
        alert("Atividade atualizada.");
        this.atividadeEditForm.reset();
        this.router.navigate(['cronograma-detalhado']);
      }
    );
  }
  
  carregarTipoAtividade(){
    for(let index = 0; index < 5; index++){
      this.tipoAtividadeArray.push(this.tipoAtividadeList[index]);
    }
  }
  
  carregarTecnicos(){
    this.usuarioService.getUsuarioTecnico().subscribe(
      (tecnicos: Usuario[]) => {
        this.tecnicos = tecnicos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  voltarAtividades(){
    this.router.navigate(['cronograma-detalhado']);
  }

}
