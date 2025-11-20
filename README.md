# ADN
instalación y ejecucion
1. npm i
2. npm start

Ejemplos de casos ejecutados:

1. MUTANTE (debería dar TRUE -> "Es mutante"):
ATGCGA
*CAGTGC*
TTATGT
AGAAGG
CCCCTA
TCACTG
<img width="329" height="329" alt="Captura de pantalla 2025-11-19 a la(s) 8 22 42 p m" src="https://github.com/user-attachments/assets/749e178b-8407-453a-aae8-af026d4a6338" />
<img width="329" height="329" alt="Captura de pantalla 2025-11-19 a la(s) 8 22 18 p m" src="https://github.com/user-attachments/assets/90601834-d9c0-43d8-ad38-2c6b5aaa486c" />

2. Ejemplo NO mutante (debería dar FALSE -> "No es mutante")
ATGCGA
*CAGTAC*
TTATGT
AGAAGG
CCTCTA
TCACTG
<img width="329" height="329" alt="Captura de pantalla 2025-11-19 a la(s) 8 25 37 p m" src="https://github.com/user-attachments/assets/286c2fc1-5462-4f75-805d-0f69a27de65d" />
<img width="329" height="329" alt="Captura de pantalla 2025-11-19 a la(s) 8 25 51 p m" src="https://github.com/user-attachments/assets/70428b5b-95b6-4a7b-9952-3e987e97cfbc" />

-------------------------------------------
Este proceso se repite con los demas casos
-------------------------------------------

3. Ejemplo MUTANTE horizontal:
AAAACT
*CAGTGC*
TTATGT
AGAAGG
CCCCTA
TCACTG

4. Ejemplo MUTANTE vertical:
*ATGCGA*
ATGTGC
ATATGT
ATAAGG
CCCCTA
TCACTG

5. Ejemplo MUTANTE diagonal:
ATGCGA
*CAGAGC*
TTAAGT
AGAAGG
CCCCTA
TCACTG

6. Ejemplo con caracteres inválidos (debe dar FALSE automáticamente):
ATGCGA
*CAGTGC*
TXATGT
AGAAGG
CCCCTA
TCACTG

