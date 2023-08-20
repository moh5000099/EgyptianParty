myEvent = new Date(2025, 5, 6,13); // months from 0 to 11
// myEvent = new Date("12/28/2022"); // months from 0 to 11
let barWidth= $(".bar").outerWidth(true);
$(".bar").css("left",`-${barWidth}px`);

$(window).resize(function(){
    barWidth= $(".bar").outerWidth(true);
    if($(".open").css("left") != "0px" || $(".open").css("left") !=`${barWidth}px`){
        
        if($(".bar").css("left") != "0px"){
            $(".bar").css({"left":`-${barWidth}px`});
            $(".open").css({left:`0px`});
        }
        else{
            $(".bar").css({"left":`${0}px`});
            $(".open").css({left:`${barWidth}px`});
        }

    }
});

$(".open").click(function(){
    barWidth= $(".bar").outerWidth(true);
    if($(".bar").css("left") == "0px"){
        $(".bar").animate({"left":`-${barWidth}px`});
        $(this).animate({left:`0px`});
    }
    else{
        $(".bar").animate({"left":`${0}px`});
        $(this).animate({left:`${barWidth}px`});
    }
});

$(".close").click(function(){
    barWidth= $(".bar").outerWidth(true);
    $(".bar").animate({"left":`-${barWidth}px`});
    $(".open").animate({left:`0px`});

});

$(".itemHead").click(function(){
    $(this).next().slideToggle();
    $(".itemBody").not($(this).next()).slideUp();
});

updateTime();
setInterval(updateTime,1000);

function updateTime(){
    myCurrent= new Date();

    // let days = Math.floor( ((((myEvent.getTime() - myCurrent.getTime())/1000)/3600)/24)
    // );
    //or
    // let days = ( ( (myEvent.getFullYear() - myCurrent.getFullYear() ) *  365 )
    //             +( (myEvent.getMonth() - myCurrent.getMonth() ) *  30 )
    //             +( (myEvent.getDate() - myCurrent.getDate() ) )
    // );

    // if(days<0){
    //     days=0;
    // }
    
    // let hours = myEvent.getHours() - myCurrent.getHours() ;
    // if(hours < 0){
    //     if(days>0){
    //         days--;
    //         hours+=24;
    //     }
    //     else{
    //         hours=0;
    //     }
    // }
    
    // let min = myEvent.getMinutes() - myCurrent.getMinutes() ;
    // if(min < 0){
    //     if(hours>0){
    //         hours--;
    //         min+=60;
    //     }
    //     else{
    //         min=0;
    //     }
    // }
    
    // let sec = myEvent.getSeconds() - myCurrent.getSeconds() ;
    // if(sec < 0){
    //     if(min>0){
    //         min--;
    //         sec+=60;
    //     }
    //     else{
    //         sec=0;
    //     }
    // }

    let diffTime=myEvent.getTime()-myCurrent.getTime();

    let sec = Math.floor(diffTime/1000); //reslution of counter
    let min = Math.floor(sec/60); //reslution of counter
    let hours = Math.floor(min/60); //reslution of counter
    let days = Math.floor(hours/24) - 30 ; //my main counter
    hours %= 24;
    min %= 60;
    sec %= 60;

    if(days<10){
        days=`0${days}`;
    }
    else{
        days=`${days}`;
    }
    if(hours<10){
        hours=`0${hours}`;
    }
    else{
        hours=`${hours}`;
    }
    if(min<10){
        min=`0${min}`;
    }
    else{
        min=`${min}`;
    }
    if(sec<10){
        sec=`0${sec}`;
    }
    else{
        sec=`${sec}`;
    }


    $("#days").html(`${days}`);
    $("#hours").html(`${hours}`);
    $("#min").html(`${min}`);
    $("#sec").html(`${sec}`);
}


$("textarea").keyup(function(){
    let len= $(this).val().length;
    if(100-len>0){
        $("#counter").html(`${100-len}`);
    }
    else{
        $("#counter").html(`your available character finished`);
    }
});
