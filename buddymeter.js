function answergetter(word) {
    for (i = 0; i < questionArray.length; i++) {
        if (questionArray[i] != null) {
            if (questionArray[i].name.match(word)) {
                option_clicked(questionArray[i].answer)
            }
        }
    }
}


function getAnswer() {
    name = 'option_' + questionArray[question_number].answer
    document.getElementById(name).click()
}

function getAnswerV2() {
    console.log("This called")
    document.addEventListener('change', (t, ev) => {
        name = 'option_' + questionArray[question_number].answer
        document.getElementById(name).click()
    })
}

// This function solves buddymeter
// Copy and paste from start to end and run getAnswerV3() after entering your username
// Start
counter = 0
function getAnswerV3() {
    name = 'option_' + questionArray[question_number].answer
    document.getElementById(name).click()
    $("#question").bind("DOMSubtreeModified", () => {
        counter += 1
        console.log(counter)
        if (counter >= 2) {
            counter = 0
            name = 'option_' + questionArray[question_number].answer
            document.getElementById(name).click()
        }
    })
}
// End
