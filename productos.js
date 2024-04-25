const remeras = {
    0: 22,
    1: ["Mega remeron Barbie con gafas", 25000, "remera de polycoton", ["imagenes/remeras/remeron1-1.jpeg", "imagenes/remeras/remeron1-4.jpeg", "imagenes/remeras/remeron1-3.jpeg", "imagenes/remeras/remeron1-2.jpeg"], ["Blanco", "Negro", "Verde", "Fuxia"], ["S", "M", "L"]],
    2: ["Remera básica Olenka bordada Chanel dorado", 35000, "remera de polycoton", ["imagenes/remeras/remeron2-1.jpeg", "imagenes/remeras/remeron2-4.jpeg", "imagenes/remeras/remeron2-3.jpeg", "imagenes/remeras/remeron2-2.jpeg"], ["Blanco", "Negro"], [1, 2, 3]],
    3: ["Mega remeron con Frutillitas", 25000, "remera de polycoton", ["imagenes/remeras/remeron3-1.jpeg", "imagenes/remeras/remeron3-3.jpeg", "imagenes/remeras/remeron3-2.jpeg", "imagenes/remeras/remeron3-1.jpeg"], ["Blanco", "Negro", "Verde", "Fuxia"], ["S", "M", "L"]],
    4: ["Remera básica Olenka unisex tuxedo", 25000, "", ["imagenes/remeras/remeron4-1.jpeg", "imagenes/remeras/remeron4-4.jpeg", "imagenes/remeras/remeron4-2.jpeg", "imagenes/remeras/remeron4-3.jpeg"], ["Blanco", "Negro", "Verde", "Fuxia"], ["XS", "S", "M", "L", "XL", "XXL"]],
    5: ["Remera básica Olenka unisex Bjork con cadenas", 29000, "", ["imagenes/remeras/remeron5-1.jpeg", "imagenes/remeras/remeron5-3.jpeg", "imagenes/remeras/remeron5-2.jpeg", "imagenes/remeras/remeron5-1.jpeg"], ["Blanco", "Negro", "Rojo", "Gris"], ["XS", "S", "M", "L", "XL", "XXL"]],
    6: ["Remera básica Olenka Unisex nina", 25000, "", ["imagenes/remeras/remeron6-1.jpeg", "imagenes/remeras/remeron6-3.jpeg", "imagenes/remeras/remeron6-2.jpeg", "imagenes/remeras/remeron6-1.jpeg"], [], ["XS", "S", "M", "L", "XL", "XXL"]],
    7: ["Remera básica Olenka STONE bordada y pintada", 55000, "", ["imagenes/remeras/remeron7-1.jpeg", "imagenes/remeras/remeron7-3.jpeg", "imagenes/remeras/remeron7-2.jpeg", "imagenes/remeras/remeron7-1.jpeg"], ["Blanco", "Negro"], ["XS", "S", "M", "L", "XL", "XXL"]],
    8: ["Remeron gasa", 35000, "", ["imagenes/remeras/remeron8-1.jpeg", "imagenes/remeras/remeron8-4.jpeg", "imagenes/remeras/remeron8-2.jpeg", "imagenes/remeras/remeron8-3.jpeg"], [], []],
    9: ["Mega remeron hongos", 45000, "", ["imagenes/remeras/remeron9-1.jpeg", "imagenes/remeras/remeron9-4.jpeg", "imagenes/remeras/remeron9-2.jpeg", "imagenes/remeras/remeron9-3.jpeg"], ["Blanco", "Negro"], ["S", "M", "L"]],
   10: ["Remeron gajos", 35000, "", ["imagenes/remeras/remeron10-1.jpeg", "imagenes/remeras/remeron10-3.jpeg", "imagenes/remeras/remeron10-2.jpeg", "imagenes/remeras/remeron10-1.jpeg"], [], []],
   11: ["MAXI remeron calado con cadenas", 38000, "", ["imagenes/remeras/remeron11-1.jpeg", "imagenes/remeras/remeron11-3.jpeg", "imagenes/remeras/remeron11-2.jpeg", "imagenes/remeras/remeron11-1.jpeg"], ["Óxido", "Negro", "Blanco", "Verde", "Fuxia"], ["S", "M"]],
   12: ["Remera unisex roja", 45000, "Bordada", ["imagenes/remeras/remeron12-1.jpeg", "imagenes/remeras/remeron12-3.jpeg", "imagenes/remeras/remeron12-2.jpeg", "imagenes/remeras/remeron12-1.jpeg"], [], ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]],
   13: ["Remeron mega blanco honguitos", 45000, "", ["imagenes/remeras/remeron13-1.jpeg", "imagenes/remeras/remeron13-3.jpeg", "imagenes/remeras/remeron13-2.jpeg", "imagenes/remeras/remeron13-1.jpeg"], [], ["S", "M", "L"]],
   14: ["Remera MAXI Smile", 25000, "", ["imagenes/remeras/remeron14-1.jpeg", "imagenes/remeras/remeron14-3.jpeg", "imagenes/remeras/remeron14-2.jpeg", "imagenes/remeras/remeron14-1.jpeg"], ["Neon","Naranja"], [1, 2, 3]],
   15: ["Remera MAXI gajos", 45000, "", ["imagenes/remeras/remeron15-1.jpeg", "imagenes/remeras/remeron15-3.jpeg", "imagenes/remeras/remeron15-2.jpeg", "imagenes/remeras/remeron15-1.jpeg"], ["Blanco", "Negro",  "Gris" ,"Verde" , "Fuxia"], ["S", "M", "L"]],
   16: ["Remeron Barby con chicle globo", 29000, "", ["imagenes/remeras/remeron16-1.jpeg", "imagenes/remeras/remeron16-2.jpeg", "imagenes/remeras/remeron16-1.jpeg", "imagenes/remeras/remeron16-2.jpeg"], ["Blanco", "Negro", "Fuxia"], []],
   17: ["Remera básica Olenka Sex Pistols", 29000, "", ["imagenes/remeras/remeron17-1.jpeg", "imagenes/remeras/remeron17-2.jpeg", "imagenes/remeras/remeron17-3.jpeg", "imagenes/remeras/remeron17-2.jpeg"], ["Blanco", "Negro","Gris","Lila", "Fuxia"], [1,2,3]],
   18: ["Remera básica Olenka botas", 29000, "", ["imagenes/remeras/remeron18-1.jpeg", "imagenes/remeras/remeron18-2.jpeg", "imagenes/remeras/remeron18-3.jpeg", "imagenes/remeras/remeron18-2.jpeg"], ["Blanco", "Negro","Gris","Lila"], [1,2,3]],
   19: ["Remera básica Virgen de Guadalupe!", 45000, "", ["imagenes/remeras/remeron19-1.jpeg", "imagenes/remeras/remeron19-1.jpeg", "imagenes/remeras/remeron19-1.jpeg", "imagenes/remeras/remeron19-1.jpeg"], ["Blanco", "Negro","Gris","Rojo", "Beige"], ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]],
   20: ["Remera básica unisex Nirvana", 45000, "", ["imagenes/remeras/remeron20-1.jpeg", "imagenes/remeras/remeron20-2.jpeg", "imagenes/remeras/remeron20-1.jpeg", "imagenes/remeras/remeron20-2.jpeg"], ["Blanco"], ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]],
   21: ["Mega remeron frutillitas", 25000, "", ["imagenes/remeras/remeron21-1.jpeg", "imagenes/remeras/remeron21-2.jpeg", "imagenes/remeras/remeron21-1.jpeg", "imagenes/remeras/remeron21-2.jpeg"], ["Blanco","Negro","Verde"], ["1","2","3"]],
   22: ["Remera básica unisex Mordecai bordada", 25000, "", ["imagenes/remeras/remeron22-1.jpeg", "imagenes/remeras/remeron22-1.jpeg", "imagenes/remeras/remeron22-1.jpeg", "imagenes/remeras/remeron22-1.jpeg"], ["Blanco","Negro"], ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]],

}

const buzos = {
    0: 5,
    1: ["MAXI buzo bordado", 65000, "buzo tela rústica", ["imagenes/buzos/buzo1-1.jpeg", "imagenes/buzos/buzo1-4.jpeg", "imagenes/buzos/buzo1-3.jpeg", "imagenes/buzos/buzo1-2.jpeg"], ["Blanco", "Negro", "Gris melange"], []],
    2: ["MAXI buzo moño", 65000, "buzo tela rústica", ["imagenes/buzos/buzo2-1.jpeg", "imagenes/buzos/buzo2-3.jpeg", "imagenes/buzos/buzo2-2.jpeg", "imagenes/buzos/buzo2-1.jpeg"], ["Blanco", "Negro", "Gris"], []],
    3: ["Buzo básico oversize Honguitos", 65000, "buzo tela rústica", ["imagenes/buzos/buzo3-1.jpeg", "imagenes/buzos/buzo3-3.jpeg", "imagenes/buzos/buzo3-2.jpeg", "imagenes/buzos/buzo3-1.jpeg"], ["Blanco", "Negro", "Gris"], [1,2,3]],
    4: ["Buzo básico gato bordado", 65000, "buzo tela rústica", ["imagenes/buzos/buzo4-1.jpeg", "imagenes/buzos/buzo4-3.jpeg", "imagenes/buzos/buzo4-2.jpeg", "imagenes/buzos/buzo4-1.jpeg"], ["Blanco", "Negro", "Gris"], [1,2,3]],
    5: ["MAXI buzo moño", 65000, "buzo tela rústica", ["imagenes/buzos/buzo5-1.jpeg", "imagenes/buzos/buzo5-1.jpeg", "imagenes/buzos/buzo5-1.jpeg", "imagenes/buzos/buzo5-1.jpeg"], ["Blanco", "Negro", "Gris"], [1,2,3]],
}

const overols = {
    0: 2,
    1: ["Overol jean celeste", 85000, "Overol de Bengalína elastizada", ["imagenes/overol/overol1-1.jpeg", "imagenes/overol/overol1-4.jpeg", "imagenes/overol/overol1-3.jpeg", "imagenes/overol/overol1-2.jpeg"],[], [1, 2, 3]],
    2: ["Overol bengalína elastizada", 85000, "Overol de Bengalína elastizada", ["imagenes/overol/overol2-1.jpeg", "imagenes/overol/overol2-4.jpeg", "imagenes/overol/overol2-3.jpeg", "imagenes/overol/overol2-2.jpeg"],[], [1, 2, 3]],
}

const accesorios = {
    0: 31,
    1: ["Collar MAXI mosquetón y perlas", 15000, "", ["imagenes/accesorios/accesorio1-1.jpeg", "imagenes/accesorios/accesorio1-2.jpeg", "imagenes/accesorios/accesorio1-3.jpeg", "imagenes/accesorios/accesorio1-1.jpeg"], [], []],
    2: ["Aros STRASS", 8000, "", ["imagenes/accesorios/accesorio1-1.jpeg", "imagenes/accesorios/accesorio1-2.jpeg", "imagenes/accesorios/accesorio1-3.jpeg", "imagenes/accesorios/accesorio1-1.jpeg"], [], []],
    3: ["Aros alien", 6000, "Aros de plástico reciclado", ["imagenes/accesorios/accesorio2-1.jpeg", "imagenes/accesorios/accesorio2-2.jpeg", "imagenes/accesorios/accesorio2-3.jpeg", "imagenes/accesorios/accesorio2-1.jpeg"], ["Amarillo", "Violeta", "Verde agua"], []],
    4: ["Aros honguitos", 6000, "", ["imagenes/accesorios/accesorio3-1.jpeg", "imagenes/accesorios/accesorio3-2.jpeg", "imagenes/accesorios/accesorio3-1.jpeg", "imagenes/accesorios/accesorio3-2.jpeg"], ["Rojo", "Amarillo", "Naranja", "Lila", "Celeste"], []],
    5: ["Cartera crochet", 19000, "", ["imagenes/accesorios/accesorio4-1.jpeg","imagenes/accesorios/accesorio4-1.jpeg","imagenes/accesorios/accesorio4-1.jpeg", "imagenes/accesorios/accesorio4-1.jpeg"], [], []],
    6: ["Collar Choker flor", 12000, "", ["imagenes/accesorios/accesorio5-1.jpeg","imagenes/accesorios/accesorio5-2.jpeg","imagenes/accesorios/accesorio5-3.jpeg", "imagenes/accesorios/accesorio5-1.jpeg"], [], []],
    7: ["Collar moño", 15000, "", ["imagenes/accesorios/accesorio5-1.jpeg","imagenes/accesorios/accesorio5-2.jpeg","imagenes/accesorios/accesorio5-3.jpeg", "imagenes/accesorios/accesorio5-1.jpeg"], [], []],
    8: ["Collar perlas y gafas", 15000, "", ["imagenes/accesorios/accesorio6-1.jpeg","imagenes/accesorios/accesorio6-1.jpeg","imagenes/accesorios/accesorio6-1.jpeg", "imagenes/accesorios/accesorio6-1.jpeg"], [], []],
    9: ["Cartera mini bag crochet con lentejuelones verdes", 25000, "", ["imagenes/accesorios/accesorio25-1.jpeg","imagenes/accesorios/accesorio25-1.jpeg","imagenes/accesorios/accesorio25-1.jpeg", "imagenes/accesorios/accesorio25-1jpeg"], [], []],
   10: ["Collar perlas y osito", 15000, "", ["imagenes/accesorios/accesorio8-1.jpeg","imagenes/accesorios/accesorio8-1.jpeg","imagenes/accesorios/accesorio8-1.jpeg", "imagenes/accesorios/accesorio8-1.jpeg"], ["Rosa", "Blanco", "Transparente", "Celeste"], []],
   11: ["Collar zipper", 25000, "", ["imagenes/accesorios/accesorio9-1.jpeg","imagenes/accesorios/accesorio9-2.jpeg","imagenes/accesorios/accesorio9-1.jpeg", "imagenes/accesorios/accesorio9-2jpeg"], [], []],
   12: ["Cartera crochet", 15000, "", ["imagenes/accesorios/accesorio10-1.jpeg","imagenes/accesorios/accesorio10-1.jpeg","imagenes/accesorios/accesorio10-1.jpeg", "imagenes/accesorios/accesorio10-1jpeg"], [], []],
   13: ["Collar lolipop", 19000, "Color perlas blancas", ["imagenes/accesorios/accesorio11-1.jpeg","imagenes/accesorios/accesorio11-1.jpeg","imagenes/accesorios/accesorio11-1.jpeg", "imagenes/accesorios/accesorio11-1jpeg"], [], []],
   14: ["Collar multi dijes con perlas amarillas", 35000, "", ["imagenes/accesorios/accesorio11-1.jpeg","imagenes/accesorios/accesorio11-1.jpeg","imagenes/accesorios/accesorio11-1.jpeg", "imagenes/accesorios/accesorio11-1jpeg"], [], []],
   15: ["Aros snake STRASS", 12000, "", ["imagenes/accesorios/accesorio12-1.jpeg","imagenes/accesorios/accesorio12-1.jpeg","imagenes/accesorios/accesorio12-1.jpeg", "imagenes/accesorios/accesorio12-1jpeg"], [], []],
   16: ["Aros cruz STRASS", 12000, "", ["imagenes/accesorios/accesorio13-1.jpeg","imagenes/accesorios/accesorio13-1.jpeg","imagenes/accesorios/accesorio13-1.jpeg", "imagenes/accesorios/accesorio13-1jpeg"], [], []],
   17: ["Aros frutilla", 6000, "Plástico reciclado", ["imagenes/accesorios/accesorio14-1.jpeg","imagenes/accesorios/accesorio14-2.jpeg","imagenes/accesorios/accesorio14-1.jpeg", "imagenes/accesorios/accesorio14-2jpeg"], [], []],
   18: ["Collar perlas naranjas", 15000, "", ["imagenes/accesorios/accesorio15-1.jpeg","imagenes/accesorios/accesorio15-2.jpeg","imagenes/accesorios/accesorio15-1.jpeg", "imagenes/accesorios/accesorio15-2jpeg"], [], []],
   19: ["Collar multidijes perla turquesa", 35000, "", ["imagenes/accesorios/accesorio15-1.jpeg","imagenes/accesorios/accesorio15-2.jpeg","imagenes/accesorios/accesorio15-1.jpeg", "imagenes/accesorios/accesorio15-2jpeg"], [], []],
   20: ["Collar Choker osito transparente", 15000, "", ["imagenes/accesorios/accesorio16-1.jpeg","imagenes/accesorios/accesorio16-1.jpeg","imagenes/accesorios/accesorio16-1.jpeg", "imagenes/accesorios/accesorio16-1jpeg"], [], []],
   21: ["Collar ositos de colores", 25000, "", ["imagenes/accesorios/accesorio16-1.jpeg","imagenes/accesorios/accesorio16-1.jpeg","imagenes/accesorios/accesorio16-1.jpeg", "imagenes/accesorios/accesorio16-1jpeg"], [], []],
   22: ["Collar frutillas", 25000, "", ["imagenes/accesorios/accesorio17-1.jpeg","imagenes/accesorios/accesorio17-1.jpeg","imagenes/accesorios/accesorio17-1.jpeg", "imagenes/accesorios/accesorio17-1jpeg"], [], []],
   23: ["Aros frutillas", 5000, "", ["imagenes/accesorios/accesorio18-1.jpeg","imagenes/accesorios/accesorio18-1.jpeg","imagenes/accesorios/accesorio18-1.jpeg", "imagenes/accesorios/accesorio18-1jpeg"], [], []],
   24: ["Collar perlas y alfileres", 15000, "", ["imagenes/accesorios/accesorio18-1.jpeg","imagenes/accesorios/accesorio18-1.jpeg","imagenes/accesorios/accesorio18-1.jpeg", "imagenes/accesorios/accesorio18-1jpeg"], [], []],
   25: ["Collar perlas doble", 35000, "", ["imagenes/accesorios/accesorio19-1.jpeg","imagenes/accesorios/accesorio19-1.jpeg","imagenes/accesorios/accesorio19-1.jpeg", "imagenes/accesorios/accesorio19-1jpeg"], [], []],
   26: ["Tote crochet", 25000, "", ["imagenes/accesorios/accesorio20-1.jpeg","imagenes/accesorios/accesorio20-1.jpeg","imagenes/accesorios/accesorio20-1.jpeg", "imagenes/accesorios/accesorio20-1jpeg"], ["Verde", "Naranja"], []],
   27: ["Cartera mini bag crochet con lentejuelas", 25000, "", ["imagenes/accesorios/accesorio21-1.jpeg","imagenes/accesorios/accesorio21-2.jpeg","imagenes/accesorios/accesorio21-1.jpeg", "imagenes/accesorios/accesorio21-2jpeg"], [], []],
   28: ["Aros frutillas verdes ", 5000, "", ["imagenes/accesorios/accesorio22-1.jpeg","imagenes/accesorios/accesorio22-1.jpeg","imagenes/accesorios/accesorio22-1.jpeg", "imagenes/accesorios/accesorio22-1jpeg"], [], []],
   29: ["Pañuelo bandana azul ", 6000, "", ["imagenes/accesorios/accesorio22-1.jpeg","imagenes/accesorios/accesorio22-1.jpeg","imagenes/accesorios/accesorio22-1.jpeg", "imagenes/accesorios/accesorio22-1jpeg"], [], []],
   30: ["Cartera Crochet manija plástica ", 25000, "", ["imagenes/accesorios/accesorio23-1.jpeg","imagenes/accesorios/accesorio23-2.jpeg","imagenes/accesorios/accesorio23-3.jpeg", "imagenes/accesorios/accesorio23-1jpeg"], [], []],
   31: ["Collar mosquetón Fluo", 15000, "", ["imagenes/accesorios/accesorio24-1.jpeg","imagenes/accesorios/accesorio24-1.jpeg","imagenes/accesorios/accesorio24-1.jpeg", "imagenes/accesorios/accesorio24-1jpeg"], [], []],
   32: ["Collar perlas y cadena", 25000, "", ["imagenes/accesorios/accesorio7-1.jpeg","imagenes/accesorios/accesorio7-1.jpeg","imagenes/accesorios/accesorio7-1.jpeg", "imagenes/accesorios/accesorio7-1.jpeg"], [], []],
}

const vestidos = {
    0: 11,
    1: ["Vestido bandana", 65000, "Pañuelos bandana multicolor", ["imagenes/vestidos/vestido1-1.jpeg","imagenes/vestidos/vestido1-2.jpeg","imagenes/vestidos/vestido1-3.jpeg", "imagenes/vestidos/vestido1-1.jpeg"], [], []],
    2: ["Vestido bandana color", 65000, "", ["imagenes/vestidos/vestido2-1.jpeg","imagenes/vestidos/vestido2-2.jpeg","imagenes/vestidos/vestido2-3.jpeg", "imagenes/vestidos/vestido2-1.jpeg"], [], []],
    3: ["Vestido bandana rosa", 65000, "", ["imagenes/vestidos/vestido3-1.jpeg","imagenes/vestidos/vestido3-2.jpeg","imagenes/vestidos/vestido3-3.jpeg", "imagenes/vestidos/vestido3-1.jpeg"], [], []], 
    4: ["Vestido raso negro cruzado", 45000, "Bordado con frutillas", ["imagenes/vestidos/vestido4-1.jpeg","imagenes/vestidos/vestido4-2.jpeg","imagenes/vestidos/vestido4-3.jpeg", "imagenes/vestidos/vestido4-1.jpeg"], [], []], 
    5: ["Vestido sin mangas lengua STONE", 35000, "", ["imagenes/vestidos/vestido5-1.jpeg","imagenes/vestidos/vestido5-2.jpeg","imagenes/vestidos/vestido5-3.jpeg", "imagenes/vestidos/vestido5-1.jpeg"], ["Blanco", "Negro", "Gris"], []], 
    6: ["Vestido lentejuelas espalda cavada", 45000, "", ["imagenes/vestidos/vestido6-1.jpeg","imagenes/vestidos/vestido6-2.jpeg","imagenes/vestidos/vestido6-3.jpeg", "imagenes/vestidos/vestido6-4.jpeg"], ["Plata", "Negro"], [1, 2, 3]], 
    7: ["Vestido Pin Up rayado con frutillas bordadas", 45000, "Tela bengalína", ["imagenes/vestidos/vestido7-1.jpeg","imagenes/vestidos/vestido7-2.jpeg","imagenes/vestidos/vestido7-1.jpeg", "imagenes/vestidos/vestido7-2.jpeg"], [], [1, 2, 3]], 
    8: ["Vestido largo Smiles bordadas", 55000, "Tela algodón policotom", ["imagenes/vestidos/vestido8-1.jpeg","imagenes/vestidos/vestido8-2.jpeg","imagenes/vestidos/vestido8-3.jpeg", "imagenes/vestidos/vestido8-2.jpeg"], [], [1, 2]], 
    9: ["Vestido largo rayado con estampa frutilla Olenka", 45000, "Tela morley", ["imagenes/vestidos/vestido9-1.jpeg","imagenes/vestidos/vestido9-2.jpeg","imagenes/vestidos/vestido9-3.jpeg", "imagenes/vestidos/vestido9-2.jpeg"], [], [1, 2, 3]], 
   10: ["Vestido Bandana largo", 75000, "", ["imagenes/vestidos/vestido10-1.jpeg","imagenes/vestidos/vestido10-1.jpeg","imagenes/vestidos/vestido10-1.jpeg", "imagenes/vestidos/vestido10-1.jpeg"], [], [1, 2, 3]], 
   11: ["Vestido pin Up Leopardo", 45000, "Tela begalina", ["imagenes/vestidos/vestido11-1.jpeg","imagenes/vestidos/vestido11-2.jpeg","imagenes/vestidos/vestido11-3.jpeg", "imagenes/vestidos/vestido11-2.jpeg"], [], [1, 2, 3]], 
}

const camperas = {
    0: 1,
    1: ["Campera pintada eco cuero", 65000, "Eco cuero elastizado", ["imagenes/camperas/campera1-1.jpeg","imagenes/camperas/campera1-2.jpeg","imagenes/camperas/campera1-3.jpeg", "iimagenes/camperas/campera1-4.jpeg"], [], [1, 2, 3]], 

}

const polleras = {
    0: 7,
    1: ["Falda tul", 55000, "Tela tul elastizado", ["imagenes/polleras/pollera1-1.jpeg","imagenes/polleras/pollera1-2.jpeg","imagenes/polleras/pollera1-3.jpeg", "iimagenes/polleras/pollera1-1.jpeg"], [], []], 
    2: ["Falda mini eco cuero pintada con cierre", 45000, "", ["imagenes/polleras/pollera2-1.jpeg","imagenes/polleras/pollera2-2.jpeg","imagenes/polleras/pollera2-1.jpeg", "iimagenes/polleras/pollera2-2.jpeg"], [], [1, 2]], 
    3: ["Falda plisada metal", 35000, "", ["imagenes/remeras/remeron10-1.jpeg", "imagenes/remeras/remeron10-3.jpeg", "imagenes/remeras/remeron10-2.jpeg", "imagenes/remeras/remeron10-1.jpeg"], [], [1, 2]], 
    4: ["Falda plisada midy", 25000, "", ["imagenes/polleras/pollera3-1.jpeg", "imagenes/polleras/pollera3-2.jpeg", "imagenes/polleras/pollera3-1.jpeg", "imagenes/polleras/pollera3-2.jpeg"], [], [1, 2]], 
    5: ["Falda pareo", 35000, "Tela Lisboa negro", ["imagenes/polleras/pollera4-1.jpeg", "imagenes/polleras/pollera4-2.jpeg", "imagenes/polleras/pollera4-1.jpeg", "imagenes/polleras/pollera4-2.jpeg"], [], [1, 3]], 
    6: ["Falda tul gasa elastizada", 65000, "", ["imagenes/polleras/pollera5-1.jpeg", "imagenes/polleras/pollera5-2.jpeg", "imagenes/polleras/pollera5-1.jpeg", "imagenes/polleras/pollera5-2.jpeg"], [], []], 
    7: ["Falda eco cuero pintada silver", 45000, "", ["imagenes/polleras/pollera6-1.jpeg", "imagenes/polleras/pollera6-2.jpeg", "imagenes/polleras/pollera6-1.jpeg", "imagenes/polleras/pollera6-2.jpeg"], [], [1, 2]], 

}

const blazer = {
    0: 8,
    1: ["Blazer crep elastizado", 85000, "", ["imagenes/blazer/blazer1-1.jpeg","imagenes/blazer/blazer1-4.jpeg","imagenes/blazer/blazer1-3.jpeg", "iimagenes/blazer/blazer1-2.jpeg"], [], [1,2,3,4,5]], 
    2: ["Blazer lentejuelas plata", 85000, "", ["imagenes/blazer/blazer2-1.jpeg","imagenes/blazer/blazer2-4.jpeg","imagenes/blazer/blazer2-3.jpeg", "iimagenes/blazer/blazer2-2.jpeg"], [], [1, 2]], 
    3: ["Blazer crep rojo liso", 45000, "", ["imagenes/blazer/blazer3-1.jpeg","imagenes/blazer/blazer3-2.jpeg","imagenes/blazer/blazer3-3.jpeg", "iimagenes/blazer/blazer3-2.jpeg"], [], [1,2,3,4,5]], 
    4: ["Blazers crep elastizado", 85000, "Bordado ojitos", ["imagenes/blazer/blazer4-1.jpeg","imagenes/blazer/blazer4-2.jpeg","imagenes/blazer/blazer4-3.jpeg", "iimagenes/blazer/blazer4-2.jpeg"], [], [1,2,3,4,5]], 
    5: ["Blazer crep pintado bordó", 75000, "", ["imagenes/blazer/blazer5-1.jpeg","imagenes/blazer/blazer5-2.jpeg","imagenes/blazer/blazer5-3.jpeg", "iimagenes/blazer/blazer5-2.jpeg"], [], [1,2,3,4,5]], 
    6: ["Blazer crep rosa palo pintado", 75000, "", ["imagenes/blazer/blazer6-1.jpeg","imagenes/blazer/blazer6-2.jpeg","imagenes/blazer/blazer6-3.jpeg", "iimagenes/blazer/blazer6-2.jpeg"], [], [1,2,3,4,5]], 
    7: ["Blazer crep pintado blanco", 75000, "", ["imagenes/blazer/blazer7-1.jpeg","imagenes/blazer/blazer7-1.jpeg","imagenes/blazer/blazer7-1.jpeg", "iimagenes/blazer/blazer7-1.jpeg"], [], [1,2,3,4,5]], 
    8: ["Tapado polar a cuadros", 85000, "", ["imagenes/blazer/blazer8-1.jpeg","imagenes/blazer/blazer8-2.jpeg","imagenes/blazer/blazer8-1.jpeg", "iimagenes/blazer/blazer8-2.jpeg"], [], [1,2,3,4,5]], 
}