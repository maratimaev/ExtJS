Ext.application({
    name: 'HelloExt',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'panel',
                width: 500,
                height: 360,
                padding: 10,
                alias: 'widget.carCatalogView',
                layout: 'border',
                items: [{
                        xtype: 'grid',
                        region: 'center',
                        title: 'Пользователи',
                        id: 'myGrid',
                        store: store,
                        columns: [{
                            header: 'Имя',
                            dataIndex: 'name'
                        }, {
                            header: 'price',
                            dataIndex: 'price'
                        }],
                        listeners: {
                            scope: this,
                            itemcontextmenu: function (tree, record, item, index, e, eOpts) {
                                var menu_grid = new Ext.menu.Menu({
                                    items:
                                        [
                                            {
                                                text: 'find', handler: function () {
                                                     var name = record.get('name');
                                                     alert(name);
                                                }
                                            }
                                        ]
                                });
                                var position = [e.getX() - 10, e.getY() - 10];
                                e.stopEvent();
                                menu_grid.showAt(position);
                            }
                        }
                    },
                    {
                        xtype: 'panel',
                        region: 'north',
                        height: 80,
                        items: [
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
                                        store.proxy.setUrl('/car/' + text);
                                        store.load();
                                    },
                                    scope: this
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'component',
                        title: 'Tab',
                        flex: 1.5,
                        region: 'south',
                        autoEl: {
                            src: 'https://www.google.com/search?igu=1&ei=&q=YOUR+WORD',
                            tag: 'iframe'
                        }
                    }
                ],
                renderTo: Ext.getBody()
            }
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
