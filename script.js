//your JS code here. If required.
	const status = document.createElement("p");
	status.id = "status";
	status.textContent = "Enter the Metaverse";
	
	const button = document.createElement("button");
	button.id = "enterBtn";
	button.textContent = "Enter";

document.body.appendChild(status);
document.body.appendChild(button);

button.addEventListener("click",()=>{
	status.innerHTML = "<h1>Entered Metaverse</h1>";
})