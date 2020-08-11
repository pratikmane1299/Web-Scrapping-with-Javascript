const selectEl = document.querySelector('#states');
const infoEl = document.querySelector('#stateInfo');

let states = [];

selectEl.addEventListener('change', (e) => {
    // infoEl.innerHTML = `<pre>${JSON.stringify(states.find(state => state.vehicle_code === e.target.value), null, 4)}</pre>`;
    const state = states.find(state => state.vehicle_code === e.target.value);

    const stateNameEl = document.createElement('p');
    stateNameEl.textContent = `Name - ${state.name}`;

    const vehicleCodeEl = document.createElement('p');
    vehicleCodeEl.textContent = `State Code - ${state.vehicle_code}`;

    const zoneEl = document.createElement('p');
    zoneEl.textContent = `Zone - ${state.zone}`;

    const capitalCityEl = document.createElement('p');
    capitalCityEl.textContent = `Capital City - ${state.capital_city}`;

    const largestCityEl = document.createElement('p');
    largestCityEl.textContent = `Largest City - ${state.largest_city}`;

    const statehoodEl = document.createElement('p');
    statehoodEl.textContent = `Statehood - ${state.statehood}`;

    const populationEl = document.createElement('p');
    populationEl.textContent = `Population - ${state.population}`;

    const areaEl = document.createElement('p');
    areaEl.textContent = `Area - ${state.area}`;

    const nativeLanguagesEl = document.createElement('p');
    nativeLanguagesEl.textContent = `Languages Spoken - ${state.official_languages}`;

    infoEl.append(stateNameEl);
    infoEl.append(vehicleCodeEl);
    infoEl.append(zoneEl);
    infoEl.append(capitalCityEl);
    infoEl.append(largestCityEl);
    infoEl.append(populationEl);
    infoEl.append(areaEl);
    infoEl.append(nativeLanguagesEl);
});

getStates();



async function getStates() {
    const res = await fetch('/api/states');
    states = await res.json();

    states.forEach(state => {
        const optionEl = document.createElement('option');
        optionEl.textContent = state.name;
        optionEl.value = state.vehicle_code;
        selectEl.append(optionEl);

        optionEl.addEventListener('click', () => {
            console.log('clicked');
        });
    });
}