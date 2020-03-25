var diameter = 5;
var padbreedte = 25;
var dikte = 15;
var begin = 414;
var colorCodes = {
    "divers": "#3B9FE2",
    "koel": "lightblue",
    "vries": "darkblue", 
    "brood": "purple",
    "actie": "#FF7900"
}

var mark;

function yReturn(q, n) {
    return n*(dikte*q + padbreedte) + begin
}

class Pad {
    constructor(x, y, width, height, meters, type, padNumber, rotate, double, padWidth) {
        this.x = x+10;
        this.y = y+10;
        this.meters = meters;
        this.type = type;
        this.padNumber = padNumber;
        this.rotate = rotate;
        this.double = double;
        this.padWidth = padWidth;
    

        if(rotate == false) {
            this.width = width;
            this.height = height;
        } else {
            this.height = width;
            this.width = height;
        }

        if(double) {
            this.oneMeters = this.meters / 2
        }
    }

    draw(ctx) {
        ctx.fillStyle = colorCodes[this.type];
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.beginPath();
        ctx.strokeStyle = "#f2f2f2";
        ctx.lineWidth = 0.3;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.lineTo(this.x, this.y);

        var distance = this.double ? this.oneMeters : this.meters;
        if(this.rotate) {
            var interval = this.double ? this.height / this.oneMeters : this.height / this.meters;
            for(let i = 1; i < distance; i++) {
                ctx.moveTo(this.x, this.y+(interval*i))
                ctx.lineTo(this.x+this.width, this.y+(interval*i))
            }
        }
        else {
            var interval = this.double ? this.width / this.oneMeters : this.width / this.meters;
            for(let i = 1; i < distance; i++) {
                ctx.moveTo(this.x+(interval*i), this.y)
                ctx.lineTo(this.x+(interval*i), this.y+this.height)
            }
        }

        if(this.double) {
            var x = this.x + this.width + this.padWidth;
            var y = this.y + this.height + this.padWidth;

            if(this.rotate) {
                var interval = this.height / this.oneMeters;
                ctx.fillRect(x, this.y, this.width, this.height);
                ctx.moveTo(x, this.y);
                ctx.lineTo(x + this.width, this.y);
                ctx.lineTo(x + this.width, this.y + this.height);
                ctx.lineTo(x, this.y + this.height);
                ctx.lineTo(x, this.y);
                for(let i = 1; i < this.oneMeters; i++) {
                    ctx.moveTo(x, this.y+(interval*i))
                    ctx.lineTo(x+this.width, this.y+(interval*i))
                }
            }
            else{
                var interval = this.width / this.oneMeters;
                ctx.fillRect(this.x, y, this.width, this.height);
                ctx.moveTo(this.x, y);
                ctx.lineTo(this.x + this.width, y);
                ctx.lineTo(this.x + this.width, y + this.height);
                ctx.lineTo(this.x, y + this.height);
                ctx.lineTo(this.x, y);
                for(let i = 1; i < this.oneMeters; i++) {
                    ctx.moveTo(this.x+(interval*i), y)
                    ctx.lineTo(this.x+(interval*i), y+this.height)
                }
            }
        } 
        ctx.stroke();

    }

    getMeterCoord(m) {
        if(this.rotate) {
            if(this.double) {

            } else {
                var interval =  this.height / this.meters;
                var x = this.x + (this.width * 0.5);
                var y = this.y + (interval * m) - (0.5 * interval);
            }

        } else {
            if(this.double) {
                var interval = this.width / this.oneMeters;
                if(m > this.oneMeters) {
                    console.log(interval)
                    var y = this.y + this.padWidth + (1.5 * this.height);
                    var x = this.x + this.width - ((interval * (m-this.oneMeters)) - (0.5 * interval));
                }
                else {
                    var y = this.y + (0.5 * this.height);
                    var x = this.x + ((interval * m) - (0.5 * interval));
                }
                return [x, y];

            } else {
                var interval = this.width / this.meters;
                var x = this.x + ((interval * m) - (0.5 * interval));
                var y = this.y + (0.5 * this.height);
                return [x, y];
            }
        }
    }
}

var area = {
    container: document.getElementById("plane"),
    canvas: document.createElement("canvas"),
    
    outside: [[0,0],
    [0,800],
    [500,800],
    [500,0],
    [0,0]],
    plan: [
        new Pad(50, begin, 150, dikte, 10, "divers", 3, false, true, padbreedte),
        new Pad(50, yReturn(2, 1), 150, dikte, 16, "actie", 4, false, true, padbreedte),
        new Pad(50, yReturn(2, 2), 150, dikte, 10, "divers", 5, false, true, padbreedte),
        new Pad(50, yReturn(2, 3), 150, dikte, 10, "divers", 6, false, true, padbreedte),
        new Pad(50, yReturn(2, 4), 150, dikte, 18, "divers", 7, false, true, padbreedte),
        new Pad(50, yReturn(2, 5), 150, dikte, 10, "divers", 8, false, true, padbreedte),
        new Pad(50, yReturn(2, 6), 150, dikte, 10, "divers", 9, false, true, padbreedte),

        new Pad(275, begin, 150, dikte, 10, "divers", 16, false, true, padbreedte),
        new Pad(275, yReturn(2, 1), 150, dikte, 10, "divers", 15, false, true, padbreedte),
        new Pad(275, yReturn(2, 2), 150, dikte, 10, "divers", 14, false, true, padbreedte),
        new Pad(275, yReturn(2, 3), 150, dikte, 16, "divers", 13, false, true, padbreedte),
        new Pad(275, yReturn(2, 4), 150, dikte, 10, "divers", 12, false, true, padbreedte),
        new Pad(275, yReturn(2, 5), 150, dikte, 10, "divers", 11, false, true, padbreedte),
        new Pad(275, yReturn(2, 6), 150, dikte, 10, "actie", 10, false, true, padbreedte),
    ],

    start: function() {
        var xMax = [];
        var yMax = [];
        for(var i of this.outside) {
            xMax.push(i[0]);
            yMax.push(i[1]);
        }
        console.log(Math.max.apply(null, xMax))
        this.canvas.width = Math.max.apply(null, xMax) + 20;
        this.canvas.height = Math.max.apply(null, yMax) + 20;
        this.canvas.style.backgroundColor = "white";
        this.context = this.canvas.getContext("2d");

        this.container.appendChild(this.canvas);
        this.interval = setInterval(update, 20);
        this.base();
    },
    clear: function() {
        this.context.clearRect(0,0, this.canvas.width,this.canvas.height)
    },

    base: function() {
        ctx = this.context;
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.moveTo(this.outside[0][0]+10,this.outside[0][1]+10);
        for(const coords of this.outside) {
            ctx.lineTo(coords[0]+10, coords[1]+10);
        }
        ctx.stroke();

        for(pad of this.plan) {
            pad.draw(this.context)
        }
    },
}

function dot(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 0;

    this.update = function(){
        this.diameter += 0.4
        if(this.diameter > 15) {
            this.diameter = diameter;
        } 
        ctx = area.context;
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.diameter, 0, 2 * Math.PI, false);
        ctx.fill();
        
    }
}

function findClass(pad) {
    for(classer of area.plan) {
        if(classer.padNumber == pad) {
            return classer
        }
    }
}

function update() {
    area.clear();
    area.base();
    mark.update();
}

function setup() {
    mark = new dot(10, 120);
    area.start();
    currentClass = findClass(groch[index].location[0]).getMeterCoord(groch[index].location[1])
    mark.x = currentClass[0];
    mark.y = currentClass[1];
}