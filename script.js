document.getElementById("historyTabBtn").addEventListener("click", function(){
    const donateTab = document.getElementById("donateTab");
    donateTab.classList.add(
        "hidden"
    );

    const donateTabBtn = document.getElementById("donateTabBtn");
    donateTabBtn.classList.add(
        "bg-[#ffffff]"
    );

    const historyTab = document.getElementById("historyTab");
    historyTab.classList.remove(
        "hidden"
    );

    const historyTabBtn = document.getElementById("historyTabBtn");
    historyTabBtn.classList.add(
        "bg-[#B4F461]"
    );

    historyTabBtn.classList.remove(
        "bg-[#ffffff]"
    );
});


document.getElementById("donateTabBtn").addEventListener("click", function(){
    const donateTab = document.getElementById("donateTab");
    donateTab.classList.remove(
        "hidden"
    );

    const donateTabBtn = document.getElementById("donateTabBtn");
    donateTabBtn.classList.remove(
        "bg-[#ffffff]"
    );

    const historyTab = document.getElementById("historyTab");
    historyTab.classList.add(
        "hidden"
    );

    const historyTabBtn = document.getElementById("historyTabBtn");
    historyTabBtn.classList.remove(
        "bg-[#B4F461]"
    );

    historyTabBtn.classList.add(
        "bg-[#ffffff]"
    );
});

