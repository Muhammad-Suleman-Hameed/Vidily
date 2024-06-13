const express = require('express');
const Joi = require('joi'); 
const router = express.Router();

const movies = [
    {id:1 , name: 'fast and furious'} ,
    {id:2 , name: 'hobs and shaws'},
    {id:3 , name: 'spiderman'},
    {id:4 , name: 'batsman'},
]

router.get('/welcome', (req,res) => {
    res.send("Welcome to our website 😎");
})

router.get('/', (req,res) => {
    res.send(movies);
})

router.get('/:id', (req,res) => {
    const genre = movies.find((g) => g.id === parseInt(req.params.id))
    if(! genre) return res.status(404).send("No such record exists");
    res.send(genre);
})

router.post('/', (req,res) => {
    const {error} = validateGenre(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const genre = {
        id: movies.length + 1,
        name: req.body.name
    };
    movies.push(genre);
    res.send(genre); 
})

router.put('/:id' , (req,res) => {
    const genre = movies.find((g) => g.id === parseInt(req.params.id))
    if(! genre) return res.status(404).send("No such record exists");

    const {error} = validateGenre(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre)
    
})

router.delete('/:id' , (req , res) => {
    const genre = movies.find((g) => g.id === parseInt(req.params.id))
    if(! genre) return res.status(404).send("No such record exists");

    const index = movies.indexOf(genre)
    movies.splice(index,1);

    res.send(genre);

})

function validateGenre(genre)
{
    const schema = Joi.object({
        name: Joi.string().min(5).required()
        });
        return schema.validate(genre);
}

module.exports = router;