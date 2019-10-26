
const scripSql = require('../models/callQuerys');

module.exports = function(app){
    
    app.get('/api/people',(req, res)=>{
        scripSql.getUsers((err,data)=>{
            res.json(data);
        });
    });

    app.post('/api/people',(req, res)=>{
    
        const personData = {
            perv_userreg: req.body.perv_userreg,
            perv_codigo: req.body.perv_codigo,
            perv_nombres: req.body.perv_nombres,
            perv_apelpater: req.body.perv_apelpater,
            perv_apelmater: req.body.perv_apelmater,
            perd_fechnace: req.body.perd_fechnace,
            peri_tipoper: req.body.peri_tipoper
        };
        
        scripSql.insertUser(personData,(err,data)=>{
            if(data && data[0].id == 1){
                res.json({
                    succes: true,
                    idsucces: data[0].id,
                    msg: data[0].msg
                })
            }else{
                res.status(500).json({
                    succes: false,
                    idsucces: data[0].id,
                    msg: data[0].msg
                });
            }
        });
        
    });

    

}