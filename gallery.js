/*
 * Casually CSS Showcase Gallery
 * 
 * Contributors:
 * Andrea Abellera
 * 
 * INDEX LIST
 * 
 * If using a code editor, search up these I-codes (e.g. I2) to be directed to your desired action 
 * [I1] Insert new artwork
 * [I2] Change sequence of artworks that appear in frames
 * [I3] Manage handlers and functional UI code
 */

//----------------------------------------------------------------------------------------
// Artworks

const hippo = {
    id: "hippo",
    link: "hippo/hippo.html",
    comment: "Happy hippo wants to play",
    name: "Hichi the Hippo"
};

const sweets = {
    id: "sweets",
    link: "sweets/sweets.html",
    comment: "For Emily and Ann who are my very sweet friends",
    name: "Emily & Ann"
};

const orange = {
    id: "orange",
    link: "orange/orange.html",
    comment: "Would you want half a citrus slice?",
    name: "Odo the Orange"
};

const calendar = {
    id: "calendar",
    link: "calendar/calendar.html",
    comment: "I wonder what happens if I touch the page.. oh",
    name: "Cai~"
};

const dugong = {
    id: "dugong",
    link: "dugong/dugong.html",
    comment: "Mooo, I am a seacow. Not a manatee",
    name: "Sasha"
};

const boba = {
    id: "boba",
    link: "boba/boba.html",
    comment: "Yummy, delicious boba! Hover over to drink",
    name: "(/◕ヮ◕)/"
};

const octopus = {
    id: "octopus",
    link: "octopus/octopus.html",
    comment: "What is pink and with stretchy arms? An octopus!",
    name: "Octo Ouuu"
};

const bike = {
    id: "bike",
    link: "bike/bike.html",
    comment: "The wheels of the bike go round and round",
    name: "Vic the vroom vroom"
};

const beluga = {
    id: "beluga",
    link: "beluga/beluga.html",
    comment: "A Marshmallow beluga is only one of its kind",
    name: "Beaan"
};

const button = {
    id: "button",
    link: "button/button.html",
    comment: "This button is made for Scientific purposes",
    name: ""
};

// [I1] Insert your new artwork above by creating a Javascript object for it
//      Copy format of other artwork objects for reference
//      When finished, head to [I2] to add your artwork to the gallery list



//----------------------------------------------------------------------------------------
// [I2] Gallery List
//      Modify the order of the list below to change the sequence of artworks that appear in frames

const artworks = [
    hippo,
    sweets, 
    orange, 
    calendar,
    dugong, 
    boba, 
    octopus, 
    bike,
    beluga,
    button
];



//----------------------------------------------------------------------------------------
// [I3] Functional UI code
//

document.addEventListener("DOMContentLoaded", () => {
    setupSidebar();
    loadArtwork();
});

function loadArtwork(){
    let current = window.location.href.split('#');
    // Scroll to linked artwork
    if(current.length > 1){
        let art = document.getElementById(current[1])
        if(art)
            art.click();
        else // Invalid link, default to first artwork
            document.getElementById(artworks[0].id).click(); 
    }
    else // No link provided, default to first artwork
        document.getElementById(artworks[0].id).click();
}

function setupSidebar(){
    var sidebar = document.getElementById("sidebar");
    var sidebarContent = document.getElementById("sidebar-content");
    var toggler = document.getElementById("toggler");

    // Toggle and collapse functionality
    toggler.addEventListener("click", function () {
        if (sidebar.style.width == "13vw" || sidebar.style.width == ""){
            toggler.classList.replace("open", "close");
            closeSidebar(sidebar);
        }
        else{ 
            toggler.classList.replace("close", "open");
            openSidebar(sidebar);
        }
    });

    // Add frames
    for (art of artworks){
        let frame = document.createElement("a");
        frame.id = art.id;
        frame.href = "#" + art.id;
        frame.classList.add("frame");
        frame.innerText = art.id;
        sidebarContent.appendChild(frame);
    }

    for (art of artworks)
        addFrameListener(art);
}

function addFrameListener(art) {
    let frame = document.getElementById(art.id);
    frame.addEventListener("click", function () { 
        loadArtboard(art); 
        clearSelected();
        frame.classList.add("selected");
    });
}

function loadArtboard(art) {
    document.getElementById("artboard").innerHTML = "<iframe src =" + art.link + "></iframe>";
    document.getElementById("comment").innerText = art.comment;
    document.getElementById("name").innerText = art.name;
}

function clearSelected(){
    frames = document.getElementsByClassName("frame");
    for (fr of frames){
        fr.classList.remove("selected");
    }
}

function openSidebar(sidebar) {
    var id = setInterval(frame, 8);
    var pos = 0;
    function frame() {
      if (pos == 13)
        clearInterval(id);
      else {
        pos++;
        sidebar.style.width = pos + "vw";
      }
    }
}
  
function closeSidebar(sidebar) {
    var id = setInterval(frame, 8);
    var pos = 13;
    function frame() {
      if (pos == 0)
        clearInterval(id); 
      else {
        pos--;
        sidebar.style.width = pos + "vw";
      }
    }
}
  