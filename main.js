//SUMA
let x = 18;
let y = 8;
let res = 0;

let sel = document.querySelectorAll("em");
sel[0].insertAdjacentText("beforeend", x);
sel[1].insertAdjacentText("beforeend", y);
sel[2].insertAdjacentText("beforeend", res);

// Significado suma
res = x + y;
document.body.insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado suma</b>
    </div>
    <hr>
    <div>
        <em>res = x + y;</em>
        <br>
        <mark>res</mark> : <em>${res}</em>
    </div>
`);

// Abreviado suma 
x += y;
document.body.insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado suma</b>
    </div>
    <hr>
    <div>
        <em>x += y;</em>
        <br>
        <mark>x</mark> : <em>${x}</em>
    </div>
`);



//RESTA
let h = 17;
let j = 8;
let resp = 0;

let selp = document.querySelectorAll("em");
selp[3].insertAdjacentText("beforeend", h);
selp[4].insertAdjacentText("beforeend", j);
selp[5].insertAdjacentText("beforeend", resp);

// Significado resta
resp = h - j;
document.body.insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado resta</b>
    </div>
    <hr>
    <div>
        <em>res = h - j;</em>
        <br>
        <mark>res</mark> : <em>${resp}</em>
    </div>
`);

// Abreviado resta 
h -= j;
document.body.insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado resta</b>
    </div>
    <hr>
    <div>
        <em>h -= j;</em>
        <br>
        <mark>h</mark> : <em>${h}</em>
    </div>
`);

// division
let o = 10;
let p = 5;
let respu = 0;

let selpu = document.querySelectorAll("em");
selpu[6].insertAdjacentText("beforeend", h);
selpu[7].insertAdjacentText("beforeend", j);
selpu[8].insertAdjacentText("beforeend", respu);

// Significado  division
respu = o / p;
document.body.insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado division</b>
    </div>
    <hr>
    <div>
        <em>respu = o / p;</em>
        <br>
        <mark>respu</mark> : <em>${respu}</em>
    </div>
`);

// Abreviado  division 
o /= p;
document.body.insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado division</b>
    </div>
    <hr>
    <div>
        <em>o /= p;</em>
        <br>
        <mark>respu</mark> : <em>${respu}</em>
    </div>
`);

// multiplicacion
let n = 15;
let m = 5;
let respuy = 0;

let selpuy = document.querySelectorAll("em");
selpuy[9].insertAdjacentText("beforeend", n);
selpuy[10].insertAdjacentText("beforeend", m);
selpuy[11].insertAdjacentText("beforeend", respuy);

// Significado  multiplicacion
respuy = n * m;
document.body.insertAdjacentHTML("beforeend", `
    <div>
        <b>Significado multiplicacion</b>
    </div>
    <hr>
    <div>
        <em>respu = n * m;</em>
        <br>
        <mark>respuy</mark> : <em>${respuy}</em>
    </div>
`);

// Abreviado  multiplicacion
n *= m;
document.body.insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <b>Abreviado multiplicacion</b>
    </div>
    <hr>
    <div>
        <em>n *= m;</em>
        <br>
        <mark>respuy</mark> : <em>${respuy}</em>
    </div>
`);
