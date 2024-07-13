import { Country } from '../domain/country.js';
import { CountryList } from '../domain/countrylist.js';
import { Matches } from '../domain/Matches.js';
import { MatchesList } from '../domain/matcheslist.js';

const btnAdd = document.getElementById('btn-add');
const inpName = document.getElementById('inp-name');
const inpCapital = document.getElementById('inp-capital');

const btnAddMatches = document.getElementById('btn-add-matches');
const inpCountry1 = document.getElementById('inp-Country1');
const inpCountry2 = document.getElementById('inp-Country2');
const inpScore = document.getElementById('inp-score');
const inpDate = document.getElementById('inp-date');

const mainCountryList = new CountryList();
const mainMatchesList = new MatchesList();

btnAdd.addEventListener('click', () => {
  const newCountry = new Country(inpName.value);
  const countriesErrorContainer = document.getElementById(
    'add-countries-error'
  );
  const countriesError = document.getElementById('add-countries-error-msg');

  newCountry.setCapital(inpCapital.value);
  try {
    mainCountryList.add(newCountry);
    clearInputs();
    countriesErrorContainer.classList.add('d-none');
    loadCountryList(newCountry);
    appendAlert(
      alertPlaceholder1,
      `${newCountry.getNombre()} agregado correctamente!`,
      'success'
    );
  } catch (error) {
    countriesErrorContainer.classList.remove('d-none');
    countriesError.innerText = error;
  }
});

function clearInputs() {
  inpName.value = '';
  inpCapital.value = '';
}

function loadCountryList(newCountry) {
  const countriesList = document.getElementById('countries-list');
  const countriesContainer = document.getElementById('countries');
  const emptyList = document.getElementById('empty-list');

  emptyList.classList.add('d-none');
  countriesContainer.classList.remove('d-none');
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerText = newCountry.toString();
  countriesList.appendChild(li);
}

inpCapital.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    btnAdd.click();
  }
});

const alertPlaceholder1 = document.getElementById('alerts-add-country');
const alertPlaceholder2 = document.getElementById('alerts-add-matches');

const appendAlert = (alertPlaceholder, message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible pe-4" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  alertPlaceholder.append(wrapper);
};

btnAddMatches.addEventListener('click', () => {
  const newMatch = new Matches(inpCountry1.value);
  const matchesErrorContainer = document.getElementById('add-matches-error');
  const matchesError = document.getElementById('add-matches-error-msg');

  newMatch.setCountry2(inpCountry2.value);
  newMatch.setScore(inpScore.value);
  newMatch.setDate(inpDate.value);

  try {
    if (newMatch.isValid()) {
      mainMatchesList.add(newMatch);
      clearInputs2();
      appendAlert(
        alertPlaceholder2,
        'Partido agregado correctamente!',
        'success'
      );
      loadMatchesList(newMatch);
    }
  } catch (error) {
    matchesErrorContainer.classList.remove('d-none');
    matchesError.innerText = error.message;
  }
});

function loadMatchesList(newMatch) {
  const matchesList = document.getElementById('matches-list');
  const emptyMatchesList = document.getElementById('empty-matches-list');

  emptyMatchesList.classList.add('d-none');

  let li = document.createElement('li');
  li.classList.add('list-group-item');
  let p1 = document.createElement('p');
  p1.textContent = `${newMatch.getCountry1()} ${newMatch.getScore()} ${newMatch.getCountry2()}`;

  let p2 = document.createElement('p');
  p2.textContent = `Fecha: ${newMatch.getDate()}`;

  li.appendChild(p1);
  li.appendChild(p2);
  matchesList.appendChild(li);
}

function clearInputs2() {
  inpCountry1.value = '';
  inpCountry2.value = '';
  inpScore.value = '';
  inpDate.value = '';
}
