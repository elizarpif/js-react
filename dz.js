console.log("Нахождение минимального расстояния между точками")


class Point {

    constructor(x, y, s) {
        this.x = Number(x);
        this.y = Number(y);
        this.name = String(s);
    }

    getC(isX) {
        if (isX)
            return this.x;
        else
            return this.y;
    }

    getName() {
        return this.name;
    }
}
//dz.txt
const fs = require("fs");

let data = fs.readFileSync("dz.txt", "utf8")

//сортировка по иксу и по игреку, минимальное расстояние и сравнение

let masCoord = parse(data);



Px = masCoord.sort((a, b) => { return a.x > b.x });
Py = masCoord.sort((a, b) => { return a.y > b.y });

let isX = true;

function min_len(mas) {

    let middle = Math.round(mas.length / 2),
        dl, dr, delta;
    //нашли середину
    if (middle == 1 && mas.length > 1) {
        return Math.pow(mas[0].getC(isX) - mas[1].getC(isX), 2) +
            Math.pow(mas[0].getC(!isX) - mas[1].getC(!isX), 2);
    }
    if (mas.length - middle == 1) {
        dl = min_len(mas.slice(0, middle));
        dr = Math.pow(mas[1].getC(isX) - mas[2].getC(isX), 2) +
            Math.pow(mas[1].getC(!isX) - mas[2].getC(!isX), 2);

        return Math.min(dr, dl);
    }
    dr = min_len(mas.slice(middle, mas.length));
    dl = min_len(mas.slice(0, middle));
    delta = min_len(mas.slice(middle - 1, middle + 1));
    return Math.min(dl, dr, delta);

}
dl = min_len(Px);
isX = false;

dr = min_len(Py);

delta = Math.min(dl, dr);

console.log(delta);


function parse(data) {
    let values = data.replace(/\(/g, "-")
        .replace(/\)/g, "-").replace(/\,/g, "-").replace(/ /g, "-")
        .replace(/\-{2}/g, "-").replace(/\-$/, "").split("-");
    console.log(values)
    let points = [],
        i = 0;
    for (i; i < values.length - 1; i += 3) {
        points.push(new Point(values[i + 1], values[i + 2], values[i]))
    }

    return points;
}