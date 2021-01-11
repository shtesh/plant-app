const express = require('express');
const router  = express.Router();


/*GET homepage*/
router.get('/', (req, res, next) => {
    if  (req.session.currentUser) {
        let currentUser = true;
        res.render('index', { currentUser, name: req.session.currentUser.name });
} else {
    res.render('index');
}
});


module.exports = router;