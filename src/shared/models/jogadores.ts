export class Jogador {
    constructor(
        public nome: string = '',
        public idade: number = 0,
        public camisa: number = 0,
        public posicao: 'ATA' | 'GOL' | 'MEI' | 'LAT' | 'ZAG' |'' = '',
        public imagem: string = ''
    ){}
}
