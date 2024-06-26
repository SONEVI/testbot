let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text="bold";
tg.MainButton.setText("italic");
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#FF0000";
//tg.MainButton.setParams = ({"color": "#FFD700"});


let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
	if (tg.MainButton.isVisible){
		tg.MainButton.hide()
	}
	else{
		tg.MainButton.show()
	}
});


let btnED = document.getElementById("btnED")
btnED.addEventListener('click', function(){
	if (tg.MainButton.isActive){
		tg.MainButton.setParams({"color": "#B22222"});
		tg.MainButton.disable();
		console.log("disable")
	}
	else{
		tg.MainButton.setParams({"color": "#F0E68C"});
		tg.MainButton.enable();
		console.log("enable");
	}
});


Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send");
});


let usercard = document.getElementById("usercard");

let profName = document.createElement('p');
profName.innerText = `$(tg.initDataUnsafe.user.first_name}
${tg.intiDataUnsafe.user.last_name}
$(tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
usercard.appendChild(profName);

let userid = document.createElement('p');
userid.innerText = `$(tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid);
