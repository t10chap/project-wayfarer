let db = require("../models");

// GET api/users

const getUsers = (req, res) => {
    db.User.find({}, (err, users) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(users);
    });
};

const createUser = (req, res) => {
    console.log(req.body)

    db.User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }

        if(user){
            res.status(400).send('user already exists')
        }
        else{
            db.User.create(req.body, (err, user) => {
                if (err) {
                    console.log(err);
                    return err;
                }
                res.json(user);
            });
        }

    })
};

// POST api/user/find

const getUser = (req, res) => {
    db.User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }else{
            if(user){
                res.status(200).json(user);
            }else{
                res.status(404).json(null)
            }
        }

    });
};

// POST api/user/profile

const getProfile = (req, res) => {
    console.log('Email = ', req.params.user_email)
    db.User.findOne({email: req.params.user_email}, (err, user) => {
        if (err){
            // console.log(err);
            return err
        }else{
            if(user){
                res.status(200).json(user);
            }else{
                res.status(404).json(null)
            }
        }
    })
}

// PUT api/user/update/

const updateUser = (req, res) => {
    let email = req.body.user.email;
    let update = req.body.user;
    console.log('Update Profile data = ', email, update)
    db.User.findOneAndUpdate(
        email,
        update,
        {new: true},
        (err, user) => {
            if (err) {
                console.log(err);
                return err;
            }
            return res.json(user);
    })
}

module.exports = {
    getUser: getUser,
    getProfile: getProfile,
    updateUser: updateUser,
    getAll: getUsers,
    createUser: createUser
}
