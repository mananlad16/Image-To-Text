const token = "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"
const inputTxt = document.getElementById("input") 
const image = document.getElementById("image") 
const button = document.getElementById("btn")

async function query() {
	image.src = "Loading-2.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
		{
			headers: { Authorization: `Bearer ${token}` },
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click', async function () {
    query().then((response) => {
        const objectURL = URL.createObjectURL(response)
        image.src = objectURL
    });

	var heightInput = document.getElementById("height");
	var widthInput = document.getElementById("width");
	var image = document.querySelector("#image-container img");

	var newHeight = heightInput.value + "px";
	var newWidth = widthInput.value + "px";

	image.style.height = newHeight;
	image.style.width = newWidth;
})
