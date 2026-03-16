/*Q1
✓ Fetch all documents from comments collection.
✓ Fetch only one user from comments collection by 
_id = ObjectId(“5a9427648b0beebeb69579f5”).
❏ Fetch only one user from comments collection by 
email = “john_bishop@fakegmail.com”.
❏ Fetch only one user from comments collection by 
name = “John Bishop”

db.collection.find(<query>, <projection>, <options>) find all documents in the collection that match the query criteria. The projection parameter specifies which fields to include or exclude in the returned documents, and the options parameter allows you to specify additional options for the query, such as sorting or limiting the number of results.
db.collection.findOne(<query>, <projection>, <options>) find one from all*/

use('sample_mflix');// the current database is sample_mflix to use ,start firstly to recieve the data from the database parameter

db.comments.find({}) //.find :find all documents in the collection that match the query criteria

/*-----------------------------------------------------------*/

db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") })
// find target id in the collection

/*-----------------------------------------------------------*/

db.comments.findOne({ email: "john_bishop@fakegmail.com" })
// find target email in the collection