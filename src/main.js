import {Square} from './Square.js'
import $ from "jquery"

var s = new Square(10);
$('body').html('<h3>'+ s.toString()+'</h3>');
