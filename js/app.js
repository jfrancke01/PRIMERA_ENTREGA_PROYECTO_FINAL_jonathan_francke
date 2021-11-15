class Mesa{
    constructor(id,nombre){
        this.id = id,
        this.nombre = nombre
    }
}
class Producto{
    constructor(id,nombre,tipo,valor){
        this.id = id,
        this.nombre = nombre,
        this.tipo = tipo,
        this.valor = valor
    }
}
const mesa1 = new Mesa(1,"Mesa colores");
const mesa2 = new Mesa(2," Mesa Centro"); 
const productoBebida1 = new Producto(1,"Coca-Cola","Bebida",1000);
const productoBebida2 = new Producto(2,"Pepsi-Cola","Bebida",1000);
const productoComestible1 = new Producto(3,"Sandwich Chacarero",2500);
const productoComestible2 = new Producto(4,"Sandwich italiano",2000);
let tipo = 0;
let tipoComida = 0;
let _switch = 0;
let productoBebida = 0;
let productoComestible = 0;
let pedido = [];
listarPedido=()=>{
    pedido.forEach(element => {
        console.log(element)
    });
}
do{
let menuGeneral = Number(prompt(`Menú Principal
1- Escoger Mesa
2- Listar Pedido
3- Cerrar Programa
`));
switch (menuGeneral) {
    case 1:
        tipo = Number(prompt(`Elija Mesa:
        1- Colores
        2- Central
        `));
        break;
   case 2:
       if(pedido.length !== 0){
        listarPedido();   
       }
       else{
           alert("La Lista esta Vacia");
       }
       
        break;
   case 3:
      window.close();
        break;
    default:
        break;
}
do{
switch (menuGeneral) {
    case 1:
        tipoComida = Number(prompt(`Elija Tipo de Comida:
        1- Bebidas
        2- Sandwich
        3- Volver al Menú Principal
        `));
        break;
    default:
        break;
}
    switch (tipoComida) {
        case 1:
            productoBebida = Number(prompt(`Elija Tipo de Bebida:
            1- Coca-Cola
            2- Pepsi
            `));
            break;
            case 2:
            productoComestible = Number(prompt(`Elija Tipo de Sandwich:
            1- Chacarero
            2- Italiano
            `));
            break;
        default:
            break;
    }
}while(tipoComida !== 3);

if(tipo == 1){
    pedido.push(mesa1.nombre);
}
else if(tipo == 2){
    pedido.push(mesa2.nombre);
}
if(productoBebida == 1){
    pedido.push(productoBebida1.nombre);
}
else if(productoBebida == 2){
    pedido.push(productoBebida2.nombre);
}
if(productoComestible == 1){
    pedido.push(productoComestible1.nombre);
    pedido.push("------------------------")
}
else if(productoComestible == 2){
    pedido.push(productoComestible2.nombre);
    pedido.push("------------------------")
}
}while(tipoComida == 3);


