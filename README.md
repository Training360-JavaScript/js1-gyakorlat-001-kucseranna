# Függvények

## 1. feladat
- Hozz létre az index.html fájlban három gombot! 
- A gombok szövegei az alábbiak legyenek: Első, Második, Harmadik. 
- Mindegyik gombnak add meg a button class-t!
- A `js/main.js` fájlt linkeld be megfelelően a HTML-oldaladba! 
- `main.js`: Írj egy függvénykifejezést a main.js fájlban, arrow function segítségével, 
a függvény neve `handleClick` legyen! 
- A handleClick függvény a meghívása után mindegyik gombhoz hozzáad egy 
eseményfigyelőt, amely kattintásra kiírja a gomb szövegét a konzolra. 
- A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a 
gombokhoz az eseményfigyelőket!

## 2. feladat
- A `js/sum.js` fájlban dolgozz!
- `sum.js`: Hozz létre két függvénykifejezést arrow function-nel! 
- A függvények neve summation és subtraction legyen. 
- Mindegyik függvény két paramétert kap, ezek neve a és b. 
- Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelmezett érték a 0 legyen. 
- A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével. 

## 3. feladat
- A `js/person.js` fájlban dolgozz!
- `person.js`: Hozz létre egy függvénykifejezést arrow function-nel! 
- A függvény neve personDataLog legyen. 
- A függvény paraméterként egy objektumot vár, amely firstname, lastname és age tulajdonságokkal rendelkezik. 
- Amennyiben bármelyik tulajdonság hiányozna, úgy rendre a következő alapértelmezett értékeket vegyék fel: 
   - firstname: John
   - lastname: Doe 
   - age: 33
- A függvény visszadja az adott illető adatait string-formátumban:
`My name is <firstname> <lastname>. I'm <age> years old.`
- A `<firstname>`, `<lastname>` és `<age>` helyére a paraméterként kapott 
objektumtulajdonságok értékét kell behelyettesíteni.
