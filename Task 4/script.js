/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const getModels = async () => {
    const getResult = await fetch(ENDPOINT);
    const response = await getResult.json();
    const output = document.querySelector("#output");

    response.forEach((e, i) => {
        output.innerHTML += `
            <div class="model_car">
                <h1>Brand: ${e.brand}</h1>
            </div> 
        `;

        e.models.forEach(el => output.innerHTML += `<p>${el}</p>`);
    });
    

    console.log(response);
}

getModels();