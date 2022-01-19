// Nome + Nota 1 + Nota 2 + Média + Aprovação 

let names = ["Hyoran", "Cristian", "Lyvia", "Sophia"];
let grade1 = [7.0, 6.5, 8.0, 9,5];
let grade2 = [8.5, 6.0, 7.5, 7.5];

function average(g1, g2){

    return (g1 + g2) / 2;

};

function passed(average){
    if (average > 7) {
        return "Approved!";
    } else {
        return "Reproved!";
    };

};

for (let index in names){

    let grds1 = grade1[index];
    let grds2 = grade2[index];
    let avrg = average(grds1, grds2);

 console.log(names[index] + " - " + grds1 + " - " + grds2 + " - " + avrg + " - " + passed(avrg));
};  
