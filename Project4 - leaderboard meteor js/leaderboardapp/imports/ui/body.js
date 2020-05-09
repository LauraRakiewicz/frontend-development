import { Template } from 'meteor/templating'; 
import { People } from '../api/people.js';
import './body.html';
 
Template.body.helpers({
    people() {
        return People.find({});
      },
});