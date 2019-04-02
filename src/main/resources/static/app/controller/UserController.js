Ext.define('jsp.controller.UserController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'findUserView  button[action=get]': {
                click: this.onGetUser
            },
            'userGridView' : {
                itemcontextmenu : this.contextMenuBox
            }
        });
    },

    onGetUser: function () {
        var text = Ext.ComponentQuery.query('textfield[name=name]')[0].getValue();
        var store = Ext.getStore('UserStore');
        store.proxy.setUrl('/user/' + text);
        store.loadPage(1);
        store.load();
    },

    contextMenuBox : function (tree, record, item, index, e) {
        var menu_grid = new Ext.menu.Menu({
            items: [{
                text: 'find', handler: function () {
                    var name = record.get('name');
                    var url = 'https://www.google.com/search?igu=1&ei=&q=' + name;
                    var cmp = Ext.getCmp('googleRequestView');
                    cmp.update('<iframe src="' + url+ '" style="height:100%;width:100%"></iframe>');
                }
            }
            ]
        });
        var position = [e.getX() - 10, e.getY() - 10];
        e.stopEvent();
        menu_grid.showAt(position);
    }
});

