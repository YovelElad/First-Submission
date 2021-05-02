
// $( function() {
//     $( "#slider" ).slider();
//   } );


function listColor() {


    var elem = document.getElementsByClassName('ListLi');
    for (var i = 0; i < elem.length; i++) {
        //  document.getElementById("p").innerHTML = i;
        if (i % 2 == 0)
            elem[i].style.backgroundColor = "#f7f6f6";
        else
            elem[i].style.backgroundColor = "#ebebeb";

    }
    var sortElement = document.getElementById("sort");
    sortElement.addEventListener('click', showSortSection)


    var filterElem = document.getElementById("filtering");
    filterElem.addEventListener('click', showFilterSection);

    

}



function showFilterSection() {

    if (document.getElementById("filterNav").style.display == "none")
        document.getElementById("filterNav").style.display = "block";
    else
        document.getElementById("filterNav").style.display = "none";

    document.getElementsByClassName("willChoose")[0].addEventListener('click', removeInstances);
}

function removeInstances() {
    // document.getElementById("p").innerHTML = "heyyy";
    document.getElementById("filterNav").style.display = "none";
    document.getElementById("check").style.bottom = "104px";


    var elem = document.getElementsByClassName("willDelete");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none";
    }

}

function showSortSection() {
    if (document.getElementById("sortNav").style.display == "none")
        document.getElementById("sortNav").style.display = "block";
    else
        document.getElementById("sortNav").style.display = "none"
}




function drive() {

    document.getElementsByClassName("fa-waze")[0].addEventListener('click', moveCarManager);
}


function moveCarManager() {
    // document.getElementById("p").innerHTML = "heyyy";
    var elem = document.getElementById("car");
    var topPos = 290;
    var leftPos = 270;
    var up;
    var down;
    var right;
    var left = setInterval(leftFunc, 20);


    function leftFunc() {
        if (leftPos == 230) {
            clearInterval(left);
            up = setInterval(upFunc, 20);
        }
        else {
            leftPos--;
            elem.style.left = leftPos + 'px';
        }
    }

    function upFunc() {
        if (topPos == 250) {
            clearInterval(up);
            right = setInterval(rightFunc, 20);
        }
        else {
            topPos--;
            elem.style.top = topPos + 'px';
        }
    }

    function rightFunc() {
        if (leftPos == 240) {

            clearInterval(right);
            // document.getElementById("p").innerHTML = "heyyy";
            down = setInterval(downFunc, 20);
        }
        else {
            leftPos++;
            elem.style.left = leftPos + 'px';
        }
    }

    function downFunc() {
        if (topPos == 280) {
            clearInterval(down);
            right = setInterval(right2Func, 20);
        }
        else {
            topPos++;
            elem.style.top = topPos + 'px';
        }
    }

    function right2Func() {
        if (leftPos == 300) {

            clearInterval(right);
            // document.getElementById("p").innerHTML = "heyyy";
            down = setInterval(downFunc, 20);
            systemMessege();

        }
        else {
            leftPos++;
            elem.style.left = leftPos + 'px';
        }
    }
}


function systemMessege() {
    document.getElementsByClassName("willFade")[0].style.opacity = "0.31";
    document.getElementsByClassName("willFade")[1].style.opacity = "0.31";
    var elem = document.getElementById("systemMessege");
    elem.style.display = "block";
    systemMessageAffect();
    // elem.style.opacity = "1";
}
var size = 0;

function removeInstance2() {
    document.getElementById("removeParking").style.display = "none";

}

function systemMessageAffect() {
    var elem = document.getElementById("systemMessege");
    var _width = setInterval(raisWidth, 20);

    function raisWidth() {


        if (size <= 335) {
            clearInterval(_width);
        }
        else {

            size++;
            elem.style.width = size + "px";
        }
    }


    sendSystemMessage();

    function sendSystemMessage() {

        var sendElem = document.getElementById("sendButton");
        var dontSaveElem = document.getElementById("dontSendButton");
        sendElem.addEventListener('click', function () {
            sessionStorage.setItem("tmp", 0);
        });
        dontSaveElem.addEventListener('click', function () {
            sessionStorage.setItem("tmp", 0);
        });
    }

}


(function () {

    var tmp = sessionStorage.getItem("tmp");
    console.log(tmp);

    if (tmp) {
        removeInstance2();
    }
    sessionStorage.removeItem("tmp");
})()


