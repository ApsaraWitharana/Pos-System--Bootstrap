
/*---------spa-----------*/
$('.order-section').hide();
$('#item-section').hide();
$('#customer-section').hide();

$('#home-btn').on('click', () =>{
    $('#homediv').show();
    $('.order-section').hide();
    $('#item-section').hide();
    $('#customer-section').hide();
});

$('#order-btn').on('click', () =>{
    $('#homediv').hide();
    $('#item-section').hide();
    $('#customer-section').hide();
    $('.order-section').show();
});

$('#item-btn').on('click', () =>{
    $('#homediv').hide();
    $('.order-section').hide();
    $('#customer-section').hide();
    $('#item-section').show();
});

$('#customer-btn').on('click', () =>{
    $('#homediv').hide();
    $('.order-section').hide();
    $('#item-section').hide();
    $('#customer-section').show();

});

/*validate field*/
$(document).on('keydown', function(event) {
    if (event.keyCode == 9) {
        event.preventDefault();
    }
});

function checkIdField(){
    var cusid = $('#customerID').val();
    var cusidPattern = /^C\d{2}-\d{3}$/;
    var errorMessage = $('.errorMessageId');

    if (!cusidPattern.test(cusid)) {
        errorMessage.show();
        $('#customerID').css({'border': '2px solid red'});
    } else {
        errorMessage.hide();
        $('#customerID').css({'border': '2px solid green'});
    }

}

function checkNameField() {
    var cusName = $('#customerName').val();
    var cusNamePattern = /^\s*\S.{3,18}\S\s*$/;
    var errorMessageName=$('.errorMessageName');

    if (!cusNamePattern.test(cusName)) {
        errorMessageName.show();
        $('#customerName').css({'border': '2px solid red'});
    } else {
        errorMessageName.hide();
        $('#customerName').css({'border': '2px solid green'});
    }
}

function checkFieldAddress() {
    var cusAddress = $('#customerAddress').val();
    var cusAddressPattern = /^.{7,}$/;
    var errorMessageAddress = $('.errorMessageAddress');

    if (!cusAddressPattern.test(cusAddress)) {
        errorMessageAddress.show();
        $('#customerAddress').css('border', '2px solid red');
    } else {
        errorMessageAddress.hide();
        $('#customerAddress').css('border', '2px solid green');
    }
}

function checkFieldSalary() {
    var cusSalary = $('#customerSalary').val();
    var cusSalaryPattern = /^(?:\d+|\d+\.\d{2})$/;
    var errorMessageSalary = $('.errorMessageSalary');

    if (!cusSalaryPattern.test(cusSalary)) {
        errorMessageSalary.show();
        $('#customerSalary').css('border', '2px solid red');
    } else {
        errorMessageSalary.hide();
        $('#customerSalary').css('border', '2px solid green');
    }
}

function checkFieldItemId() {
    var itemId = $('#IID').val();
    var itemIdPattern = /^I\d{2}-\d{3}$/;
    var errorMessageItemId = $('.errorMessageItemId');

    if (!itemIdPattern.test(itemId)) {
        errorMessageItemId.show();
        $('#IID').css('border', '2px solid red');
    } else {
        errorMessageItemId.hide();
        $('#IID').css('border', '2px solid green');
    }
}

function checkFieldItemName() {
    var itemName = $('#IName').val();
    var ItemNamePattern = /^\s*\S.{3,18}\S\s*$/;
    var errorMessageItemName = $('.errorMessageItemName');

    if (!ItemNamePattern.test(itemName)) {
        errorMessageItemName.show();
        $('#IName').css('border', '2px solid red');
    } else {
        errorMessageItemName.hide();
        $('#IName').css('border', '2px solid green');
    }
}

function checkFieldItemPrice() {
    var itemPrice = $('#IPrice').val();
    var ItemPricePattern  = /^(?:\d+|\d+\.\d{2})$/;
    var errorMessageItemPrice = $('.errorMessageItemPrice');

    if (!ItemPricePattern.test(itemPrice)) {
        errorMessageItemPrice.show();
        $('#IPrice').css('border', '2px solid red');
    } else {
        errorMessageItemPrice.hide();
        $('#IPrice').css('border', '2px solid green');
    }
}

function checkFieldItemQty() {
    var itemQty = $('#Iquentity').val();
    var itemQtyPattern = /^\d+$/;
    var errorMessageItemQty = $('.errorMessageItemQty');

    if (!itemQtyPattern.test(itemQty)) {
        errorMessageItemQty.show();
        $('#Iquentity').css('border', '2px solid red');
    } else {
        errorMessageItemQty.hide();
        $('#Iquentity').css('border', '2px solid green');
    }
}


// ==============================barchat=========================

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Line Chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                label: 'Population',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});


