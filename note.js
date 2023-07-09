var objQuestion = [
    {
        question: "how many stanzas are there in pakistan national anthem?",
        option: ["Five", "Six", "Three"],
        correct: "Three"
    },
    {
        question: "Pakistan became an independent nation on?",
        option: ["September 22, 1946", "July 5, 1947", "August 14, 1947"],
        correct: "August 14, 1947"

    },
    {
        question: "Jinnah was declared the first Governor-General of Pakistan. Who was the first prime-minister?",
        option: ["Chaudhri Rahmat Ali", "Liaquat Ali Khan", "Dr. Mohammed Iqbal"],
        correct: "Liaquat Ali Khan"

    },
    {
        question: "When was Pakistan's first constitution adopted?",
        option: [" 1947", "1959", " 1962", "1956"],
        correct: "1956"

    },
    {
        question: "Who was the man behind the aligarh movement",
        option: ["Muhammad Ali Jinnah", "Sir Syed Ahmed Khan"],
        correct: "Sir Syed Ahmed Khan"
    }

]

let curentQuestion = document.getElementById("curentQuestion")
let Total_Question= document.getElementById("Total_Question")
let QuestionAll = document.getElementById("QuestionAll")
let Optionall = document.getElementById("Option")

let indexval=0;

function render() {
    curentQuestion.innerHTML= indexval+1
    Total_Question.innerHTML= objQuestion.length
let obj = objQuestion[indexval]
QuestionAll.innerHTML=obj.question
Optionall.innerHTML=""

for(let i = 0; i<obj.option.length; i++){
    Optionall.innerHTML+=`
    <div class="col-md-6 ">
    <div class="text-center m-auto mt-5 ">
        <button type="button" class="btn btn-outline-secondary w-100"   onclick="check('${obj.correct}','${obj.option[i]}')">${obj.option[i]}</button>

        
    </div>
</div>
    `
}
}

render()

let count = 0

function next(){
    indexval++
    render()
}

function previous() {
    indexval--
    render()
}

function check(a,b) {
    if(a==b){
        count++
    }
    console.log(count)
    next()
}