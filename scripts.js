// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(events){
    let takeoff = document.getElementById("takeoff");
    let flightstatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let landing = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");

    takeoff.addEventListener("click", function () {
        if(window.confirm("Is the shuttle is ready for takeoff?")) {
            flightstatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = 10000;
        }; //if close
    });//takeoff close

    landing.addEventListener("click", function (){
        alert("The shuttle is Landing. Landing gear engaged.");
        flightstatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
    });//landing close

    abort.addEventListener("click", function () {
        if(window.confirm("Confirm that you want to abort the mission.")) {
            flightstatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerText = 0;
        }
    });// abort close

    let positionX = 0;
    let positionY = 0;function moveRocket(moveX, moveY){
            positionX += moveX;
            positionY += moveY;
            rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;  
        }

    right.addEventListener("click", function(){
        moveRocket(10,0);
    });

    left.addEventListener("click", function(){
        moveRocket(-10,0);
    });

    up.addEventListener("click", function(){
        moveRocket(0,-10);
        let shuttleheight = Number(spaceShuttleHeight.innerHTML);
        if(shuttleheight >= 0){
            shuttleheight += 10000;
            spaceShuttleHeight.innerText = shuttleheight;
        }    

    });

    down.addEventListener("click", function(){
        moveRocket(0, 10);
        let shuttleheight = Number(spaceShuttleHeight.innerHTML);
        if(shuttleheight >= 10000){
            shuttleheight += -10000;
            spaceShuttleHeight.innerText = shuttleheight;
        } else {
            alert("Uh.... The shuttle is landed.");
        }    
    });
    


} //window onload close