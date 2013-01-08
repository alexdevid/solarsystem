var E;
var C;
var M;
E = M*(C*C);
var darkMatter;
var darkEnergy;
var gravity;
var time;
//скорость расширения вселеной
//зависит от darkEnergy
//никто не знает как они связаны правда.
var expandSpeed;

function bigBang() {
	this.timeStart();
	this.coords = new Vector3();
}

function Universe() {
    this.center = 0;
    this.radius = 0;
};

function Star() {
	this.class = null;
	this.radius = 0;
	this.mass = 0;
	this.supernova = function(m) {
		var neutrino;
		//neutrino gives energy for supernova explosion
		if ( m > Earth.mass*8 )
			neutronStar.birth();
	}
}


//neutroStar
//if speed >>>> pulsar


function neutronStar(m) {
	this.m = 0;
	this.birth = function(m) {
		if ( m > Earth.mass*30 )
			margintar.birth();
		//узнать изза чего скорость вращения зависит
		//pulsar.birth();
		
		if ( m > sol.mass*100 )
			hypernova.birth();
	}
}

function magnitar() {
	this.ferrumGravity;
}

function hypernova() {
	this.gammaImpulses;
	this.birth() = function() {
		//blackHole starts here;
	}
}

function blackHole() {
	this.dieAll;
}