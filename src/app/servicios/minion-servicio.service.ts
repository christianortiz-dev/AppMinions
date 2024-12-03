import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';

@Injectable({
  providedIn: 'root'
})
export class MinionServicioService {

  constructor(){}

  listaMinions:Minion[]=[
    {
      id: 1,
      nombre: "Anna Wintour.",
      bio:"Meryl Streep no es la única que sabe encarnar a la directora de Vogue América, Anna Wintour. Con un corte bob, unas gafas de sol negras  y un traje de chaqueta, su álter ego minion bien podría continuar con la labor del Diario viste de Prada (2006).",
      img:"anna.webp",
      birth:"1951",
      side: "de los buenos"

    },
    {
      id: 2,
      nombre: "Grace Coddington.",
      bio: "Junto con Anna Wintour, forma el tándem perfecto para dirigir la cabecera norteamericana Vogue. La primera pone su instinto empresarial, mientras que Grace Coddington se encarga de la creatividad. Antaño modelo, es actualmente una de las mentes más brillantes de la industria, por lo que su cabello pelirrojo es fácil de localizar en la primera fila de cualquier desfile.",
      img: "grace.webp",
      birth: "1672",
      side:"malvado"

    },
    {
      id: 3,
      nombre: "Anna Dello Russo.",
      bio: "Al igual que en la realidad, su versión minion combina piezas alocadas cargadas de originalidad (basta con ver ese tocado de cerezas). La directora de Vogue Japón tiene un armario que vive en una fiesta continua, y es que lo de Anna Dello Russo es una filosofía de vida (simple y llanamente).",
      img: "russo.webp",
      birth: "1723",
      side: "de los buenos"

    },
    {
      id: 4,nombre: "Victoria Beckham.",
      bio: "Victoria Beckham, esa mujer que nos ha enseñado que reinventarse (siempre que lo desees) es posible. La pareja de David Beckham ha pasado de 'Spice Posh' a diseñadora de renombre. ¿Sus piezas clave? Un vestido negro de tubo, unas maxi gafas y un corte bob ladeado que ha conseguido el mismo efecto que la icónica melena de Anna Wintour.",
      img: "victoria.webp",
      birth: "1379",
      side:"de los buenos"

    },
    {
      id: 5,
      nombre: "Karl Lagerfeld.",
      bio: "El Káiser francés no podría estar mejor representado: tuxedo, gafas oscuras y una cabellera blanca recogida. Esta iniciativa, a cargo de Stylight, se convierte en el nuevo fenómeno de Instagram.",
      img: "karl.webp",
      birth: "1687",
      side: "malvado"
    },
    {
      id: 6,
      nombre: "Choupette.",
      bio: "Si estaba Karl Lagerfel en esta lista vip, cómo no iba a incluirse también a su gatita Choupette. Es la mascota más mimada, junto con la de Taylor Swift, y la única que 'posee' un gran imperio.",
      img: "choupette.webp",
      birth: "1976",
      side: "de los buenos"
    },
    {
      id: 7,
      nombre: "Alexa Chung.",
      bio: "La estética baby-doll convirtió a la británica en una de las it girls más imitadas. Estas son las seis prendas que querrás tener de su segunda colección para AG.",
      img: "alexa.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 8,
      nombre: "Cara Delevingne.",
      bio: "Irreverente y alocada. La modelo británica y actriz en ciernes se distingue, entre otras cosas, por ser la top de las 'mil y una caras'. Un selfie, un gesto.",
      img: "cara.webp",
      birth: "2017",
      side: "malvado"
    }
  ];

  listaDatos: Minion[] = [
    {
      id: 1,
      nombre: "Anna Wintour.",
      bio: "Meryl Streep no es la única que sabe encarnar a la directora de Vogue América, Anna Wintour. Con un corte bob, unas gafas de sol negras y un traje de chaqueta, su álter ego minion bien podría continuar con la labor del Diario viste de Prada (2006).",
      img: "anna.webp",
      birth: "1951",
      side:"de los buenos"
    },
    {
      id: 2,
      nombre: "Grace Coddington.",
      bio: "Junto con Anna Wintour, forma el tándem perfecto para dirigir la cabecera norteamericana Vogue. La primera pone su instinto empresarial, mientras que Grace Coddington se encarga de la creatividad. Antaño modelo, es actualmente una de las mentes más brillantes de la industria, por lo que su cabello pelirrojo es fácil de localizar en la primera fila de cualquier desfile.",
      img: "grace.webp",
      birth: "1672",
      side:"malvado"
    },
    {
      id: 3,
      nombre: "Anna Dello Russo.",
      bio: "Al igual que en la realidad, su versión minion combina piezas alocadas cargadas de originalidad (basta con ver ese tocado de cerezas). La directora de Vogue Japón tiene un armario que vive en una fiesta continua, y es que lo de Anna Dello Russo es una filosofía de vida (simple y llanamente).",
      img: "russo.webp",
      birth: "1723",
      side: "de los buenos"
    },
    {
      id: 4,nombre: "Victoria Beckham.",
      bio: "Victoria Beckham, esa mujer que nos ha enseñado que reinventarse (siempre que lo desees) es posible. La pareja de David Beckham ha pasado de 'Spice Posh' a diseñadora de renombre. ¿Sus piezas clave? Un vestido negro de tubo, unas maxi gafas y un corte bob ladeado que ha conseguido el mismo efecto que la icónica melena de Anna Wintour.",
      img: "victoria.webp",
      birth: "1379",
      side:"de los buenos"
    },
    {
      id: 5,
      nombre: "Karl Lagerfeld.",
      bio: "El Káiser francés no podría estar mejor representado: tuxedo, gafas oscuras y una cabellera blanca recogida. Esta iniciativa, a cargo de Stylight, se convierte en el nuevo fenómeno de Instagram.",
      img: "karl.webp",
      birth: "1687",
      side: "malvado"
    },
    {
      id: 6,
      nombre: "Choupette.",
      bio: "Si estaba Karl Lagerfel en esta lista vip, cómo no iba a incluirse también a su gatita Choupette. Es la mascota más mimada, junto con la de Taylor Swift, y la única que 'posee' un gran imperio.",
      img: "choupette.webp",
      birth: "1976",
      side: "de los buenos"
    },
    {
      id: 7,
      nombre: "Alexa Chung.",
      bio: "La estética baby-doll convirtió a la británica en una de las it girls más imitadas. Estas son las seis prendas que querrás tener de su segunda colección para AG.",
      img: "alexa.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 8,
      nombre: "Cara Delevingne.",
      bio: "Irreverente y alocada. La modelo británica y actriz en ciernes se distingue, entre otras cosas, por ser la top de las 'mil y una caras'. Un selfie, un gesto.",
      img: "cara.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 9,
      nombre: "Valentino.",
      bio: "El porte, las mejillas sonrosadas y la expresión facial, el álter ego amarillo del diseñador italiano compite con el propio Valentino. Retirado de las pasarelas de Alta Costura, disfruta ahora de su legado y años de trabajo.",
      img: "valentino.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 10,
      nombre: "Derek Zoolander.",
      bio: "No podía ser de otra manera, Derek Zoolander tenía que estar, más aún teniendo en cuenta el reciente estreno del teaser oficial de Zoolander 2. En el vídeo, el personaje vuelve a aportar esas pequeñas píldoras de sabiduría que le hacen único: 'Si Dios existe, ¿por qué hace a la gente fea?'.",
      img: "derek.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 11,
      nombre: "Suzy Menkes.",
      bio: "Imaginativa, original e independiente, así es nuestra Editora Internacional y una de las críticas de moda más reconocidas.",
      img: "suzy.webp",
      birth: "2017",side: "malvado"
    },
    {
      id: 12,
      nombre: "Jean-Paul Gaultier.",
      bio: "La estética marinera del diseñador francés le acompaña allí donde vaya. Suena la canción Join the Navy para salir a navegar.",
      img: "jean.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 13,
      nombre: "Marc Jacobs.",
      bio: "Asiduo a Instagram –dime cómo es tu Instagram y te diré qué diseñador eres–, no podía faltar en este fenómeno concebido por la propia red social.",
      img: "marc.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 14,
      nombre: "Donatella Versace.",
      bio: "El álter ego de la diseñadora italiana nada tiene que ver con las ninfas, de vestidos fluidos y coronas de flores, que subiera a las pasarelas esta temporada.",
      img: "donatella.webp",
      birth: "2017",
      side: "malvado"
    },
    {
      id: 15,
      nombre: "Isabel Marant.",
      bio: "La diseñadora francesa Isabel Marant no va a ningún lado sin su recogido efortless, sus prendas básicas y sus joyas midi.",
      img: "isabel.webp",
      birth: "2017",side: "malvado"
    },
    {
      id: 16,
      nombre: "Iris Apfel.",
      bio: "Iris Apfel o cómo demostrar que la moda no está reñida con la edad. Para saber más sobre ella hay que recurrir al documental dirigido por Albert Maysles y comentado por nuestra crítica de moda Suzy Menkes.",
      img: "iris.webp",
      birth: "2017",
      side: "malvado"
    },
  ];

  mostrarlistaMinions(){
    return this.listaMinions;
  }

  mostarListaDatos(){
    return this.listaDatos;
  }

  actualizarListado(){
    for(let x=0; x<this.listaMinions.length;x++){
       this.listaMinions[x].id = x+1;
    }
  }


  borrarMinion(id:number){
    this.listaMinions.splice(id-1,1);
    this.actualizarListado();
    return;
  }

  insertarMinion(minion:Minion){
    this.listaMinions.push(minion);
  }


  modificarMinion(minion: Minion){
    this.listaMinions[minion.id - 1].nombre = minion.nombre;
    this.listaMinions[minion.id - 1].bio = minion.bio;
    this.listaMinions[minion.id - 1].img = minion.img;
    this.listaMinions[minion.id - 1].birth = minion.birth;
    this.listaMinions[minion.id - 1].side = minion.side;

  }

}
