// JavaScript source code
var darkmode;
darkmode = 0;


function Darkmode() {
    if (darkmode == 0) {
        $("body").addClass("dark-bg");
        $(".main-card").addClass("main-card-dark");
        darkmode = 1;
    } else {
        $("body").removeClass("dark-bg");
        $(".main-card").removeClass("main-card-dark");
        darkmode = 0;
    }
   
 
 }
var fullname, errormsg;
function ValidateAccess(){
    
    errormsg = document.getElementById("errormsg");
    fullname = document.getElementById("fullname").value;
    localStorage.setItem("FName", fullname)
    if (fullname == "") {
        errormsg.style.display = "inline-block";
            errormsg.innerHTML = "name is required";
            errormsg.style.color = "red";
            errormsg.style.fontSize = "2rem";
          

        } else {
        errormsg.style.display = "none";
        window.location.href = "Quizs.html";
         //document.location.href = "Quizs.html";
        }
   
}


function PersonDetails() {
    
    alert(Questions.length);
    //alert(person.LName);
    //alert(person.Contact);
}
var person = {
    FName :"Yoma",
    LName : "Comrade",
    Contact : "0903456545893"
};


let Questions = [
    {
        QNo: "1",
        Question: "who amongst this options below is a true comrade?",
        A: "Yoma",
        B: "Uju",
        C: "Ochuko",
        D: "Fred",
        correctAnswer: "A"

    },

    {
        QN0: "2",
        Question: "what is the largest internal organ in the body?",
        A: "Skin",
        B: "Lungs",
        C: "liver",
        D: "Brains",
        correctAnswer: "C"

    },
    {
        QN0: "3",
        Question: "Abnormalities of blood clothing are?",
        A: "haemopholia",
        B: "christmas disease",
        C: "gout",
        D: "both (a) and (b)",
        correctAnswer: "D"
    }, {
        QN0: "4",
        Question: "what is the full meaning of CSS",
        A: "common language runtime",
        B: "cause singing sucks",
        C: "cause school is scam",
        D: "cascading style sheet",
        correctAnswer: "D"
    }, {
        QN0: "5",
        Question: "what is the full meaning of html",
        A: "heaven talk more of lives",
        B: "help translate more languages",
        C: "hi tell me more languages",
        D: "hypertext markup language",
        correctAnswer: "D"
    }, {
        QN0: "6",
        Question: "what is the full meaning of CS",
        A: "ceasarean section",
        B: "christmas section",
        C: "cut section",
        D: "clavicle section",
        correctAnswer: "A"
    }, {
        QN0: "7",
        Question: "longest bone in the body",
        A: "Femur",
        B: "cramiun",
        C: "tibia",
        D: "ulna",
        correctAnswer: "A"
    }, {
        QN0: "8",
        Question: "what is capital state/province of canada?",
        A: "saskatchewan",
        B: "Manitoba",
        C: "Alberta",
        D: "Ottawa",
        correctAnswer: "D"
    }, {
        QN0: "9",
        Question: "capital city of Delta state",
        A: "Agbor",
        B: "Ughelli",
        C: "Effurun",
        D: "Asaba",
        correctAnswer: "D"
    }, {
        QN0: "10",
        Question: "Director of Hallmarkit",
        A: "Mr Ebi Timi",
        B: "Onomakpome Kelvin",
        C: "Mr Sunday Onos",
        D: "Mr Victor Ataigho",
        correctAnswer: "D"
    }, {
        QN0: "11",
        Question: "___________ is a substance that can cause another substance to dissolve within itself to produce a Solution?",
        A: "solvent",
        B: "volatile substance",
        C: "ion",
        D: "energy",
        correctAnswer: "A"
    }, {
        QN0: "12",
        Question: "the type of molecule that accepts hydrogen ions(H+).and have a ph above 7 is called?",
        A: "base",
        B: "christmas disease",
        C: "gout",
        D: "James Brown",
        correctAnswer: "A"
    }, {
        QN0: "13",
        Question: "What type of chemical substance composes of only one kind of atom?",
        A: "ion",
        B: "buffer",
        C: "element",
        D: "Anion",
        correctAnswer: "c"
    }, {
        QN0: "14",
        Question: "which of the options fall into example of an element",
        A: "hydrogen",
        B: "water",
        C: "gout",
        D: "five alive",
        correctAnswer: "A"
    }, {
        QN0: "15",
        Question: "a process in which a liquid is converted into gas,is called what?",
        A: "cohesion",
        B: "Evaporation",
        C: "immersion",
        D: "infiltration",
        correctAnswer: "B"
    }, {
        QN0: "16",
        Question: "what type of energy is needed for evaporation?",
        A: "haemopholia",
        B: "Heat Energy",
        C: "gout",
        D: "James Brown",
        correctAnswer: "B"
    }, {
        QN0: "17",
        Question: "what law states that energy can be changed from one form of energy to another form of energy.but can't be created nor destroyed.",
        A: "fourth law of thermodynamics",
        B: "third law o thermodynamics",
        C: "second law of thermodynamics",
        D: "first law of thermodynamics",
        correctAnswer: "D"
    }, {
        QN0: "18",
        Question: "the term hydro means what?",
        A: "water",
        B: "salt",
        C: "fructose",
        D: "sacrum",
        correctAnswer: "A"
    }, {
        QN0: "19",
        Question: "the term 'lysis' means what?",
        A: "combine",
        B: "attached",
        C: "out together",
        D: "Split apart",
        correctAnswer: "D"
    }, {
        QN0: "20",
        Question: "the central portion of an atom is termed?",
        A: "Atomic Nucleus",
        B: "Atomic bomb",
        C: "Atomic Buhari",
        D: "Atomic fiel",
        correctAnswer: "A"
    }, {
        QN0: "21",
        Question: "Atomic nucleus consist of ",
        A: "proton",
        B: "electron",
        C: "hydrolysis",
        D: "a and b",
        correctAnswer: "D"
        
    }



    
]
var Qno;
Qno = 0;

function LoadQuestions() {
    Enabled();
    $("#TotalScore").hide();
    $("#UserName").text(localStorage.getItem("FName"));
    $(".form-group > .btn").text("Next");
    $("#TotalQNo").text(Questions.length);
  

    if (Qno <= Questions.length-1) {
        $("#QNo").text(Questions[Qno].QN0);
        $("#Question").text(Questions[Qno].Question);
        $("#optionAvalue").text(Questions[Qno].A);
        //$("#optionA").val(Questions[Qno].A);


        $("#optionBvalue").text(Questions[Qno].B);
        //$("#optionB").val(Questions[Qno].B);

        $("#optionCvalue").text(Questions[Qno].C);
        //$("#optionC").val(Questions[Qno].C);


        $("#optionDvalue").text(Questions[Qno].D);
        //$("#optionD").val(Questions[Qno].D);

        Uncheck();

        Qno++;
    }else {
        alert("no available Question.time up!");
        
        $("#TotalScore").show();
       // $("#TotalScore").text(Totalscore);
      
        $("#QNo").text(" ");
        $("#Question").text(" ");
        $("#optionAvalue").text(" ");
        $("#optionBvalue").text(" ");
        $("#optionCvalue").text(" ");
        $("#optionDvalue").text(" ");
        $(".form-group > .btn").text("Restart");
        Totalscore = 0;
        //$(".form-group > .btn").text("submit");
        Qno = 0;
        //document.location.href = "Quizs.html";
    }
    
}

function Uncheck() {
    $("#optionA").prop('checked',false);
    $("#optionB").prop('checked', false);
    $("#optionC").prop('checked', false);
    $("#optionD").prop('checked', false);
}
function Disabled() {
    $("#optionA").attr('disabled', true);
    $("#optionB").attr('disabled', true);
    $("#optionC").attr('disabled', true);
    $("#optionD").attr('disabled', true);
}

function Enabled() {
    $("#optionA").attr('disabled', false);
    $("#optionB").attr('disabled', false);
    $("#optionC").attr('disabled', false);
    $("#optionD").attr('disabled', false);
}
var Totalscore = 0;
function CollectAns(selectedoption) {
    
    var SelectedQNo = $("#QNo").text();

    if (Questions[SelectedQNo -1].correctAnswer == selectedoption) {
      //  alert(selectedoption);
        Totalscore += 5;
        
    } else {
        //alert("Wrong answer, Comrade!!!");
     
    }
    $("#TotalScore").text(Totalscore);
   Disabled();
    
}

function DisableSc() {
    document.onkeydown = function (e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I') {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C') {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J') {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }

    }

};
   
$(document).bind("contextmenu", function (e) {
    e.preventDefault();
})

