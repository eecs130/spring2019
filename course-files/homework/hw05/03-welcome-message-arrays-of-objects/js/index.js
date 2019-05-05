//The data:
const people = [
    { name: "Jane", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 300 }, 
    { name: "Brenda", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 10} ,
     { name: "Wanda", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 60 },
     { name: "Maria", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 80 },
     { name: "Jasper", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 600 },
     { name: "Malik", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 40 }
];


// use a for loop to loop through each element 
// of the people array and output this message 
// to the screen (except show each person's info):
document.write("<img src='" + people[0].pic + "'>");
document.write("Welcome, " + people[0].name + "! Your score is: " + people[0].score + "<br>");

document.write("<img src='" + people[1].pic + "'>");
document.write("Welcome, " + people[1].name + "! Your score is: " + people[1].score + "<br>");