
function response(question) {

    let answer = "";

    if (question == "سلام") { answer = "سلام" }
    // 2
    else if (question == "سلام خوبی؟" || question == "سلام چطوری؟" || question == "خوبی؟") { answer = "😊 سلام مرسی تو خوبی؟" }
    // 3
    else if (question == "میتونی حرف بزنی؟" || question == "بلدی حرف بزنی؟") { answer = "😒 فعلا که دارم حرف میزنم!" }
    // 4
    else if (question == "اسمت چیه؟") { answer = "به تو چه" }
    // 5
    else if (question == "چه خبر؟") { answer = "😊 خبرای خوووووب" }
    // 6
    else if (question == "مثلا؟" || question == "مثلا چه خبری؟" || question == "چه خبری؟") { answer = "😁 چی خوب تر از سلامتی " }
    // 7
    else if (question == "کی تو رو ساخته؟" || question == "چجوری ساخته شدی؟" || question == "صاحبت کیه؟") { answer = "نازنین من رو ساخته ، با js , html_css" }

    return answer;
}

function show_response() {
    let question = document.getElementById("Question").value;
    let text1 = document.getElementById("msg1").innerHTML = question;
    let text2 = document.getElementById("msg2").innerHTML = response(question);
    document.getElementById("Question").value = "";
}
