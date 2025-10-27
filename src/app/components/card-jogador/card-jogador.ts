import { Component, Input } from '@angular/core';
import { Jogador } from '../../../shared/models/jogadores';


@Component({
  selector: 'app-card-jogador',
  imports: [],
  templateUrl: './card-jogador.html',
  styleUrl: './card-jogador.scss',
})
export class CardJogador {
  @Input() jogador!: Jogador;

}




