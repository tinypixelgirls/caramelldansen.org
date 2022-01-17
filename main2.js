var aka = 0;
var kyo = 0;


function akaClick(number){
    aka = aka + number;
	document.getElementById("aka").innerHTML = aka; 
};


function buykyo(){
    var kyoCost = Math.floor(10 * Math.pow(1.1,kyo));     //works out the cost of this cursor
    if(aka >= kyoCost){                                   //checks that the player can afford the cursor
        kyo = kyo + 1;                                   //increases number of kyo
    	aka = aka - kyoCost;                          //removes the aka spent
        document.getElementById('kyo').innerHTML = kyo;  //updates the number of kyo for the user
        document.getElementById('aka').innerHTML = aka;  //updates the number of aka for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,kyo));       //works out the cost of the next cursor
    document.getElementById('kyoCost').innerHTML = nextCost;  //updates the cursor cost for the user
};