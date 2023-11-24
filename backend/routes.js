'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);  
    
    app.route('/agenda')
        .get(myjson.showAllAgenda);

    app.route('/agenda/:id')
        .get(myjson.getAgendabById);   
    
    app.route('/agenda')
        .post(myjson.addNewAgenda);

    app.route('/agenda/:id')
        .put(myjson.updateAgendaById);
}