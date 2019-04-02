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
                layout: 'border',
                items: [{
                        xtype: 'grid',
                        region: 'center',
                        title: 'Пользователи',
                        store: store,
                        columns: [{
                            header: 'Фамилия',
                            dataIndex: 'name'
                        }, {
                            header: 'Имя',
                            dataIndex: 'surname'
                        }, {
                            header: 'Отчество',
                            dataIndex: 'patronymic'
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
                                                     var url = 'https://www.google.com/search?igu=1&ei=&q=' + name;
                                                     cmp.update('<iframe src="' + url+ '" style="height:100%;width:100%"></iframe>');
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
                                        store.proxy.setUrl('/user/' + text);
                                        store.load();
                                    },
                                    scope: this
                                }
                            }
                        ]
                    },
                    cmp
                ],
                renderTo: Ext.getBody()
            }
        });
    }
});

var cmp = Ext.create('Ext.Component', {
    title: 'Google results',
    region: 'south',
    flex: 1.5,
    width: '100%',
    html: '<iframe src="https://www.google.com/search?igu=1&ei=&q=YOUR+WORD" style="height:100%;width:100%"></iframe>'
});

Ext.define('User', {
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

var store = Ext.create('Ext.data.Store', {
    model: 'User',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/user',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});
