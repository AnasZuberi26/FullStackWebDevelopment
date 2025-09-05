function createCard(num, title, cName, views, monthsOld, duration, thumbnail) {
    // Format views count
    if (views >= 1000000) views = (views / 1000000).toFixed(1) + "M";
    else if (views >= 1000) views = (views / 1000).toFixed(1) + "K";

    // Create card HTML
    let cardHTML = `
        <button class="container">
            <div class="num">${num}</div>
            <div class="image" style="background-image:url(${thumbnail})">
                <div class="duration">${duration}</div>
            </div>  
            <div class="info">
                <div class="title">${title}</div>
                <div class="details">${cName} • ${views} views • ${monthsOld} months ago</div>
            </div>
        </button>
    `;

    // Append new card to the body 
    document.body.insertAdjacentHTML("beforeend", cardHTML);
}

// Creating multiple cards
createCard(1, "Installing VS Code | Tutorial #1", "CodeWithHarry", 3778600, 8, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");

createCard(2, "Your first HTML website | Tutorial #2", "CodeWithHarry", 1305368, 5, "28:31", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg");

createCard(3, "Basic structure of HTML website | Tutorial #3", "CodeWithHarry", 893567, 3, "11:12", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w");
