// Nombre = Edison Gamba "lokitosi"- 20191020170
a = input("elije una de las siguientes letras: A,E,I,O,U,H,X,");


// procesos a realizar, SOLO USAR CUANDO SEA NECESARIO


// linea vertical 1
while(con<31){
if ( con % 6 == 0){machine.say(con);}
con += 1;
if (con == 31){break;}
}
// linea horizontal arriba
con = 30;
while (con>24){
machine.say(con);
con -= 1
if (con== 24){break;}
}
// linea vertical 2
con = 1;
sum = 6;
while (con<26){
machine.say(con);
con += sum;
if (con > 25){break;}
}
// linea horizontal abajo
con = 1;
while (con<7){
machine.say(con);
con += 1;
if (con == 7){break;}
}
// linea horizontal medio
con = 13;
while (con < 19){
machine.say(con);
con +=1 ;
if(con == 19){break;}
}
// lineas verticales medio
con = 3;
while (con<29){
machine.say(con);
con += 6
if (con == 28){break;}
}
con = 4;
while (con<29){
machine.say(con);
con += 6
if (con == 29){break;}
}
// diagonales x
if (a == "x"){
con = 1;
while ( con < 30){
machine.say(con);
con += 7;
if (con>29){break;}
}
con = 5;
while ( con < 30){
machine.say(con);
con += 5;
if (con>29){break;}
}
}

// CODIGO COMPLETO:

a = input("elije una de las siguientes letras: A,E,I,O,U,H,X,");
con = 0;

// LETRA A

if (a == "a"){
// linea vertical 1
while(con<31){
if ( con % 6 == 0){machine.say(con);}
con += 1;
if (con == 31){break;}
}
// linea horizontal arriba
con = 30;
while (con>24){
machine.say(con);
con -= 1
if (con== 24){break;}
}
// linea vertical 2
con = 1;
sum = 6;
while (con<26){
machine.say(con);
con += sum;
if (con > 25){break;}
}
// linea horizontal medio
con = 13;
while (con < 19){
machine.say(con);
con +=1 ;
if(con == 19){break;}
}
}

// LETRA O

if (a == "o"){
// linea vertical 1
while(con<31){
if ( con % 6 == 0){machine.say(con);}
con += 1;
if (con == 31){break;}
}
// linea horizontal arriba
con = 30;
while (con>24){
machine.say(con);
con -= 1
if (con== 24){break;}
}
// linea vertical 2
con = 1;
sum = 6;
while (con<26){
machine.say(con);
con += sum;
if (con > 25){break;}
}
// linea horizontal abajo
con = 1;
while (con<7){
machine.say(con);
con += 1;
if (con == 7){break;}
}
}

// LETRA E
if (a == "e"){
// linea vertical 1
while(con<31){
if ( con % 6 == 0){machine.say(con);}
con += 1;
if (con == 31){break;}
}
// linea horizontal abajo
con = 1;
while (con<7){
machine.say(con);
con += 1;
if (con == 7){break;}
}
// linea horizontal arriba
con = 30;
while (con>24){
machine.say(con);
con -= 1
if (con== 24){break;}
}
// linea horizontal medio
con = 13;
while (con < 19){
machine.say(con);
con +=1 ;
if(con == 19){break;}
}
}

// LETRA U

if (a == "u"){
// linea vertical 1
while(con<31){
if ( con % 6 == 0){machine.say(con);}
con += 1;
if (con == 31){break;}
}
// linea vertical 2
con = 1;
sum = 6;
while (con<26){
machine.say(con);
con += sum;
if (con > 25){break;}
}
// linea horizontal abajo
con = 1;
while (con<7){
machine.say(con);
con += 1;
if (con == 7){break;}
}
}

// LETRA H

if (a == "h"){
// linea vertical 1
while(con<31){
if ( con % 6 == 0){machine.say(con);}
con += 1;
if (con == 31){break;}
}
// linea horizontal medio
con = 13;
while (con < 19){
machine.say(con);
con +=1 ;
if(con == 19){break;}
}
// linea vertical 2
con = 1;
sum = 6;
while (con<26){
machine.say(con);
con += sum;
if (con > 25){break;}
}
}

// Letra I

if (a == "i"){
// linea horizontal arriba
con = 30;
while (con>24){
machine.say(con);
con -= 1
if (con== 24){break;}
}
// linea horizontal abajo
con = 1;
while (con<7){
machine.say(con);
con += 1;
if (con == 7){break;}
}
// lineas verticales medio
con = 3;
while (con<29){
machine.say(con);
con += 6
if (con == 28){break;}
}
con = 4;
while (con<29){
machine.say(con);
con += 6
if (con == 29){break;}
}
}

// Letra X

if (a == "x"){
con = 1;
while ( con < 30){
machine.say(con);
con += 7;
if (con>29){break;}
}
con = 5;
while ( con < 30){
machine.say(con);
con += 5;
if (con>29){break;}
}
}



