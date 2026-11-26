var body = document.querySelector("body")
    var btn = document.getElementById("click-btn")

    //adding event to btn using js
    btn.addEventListener('click', clickFun)
    btn.addEventListener('dblclick', dblClickFun)
    btn.addEventListener('mouseenter', mouseEnterFun)
    btn.addEventListener('mouseleave', mouseLeaveFun)

    var input = document.getElementById("search")
    input.addEventListener("input", enterFun)


    function clickFun(){
        // console.log("Somebody clicked on button")
        // alert("Somebody clicked")
        body.style.backgroundColor = "red"
    }


    function dblClickFun(){
        body.style.backgroundColor = "yellow"
    }

    function mouseEnterFun(){
        body.style.backgroundColor = "pink"

    }

    function mouseLeaveFun(){
        body.style.backgroundColor = "teal"
    }

    // var inputValue = []
    function enterFun(){
        //console.log("Somebody entered")
        var input = document.getElementById("search")
        // inputValue.push(input.value)
        console.log(input.value)
    }