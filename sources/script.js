// const cpus = document.getElementById('allcpus');

const selectOptons = document.querySelectorAll('#allcpus');
selectOptons.forEach(select => {

    select.addEventListener('change', function(e){
        const selected = e.target.value;

        const splitSelected = selected.split(" ");

        const getPrice = splitSelected[splitSelected.length -1];

        const price = getPrice.slice(1, -1);

        const priceStrToNum = parseFloat(price);

        console.log(selected, splitSelected, getPrice, typeof priceStrToNum, priceStrToNum);

    })
})

