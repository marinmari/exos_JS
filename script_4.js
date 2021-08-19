function startupNation() {
  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Les entrepreneurs des années 1970 :");
  const numberOfEntrepreneurs = entrepreneurs.length;
  const firstAndLastArray = [];
  const ageOfRichestGuys = [];

  //fonction qui récupère les entrepreneurs nés dans les années 70
  for(i = 0; i < numberOfEntrepreneurs; i++) {
    if(entrepreneurs[i].year > 1969 && entrepreneurs[i].year < 1980) {
      console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last);
    };
  };
 
  // fonction qui ressort tous les prénoms / noms dans un array
  console.log(entrepreneurs);
  for(i = 0; i < numberOfEntrepreneurs; i++) {
    firstAndLastArray.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
  }
  console.log(firstAndLastArray);
  
  //age des entrepreneurs
  for(i = 0; i < numberOfEntrepreneurs; i++) {
    let age = 2021 - entrepreneurs[i].year;
    console.log(typeof age);
    console.log(age)
    ageOfRichestGuys.push(entrepreneurs[i].first + " " + entrepreneurs[i].last + " " + age + "ans");
  }
  console.log(ageOfRichestGuys);

  //trier par ordre alphabétique les noms 
  console.log(entrepreneurs.sort((a, b) => (a.last > b.last)))

};
startupNation();

