// First Part:

const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;


// Second Part:

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


// Third Part

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Buenos Aires Argentina",
		location: "Buenos Aires, Argentina",
		dedicated: "1986, January, 17",
		area: 30659,
		imageUrl: 
		"https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
	},
	{
		templeName: "Rome Italy",
		location: "Rome, Italy",
		dedicated: "2019, March, 10",
		area: 41010,
		imageUrl: 
		"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
	},
	{
		templeName: "Montevideo Uruguay",
		location: "Montevideo, Uruguay",
		dedicated: "2001, March, 18",
		area: 10700,
		imageUrl: 
		"https://churchofjesuschristtemples.org/assets/img/temples/montevideo-uruguay-temple/montevideo-uruguay-temple-18474-main.jpg"
	}
];


function createTempleCard(templesList) {

	templesList.forEach(temple => {

		let card = document.createElement("section");
		let name = document.createElement("h2");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");

		name.innerHTML = temple.templeName;
		location.innerHTML = temple.location;
		dedication.innerHTML = temple.dedicated;
		area.innerHTML = temple.area;
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple.`);
		image.setAttribute("width", "400");
		image.setAttribute("height", "250");
		image.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(image);

		document.querySelector("#temples-container").appendChild(card);

	})

}

const mainTitle = document.querySelector("#title");
mainTitle.innerHTML = "Temples Album!"
createTempleCard(temples);

const home = document.querySelector("#home");

home.addEventListener("click", () => {

	const mainTitle = document.querySelector("#title");
	mainTitle.innerHTML = "Home";

	const templesContainer = document.querySelector("#temples-container");
	templesContainer.innerHTML = "";

	createTempleCard(temples)
})


const oldTemples = document.querySelector("#oldTemples");

oldTemples.addEventListener("click", () => {

	const mainTitle = document.querySelector("#title");
	mainTitle.innerHTML = "Old Temples";


	const templesContainer = document.querySelector("#temples-container");
	templesContainer.innerHTML = "";

	const oldTemplesList = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0]);
		return year < 1900;
	});

	createTempleCard(oldTemplesList);
});


const newTemples = document.querySelector("#newTemples");

newTemples.addEventListener("click", () => {

	const mainTitle = document.querySelector("#title");
	mainTitle.innerHTML = "New Temples";

	const templesContainer = document.querySelector("#temples-container");
	templesContainer.innerHTML = "";

	const newTemplesList = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0]);
		return year > 2000;
	})
	createTempleCard(newTemplesList)
})


const largeTemples = document.querySelector("#largeTemples");

largeTemples.addEventListener("click", () => {

	const mainTitle = document.querySelector("#title");
	mainTitle.innerHTML = "Large Temples";

	const templesContainer = document.querySelector("#temples-container");
	templesContainer.innerHTML = "";

	const largeTemplesList = temples.filter (temple => {
		const area = parseInt(temple.area);
		return area > 90000;
	})
	createTempleCard(largeTemplesList);
})


const smallTemples = document.querySelector("#smallTemples");

smallTemples.addEventListener("click", () => {

	const mainTitle = document.querySelector("#title");
	mainTitle.innerHTML = "Small Temples";

	const templesContainer = document.querySelector("#temples-container");
	templesContainer.innerHTML = "";

	const smallTemplesList = temples.filter(temple => {
		const area = (temple.area);
		return area < 10000;
	})
	createTempleCard(smallTemplesList);
})