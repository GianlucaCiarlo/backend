# Proyecto Ecommerce de distribucion de bebidas
    Este proyecto es un ejemplo de cómo utilizar diferentes métodos de JavaScript para manejar y analizar datos desde una base de datos.

## Instalaciones
    Para utilizar este proyecto, se necesitan las siguientes dependencias:

*Node.js
*npm

Para instalar las dependencias del proyecto, ejecute el siguiente comando en la línea de comando:

> npm install

## Uso
Este proyecto contiene los siguientes métodos:
```
addProduct()
updateProduct()
delateProduct()
getProductById()
```
## Metodo

` addProduct({ title, description, price, thumbnail, code, stock }) `

 ## Como utilizar

 `await manager.addProduct({ title: "Mirinda 2,25L",`
  ` description: "Gaseosa sabor Naranja 2,25L x 8u",`
  ` price: 3000,`
  ` thumbnail: "sin IMG",`
  ` code: "mir225",`
  ` stock: 10,}) `
 
El metodo addProduct() sirve para agregar productos a la base de datos y puede recivir los siguientes parametros:
title, description, price, thumbnail, code, stock.

## Metodo

` updateProduct(id,data) `

## Como utilizar

` await manager.updateProduct(1, { price: 3500 }) `

El metodo updateProduct() puede recibir dos parametros 
Id: colocar le número de ID del producto que desee modificar
data: colocar el dato del producto que se quiera modificar

## Metodo

`delateProduct(id)`

## Como utilizar

` await manager.delateProduct(10) `

El metodo delateProduct() recibe como parametro un ID y sirve para borrar un producto.

## Metodo

`getProductById(id)`

## Como utilizar

` await manager.getProductById(9) `

` await manager.getProductById() `

El metodo getProductById() puede recibir como parametro un ID y recibir como resultado
el producto con el id indicado y todos sus detalles.
Si utilizamos solo el metodo getProductById() sin agregar parametro nos devolvera como resultado un array
con todos los productos de nuestra base de datos.

## Como ejecutar el Script.js
Para ejecutar el archivo script.js, ejecute el siguiente comando en la terminal:

`node /script.js`

Esto ejecutará el script y mostrará en la consola los resultados de cada método aplicado.