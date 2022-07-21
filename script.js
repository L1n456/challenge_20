const daily = document.querySelector(".d");
const weekly = document.querySelector(".w");
const monthly = document.querySelector(".m");
const title = document.querySelectorAll("h4");
const current = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous");
const type = document.querySelectorAll(".type");

const data = fetch('data.json')
    .then(response => response.json())
    .then(data => { return data; })

daily.addEventListener("click", function onClick(){
    data.then(data => {
        data.forEach(item => {
            for (let i = 0; i < title.length; i++) {
                if(title[i].innerHTML == item.title){
                    daily.style.color = "white";
                    weekly.style.color = "hsl(236, 100%, 87%)";
                    monthly.style.color = "hsl(236, 100%, 87%)";
                    type[i].innerHTML = "Day";
                    current[i].innerHTML = item.timeframes.daily.current + "hrs";
                    previous[i].innerHTML = item.timeframes.daily.previous;
                }
            }
        })
    })
})

weekly.addEventListener("click", function onClick(){
    data.then(data => {
        data.forEach(item => {
            for (let i = 0; i < title.length; i++) {
                if(title[i].innerHTML == item.title){
                    weekly.style.color = "white";
                    daily.style.color = "hsl(236, 100%, 87%)";
                    monthly.style.color = "hsl(236, 100%, 87%)";
                    type[i].innerHTML = "Week";
                    current[i].innerHTML = item.timeframes.weekly.current + "hrs";
                    previous[i].innerHTML = item.timeframes.weekly.previous;
                }
            }
        })
    })
})

monthly.addEventListener("click", function onClick(){
    data.then(data => {
        data.forEach(item => {
            for (let i = 0; i < title.length; i++) {
                if(title[i].innerHTML == item.title){
                    monthly.style.color = "white";
                    weekly.style.color = "hsl(236, 100%, 87%)";
                    daily.style.color = "hsl(236, 100%, 87%)";
                    type[i].innerHTML = "Month";
                    current[i].innerHTML = item.timeframes.monthly.current + "hrs";
                    previous[i].innerHTML = item.timeframes.monthly.previous;
                }
            }
        })
    })
})







