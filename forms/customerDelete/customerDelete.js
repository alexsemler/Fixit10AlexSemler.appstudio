let allNames = ""
customerDelete.onshow=function(){
    let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=ajs85167&query=" + query)

    if (req1.status == 200) { //transit worked.
            allCustomerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustomerData)
            for (i = 0; i <= allCustomerData.length - 1; i++) {
                allNames = allNames + allCustomerData[i][1] + "\n"
                txtOutput.value = allNames
        }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

checkBtn1.onclick=function(){
    let customerNameDel = choiceInput1.value
    let found = false
    for (i = 0; i <= allCustomerData.length - 1; i++) {
        if (customerNameDel == allCustomerData[i][1])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + customerNameDel + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=ajs85167&query=" + queryDelete)
      if (req1.status == 200) { //transit worked.
            if (req1.responseText == 500) {
                allNames = allNames.replace(customerNameDel, "")
                txtOutput.value = allNames
                NSB.MsgBox("You have successfully deleted the customer named " + customerNameDel)
           } else {
                NSB.MsgBox("There was a problem deleting " + customerNameDel + " from the database.")
                }
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } 
}
