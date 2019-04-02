Ext.define('jsp.view.UserGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userGridView',
    id: 'userGridView',
    width: 500,
    height: 360,
    store: 'UserStore',
    columns: [{
        header: 'Фамилия',
        dataIndex: 'surname'
    }, {
        header: 'Имя',
        dataIndex: 'name'
    }, {
        header: 'Отчество',
        dataIndex: 'patronymic'
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'UserStore',
        dock: 'bottom',
        displayInfo: true,
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        displayMsg: 'Пользователи {0} - {1} из {2}'
    }]
});