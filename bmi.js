function bodyMassIndex() {
    var result=""

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var bodyMassIndex = weight * height^2;

    if(bodyMassIndex <=18.5) {
        result="Your Body Mass Index is: " + bodyMassIndex + ", this is less than 18.5, so you are Underweight";
      } else {
        if (bodyMassIndex >18.5 && bodyMassIndex <=25){
            result="Your Body Mass Index is: " + bodyMassIndex + ", this is between 18.5 and 25, so you are Optimal";
    }else {
            result="Your Body Mass Index is: " + bodyMassIndex + ", this is greater than 25, so you are Overweight";
    }
    
}
document.getElementById("result").innerHTML = result;
}