Ext.define('jsp.view.FindUserView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.findUserView',
    height: 80,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Ваше имя:',
            name: 'name'
        },
        {
            xtype: 'button',
            action: 'get',
            text: 'click'
        }
    ]
});