$(document).ready(function() {

    var utilities = [
        
        {
            CardName: "P drive Creation",
            description : "creates P drives, login with your AA account and include the user’s login ID", 
            link: "http://10.19.26.209/PDriveCreation/"

        }, 
        {
            CardName: "DID Utility",
            description : "Assigns Voalte number/extension for users. Enter user's Login ID and click assign", 
            link: "http://10.19.26.209/DidUtilityUi/DidUtilityUi/"
        }, 
        {
            CardName: "UCSF Service Now",
            description : "Organizes and documents ticket status linked to ARFs", 
            link: "https://ucsf.service-now.com"
        }, 
        {
            CardName: "Provision",
            description : "manages user account statuses snd stores application information", 
            link: "https://qccpvswap001/"

        }, 
        {
            CardName: "Citrix Webstore",
            description : "Log in here to obtain access to the different Apex environments via VPN", 
            link: "https://connect.ucsfmedicalcenter.org/vpn/index.html"
        }, 
        {
            CardName: "Voalte Admin",
            description : "View and manage status of Voalte accounts such as Roles, Divisions, Type, and Unit", 
            link: "https://voalte3.ucsfmedicalcenter.org/admin/#/login"
        }, 
        {
            CardName: "Daily GME Upload",
            description : "Update Housestaff Upload spreadsheet. Attach file and click upload", 
            link: "https://prodhousestaffupload.ucsfmedicalcenter.org/default.aspx"
        }, 
        {
            CardName: "MyAccess Lookup",
            description : "Search for users affiliation status, end date, and title in IID.",
            link: "https://myaccess.ucsf.edu/lookup"
        }, 
        {
            CardName: "UCSFMC ARF",
            description : "Allows users to submit Requests to create, modify, reactivate, or terminate accounts", 
            link: "http://accountrequestform.ucsfmedicalcenter.org"
        }, 
        {
            CardName: "Stuck ARFs",
            description : "1. Users submit !== create form when account does not exist. 2. User has multiple accounts (name change/aa accounts", 
            link: "https://arf.ucsfmedicalcenter.org/AccessControl/CreateTasks.aspx"
        }, 
        {
            CardName: "Suggested Approvers ARF",
            description : "When users select an 'approver' whom is not on the ARF approvers list. Manually send an approval email depending on the title", 
            link: "https://arf.ucsfmedicalcenter.org/accesscontrol/showrequests.aspx"
        }, 
        {
            CardName: "UCSF Mail Enable",
            description : "Main enables UCSF email. Please allow some time for it to populate in the Global Address Listing", 
            link: "https://myaccess.ucsf.edu/mailenable"
        }
        
    
    ];

    for (var i = 0; i < utilities.length; i += 3) {

        var resourceCard = $("<div>");

        resourceCard.addClass("site-card");

        resourceCard.attr("resource-card", utilities[i].CardName);

        // appending CardName, description, and link
        resourceCard.append("<strong>" + utilities[i].CardName +"</strong>" + "<br>" + "Summary: " + utilities[i].description + "<br>" + "<a href='" + utilities[i].link + "' target='_blank'>" + "Link to " + utilities[i].CardName + "</a>");
    
        $("#resource-card-col1").append(resourceCard);

    };
    for (var i = 1; i < utilities.length; i += 3) {

        var resourceCard = $("<div>");

        resourceCard.addClass("site-card");

        resourceCard.attr("resource-card", utilities[i].CardName);

        // appending CardName, description, and link
        resourceCard.append("<strong>" + utilities[i].CardName +"</strong>" + "<br>" + "Summary: " + utilities[i].description + "<br>" + "<a href='" + utilities[i].link + "' target='_blank'>" + "Link to " + utilities[i].CardName + "</a>");
    
        $("#resource-card-col2").append(resourceCard);

    };
    for (var i = 2; i < utilities.length; i += 3) {

        var resourceCard = $("<div>");

        resourceCard.addClass("site-card");

        resourceCard.attr("resource-card", utilities[i].CardName);

        // appending CardName, description, and link
        resourceCard.append("<strong>" + utilities[i].CardName +"</strong>" + "<br>" + "Summary: " + utilities[i].description + "<br>" + "<a href='" + utilities[i].link + "' target='_blank'>" + "Link to " + utilities[i].CardName + "</a>");
    
        $("#resource-card-col3").append(resourceCard);

    };


})

// Summary font smaller
// card border
// puting objects in config file