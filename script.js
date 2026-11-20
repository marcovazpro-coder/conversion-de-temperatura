function convertirTemperatura() {

    // Obtener el dato y convertirlo a Number
    let celsius = Number(document.getElementById("celsius").value);

    // Validar el dato
    if (document.getElementById("celsius").value === "") {
        alert("Introduce una temperatura");
        return;
    }

    // Conversiones
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;
    let rankine = (celsius + 273.15) * 9 / 5;

    // Mostrar resultados
    document.getElementById("resultadoFahrenheit").innerHTML =
        "Fahrenheit: " + fahrenheit + " °F";

    document.getElementById("resultadoKelvin").innerHTML =
        "Kelvin: " + kelvin + " K";

    document.getElementById("resultadoRankine").innerHTML =
        "Rankine: " + rankine + " °R";
}