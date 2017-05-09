let greetingPromise = () => {
	new Promise( (resolve, reject) =>{
		setTimeout( () => {
			resolve("World");
		}, 3000);
	})
	.then((resolve) => {
		console.log(resolve, "today is a lovely day.");
	});
};

greetingPromise();
console.log("Hello");

// let colorPromise = Legos.loadLegos()
// .then(
// 	(resolve) => {
// 		let newItem = {LegoName: "Brenda's Pick", ColorHex: "a3a3d1", YearFrom:"2009", YearTo:"Present"};
// 		resolve.push(newItem);
// 		showItems(resolve);
// 	},
// 	(reject) => {
// 		console.log("OOPs", reject);
// 		//run some other code here
// 	});

// version 2 with additional .then ///////////////////////////////////
let colorPromise = Legos.loadLegos()
.then(
	(resolve) => {
		let newItem = {LegoName: "Brenda's Pick", ColorHex: "a3a3d1", YearFrom:"2009", YearTo:"Present"};
		resolve.push(newItem);
		showItems(resolve);

		// let taco = "YES";
		return taco;
	},
	(reject) => {
		console.log("OOPs", reject);
		//run some other code here
	}).then(
		(resolve) => {
			console.log("one for the road", resolve);
		},
		() => {
			console.log("there was an error somewhere");
		});








function showItems(stuff){
	console.log("showItems", stuff);
	// show the stuff
	let legoDisplay = document.getElementById("lego-display");

	stuff.forEach( (lego) => {
		let legoBlock = buildLego(lego);
		legoDisplay.innerHTML += legoBlock;
	});
}

let buildLego = (lego) => {
	let block = "",
	 	wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
	 	title = `<h3>Name: ${lego.LegoName}</h3>`,
	 	years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;
		// image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
		let link = lego.ColorstreamLinkImage;

		if (link){
			 block += `<a href="${link}">${wrapper + title + years}</section></a>`;
		}else{
			block += `${wrapper + title + years}</section>`;
		}
		
  	return block;
}



// FROM MDN
///////////////// promise all ////////////////////
// if any rejected, catch fires

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// }); 

// Promise.all([p1, p2, p3]).then( (values) => { 
//   console.log("resolve values:", values); // [3, 1337, "foo"] 
// });



///////////////// promise race ////////////////////
// triggers as soon as any promise is returned
// setTimeout(function, milliseconds, param1, param2, ...)

var p1 = new Promise((resolve, reject) => { 
  	setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  	setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 400, 'four');
});
var p5 = new Promise((resolve, reject) => {
	// setTimeout(resolve, 1000, 'five');
 	// try both ways
  	reject("I don't like peas");
});

Promise.race([p1, p2, p3, p4, p5])
.then( (winner) => { 
	console.log("race winner:", winner);
}, 
taco => {
	console.log("why i ask", taco);
});



	




