"use strict";

var Legos = (function(originalLegos){

	let legoItems = [];

	let parseData = function(data){
		data.LegoColorss.forEach( (element) => {
			legoItems.push(element);
		});
	} 

	originalLegos.loadLegos = () => {
		return new Promise( (resolve, reject) => {
			let request = new XMLHttpRequest();
			request.onload = function(){
				if (request.status === 200){
					var data = JSON.parse(request.responseText);
					parseData(data);
					resolve(legoItems);
				} else {
					//something went wrong
					reject(new Error("XMLHttpRequest Error ", request.statusText));
				}
			};
			request.open("GET", "lego-colors.json");
			request.send();
		})
	}


	return originalLegos;

})(Legos || {});