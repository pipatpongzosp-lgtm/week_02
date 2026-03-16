/*What is an example of  type “movie” and rated “TV-G” look like?*/
use('sample_mflix');
//db.movies.findOne({ type: "movie", rated: "TV-G" })
db.movies.find({ type: "movie", rated: "TV-G" })
db.movies.count({ type: "movie", rated: "TV-G" }) 
/*db.movies.aggregate([
    { $match: { type: "movie", rated: "TV-G" } }
])*/


/*How many movies are there in “movie” type and “TV-G” rated?*/
//db.movies.find({ rated: "TV-G", type: "movie" }).count()