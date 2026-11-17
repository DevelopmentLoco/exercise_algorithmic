# Sesión 03 – Trazas y árbol de componentes

En esta sesión se realizan trazas de ejecución para entender cómo cambian las variables durante los ciclos y se identifica la estructura jerárquica y los elementos repetidos de una interfaz.

## 1. Traza del cajero del parqueadero – `cajeroParqueadero.js`

El programa solicita el valor pagado por cada carro. Mientras el valor ingresado sea diferente de `0`, lo suma al total y aumenta en uno la cantidad de carros atendidos. Cuando se ingresa `0`, termina el ciclo y muestra el resumen.

**Entradas de ejemplo:** `5000`, `7000`, `4000`, `0`.

**Traza de escritorio**

| Paso | Valor ingresado (`valor`) | ¿`valor != 0`? | `total` después de la operación | `carros` después de la operación |
|---:|---:|---|---:|---:|
| Inicio | — | — | `0` | `0` |
| 1 | `5000` | Verdadero | `5000` | `1` |
| 2 | `7000` | Verdadero | `12000` | `2` |
| 3 | `4000` | Verdadero | `16000` | `3` |
| 4 | `0` | Falso | `16000` | `3` |

**Salida final en consola**

```text
Caja Cerrada
carros atendidos: 3
Total recaudado: 16000
```

**¿Qué sucede en el ciclo?**

1. Se inicializan `carros` y `total` en `0`.
2. Se solicita el valor del siguiente carro.
3. Si el valor es diferente de `0`, se suma a `total` y se aumenta `carros` en uno.
4. Se vuelve a solicitar otro valor.
5. Cuando se ingresa `0`, la condición del `while` es falsa y el ciclo termina.
6. Se muestran los carros atendidos y el dinero recaudado.

El `0` funciona como valor de salida: no se suma al total ni se cuenta como un carro.

## 2. Traza de la pirámide – `piramide.js`

La función `piramide(n)` recibe el número de filas. Tiene un ciclo externo que controla las filas y dos ciclos internos: uno imprime los espacios y el otro imprime los asteriscos.

Para `piramide(4)`, se ejecutan cuatro filas.

**Reglas de cada fila**

- Espacios: `n - fila`.
- Asteriscos: `2 * fila - 1`.

**Traza de escritorio para `n = 4`**

| Fila | Cálculo de espacios | Espacios impresos | Cálculo de asteriscos | Asteriscos impresos |
|---:|---|---:|---|---:|
| 1 | `4 - 1` | 3 | `2 × 1 - 1` | 1 |
| 2 | `4 - 2` | 2 | `2 × 2 - 1` | 3 |
| 3 | `4 - 3` | 1 | `2 × 3 - 1` | 5 |
| 4 | `4 - 4` | 0 | `2 × 4 - 1` | 7 |

**Salida en consola**

```text
   *
  ***
 *****
*******
```

**¿Cómo funcionan los ciclos?**

1. El ciclo externo comienza con `fila = 1` y se repite mientras `fila <= n`.
2. El primer ciclo interno imprime los espacios necesarios para centrar los asteriscos.
3. El segundo ciclo interno imprime los asteriscos de esa fila.
4. `console.log("")` termina la fila y pasa a la siguiente línea.
5. El ciclo externo aumenta `fila` y repite el proceso hasta llegar a la fila 4.

Se utilizan ciclos anidados porque, por cada fila, se necesita repetir dos tareas: imprimir espacios e imprimir asteriscos.

## 3. Árbol de componentes de una página web

Un árbol de componentes representa cómo se organiza una página web por secciones y elementos. Se comienza por la página completa y se identifican sus partes principales, sus elementos internos y los elementos que se repiten.

**Ejemplo: página de una tienda en línea**

```text
Página
│
├── Header (encabezado)
│   ├── Logo
│   └── Menú de navegación
│       ├── Inicio
│       ├── Productos
│       ├── Ofertas
│       └── Contacto
│
├── Main (contenido principal)
│   ├── Título de la sección
│   └── Lista de productos
│       ├── Tarjeta de producto 1
│       │   ├── Imagen
│       │   ├── Título
│       │   └── Precio
│       ├── Tarjeta de producto 2
│       │   ├── Imagen
│       │   ├── Título
│       │   └── Precio
│       ├── Tarjeta de producto 3
│       │   ├── Imagen
│       │   ├── Título
│       │   └── Precio
│       └── Tarjeta de producto 4
│           ├── Imagen
│           ├── Título
│           └── Precio
│
└── Footer (pie de página)
    ├── Información de la tienda
    └── Enlaces de contacto
```

### Identificación de elementos repetidos

En el contenido principal hay cuatro tarjetas de productos. Todas tienen la misma estructura:

- Imagen.
- Título.
- Precio.

Lo que cambia es la información de cada producto, pero la estructura de la tarjeta se repite cuatro veces. En JavaScript, una repetición de este tipo se puede relacionar con un ciclo `for`: se recorre una lista de productos y se realiza la misma operación para cada elemento.

**Relación con el ciclo `for`:**

```javascript
for (let i = 0; i < productos.length; i++) {
    // Se procesa cada producto de la lista
}
```

El ejemplo muestra la idea de recorrer elementos repetidos. No modifica los ejercicios JavaScript de esta sesión.

### Conclusión

El árbol permite observar la jerarquía de una interfaz: una página contiene secciones, las secciones contienen componentes y algunos componentes pueden repetirse. Identificar esa repetición ayuda a reconocer cuándo se puede utilizar un ciclo para recorrer una lista de elementos.
