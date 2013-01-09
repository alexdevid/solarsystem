function Fundamentals() {
    this.EARTH_R = 17000;
    this.SUN_R = 0;
    this.E;
    this.C = 1000;
}
Fundamentals.prototype = {

    };

function bigBang() {
    this.starttime = 0;
    
    
    this.radius = 0;         //радиус вселенной, до взрыва равен нулю
    this.gravity = 1;        //гравитация
    this.k = 0.01;           //коэффициент расширения вселенной. //TODO должен расти в прогрессии
    //this.T = this.m*this.v;
    //TODO - температура вселенной
    this.E;                  //кол-во чистой энергии образовавшейся при взрыве
    //масса вселенной
    this.m = this.E/Fundamentals.C*Fundamentals.C;
    this.v;                  //TODO объем вселенной
    
    this._subAtomsR = 1;     //радиус при котором образуются субатомные частицы
    this._subAtomsInit;
	
};
bigBang.prototype = {
    bang: function() {
        this.gravity = 1;             
        this.radius += this.k;		//расширение 
        if ( this.radius > this._subAtomsR )
            this._subAtomsInit();
    },
    _subAtomsInit: function() {
        for ( var i = 0; i <= this.v; i++ ) {
            //TODO
            random = Math.random() * max;
            subAtom = new radialObject(Math.random(), 10, 'i/starsbg.png', 0.001, 1);
            subAtom.radius = 1;
            subAtom.speed = Math.PI/10;
            subAtom.k = 0.4;
            scene.add(subAtom); 
        }
    }
};