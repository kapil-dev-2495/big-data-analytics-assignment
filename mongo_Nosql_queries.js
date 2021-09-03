
Q1. Write a MongoDB query to display the total number of movies in the collection movies.

A1. { $sortByCount:  IMDB[0:-1] }


R1. 1048600

---

Q2. find the top five Fantasy-Adventure movie titles (primaryTitle) released in 2021
according to the rating. 

A2.db.indicators.aggregate([
{ $lookup: {
  from: 'movies',
  as: 'Adventure','Fantasy',
  let: { indicator_id: '$_rating' },
  pipeline: [
    { $match: {
      $expr: { $eq: [ '$rating', '$$indicator_id' ] }
    } },
    
    { $limit: 5 }
  ]
} }
])}

---
Spider-Man: No Way Home (2021) 
The Suicide Squad (2021) 
The Green Knight (2021) 
Eternals (2021) 
The Witcher: Nightmare of the Wolf (2021) 
Shang-Chi and the Legend of the Ten Rings

Q3. Find the top five Fantasy-Adventure movie titles (primaryTitle) released in 2021
according to the number of votes. [Hint: Genre must include both Fantasy and 
Adventure.] 

A3   db.indicators.aggregate([
{ $lookup: {
  from: 'movies',
  as: 'Adventure', 'Fatasy'
  let: { indicator_id: '$_votes' },
  pipeline: [
    { $match: {
      $expr: { $eq: [ '$movies', '$$name' ] }
    } },
    { $limit: 5}
  ]
} }
])

---
  Spider-Man: No Way Home (2021)
  Suicide Squad(2021)
  The Green Knight (2021)
  The Eternals(2021)
  The Witcher: Nightmare of the Wolf (2021)




