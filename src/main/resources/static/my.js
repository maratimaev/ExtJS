Ext.application({
    name: 'HelloExt',
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            width: 500,
            height: 360,
            padding: 10,
            alias: 'widget.carCatalogView',
            layout: 'border',
            items: [
                {
                    xtype: 'grid',
                    region: 'center',
                    title: 'Пользователи',
                    height: 200,
                    width: 400,
                    store: store,
                    columns: [{
                        header: 'Имя',
                        dataIndex: 'name'
                    }, {
                        header: 'price',
                        dataIndex: 'price'
                    }]
                },
                {
                    xtype: 'panel',
                    // html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог автомобилей</font></center></div>',
                    region: 'north',
                    // height: 80,
                    items:[
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Ваше имя:',
                            name: 'name'
                        },
                        {
                            xtype: 'button',
                            text: 'click',
                            listeners: {
                                click: function () {
                                    var text = Ext.ComponentQuery.query('textfield[name=name]')[0].getValue();
                                    alert(text);
                                },
                                scope: this
                            }
                        }
                        ]
                }
            ],
            renderTo: Ext.getBody()
        });
    }
});

Ext.define('User', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'name',
        type: 'string'
    }, {
        name: 'price',
        type: 'int'
    }]
});

var store = Ext.create('Ext.data.Store', {
    model: 'User',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/car',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});

