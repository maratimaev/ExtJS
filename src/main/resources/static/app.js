Ext.application({
    name: 'jsp',

    views: [
        'FindUserView',
        'GoogleRequestView',
        'UserGridView',
        'UserView'
    ],

    controllers : [
        'UserController'
    ],

    stores : [
        'UserStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userView'
            }
        });
    }
});