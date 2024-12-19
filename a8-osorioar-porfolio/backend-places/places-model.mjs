// Models for the Places Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", () => {
    console.log('Success: Connected to MongoDB.');
});
db.on("error", (err) => {
    console.error("Connection error:", err);
});

// SCHEMA: Define the collection's schema.
const placesVisitedSchema = mongoose.Schema({
	location:    { type: String, required: true },
	date:     { type: Date, required: true },
	daysSpent: { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "Places".
const Places = mongoose.model('Places', placesVisitedSchema);


// CREATE model *****************************************
const createPlace = async (location, date, daysSpent) => {
    const place = new Places({ 
        location: location, 
        date: date, 
        daysSpent: daysSpent 
    });
    return place.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrievePlaces = async () => {
    const query = Places.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievePlaceByID = async (_id) => {
    const query = Places.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletePlaceById = async (_id) => {
    const result = await Places.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatePlace = async (_id, location, date, daysSpent) => {
    const result = await Places.replaceOne({_id: _id }, {
        location: location,
        date: date,
        daysSpent: daysSpent
    });
    return { 
        _id: _id, 
        location: location,
        date: date,
        daysSpent: daysSpent 
    }
}

// EXPORT the variables for use in the controller file.
export { createPlace, retrievePlaces, retrievePlaceByID, updatePlace, deletePlaceById}