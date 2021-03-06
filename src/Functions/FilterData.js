var allData = [];

export const copyData = (data) => {
  allData = [];
  data.forEach((element) => {
    allData.push(element);
  });
};

export const MyFilter = (numberFamilly, generation) => {
  var filteredData = [];
  var valueCompare = numberFamilly.toString().slice(0, generation - 1);
  allData
    .filter(
      (person) =>
        person.numberFamilly.toString().slice(0, generation - 1) ===
          valueCompare && person.numberFamilly < valueCompare * 10 + 10
    )
    .map((person) => {
      return filteredData.push(person);
    });
  return filteredData;
};

export const FindOnePerson = (numberFamilly) => {
  var filteredData = [];
  allData
    .filter((person) => person.numberFamilly === numberFamilly)
    .map((person) => {
      return filteredData.push(person);
    });
  return filteredData[0];
};

export const DataInOptions = () => {
  var options = [];
  allData
    .filter((person) => person.generation !== "4")
    .map((element) => {
      return options.push({
        value: element.generation + "/" + element.numberFamilly,
        label: element.firstName + " " + element.lastName,
      });
    });
  return options;
};

export const AllDataInOptions = () => {
  var options = [];
  allData.map((element) => {
    return options.push({
      value: element.generation + "/" + element.numberFamilly,
      label: element.firstName + " " + element.lastName,
    });
  });
  return options;
};

function trieArray(a, b) {
  let anneeA = a.birthDate.split("/")[2];
  let anneeB = b.birthDate.split("/")[2];
  let moisA = a.birthDate.split("/")[1];
  let moisB = b.birthDate.split("/")[1];
  let jourA = a.birthDate.split("/")[0];
  let jourB = b.birthDate.split("/")[0];
  if (anneeA !== anneeB) {
    return anneeA > anneeB ? 1 : -1;
  }
  if (moisA !== moisB) {
    return moisA > moisB ? 1 : -1;
  }
  if (jourA !== jourB) {
    return jourA > jourB ? 1 : -1;
  }
  return 0;
}

function trieArrayByBirthdate(a, b) {
  if (a.birthDate !== b.birthDate) {
    return a.birthDate > b.birthDate ? 1 : -1;
  }
  return 0;
}

export const MoisPersons = () => {
  let data = [];
  const now = new Date();
  let moisAnnee =
    now.getMonth() + 1 < 10
      ? "0" + (now.getMonth() + 1).toString()
      : (now.getMonth() + 1).toString();
  allData.forEach((element) => {
    if (element.birthDate.split("/")[1] === moisAnnee) {
      data.push(element);
    }
  });
  data.sort(trieArrayByBirthdate);
  return data;
};

export const FilterByGeneration = (e) => {
  let data = [];
  allData.forEach((element) => {
    if (element.generation === e) {
      data.push(element);
    }
  });
  data.sort(trieArray);
  return data;
};

//fonction qui permet d'obtenir un nombre al??atoire entre 0 et max
/*function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}*/

export const RandomizeArray = () => {
  let data = [];
  data = randomize(allData);
  return data;
};

//Cette fonction permet de m??langer les donn??es dans un tableau
function randomize(tab) {
  var i, j, tmp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}
