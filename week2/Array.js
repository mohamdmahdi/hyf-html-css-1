let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

let index = favoriteAnimals.indexOf("capricorn");
console.log(index);

let newfavoriteAnimals = favoriteAnimals.slice(0,index);
newfavoriteAnimals.push("meerkat");
console.log(newfavoriteAnimals);
for (let i=0; i <= favoriteAnimals.indexOf("capricorn") ;i++ )
{
  favoriteAnimals.shift();
}
console.log(favoriteAnimals);
console.log(favoriteAnimals =newfavoriteAnimals.concat(favoriteAnimals));
console.log('The length of this area is '+ favoriteAnimals.length );

favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);