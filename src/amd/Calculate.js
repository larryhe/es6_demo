define(function(){
    return function(type){
        if(type === 'Rectangle'){
            require(['Rectangle'], function(Rectangle){
                var r = new Rectangle(10, 10);
                console.log(r.toString());
            });
        }else{
            console.log('this is not a rectangle');
        }
    };
});
