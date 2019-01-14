$(document).ready(function() {

    var utilities = [
        
        {
            CardName: "P drive Creation",
            hoverI : "creates P drives, login with your AA account and include the user’s login ID", 
            link: "www.google.com"

        }, 
        {
            CardName: "DID Utility",
            hoverI : "Assigns Voalte number and extension for users. Just attached Login ID", 
            link: "www.google.com"
        }
        
    
    ];

    for (var i = 0; i < utilities.length; i++) {

        var resourceCard = $("<div>");

        // namesBtn.addClass("letter-button letter letter-button-color");

        resourceCard.attr("portal-info", utilities[i].CardName);

        resourceCard.append(utilities[i].CardName + "<br>" + "Summary: " + utilities[i].hoverI + "<br>" + "<a href='" + utilities[i].link + "'>" + utilities[i].link + "</a>");

    
        $("#resource-card").append(resourceCard);

    };

    // $(".letter-button").on("click", function() {

    //     var fridgeMagnet = $("<div>");

    //     fridgeMagnet.addClass("letter fridge-color");

    //     fridgeMagnet.text($(this).attr("data-letter"));

    //     $("#resource-card").append(fridgeMagnet);
    // })

})