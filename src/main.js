import {Square} from 'square'
import $ from "jquery"
import template from './amd/tmpl.hbs!';

var s = new Square(10);
$('body').html('<h3>'+ s.toString()+'</h3>');
$('body').append(template());
