Ext.define('jsp.view.UserView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.userView',
    layout: 'border',
    items: [
        {
            xtype: 'userGridView',
            title: 'Пользователи',
            region: 'center'
        },
        {
            xtype: 'findUserView',
            region: 'north',
            height: 80
        },
        {
            xtype: 'googleRequestView',
            title: 'Google results',
            region: 'south',
            height: 300,
//            flex: 1.5,
            width: '100%'
        }
    ],
    renderTo: Ext.getBody()
});