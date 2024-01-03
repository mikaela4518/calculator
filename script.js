
let language = {
    english: [
        { character: "Q" },
        {
            character: "W",
            "what is your name": "javad promax",
        },
        { character: "E" },
        { character: "R" },
        { character: "T" },
        { character: "Y" },
        { character: "U" },
        { character: "I" },
        { character: "O" },
        { character: "P" },
        { character: "A" },
        { character: "S" },
        { character: "D" },
        { character: "F" },
        { character: "G" },
        {
            character: "H",
            HELLO: "hii",
            "HOW ARE YOU": "i'm fine,thanks",
        },
        { character: "J" },
        { character: "K" },
        { character: "L" },
        { character: "Z" },
        { character: "X" },
        { character: "C" },
        { character: "V" },
        { character: "B" },
        { character: "N" },
        { character: "M" }]
}


function getQuestion() {
    let question = document.getElementById("Question").value;
    return question;
}

function response(question) {

    let answer = "";
    let value = "";
    let result = "";

    question = question.toUpperCase();

    for (let i = 0; i < 23; i++) {
        if (language.english[i].character == question[0]) {
            result = i
            // language.english[i].hasOwnProperty(question)

            if (question in language.english[i]) {
                answer = "";
            }
        }
    }
    return answer;
}

function show_response() {
    question = getQuestion()
    let text1 = document.getElementById("msg1").innerHTML = question;
    let text2 = document.getElementById("msg2").innerHTML = response(question);
    document.getElementById("Question").value = "";
}

