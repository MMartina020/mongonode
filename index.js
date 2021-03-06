const mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect( url , (err, client) => {
    if(err){
        console.log(err);
        throw err;
    }

    console.log(`MongoDB csatlakoztatva: ${url}`);
    //Innentől dolgozhatunk:
    const dbName=client.db("allatok");
    const collection = dbName.collection('hazi'); 

    //Egy objektum hozzáadása:
    collection.insertOne(
        {kutya:"Malika", kor:14}
    )
    //Sok objektum hozzáadása, JSON
    collection.insertMany( 
        [
            {macska:"Lukrécia", kedvenc: ["gombolyag", "dorombol", "tej"]},
            {kutya: "Ödön", kor: 18, kedvenc: []}
        ]
    )

    //Adat törlése
    collection.deleteOne({kutya: "Malika"}, (err, result) =>{
        if( err ) throw err;
        console.log('-- Törlés eredménye');
        console.log(result);
    })

    //Módosítás, adatfrissítés
    collection.updateOne({kutya: "Ödön"}, {$set: {kedvenc: ["gombolyag", "csont"]}},
    (err, result) => {
        if(err) throw err;
        console.log("-- Frissítés eredménye");
        console.log(result);
    })

    //A collection lekérése 
    collection.find().toArray((err, result)=>{
        if(err) throw err;
        console.log('--Lekérdezés eredménye');
        console.log(result);
    })



})