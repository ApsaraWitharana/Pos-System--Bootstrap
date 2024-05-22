import orderDetailsModel from "../model/orderDetailsModel.js";
import {customer} from '/db/db.js';
import {items} from '/db/db.js';
import {order} from '/db/db.js';
import {orderDetails} from '/db/db.js';
import orderModel from "../model/orderModel.js";


let selectedCustomerId;
let selectedItemId;

let itemName;
let itemPrice;
let itemQty;
let orderQty;

var allTotal=0;

$("#btnPurchase").on('click', () => {

    let alertConfrim = confirm('Do you  want to Purchase this item');
    if (alertConfrim==true) {

        var orderId = $('#orderId').val();
        var orderDate = $('#orderDate').val();
        var cusIdOption = $('#cusIdOption').val();
        var itemIdOption = $('#itemIdOption').val();
        var orderQty = $('#orderQty').val();
        var total = $('#total').val();
        var txtCash = $('#txtCash').val();
        var txtDiscount = $('#txtDiscount').val();

        let orderDetailObj=new orderDetailsModel(
            orderId,orderDate,cusIdOption,itemIdOption,orderQty,total,txtCash,txtDiscount
        );

        orderDetails.push(orderDetailObj);
    }

    console.log(customer);

});

function generateCurrentDate(){
    $("#orderDate").val(new Date().toISOString().slice(0, 10));
}

function loadAllCustomerId() {
    $('#cusIdOption').empty();
    for (let customerArElement of customer) {
        $('#cusIdOption').append(`<option>${customerArElement.id}</option>`);
    }
}

function loadAllItemsId() {
    $('#itemIdOption').empty();
    for (let itemArElement of items) {
        $('#itemIdOption').append(`<option>${itemArElement.id}</option>`);
    }
}

loadAllItemsId();
loadAllCustomerId();
generateCurrentDate();

$('#cusIdOption').on('change', function(){
    selectedCustomerId = $('#cusIdOption option:selected').text();
    for (let customerArElement of customer) {
        if (customerArElement.id==selectedCustomerId){
            $('#orderCusName').val(customerArElement.name);
            $('#orderCusSalary').val(customerArElement.salary);
            $('#orderCusAddress').val(customerArElement.address);
        }
    }
});

$('#itemIdOption').on('change', function(){
    selectedItemId = $('#itemIdOption option:selected').text();
    for (let itemArElement of items) {
        if (itemArElement.id==selectedItemId){
             itemName = itemArElement.name;
             itemPrice = itemArElement.price;
             itemQty =itemArElement.qty;

             $('#orderFormItemName').val(itemName);
             $('#orderFormPrice').val(itemPrice);
             $('#orderFormQtyOnHand').val(itemQty);
        }
    }
});

function calTotal(itemPrice, orderQty) {
    let price=parseInt(itemPrice);
    let qty=parseFloat(orderQty);
    let total=price*qty;

    return total;
}

$("#btn_addItem").on('click', () => {
    orderQty = $('#orderQty').val();
    var CalTotal=calTotal(itemPrice,orderQty);

    allTotal+=CalTotal;

    let record = `
            <tr>
                <td>${selectedItemId}</td>
                <td>${itemName}</td> 
                <td>${itemPrice}</td>
                <td>${orderQty}</td> 
                <td>${CalTotal}</td> 
            </tr>`;
    $("#orderCart").append(record);

    let orderObj = new orderModel(CalTotal);
    order.push(orderObj);

    calTotalAllItem();
    updateQty();
    loadAllItemsId();

});

function updateQty(){
    var orderFormQtyOnHand=$('#orderFormQtyOnHand').val();
    var updateQty=orderFormQtyOnHand-orderQty;

    let selectedItemIndex = items.findIndex(item => item.id === selectedItemId);
    if (selectedItemIndex !== -1) {
        items[selectedItemIndex].qty = updateQty;
        $('#orderFormQtyOnHand').val(updateQty);
    }
}

function calTotalAllItem(){
    var totalAllItems = 0;
    order.forEach(item => {
        totalAllItems += item.total;
    });

    $('#total').val(totalAllItems);
    $('#subTotal').val(totalAllItems);
}

$("#orderQty").on('keyup', () => {
    var orderFormQtyOnHand=parseInt($('#orderFormQtyOnHand').val());
    var orderQty =parseInt($('#orderQty').val());
    var itemQtyPattern = /^\d+$/;
    var errorMessageQty = $('.errorOrderQty');
    var errorQty = $('.errorQty');


    if (!itemQtyPattern.test(orderQty)) {
        errorQty.show();
        $('#orderQty').css('border', '2px solid red');
    } else {
        errorQty.hide();
        $('#orderQty').css('border', '2px solid green');
    }

    if (orderQty>orderFormQtyOnHand){
        $('#orderQtyValue').text(orderFormQtyOnHand);
        errorMessageQty.show();
    }else {
        errorMessageQty.hide();
    }
})