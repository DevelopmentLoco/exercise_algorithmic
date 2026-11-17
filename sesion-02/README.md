# Sesión 02 – Tablas de verdad y pruebas de escritorio

En esta sesión se practican las condiciones lógicas (`if`, `else if`, `else`), los operadores de comparación y los operadores lógicos. Las pruebas de escritorio permiten seguir las condiciones con diferentes entradas y comprobar qué resultado produce cada ejercicio.

## 1. Validar una edad – `check-age.js`

**Condición:** `age >= 0 && age <= 120`

La edad es válida cuando se cumplen las dos condiciones al mismo tiempo.

| `age >= 0` | `age <= 120` | Resultado de `&&` |
|---|---|---|
| Verdadero | Verdadero | Verdadero |
| Verdadero | Falso | Falso |
| Falso | Verdadero | Falso |
| Falso | Falso | Falso |

**Pruebas de escritorio**

| Entrada (`age`) | Evaluación | Salida |
|---:|---|---|
| `120` | Está entre 0 y 120 | `Edad Valida` |
| `0` | Está entre 0 y 120 | `Edad Valida` |
| `-1` | Es menor que 0 | `Edad Invalida` |

## 2. Validar registro – `check-log.js`

**Condición:** `age >= 14 && resultado === "si"`

El registro es exitoso únicamente cuando la edad es igual o mayor que 14 y la respuesta a los términos, después de quitar espacios externos y convertirla a minúsculas, es `"si"`.

| `age >= 14` | `resultado === "si"` | Resultado de `&&` |
|---|---|---|
| Verdadero | Verdadero | Verdadero |
| Verdadero | Falso | Falso |
| Falso | Verdadero | Falso |
| Falso | Falso | Falso |

**Pruebas de escritorio**

| Entradas (`age`, `terms`) | Evaluación | Salida |
|---|---|---|
| `20`, `"SI"` | Edad válida y respuesta convertida a `"si"` | `Registro Exitoso` |
| `13`, `"si"` | No cumple la edad mínima | `No Puedes Registrarte` |
| `20`, `"no"` | No acepta los términos | `No Puedes Registrarte` |

## 3. Clasificar un número – `clasificar_numero.js`

El programa compara el número con cero:

- Si `number > 0`, es positivo.
- Si no se cumple lo anterior y `number < 0`, es negativo.
- En caso contrario, es cero.

**Pruebas de escritorio**

| Entrada (`number`) | Condición que se cumple | Salida |
|---:|---|---|
| `0` | Ninguna de las dos primeras condiciones | `Cero` |
| `1` | `number > 0` | `Es positivo` |
| `-1` | `number < 0` | `Es negativo` |

## 4. Semáforo de unidades – `semaforo.js`

El programa clasifica la cantidad de unidades según estas condiciones:

| Condición | Resultado |
|---|---|
| `unidades < 0` | `error` |
| `unidades === 0` | `Rojo Agotado` |
| `unidades >= 1 && unidades <= 10` | `Amarrillo Pedir` |
| No se cumple ninguna condición anterior | `Verde todo bien` |

La condición de amarillo utiliza `&&`: las dos comparaciones deben ser verdaderas.

**Tabla de verdad de la condición amarilla**

| `unidades >= 1` | `unidades <= 10` | Resultado de `&&` |
|---|---|---|
| Verdadero | Verdadero | Verdadero |
| Verdadero | Falso | Falso |
| Falso | Verdadero | Falso |
| Falso | Falso | Falso |

**Pruebas de escritorio**

| Entrada (`unidades`) | Evaluación | Salida |
|---:|---|---|
| `13` | Es mayor que 10 | `Verde todo bien` |
| `4` | Está entre 1 y 10 | `Amarrillo Pedir` |
| `10` | Está entre 1 y 10 | `Amarrillo Pedir` |
| `1` | Está entre 1 y 10 | `Amarrillo Pedir` |
| `0` | Es igual a 0 | `Rojo Agotado` |
| `-1` | Es menor que 0 | `error` |

## 5. Año bisiesto – `leap-year.js`

**Condición completa:**

`(year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0`

La expresión combina `&&` (Y), `||` (O) y `!` (NO).

- Un año es bisiesto si es divisible entre 4 y no es divisible entre 100.
- También es bisiesto si es divisible entre 400.

**Tabla de verdad de la estructura lógica**

Se representan las partes de la condición así:

- `A`: el año es divisible entre 4.
- `B`: el año es divisible entre 100.
- `C`: el año es divisible entre 400.
- Expresión: `(A && !B) || C`.

| A | B | C | `!B` | `A && !B` | `(A && !B) || C` |
|---|---|---|---|---|---|
| F | F | F | V | F | F |
| F | F | V | V | F | V |
| F | V | F | F | F | F |
| F | V | V | F | F | V |
| V | F | F | V | V | V |
| V | F | V | V | V | V |
| V | V | F | F | F | F |
| V | V | V | F | F | V |

**Pruebas de escritorio**

| Entrada (`year`) | Evaluación | Salida |
|---:|---|---|
| `1900` | Divisible entre 100, pero no entre 400 | `No es bisiesto` |
| `2000` | Divisible entre 400 | `Es un año bisiesto` |
| `2024` | Divisible entre 4 y no entre 100 | `Es un año bisiesto` |
| `2026` | No es divisible entre 4 | `No es bisiesto` |

## 6. Cobro de parqueadero – `parking-lot.js`

Este ejercicio utiliza condiciones, `switch`, operadores lógicos y operaciones matemáticas.

**Reglas del ejercicio**

- Carro: `$4000` por hora o fracción.
- Moto: `$2000` por hora o fracción.
- Los primeros 15 minutos son gratis.
- El cobro máximo del día es `$30000`.
- Si tiene factura del centro comercial, paga la mitad del valor calculado.
- Si los minutos son negativos o el vehículo no es carro ni moto, se devuelve un mensaje de error.

**Orden de las condiciones**

1. Comprobar si los minutos son negativos.
2. Identificar el vehículo con `switch`.
3. Comprobar si la estadía es de 15 minutos o menos.
4. Calcular las horas cobradas con `Math.ceil(min / 60)`.
5. Calcular el valor y aplicar el máximo de `$30000`.
6. Si tiene factura, dividir el total entre 2.

**Pruebas de escritorio**

| Vehículo | Minutos | ¿Tiene factura? | Cálculo | Salida |
|---|---:|---|---|---:|
| `Carro` | `600` | `false` | 10 horas × $4000 = $40000; se aplica el máximo | `$30000` |
| `carro` | `61` | `true` | 2 horas × $4000 = $8000; se divide entre 2 | `$4000` |
| `moto` | `1000` | `false` | 17 horas × $2000 = $34000; se aplica el máximo | `$30000` |
| `carro` | `15` | `false` | Está dentro de los primeros 15 minutos | `0` |
| `bicicleta` | `60` | `false` | El tipo de vehículo no está permitido | `Error: vehículo no válido, debe ser carro o moto` |
| `carro` | `-5` | `false` | Los minutos son negativos | `Los minutos no pueden ser negativos` |

## Conclusión

Las tablas de verdad permiten comprobar cómo funcionan los operadores lógicos. Las pruebas de escritorio permiten recorrer las instrucciones con valores concretos, revisar qué condiciones se cumplen y conocer la salida que debe producir cada programa.
