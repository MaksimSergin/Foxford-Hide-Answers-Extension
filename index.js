
function hide_answers() {
    const checkbox_answers_style = document.createElement('style')

    const moving_answers_style = document.createElement('style')

    checkbox_answers_style.innerHTML = `
        .jNuXTI {
            color: black!important;
        }
        .jblepV, .jpQdeJ, .btdEeP, .gQoWnN{
            background: none!important;
            box-shadow: none!important;
        }
    `

    moving_answers_style.innerHTML = `
        .fmWiph, .ebFOPD {
            border: 0!important;
            background: 0!important
        }

    `

    document.head.appendChild(checkbox_answers_style)

    // For valid answers
    let valid_answers = [...new Set(document.getElementsByClassName("fmWiph"))]

    valid_answers = valid_answers.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort)

    for (let i = 0; i<valid_answers.length; i++) {
        const answer = document.createElement("li");
        answer.appendChild(valid_answers[i].value.getElementsByTagName("div")[0].getElementsByTagName("span")[0])
        document.getElementsByClassName("LinkTask_root__suzEq")[0].appendChild(document.createElement("ul").appendChild(answer))
    }

    // For invalid answers
    let invalid_answers = [...new Set(document.getElementsByClassName("ebFOPD"))]

    invalid_answers = invalid_answers.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort)
    console.log(invalid_answers)
    for (let i = 0; i<invalid_answers.length; i++) {
        console.log(invalid_answers[i].value)
        invalid_answers[i]['value'].remove()
    }

    document.head.appendChild(moving_answers_style)

    //Удаление заданий с placeholder`ами
    valid_answers = [...new Set(document.getElementsByClassName("hsdEjU"))]
    const placeholder_answers_style = document.createElement('style')

    placeholder_answers_style.innerHTML = `
        .hsdEjU {
            border: None!important;
        }
    `
    document.head.appendChild(placeholder_answers_style)
    for (let i = 0; i<valid_answers.length; i++){
        valid_answers[i].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerHTML = "   "
    }

    // Удаление заданий с правильными ответами
    const answers_block_style = document.createElement('style')

    answers_block_style.innerHTML = `
        .Solved_column__XCV8c {
            display: None!important;
        }
    `
    document.head.appendChild(answers_block_style)

    // Удаление решений заданий
    const solution_block_style = document.createElement('style')

    solution_block_style.innerHTML = `
        .bzqOoo {
            display: None!important;
        }
    `
    document.head.appendChild(solution_block_style)

    // Удаление Радио ответов
    const radio_style = document.createElement('style')

    radio_style.innerHTML = `
        .exYqEA, .knIKfy {
            display: None!important;
        }
    `
    document.head.appendChild(radio_style)

}

chrome.action.onClicked.addListener((tab) => {
  if(tab.url.includes("foxford")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: hide_answers
    });
  }
});