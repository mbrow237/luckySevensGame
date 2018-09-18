function validateNumber(){
	var startingBetString = document.forms["gameForm"]["startingBet"].value;//Gathers startingBet from html. It returns a string
	var startingBet = Number(startingBetString);//converts the string into an int
	if (startingBet == "" || isNaN(startingBet))
	{
		alert("Please enter a number for your starting bet!");
		document.forms["gameForm"]["startingBet"].focus();
		document.forms["gameForm"]["startingBet"].value = "";
		return false;
	}
	
	if (startingBet <= 0)
	{
		alert("Please enter a number higher than 0!");
		document.forms["gameForm"]["startingBet"].focus();
		document.forms["gameForm"]["startingBet"].value = "";
		return false;
	}
	return gameRun(startingBet);
}


function gameRun(startingBet){
	var money = startingBet;
	var turnCounter = 0; //keep track of how many turns it took until broke
	var highestMoney = money; //keep track of highest amount of money earned
	var highestMoneyTurn = 0;//keep track of turns when you had the most money
	do{
		if(dieRoll())
		{
			money += 4;
		}
		else
		{
			money -= 1;
		}
		turnCounter++;
		
		if(money >= highestMoney)
		{
			highestMoney = money;
			highestMoneyTurn = turnCounter;
		}
	} while (money > 0);
	document.getElementById("gameTable").style.display = "block";
	document.getElementById("tableStartingBet").innerText = startingBet;
	document.getElementById("tableTurns").innerText = turnCounter;
	document.getElementById("tableMaxMoney").innerText = highestMoney;
	document.getElementById("tableMaxTurns").innerText = highestMoneyTurn;
	return false;
}


function dieRoll(){
	var ranNumOne = Math.floor(Math.random() * 6) + 1;
	var ranNumTwo = Math.floor(Math.random() * 6) + 1;
	
	if(ranNumOne + ranNumTwo == 7)
	{
		return true; //return true if game is won
	}else{
		return false;
	}
}