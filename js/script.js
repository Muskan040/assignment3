// Student Info
const studentId = "271072016";
const studentName = "Mac13";

document.getElementById("studentInfo").innerText = `Student ID: ${studentId} - Student Name: ${studentName}`;

// Pizza Order Functionality
document.getElementById("orderButton").addEventListener("click", function() {
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);
    const amount= document.getElementById("pizzaQty").value;
    const pizza = new Pizza(size, crust, toppings,amount);
    displayPizza(pizza);
});
//building the contructor for pizza

class Pizza {
    constructor(size, crust, toppings, amount) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.amount= amount;
    }
//getting the description for the pizza order (final information)
    getDescription() {
        return ` ${this.amount} Pizza Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings.join(", ")}`;
    }
}


function displayPizza(pizza) {
    const pizzaDescription = pizza.getDescription();
    document.getElementById("pizzaDescription").innerText = pizzaDescription;
    document.getElementById("modal").style.display = "block"; // Show modal
}

// Close the modal when the close button or outside modal is clicked
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none"; // Hide modal
    //reloading the index page after closing the modal
    location.reload();
});

window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
        this.location.reload(); //reloading the index page after closing the modal
    }
});

