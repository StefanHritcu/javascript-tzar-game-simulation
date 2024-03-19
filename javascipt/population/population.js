let population = parseInt(document.getElementById("population-value").textContent)
let wood = parseInt(document.getElementById("wood-value").textContent)

document.getElementById("build-home").addEventListener("click", function() {
    population += 10
    wood -= 5
    document.getElementById("population-value").textContent = population;
    document.getElementById("wood-value").textContent = wood
})