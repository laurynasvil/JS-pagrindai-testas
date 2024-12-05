/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log('');
console.log('--------1uzd---------');
console.log('');

function konverteris() {
    let euruSuma = Math.floor(Math.random() * 1000)
    console.log("Euru suma:", euruSuma)
    let doleris = 1.05
    let paversta = euruSuma * doleris
    console.log(`Valiutos skaiciuokle: ${euruSuma} -EURU konvertuojama i dolerius - ${paversta.toFixed(2)}$ `)

}
konverteris()

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

console.log('');
console.log('--------2uzd---------');
console.log('');

function konvertuoti() {
    let doleriuSuma = Math.floor(Math.random() * 1000)
    console.log("Doleriu suma:", doleriuSuma)
    let euras = 0.95
    let paversta = doleriuSuma * euras
    console.log(`Valiutos skaiciuokle: ${doleriuSuma} -JAV doleris konvertuojama i EURUS - ${paversta.toFixed(2)}-eur`)

}
konvertuoti()

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

console.log('');
console.log('--------3uzd---------');
console.log('');

function bmiSkaiciuotuvas(ugis, svoris) {
    let bmi = svoris / ugis ** 2

    if (bmi < 18.5) {
        console.log("BMI indeksas:", bmi.toFixed(2), "Rezultatas- Svorio trukumas")
    } else if (18.5 <= bmi && bmi < 25) {
        console.log("BMI indeksas:", bmi.toFixed(2), "Rezultatas- Normalus")
    } else {
        console.log("BMI indeksas:", bmi.toFixed(2), "Rezultatas- Virssvoris")
    }
}

bmiSkaiciuotuvas(1.80,80)

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

console.log('');
console.log('--------4uzd---------');
console.log('');
let dienos = 365;
let dienojeH = 24;
let valandojeMin = 60;
let sekundeseS = 60


function laikoSkaiciuotuvas(metai){

let metuoseSekundziu = dienos * dienojeH * valandojeMin * sekundeseS;
let amziusSekundemis = metuoseSekundziu * metai;
console.log("Amzius sekundemis-",amziusSekundemis);

let metuoseMinuciu = dienos * dienojeH * valandojeMin;
let amziusMinutemis =metuoseMinuciu * metai;
console.log("Amzius minutemis-",amziusMinutemis);

let metuoseValandu = dienos * dienojeH;
let amziusValandomis = metuoseValandu * metai;
console.log("Amzius valandomis-",amziusValandomis);

let amziusDienomis = dienos * metai;
console.log("Amzius dienomis",amziusDienomis)
}
laikoSkaiciuotuvas(29)


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
