const inputURLS = [
	"https://domain.com/api/v1",
	"https://domain.com/api/v1",
	"https://domain.com/api/v1",
	"https://domain.com/api/v1",
	"https://domain.com/api/v1",
];

function fetchData(url) {
	var p = [];
	p.push(Promise.reject(0));
	p.push(new Promise((resolve) => setTimeout(resolve, 150, { data: 'midium' })));
	p.push(new Promise((resolve) => setTimeout(resolve, 100, { data: 'quick' })));
	p.push(new Promise((resolve) => setTimeout(resolve, 500, { data: 'slow' })));

	return p;
}

function getTemperature(urls, timeout) {
	var temperature = "";
	var hasFetched = false;

	setTimeout(() => {
		if (!hasFetched) {
			throw Error("Timeout exceeded");
		}
	}, timeout);

	var promises = [];

	for (let url of urls) {
		var p = fetchData(url);
		promises = promises.concat(p);
	}

	return Promise.any(promises).then(response => {
		temperature = response.data;
		hasFetched = true;

		if (!temperature) {
			throw Error("Bad request")
		}

		return { data: temperature };
	}).catch(error => {
		throw Error("Bad promise")
	})
}

getTemperature(inputURLS, 700).then(d => console.log(d));