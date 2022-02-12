document.getElementById('buyer-info-btn').addEventListener('click', function(){
    const buyerInput = document.getElementById('input-buyer-info');
    const inputedBuyerInfo = buyerInput.value;
    const callCard = document.getElementById('buyer-card');
    callCard.innerText = inputedBuyerInfo;
    
    buyerInput.value = ''
})

function getProductData(){
    const getListItem = document.getElementById('list-Item').value;
    const getQuantity = document.getElementById('Quantity').value;
    // Error messege
    if(getListItem == '' || getQuantity == ''){
        alert('Please enter your Product name & Quantity')
    }
    const total = getQuantity*10;
    const tableContainer = document.getElementById('table-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<th>${'2'}</th><th>${getListItem}</th><th>${getQuantity}</th><th>${total}</th>`
    tableContainer.appendChild(tableRow)
}