apiready = function(){
    var header = $api.byId('header');
    $api.fixIos7Bar(header);
    var pos = $api.offset(header);
    api.openFrame({
        name: 'cwsy_sby-con',
        url: 'cwsy_sby-con.html',
        rect:{
            x: 0,
            y: pos.h,
            w: 'auto',
            h: 'auto'
        },
        bounces: true,
        vScrollBarEnabled: false
    });
};

