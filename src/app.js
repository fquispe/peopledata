
//Server
const app = require('./config/server');

// routes
require('./routes/userRoutes')(app);

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
})