let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/user');

//connect to database

mongoose.connect('mongodb://127.0.0.1:27017/sample',{ useNewUrlParser: true,  useUnifiedTopology: true },  (err) => {
    console.log(err ? err : "connected to db");
})

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//create a document in db

app.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        console.log(err);
        res.json(user);
    })
})

//Find documents from db

app.get('/users', (req, res) => {
    User.find({}, (err, user,next) => {
        if(err) return next(err);
        res.json({products: user});
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    
    //find a document / documents using a query if an empty object is passed entire documents in the collection will be returned in an array
    // User.find({ "_id": "60de8e23d7ae4c0fe2600768"}, (err, user) => {
    //     if(err) return next(err);
    //     res.json(user);

    // })

    //find a specific document using a query(condition) form database and return the first document satisfies the condition

    // User.findOne({"_id": "60de8e23d7ae4c0fe2600768"}, (err, user) => {
    //     if(err) return next(err);
    //     res.json(user);
    // })

    //find a specific document using the unique object id of the document

    User.findById(id, (err, user,next) => {
        if(err) return next(err);
        res.json(user);
    })
})

//Updating a document

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    // User.update({ "_id": "60de8e23d7ae4c0fe2600768"}, req.body, {new: true}, (err, user) => {
    //     if(err) return next(err);
    //     res.json(user);
    // })

    // User.updateOne({"_id": "60de8e23d7ae4c0fe2600768"}, req.body, {new: true}, (err, user) => {
    //     if(err) return next(err);
    //     res.json(user);
    // })

    User.findByIdAndUpdate(id, req.body, {new: true}, (err, user,next) => {
        if(err) return next(err);
        res.json(user);
    })
})

//Delete a document

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user,next) => {
        if(err) return next(err);
        res.json(`${user.name} is deleted`);
    })
})
app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})