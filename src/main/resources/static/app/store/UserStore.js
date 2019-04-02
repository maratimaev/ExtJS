Ext.define('jsp.store.UserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'jsp.model.UserModel'
    ],
    model: 'jsp.model.UserModel',
    pageSize: 10,
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: '/user',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});