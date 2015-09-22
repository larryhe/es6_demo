define(['./Shape'], function(Shape){
    var Rectangle = Shape.extend({
        init: function(w, h){
            this._super("Rectangle");
            this.width = w;
            this.height = h;
        },
        area: function(){
            return this.width * this.height;
        }
    });
    return Rectangle;
});
