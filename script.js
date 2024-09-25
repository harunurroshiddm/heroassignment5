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
    
    const noakhaliDonateCampaign = document.getElementById('noakhaliDonateCampaign').innerText;

    const div = document.createElement("div");
    div.classList.add("border", "rounded-lg", "py-4", "px-2", "mb-2");

    div.innerHTML = `<p class ='p-3'><span class='font-bold'>${noakhaliDonateAmount} Taka is Donated for ${noakhaliDonateCampaign}</span><br><span class='text-sm'>Date: ${Date()}</span></p>`;
    document.getElementById("historyTab").appendChild(div);

    document.getElementById('my_modal_5').showModal();

})



document.getElementById('feniDonateBtn')
.addEventListener('click', function(event){

    const currentBalnace = document.getElementById('accountBalance').innerText;
    const currentBalnaceAmount = parseFloat(currentBalnace);
    
    const feniDonate = document.getElementById('feniDonateAmount').value;
    const feniDonateAmount = parseFloat(feniDonate);

if (feniDonateAmount > currentBalnaceAmount){
    alert('Apnar mon onek boro takaw thaka dorkar.');
        return;
}

if (feniDonateAmount <= 0){
    alert('Tui rajakar!');
        return;
}

if (isNaN(feniDonateAmount)){
    alert('Dua na taka donate korun!');
        return;
}

    const updateBalance = currentBalnaceAmount - feniDonateAmount;
    document.getElementById('accountBalance').innerText = updateBalance;

   
    const feniTillDonate = document.getElementById('feniTillNowDonate').innerText;
    const feniTillDonateAmount = parseFloat(feniTillDonate);
    const feniDonateUpdate = feniTillDonateAmount + feniDonateAmount;
    document.getElementById('feniTillNowDonate').innerText = feniDonateUpdate;
    
    const feniDonateCampaign = document.getElementById('feniDonateCampaign').innerText;

    const div = document.createElement("div");
    div.classList.add("border", "rounded-lg", "py-4", "px-2", "mb-2");

    div.innerHTML = `<p class ='p-3'><span class='font-bold'>${feniDonateAmount} Taka is Donated for ${feniDonateCampaign}</span><br><span class='text-sm'>Date: ${Date()}</span></p>`;
    document.getElementById("historyTab").appendChild(div);

    document.getElementById('my_modal_5').showModal();

})


document.getElementById('quotaDonateBtn')
.addEventListener('click', function(event){

    const currentBalnace = document.getElementById('accountBalance').innerText;
    const currentBalnaceAmount = parseFloat(currentBalnace);
    
    const quotaDonate = document.getElementById('quotaDonateAmount').value;
    const quotaDonateAmount = parseFloat(quotaDonate);

if (quotaDonateAmount > currentBalnaceAmount){
    alert('Apnar mon onek boro takaw thaka dorkar.');
        return;
}

if (quotaDonateAmount <= 0){
    alert('Tui rajakar!');
        return;
}

if (isNaN(quotaDonateAmount)){
    alert('Dua na taka donate korun!');
        return;
}

    const updateBalance = currentBalnaceAmount - quotaDonateAmount;
    document.getElementById('accountBalance').innerText = updateBalance;

    const quotaTillDonate = document.getElementById('quotaTillNowDonate').innerText;
    const quotaTillDonateAmount = parseFloat(quotaTillDonate);
    const quotaDonateUpdate = quotaTillDonateAmount + quotaDonateAmount;
    document.getElementById('quotaTillNowDonate').innerText = quotaDonateUpdate;
    
    const quotaDonateCampaign = document.getElementById('quotaDonateCampaign').innerText;

    const div = document.createElement("div");
    div.classList.add("border", "rounded-lg", "py-4", "px-2", "mb-2");

    div.innerHTML = `<p class ='p-3'><span class='font-bold'>${quotaDonateAmount} Taka is Donated for ${quotaDonateCampaign}</span><br><span class='text-sm'>Date: ${Date()}</span></p>`;
    document.getElementById("historyTab").appendChild(div);

    document.getElementById('my_modal_5').showModal();

})

document.getElementById("blogBtn").addEventListener("click", function () {
    window.location = "/blog.html";
  });

document.getElementById("homeBtn").addEventListener("click", function () {
    window.location = "/index.html";
    });
