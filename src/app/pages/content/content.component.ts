import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentCoverPhoto:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"


  constructor(
    /*ActivatedRoute = Fornece acesso a informações sobre uma rota associada a um componente carregado em uma tomada. Use para percorrer a árvore RouterState e extrair informações dos nós.
    O exemplo a seguir mostra como construir um componente usando informações de uma rota atualmente ativada.*/
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    /* paramMap = Um Observable que contém um mapa dos parâmetros obrigatórios e opcionais específicos da rota. O mapa suporta a recuperação de valores únicos e múltiplos do mesmo parâmetro. */
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

      console.log(result)
      this.contentCoverPhoto = result.photo
      this.contentTitle = result.title
      this.contentDescription = result.description

  }

}
