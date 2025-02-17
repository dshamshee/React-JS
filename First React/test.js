let a = 10 
let b = 20
let c = 0

if(++a || ++b) 
    console.log("first log",a, b); // a = 10, b = 20

if(c++ && ++a) 
    console.log("second log", a, c); // c =0, a = 11 
else console.log("second log", a, c)