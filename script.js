var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);

  //   a.Get all the countries from the Asia continent /region using the Filter function

  var asianCountries = result.filter((ele) => ele.region === "Asia");

  //   b.Get all the countries with a population of less than 2 lakhs using Filter function

  var populationLess = result.filter((ele) => ele.population < 200000);

  //   c.Print the following details name, capital, flag using forEach function

  result.forEach((element) => {
    console.log(element.name.common, element.capital?.[0], element.flags.png);
  });
  //   d.Print the total population of countries using reduce function
  var totalPop = result.reduce((acc, cv) => acc + cv.population, 0);

  // e.Print the country which uses US Dollars as currency.
  var currency = result
    .filter((ele) => {
      for (var key in ele?.currencies) {
        if (ele?.currencies[key]["name"] === "United States dollar")
          return true;
      }
    })
    .map((ele) => ele.name.common);
  console.log(currency);

  console.log(asianCountries, populationLess, totalPop);
};
