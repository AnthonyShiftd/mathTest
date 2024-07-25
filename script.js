let score = 0
let numArr = []
let results = document.getElementById("results")



/* ГЕНЕРАЦИЯ ЧИСЕЛ */
function genegationNum()
{
    for(let i = 0; i <= 10; i++)
        {
            let a = Math.floor(Math.random() * 20 + 1)
            numArr.push(a)
        }
}

/* СОСТАВЛЕНИЕ ВЫРАЖЕНИЙ В РАЗМЕТКЕ */
function expression()
{
    let exp0 = document.getElementById('exp0')
    exp0.innerHTML = `Сколько будет ${numArr[0]}+${numArr[1]}?`
    
    let exp1 = document.getElementById('exp1')
    exp1.innerHTML =`Сколько будет ${numArr[2]}*${numArr[3]}?`

    let exp2 = document.getElementById('exp2')
    exp2.innerHTML =`Сколько будет ${numArr[4]}-${numArr[5]}?`

    let exp3 = document.getElementById('exp3')
    exp3.innerHTML =`Сколько будет ${numArr[6]}/${numArr[7]}?`

    let exp4 = document.getElementById('exp4')
    exp4.innerHTML =`Сколько будет ${numArr[8]}+${numArr[9]}*${numArr[10]}?`
}




/* ____________________________________________________________________________________ПРОВЕРКА РЕЗУЛЬТАТА___ */

function takeResults()
{
    let valueQ0 = document.getElementById('q0').value
    let valueQ1 = document.getElementById('q1').value
    let valueQ2 = document.getElementById('q2').value
    let valueQ3 = document.getElementById('q3').value
    let valueQ4 = document.getElementById('q4').value
    
    if (valueQ0 === `${numArr[0] + numArr[1]}`) 
    {
        score++
        let q = document.getElementById('q0')
        q.style.background = 'rgb(148, 255, 150)'
    }
    else 
    {
        let q = document.getElementById('q0')
        q.style.background = "rgb(255, 148, 148)"
    }
    if (valueQ1 === `${numArr[2] * numArr[3]}`) 
    {
        score++
        let q = document.getElementById('q1')
        q.style.background = 'rgb(148, 255, 150)'
    }
    else 
    {
        let q = document.getElementById('q1')
        q.style.background = "rgb(255, 148, 148)"
    }
    if (valueQ2 === `${numArr[4] - numArr[5]}`) 
    {
        score++
        let q = document.getElementById('q2')
        q.style.background = 'rgb(148, 255, 150)'
    }
    else 
    {
        let q = document.getElementById('q2')
        q.style.background = "rgb(255, 148, 148)"
    }
    if (valueQ3 === `${Number(Math.round(numArr[6] / numArr[7] * 100) / 100).toFixed(2)}`) 
    {
        score++
        let q = document.getElementById('q3')
        q.style.background = 'rgb(148, 255, 150)'
    }
    else 
    {
        let q = document.getElementById('q3')
        q.style.background = "rgb(255, 148, 148)"
    }
    if (valueQ4 === `${(numArr[8] + numArr[9] * numArr[10])}`) 
    {
        score++
        let q = document.getElementById('q4')
        q.style.background = 'rgb(148, 255, 150)'
    }
    else 
    {
        let q = document.getElementById('q4')
        q.style.background = "rgb(255, 148, 148)"
    }
}

genegationNum()
expression()
results.addEventListener('click', takeResults)