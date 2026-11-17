# Algoritmia 1 – Entradas, procesos y salidas

En esta sesión se trabajan ejercicios básicos de algoritmia. Cada función recibe datos de entrada, realiza un proceso y devuelve un resultado que se muestra en la consola.

## 1. Saludo – `greeting.js`

**Objetivo:** recibir un nombre y utilizarlo para mostrar un saludo.

- **Entrada:** el nombre de una persona.
- **Proceso:** la función recibe el nombre y lo devuelve.
- **Salida:** un saludo con el nombre recibido.

| Prueba | Entrada | Salida esperada |
|---|---|---|
| 1 | `Juan` | `Hola Juan Bienvenido a Algoritmia` |
| 2 | `Ana` | `Hola Ana Bienvenido a Algoritmia` |

## 2. Promedio de tres notas – `grade-average.js`

**Objetivo:** calcular el promedio de tres calificaciones.

- **Entradas:** tres notas numéricas.
- **Proceso:** sumar las tres notas y dividir el resultado entre 3.
- **Salida:** el promedio.

| Prueba | Entradas | Operación | Salida |
|---|---|---|---|
| 1 | `3, 3, 4` | `(3 + 3 + 4) / 3` | `3.3333333333333335` |
| 2 | `4, 5, 5` | `(4 + 5 + 5) / 3` | `4.666666666666667` |

**Observación:** la función contiene `Number(total.toFixed(2))`, pero ese resultado no se guarda. Por eso devuelve el promedio con la precisión normal de JavaScript y no necesariamente con dos decimales.

## 3. Edad en días – `ages-days.js`

**Objetivo:** calcular aproximadamente cuántos días corresponden a una edad expresada en años.

- **Entrada:** edad en años.
- **Proceso:** multiplicar la edad por 365.
- **Salida:** cantidad de días calculada.

| Prueba | Entrada | Operación | Salida |
|---|---|---|---|
| 1 | `20` años | `20 × 365` | `7300` días |
| 2 | `18` años | `18 × 365` | `6570` días |

## 4. Propina por persona – `tipping.js`

**Objetivo:** calcular cuánto debe pagar cada persona al repartir una cuenta, incluyendo una propina del 10 %.

- **Entradas:** valor de la cuenta y cantidad de personas.
- **Proceso:** calcular el 10 % de propina, sumarlo a la cuenta y dividir el total entre las personas.
- **Salida:** valor que le corresponde pagar a cada persona.

| Prueba | Entradas | Operación | Salida |
|---|---|---|---|
| 1 | Cuenta: `$120000`; personas: `4` | `120000 + 12000 = 132000`; `132000 / 4` | `$33000` por persona |
| 2 | Cuenta: `$80000`; personas: `2` | `80000 + 8000 = 88000`; `88000 / 2` | `$44000` por persona |

## Conclusión

En estos ejercicios se identifican las tres partes fundamentales de un algoritmo:

1. **Entrada:** los datos que recibe el programa.
2. **Proceso:** las operaciones que se realizan con esos datos.
3. **Salida:** el resultado que entrega el programa.
