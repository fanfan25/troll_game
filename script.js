//Troll Game Project 8/23/2021


//Definition of the trollBattle() function which run the game
function trollBattle() {
	// initial prompt for the user which gets stores in a variable
	let action = window.prompt("You're walking trough the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

	//Switch statement to handle the player's initial choice

	switch(action){
		case "FIGHT": {
			let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
			let strong = window.prompt("Are you stronger than the troll? (YES or NO)").toUpperCase();
			//If statement that analyzes the user response
			if(skill === "YES" || strong === "YES"){
				// the user responded "YES" to at least one of the prompts
				//write the winning result
				document.getElementById("result").innerHTML = "You can be eiter stronger or more skilled than the troll to survive!<br/>You live another day!";
				//clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				//play the winning audio file
				document.getElementById("win").play();
			} else {
				//user answered NO to both prompts
				//write the negative result to the document
				document.getElementById("death").innerHTML = "You are not skilled or strong? why did you fight the troll?<br/>You have died!";
				//clear any positive messages from the document
				document.getElementById("result").innerHTML = "";
				//play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		}
		case "RUN": {
			let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			if(fast === "YES"){
				//write the positive result to the document
				document.getElementById("result").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?";
				//clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				//play the winning audio file
				document.getElementById("win").play();
			}else {
				//write the negative result to the document
				document.getElementById("death").innerHTML = "You coward! If you going to run at least be fast!<br/>You have died!";
				//clear the positive result from the document
				document.getElementById("result").innerHTML = "";
				//play the losing file
				document.getElementById("lose").play();
			}
			break;

		}//end case "RUN"
		case "BRIBE": {
			let money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();
			if(money === "YES"){
				let amount = window.prompt("How much money do you have?\nPlease enter a numeric VALUE");
				//convert string to an interger
				amount = parseInt(amount);
				if(amount > 50){
					//write the positive result to the document
					document.getElementById("result").innerHTML = "Great job! The troll is hoppy.<br/>You may pass!";
					//clear any losing messages from the document
					document.getElementById("death").innerHTML = "";
					//play the winning audio file
					document.getElementById("win").play();
				}else {
					//write the negative result to the document
					document.getElementById("death").innerHTML = "The troll needs more money than that to let you pass!<br>You have died...";
					//clear the positive result from the document
					document.getElementById("result").innerHTML = "";
					//play the losing file
					document.getElementById("lose").play();
				}

			}else{
				//user said no to having money
				//write the negative result to the document
				document.getElementById("death").innerHTML = "What were you planning on bribing the troll with?<br/>You have died...";
				//clear the positive result from the document
				document.getElementById("result").innerHTML = "";
				//play the losing file
				document.getElementById("lose").play();
			}
			break;

		}
		default: {
			//the user has not entered a valid choice to the original prompt
			window.alert("You entered: " + action + ". That is not a valid choice, please try again!");
			//run trollBattle() function again
			trollBattle();
			break;
		}
	} //end of witch
} // end of trollBattle function
