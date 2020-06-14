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
    title();
}

function clearOrder () { 
    for (i=0; i<products_counter.length; i++) { 
        products_counter[i]=0;
        boomerRemover(i);
    }
    showMeOrder();
}

function title () { 
    let basket=0,
        title = '';
    for (i=0; i<products_counter.length; i++) { 
        basket += products_counter[i];
    }
    if (basket==0) title = "Zamawiaj z przyjemnością!";
    else if (basket>0) title = "(" + basket +") Zamawiaj z przyjemnością!";
    document.getElementsByTagName("title")[0].innerHTML = title;
}