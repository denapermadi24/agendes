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

    app.route('/agenda/:id')
        .delete(myjson.deleteAgendaById);

    app.route('/reminder')
        .post(myjson.addNewReminder);    

    app.route('/reminder')
        .get(myjson.showAllReminder);

    app.route('/reminder/:id')
        .get(myjson.getReminderById);

    app.route('/reminder/:id')
        .put(myjson.updateReminderById);     

    app.route('/reminder/:id')
        .delete(myjson.deleteReminderById);
    
    app.route('/reminder-user')
        .get(myjson.showAllRelation);
}