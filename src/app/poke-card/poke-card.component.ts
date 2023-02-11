import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent {
  @Input()
  pokemon: string | undefined;
  @Input()

  numero: number | undefined;

  pegarImagemPokemon(){
  const numeroFormatado= this.leadingZero(this.numero);

  return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ numeroFormatado +'.png';
  }
 leadingZero(str: number | undefined, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
}
  }
