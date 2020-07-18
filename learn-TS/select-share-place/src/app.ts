import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const googleAPI = process.env.GOOGLE_API_KEY;

type GoogleGeocodingResponse = {
	results: {
		geometry: {
			location: {
				lat: number;
				lng: number;
			};
		};
	}[];
	status: "OK" | "ZERO_RESULTS";
};

const searchAddressHandler = (e: Event) => {
	e.preventDefault();

	const enteredAddress = addressInput.value;

	// Send this to Google's API
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
		enteredAddress
	)}&key=${googleAPI}`;

	axios
		.get<GoogleGeocodingResponse>(url)
		.then((resp) => {
			if (resp.data.status !== "OK") {
				throw new Error("Could not fetch location!");
			}
			const coordinates = resp.data.results[0].geometry.location;

			const map = new google.maps.Map(document.getElementById("map")!, {
				center: coordinates,
				zoom: 14,
			});

			new google.maps.Marker({
				position: coordinates,
				map: map,
			});
		})
		.catch((err) => {
			alert(err.message);
			console.log(err);
		});
};

form.addEventListener("submit", searchAddressHandler);
// console.log(googleAPI);
