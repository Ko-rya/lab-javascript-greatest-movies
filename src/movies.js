// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(element => {
        return element.director
    });
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let StevenMovies = moviesArray.filter(element => {
        return element.director === "Steven Spielberg" && element.genre.includes("Drama");
    });
    return StevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0)
    return 0
    else {let scoreSum = moviesArray.reduce((total, element) => {
        if(element.score)
        return total + element.score;
        else return total
    }, 0);
    return parseFloat((scoreSum / moviesArray.length).toFixed(2));}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(element => {
        return element.genre.includes("Drama");
    });
    if (dramaMovies.length === 0)
    return 0
    else {let scoreSum = dramaMovies.reduce((total, element) => {
        if(element.score)
        return total + element.score;
        else return total
    }, 0);
    return parseFloat((scoreSum / dramaMovies.length).toFixed(2));}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray];
    newArray.sort((a,b) => {
        if (a.year !== b.year)
        return a.year-b.year
        else 
        return a.title.localeCompare(b.title)
    })
    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titles = moviesArray.map(movie => movie.title);
    titles.sort()
    let first20 = titles.slice(0, 20);

    console.log(first20)
    return first20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray =[]
    let time = moviesArray.map(element => {
        for (let i =0; i<element.duration.length; i++){
            if (!isNaN(parseInt(element.duration[i]))){
                newArray.push(element.duration[i])
            }
        }
        if (newArray[1]){
            element.duration = newArray[0]*60+parseInt(newArray[1].toString() + newArray[2].toString())
        }
        else
        element.duration = newArray[0]*60
        return element.duration
    });
    let newArray2 = [...moviesArray];
    newArray2.duration = time
    return newArray2 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
   
  }
