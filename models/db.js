const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Employee', {
    
})
.then(() => console.log('connection succesful'))
.catch((err) => console.error(err));


require('./employee.model');