function dateMethod(){
    const currentDate = new Date(); 
    console.log("Current Date: ", currentDate); 

    // getting various components of the date

    console.log("Date: ", currentDate.getDate());
    console.log("Month: ", currentDate.getMonth() + 1); // months are zero indexed, so adding 1
    console.log("Year: ", currentDate.getFullYear()); 
    console.log("Hours: ", currentDate.getHours()); 
    console.log("Minutes: ", currentDate.getFullYear()); 
    console.log("Seconds: ", currentDate.getSeconds()); 

    // setting components of the date 
    currentDate.setFullYear(2026);
    console.log("After setFullYear: ", currentDate); 
    
    currentDate.setMonth(3); 
    console.log("After setMonth", currentDate); 

    // getting the setting time in milliseconds since 1970  
    console.log("Time in milliSeconds since 1970: ", currentDate.getTime())

    const newDate = new Date(2026,3, 20); 
    console.log("New Date: ", newDate); 
}

dateMethod()