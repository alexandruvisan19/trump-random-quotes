let quoteBtn = document.querySelector("#js-new-quote");
let quoteArea = document.querySelector("#js-quote-text");
let quoteSpinner = document.querySelector("#js-spinner");

async function getQuote() {
	quoteBtn.disabled = true;
	quoteSpinner.classList.remove("hidden");
	try {
		let data = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
		let response = await data.json();

		if (!data.ok) {
			throw Error("doesn't work");
		}

		function addQuote(quote) {
			quoteArea.textContent = quote;
		}
		addQuote(response.message);
	} catch (err) {
		console.log(err);
	} finally {
		quoteSpinner.classList.add("hidden");
		quoteBtn.disabled = false;
	}
}

quoteBtn.addEventListener("click", getQuote);
