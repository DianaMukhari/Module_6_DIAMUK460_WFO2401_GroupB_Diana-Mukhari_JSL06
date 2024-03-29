
// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('div');
        const categoryName = document.createElement('strong'); // Create strong element for bold text
        categoryName.textContent = category;
        categoryElement.appendChild(categoryName); // Append category name to strong element
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');
        menuContainer.appendChild(itemList);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));
            itemList.appendChild(listItem);
        });
    }
}


// Callback function for adding an item to the order
const addToOrder = (function () {
    let order = []; // Maintain the state of the order

    return function (itemName) {
        const orderItemsList = document.getElementById('order-items');
        const orderTotalElement = document.getElementById('order-total');

        // Create a list item for the order
        const listItem = document.createElement('li');
        listItem.textContent = itemName;

        // Append the list item to the order items list
        orderItemsList.appendChild(listItem);

        // Calculate and update the total price
        const itemPrice = 5; // Assuming a fixed price for each item
        order.push(itemPrice);
        const totalPrice = order.reduce((acc, curr) => acc + curr, 0);

        // Update the text content of the order total element with the new total
        orderTotalElement.textContent = `Total: ${totalPrice}`;
    };
})();

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);


