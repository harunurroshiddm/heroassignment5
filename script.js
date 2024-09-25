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



document.getElementById('noakhaliDonateBtn')
.addEventListener('click', function(event){
    event.preventDefault();
    const currentBalnace = document.getElementById('accountBalance').innerText;
    const currentBalnaceAmount = parseFloat(currentBalnace);
    
    const noakhaliDonate = document.getElementById('noakhaliDonateAmount').value;
    const noakhaliDonateAmount = parseFloat(noakhaliDonate);

if (noakhaliDonateAmount > currentBalnaceAmount){
    alert('Apnar mon onek boro takaw thaka dorkar.');
        return;
}

if (noakhaliDonateAmount <= 0){
    alert('Tui rajakar!');
        return;
}

if (isNaN(noakhaliDonateAmount)){
    alert('Dua na taka donate korun!');
        return;
}

    const updateBalance = currentBalnaceAmount - noakhaliDonateAmount;
    document.getElementById('accountBalance').innerText = updateBalance;

    const noakhaliTillDonate = document.getElementById('noakhaliTillNowDonate').innerText;
    const noakhaliTillDonateAmount = parseFloat(noakhaliTillDonate);
    const noakhaliDonateUpdate = noakhaliTillDonateAmount + noakhaliDonateAmount;
    document.getElementById('noakhaliTillNowDonate').innerText = noakhaliDonateUpdate;
})