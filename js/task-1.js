const link = document.querySelectorAll(".item");
console.log("Number of categories:", link.length);

link.forEach((item) => {
    const name = item.querySelector("h2");
    name.className = "item-title"; 
    console.log("Category:", name.textContent);

    const item_ul = item.querySelector("ul");
    item_ul.className = "item-ul"; 
        
    const name_list = item.querySelectorAll("li");
    name_list.forEach((li) => {
        li.className = "item-li";
    });
    console.log("Elements:", name_list.length);
})


