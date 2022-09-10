/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const calculate = () => {
  const kg = document.querySelector("#search").value;

  const lbs = parseInt(kg) * 2.2046;
  const grams = parseInt(kg) * 1000;
  const oz = parseInt(kg) * 35.274;

  document.querySelector(".lb").innerHTML = `Svarai: ${lbs}`;
  document.querySelector(".g").innerHTML = `Gramai: ${grams}`;
  document.querySelector(".oz").innerHTML = `Unicijos: ${oz}`;

  document.querySelector("#output").style.display = "block";

  console.log({ lb: lbs, g: grams, oz: oz });
}