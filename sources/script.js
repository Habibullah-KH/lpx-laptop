let totalBalance = document.getElementById("totalBalance");
let totalBalanceN = parseFloat(totalBalance.innerText);

let ram = 0;
let cpu = 0;
let storage = 0;

function utilitis(id){

const selectOptons = document.querySelectorAll(id);
selectOptons.forEach(select => {
    console.log(selectOptons);

    select.addEventListener('change', function(e){
        const selected = e.target.value;
console.log(e.target.name);
const splitSelected = selected.split(" ");


const getPrice = splitSelected[splitSelected.length -1];

const price = getPrice.slice(1, -1);

const priceStrToNum = parseFloat(price);

if(e.target.name == 'amd' || e.target.name == 'intel'){

    cpu = priceStrToNum
}

else if(e.target.name == 'ram'){

    ram = priceStrToNum
}

else if(e.target.name == 'storage'){

    storage = priceStrToNum
}
totalBalance.innerText = ram + cpu + storage;
// ram = priceStrToNum;
// totalBalanceN = ram;
        // console.log(selected, splitSelected, getPrice, typeof priceStrToNum, priceStrToNum);

        // console.log(typeof totalBalance);


    })
})


}

utilitis('#allcpus')
utilitis('#ramStorage')


//* Main balance update

