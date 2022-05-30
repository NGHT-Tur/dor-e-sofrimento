class Contencao{
    constructor(x,y,l,a){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(x,y,l,a,config);
        this.lar = l;
        this.alt = a;
        World.add(world,this.corpo);
    }

    desenhar(){
        var pos = this.corpo.position;

        push();
        fill("white");
        stroke("Gainsboro");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.lar, this.alt);
        pop();
    }
}