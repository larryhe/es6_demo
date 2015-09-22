define(['./Base'], function(Base){
    var Shape = Base.extend({
        init: function(type){
            this.type = type;
        }, 
        toString: function(){
            return 'This is a ' + this.type + ' and area is '+ this.area();
        },
        area: function(){
            console.log('should be subcalssed only');
        }
    });
    return Shape;
});
