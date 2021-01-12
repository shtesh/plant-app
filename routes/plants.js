const express = require('express');
const router = express.Router();
const axios = require('axios'); 
const User = require('../models/user');
const Favorite = require('../models/favorites');

/* GET plants listing. */
// router.get('/', (req, res, next) => {
//     const { name, light, floweringTime, native, tags, imageURL } = req.query;
// 
// res.render('plants/plants-list', { plants });
// })
// .catch(function (error) {
//   next(error);
// });
// });

/* GET plant details. */
router.get('/details', (req, res, next) => {
    const currentPlantId = req.query.plant_id;

 if (req.session.currentUser) {
    const userId = req.session.currentUser._id;
    let favoriteStatus = 'off';

    User.find({ _id: userId })
    .then((user) => {
        Promise.all(user[0].favorites.map((element) => {
            return Favorite.findOne({ _id: element, plant_id: currentPlantId });
        }))
        .then((result) => {
            Promise.all(result.map((plant) => {
                if (plant !== null) {
                    favoriteStatus = 'on';
                    return favoriteStatus;
                }
            }))
            .then((status) => {
                const data = {
                    plantDetails,
                    favoriteStatus,
                    user: true
                };
                res.render('plants/plant-details', data);
                  });
              });
          });
        } else {
            const data = {
              plantDetails,
              favoriteStatus: 'off',
              user: false
            };

            res.render('plants/plant-details', data);
        }
    })

    .catch(function (error) {
        next(error);
});
    });

  module.exports = router;

