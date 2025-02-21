```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("65346543567")},{$inc:{counter: 1}})
```