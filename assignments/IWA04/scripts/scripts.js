
// let date = 2050;

// if (date === 2050) {
//     let status = 'student';
    
// 	console.log("January", "New Year’s Day")
// 	console.log("March", "Human Rights Day")
//     let month = 'April';
// 	console.log(month, 'Family Day')
// 	console.log(month, 'Freedom Day')
//     let count = 4;

// 	if (status == 'student') {
// 	  console.log('June', 'Youth Day')
//         count = count + 1;
//   }

// 	console.log('August', 'Women’s Day')
// 	console.log('September', 'Heritage Day')
//     month = 'December';
// 	console.log(month, 'Day of Reconciliation')
//     count = count + 3;

// 	if (status === "parent") {
// 	console.log(month, 'Christmas Day')
//         count = count + 1;
//   }

// 	console.log(month, 'Day of Goodwill')
//      count = count + 1;

// }

function generateText() {
    
    let status = document.getElementById("status").value;
    let year = document.getElementById("year").value;
    let youth = ""
    let xmas = ""
    if (status == "student") {
        youth = "\nJune: \nYouth Day"
        
    }
    else {
        xmas = "\nChristmas Day"
    }
    let text = "Holidays: \n" + "Your status is: " + status + "\nYear: " + year +
    "\nJanuary: \nNew Year’s Day" + "\nMarch: \nHuman Rights Day"
        + "\nApril: \nFamily Day" + "\n Freedom Day" +  youth + "\nAugust: \nWomens Day"
        + "\nSeptember: \nHeritage Day" + "\nDecember: \nDay of Reconciliation" + 
          xmas + "\nDay of Goodwill";
    
    document.getElementById("text").innerText = text;
      
    
  }
