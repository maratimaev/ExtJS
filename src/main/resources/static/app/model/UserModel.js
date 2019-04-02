Ext.define('jsp.model.UserModel', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'surname',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'patronymic',
        type: 'string'
    }]
});