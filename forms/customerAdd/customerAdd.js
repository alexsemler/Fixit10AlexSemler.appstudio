let allCusNames = ""

customerAdd.onshow=function(){
    let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=ajs85167&query=" + query)

    if (req1.status == 200) { //transit worked.
            allCustomerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustomerData)
            for (i = 0; i <= allCustomerData.length - 1; i++) {
                allCusNames = allCusNames + allCustomerData[i][1] + "\n"
                choiceOutput1.value = allCusNames
        }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

checkBtn2.onclick=function(){
    let name = "Jesse Antiques"
    let street = "1113 F St"
    let city = "Omaha"
    let state = "NE"
    let zipcode = "68178"
    var query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=ajs85167&query=" + query);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            allCusNames += "Jesse Antiques"
            choiceOutput1.value = allCusNames
        } else
            NSB.MsgBox("There was a problem with adding the pet to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}
