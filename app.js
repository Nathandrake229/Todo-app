const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoapp',(err, client)=>{
	if(err){
		return console.log('unable to coo=nnect db');
	}
	console.log('connected to db');

	const db=client.db('todoap');
	db.collection('users').insertOne({
		text:'naman'
	},(err, result)=>{
		if(err){
			return console.log('unable');
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});