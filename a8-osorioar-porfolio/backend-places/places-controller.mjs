// Controllers for the Places Collection

import 'dotenv/config';
import express from 'express';
import * as places from './places-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/places', (req,res) => { 
    places.createPlace(
        req.body.location, 
        req.body.date, 
        req.body.daysSpent
        )
        .then(place => {
            console.log(`"${place.location}" was added to the collection.`);
            res.status(201).json(place);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add location to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/places', (req, res) => {
    places.retrievePlaces()
        .then(allPlaces => { 
            if (places !== null) {
                console.log(`All locations were retrieved from the collection.`);
                res.json(allPlaces);
            } else {
                res.status(404).json({ Error: 'Failed to retrieve location from the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve location from the collection.' });
        });
});


// RETRIEVE by ID controller
app.get('/places/:_id', (req, res) => {
    places.retrievePlaceByID(req.params._id)
    .then(place => { 
        if (place.length > 0) {
            console.log(`"${place.location}" was retrieved, based on its ID.`);
            res.json(place);
        } else {
            res.status(404).json({ Error: 'Location not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve location by ID.' });
    });

});


// UPDATE controller ************************************
app.put('/places/:_id', (req, res) => {
    places.updatePlace(
        req.params._id, 
        req.body.location, 
        req.body.date, 
        req.body.daysSpent
    )
    .then(updatedPlace => {
        console.log(`"${updatedPlace.location}" was updated.`);
        res.json(updatedPlace);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve location.' });
    });
});


// DELETE Controller ******************************
app.delete('/places/:_id', (req, res) => {
    places.deletePlaceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} location was deleted.`);
                res.status(200).send({ Success: 'Location successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Location was not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete location.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});