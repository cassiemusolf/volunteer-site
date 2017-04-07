import {Pipe, PipeTransform} from '@angular/core';
import {Volunteer} from './volunteer.model';

@Pipe({
  name: "categories",
  pure: false
})

export class CategoriesPipe implements PipeTransform {
  transform(input: Volunteer[], desiredCategory) {
      var output: Volunteer[] = [];
      console.log(input);
      if (desiredCategory === "Animals") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Animals") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCategory === "Medical") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Medical") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCategory === "Disaster") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Disaster") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCategory === "Construction") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Construction") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCategory === "Orphanages") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Orphanages") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCategory === "Teaching") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Teaching") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredCategory === "Other") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Other") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
}
