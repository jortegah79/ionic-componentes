import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], texto: string = "", columna: string = 'title'): any[] {

    if (texto === '') return array;
    if (!array) return array;
    texto = texto.toLocaleLowerCase()
    return array.filter((el: any) => {
      return el[columna].toLocaleLowerCase().includes(texto)
    });
  }
}
