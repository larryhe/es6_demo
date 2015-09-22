import Rectangle from "./amd/Rectangle.js"

export class Square extends Rectangle{
    constructor(side){
        super(side, side);
        this.type = "Square";
    }

    area(){
        var area = super.area();
        console.log('this is from Square class and area=', area);
        return area;
    }
}
