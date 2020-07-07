$( document ).ready(init)

function init()
{
    randomBackground();
    getDate();
    realTimeClock();
    generateGreeting();
}

function generateGreeting()
{
    var date = new Date();
    var hour = date.getHours();
    var amPM = (hour < 12) ? "AM" : "PM";
    hour = (hour > 12) ? hour - 12 : hour;

    if( (hour >= 5) && amPM =="PM")
    {
        document.getElementById("greeting").innerText = "Good Evening Anshul";
    }
    else if( (hour >= 0 && hour < 5) && amPM =="PM")
    {
        document.getElementById("greeting").innerText = "Good Afternoon Anshul";
    }
    else
    {
        document.getElementById("greeting").innerText = "Good Morning Anshul";    
    }

}

function randomBackground()
{
    const imageSrc =  ['images/background1.jpg', 'images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg',
                        'images/background6.jpg','images/background7.jpg','images/background8.jpg'];
    const randomElement = imageSrc[Math.floor(Math.random() * imageSrc.length)];
    $('body').css('background-image', 'url(' + randomElement + ')' );
}

function getDate()
{
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var day = days[ n.getDay() ];
    var month = months[ n.getMonth() ];

    document.getElementById("date").innerHTML = day + " " + month + " " + d + ", " + y;
}

function searchBarExpand() 
{
    var valueLength = document.getElementById('search-txt').value.length;
    if(valueLength > 0)
    {
        document.getElementById("search-txt").style.width="240px";
    }
    else{
        document.getElementById("search-txt").style.width="0px";
    }
}

function expandSearchBar()
{
    document.getElementById("search-txt").style.width="240px";
}

function shrinkSearchBar()
{
    var valueLength = document.getElementById('search-txt').value.length;
    if(valueLength > 0)
    {
        document.getElementById("search-txt").style.width="240px";
    }
    else{
        document.getElementById("search-txt").style.width="0px";
    }
}

function performSearch()
{
    var f = document.getElementById("searchfrm");
    var searchString = document.getElementById("search-txt").value;
    f.setAttribute('method',"get");
    var splitString = searchString.split(":");
    if(splitString[0]=='youtube')
    {
        document.getElementById("search-txt").value = splitString[1];
        f.setAttribute('action',"https://www.youtube.com/search")
    }
    else if(splitString[0]=='github')
    {
        document.getElementById("search-txt").value = splitString[1];
        f.setAttribute('action',"https://www.github.com/search")
    }
    else if(searchString.includes('.com'))
    {
        var s = searchString;
        if(s.includes('https://') == false)
        {
            s = 'https://' + s;
        }
        document.getElementById("search-txt").value = '';
        f.setAttribute('action',s)
    }
    else
    {
        f.setAttribute('action',"https://www.google.com/search")
    }

}

function realTimeClock() 
{
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var amPM = (hour < 12) ? "AM" : "PM";
    hour = (hour > 12) ? hour - 12 : hour;

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);


    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + amPM; /* adding time to the div */
    var t = setTimeout(function(){ realTimeClock() }, 1000); /* setting timer */
}
  
function updateTime(k) 
{
    if (k < 10) {return "0" + k;}
    else {return k;}
}


// function realTimeClock()
// {
//     var rtClock = new Date();
//     var hours = rtClock.getHours();
//     var minutes = rtClock.getMinutes();
//     var seconds = rtClock.getSeconds();

//     var amPM = (hours < 12) ? "AM" : "PM";

//     hours = (hours > 12) ? hours - 12 : hours;

//     hours = ("0" + hours).slice(-2);
//     minutes = ("0" + minutes).slice(-2);
//     seconds = ("O" + seconds).slice(-2);

//     document.getElementById('clock').innerHTML =
//         hours + " : " + minutes + " : " + seconds + " " + amPM;
   

//     var t = setTimeout(realTimeClock, 500);

// }



