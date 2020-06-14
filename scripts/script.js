let order = document.getElementsByTagName("textarea")[1], 
    count = 0, 
    i,
    products_counter = [0,0,0,0,0,0,0], 
    products = [
        "jogurt grecki", 
        "kefir", 
        "kozi ser", 
        "miód", 
        "mleko odtłuszczone", 
        "ser żółty", 
        "twaróg"
    ]

function addProduct(product_index) { 
    products_counter[product_index]++; 
    boomerRemover(product_index);
    showMeOrder();
}

function removeProduct (product_index) {
    products_counter[product_index]--;
    boomerRemover(product_index);
    showMeOrder();
}
function boomerRemover (product_index) { 
    if(products_counter[product_index]>0) { 
        /*document.getElementById("_product" + product_index).style.display= "block";*/
        document.getElementById("product" + product_index).style.width = "80%"; 
        document.getElementById("_product" + product_index).style.width = "20%";
    }
    else if (products_counter[product_index]==0) { 
        document.getElementById("product" + product_index).style.width = "100%"; 
        document.getElementById("_product" + product_index).style.width = "0%";
        /*document.getElementById("_product" + product_index).style.display = "none";*/
    }
}

function showMeOrder () { 
    order.value = "Moje zamówienie: ";
    for (i=0; i<products_counter.length; i++) { 
        if(products_counter[i]>0) {
            order.value += products[i] + "(" + products_counter[i] + "), "; 
        }
    }
}

function clearOrder () { 
    for (i=0; i<products_counter.length; i++) { 
        products_counter[i]=0;
        boomerRemover(i);
    }
    showMeOrder();
}
