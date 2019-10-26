const configdb = require('../config/configdb');

const connection = configdb();

let userModel = {};

userModel.getUsers = (callback)=>{
    if (connection){
        connection.query(
            'select * from ofdidp_person',
            (err, rows)=>{
                if (err){
                    throw err;
                }else{
                    callback(null, rows);
                }
            }
        )
    }
};

userModel.insertUser = (personData, callback) =>{
    let valPersonData = "'"+personData.perv_userreg+"','"+personData.perv_codigo+"','"+personData.perv_nombres+"','"+personData.perv_apelpater+"','"+personData.perv_apelmater+"','"+personData.perd_fechnace+"',"+personData.peri_tipoper+"";
    if(connection){
        connection.query(
            'CALL OFDIDPSI_PERSON ('+valPersonData+')',
            (err, rows)=>{
                if (err){
                    throw err;
                }else{
                    callback(null, rows[0]);
                }
            }
        )
    }
    
};


module.exports = userModel;