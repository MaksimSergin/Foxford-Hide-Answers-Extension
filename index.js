
function reddenPage() {
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
        .fmWiph {
            border: 0!important;
            background: 0!important
        }

    `

    document.head.appendChild(checkbox_answers_style)
    let answers = [...new Set(document.getElementsByClassName("MathContent_content__2a8XE"))]


    answers = answers.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

    for (let i = 0; i<answers.length; i++){
        console.log(getComputedStyle(answers[i].parentNode.parentNode, null).getPropertyValue("background-color"))
        if (getComputedStyle(answers[i].parentNode.parentNode, null).getPropertyValue("border-color") === 'rgb(110, 188, 24)'){
            const para = document.createElement("li");
            para.appendChild(answers[i])
            document.getElementsByClassName("LinkTask_root__suzEq")[0].appendChild(document.createElement("ul").appendChild(para))
        }
        else if(getComputedStyle(answers[i].parentNode.parentNode, null).getPropertyValue("border-color") === 'rgb(247, 91, 58)'){
            answers[i].parentNode.parentNode.remove()
        }

    }
    document.head.appendChild(moving_answers_style)
}

chrome.action.onClicked.addListener((tab) => {
  if(tab.url.includes("foxford")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});