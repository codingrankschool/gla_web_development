var body = document.querySelector("body")

    var btn = document.getElementById("click-btn")

    btn.addEventListener('click', clickFun)
    btn.addEventListener('dblclick', dblClickFun)
    btn.addEventListener('mouseenter', mouseEnterFun)
    btn.addEventListener('mouseleave', mouseLeavFun)

    function clickFun(){
        // console.log("Somebody clicked on button")
        //alert("Somebody clicked")
        body.style.backgroundColor = "red"
    }  

    function dblClickFun(){
        body.style.backgroundColor = "yellow"
    }

    function mouseEnterFun(){
         body.style.backgroundColor = "black"
    }

    function mouseLeavFun(){
        body.style.backgroundColor = "teal"
    }