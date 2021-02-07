//repository link

//01.kilometerTometer
function kilometerTometer(distance){
   if(distance>=0){
    var result=distance*1000;
    return result;
   }

    else if(typeof distance == 'string'){
    var result="This is not a number";
    return result;
   }

   else{
    result="Incorrect input or value"
       return result;
   }
}
// 02. budgetCalculator()

function budgetCalculator(watch,phone,laptop){
    var watchPrice=watch*50;
    var phonePrice=phone*100;
    var laptopPrice=laptop*500;
    totalBudget=watchPrice+phonePrice+laptopPrice;
    return totalBudget;
}

// 03. hotelCost()
function hotelCost(stayDays){
   if(stayDays>=0){
    if(stayDays<=10){
        totalCost=stayDays*100;
    }
    else if(stayDays<=20){
        var firsTendays=10*100;
        var remaining= stayDays-10;
        var secondTenDays=remaining*80;
        totalCost=firsTendays+secondTenDays;
    }
    else if(isNaN(stayDays)){
        return "in valid input"
    }
    else{
        var firsTendays=10*100;
        var secondTenDays=10*80;
        var remaining=stayDays-20;
        var lastDaysCost = remaining*50;
        totalCost=firsTendays+secondTenDays+lastDaysCost;
    }
    return totalCost;
   }
  
   else{
       totalCost="Your input does not exist";
       return totalCost;
   }
}

// 04. megaFriend()

 var friends=["halim","halim","shari","bhuiyan","ikbal","bhuiyan1"]
 function megaFriend(friends){
    var longestName=friends[0].length;
    for(i=0;i<friends[0].length;i++){
         var element=friends[i].length;
         if(element>longestName){
            longestName=friends[i];
         }

     }
    return longestName;
 }







