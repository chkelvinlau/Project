$(document).ready(function(){
    var displayDiv = document.getElementById("display");
    var homeMenu = document.getElementById("h_menu");
    var pdMenu = document.getElementById("pd_menu");
    var vpMenu = document.getElementById("vp_menu");
    var dlMenu = document.getElementById("dl_menu");
    var rvMenu = document.getElementById("rv_menu");
    var spMenu = document.getElementById("sp_menu");
    var menuGroup = document.getElementsByClassName("menu");
    var aboutUS = document.getElementById("company_link");
    var activeMenu = "h_menu";
    
    /** Menu mouseover stuff **/
    homeMenu.onmouseover = function(){
        homeMenu.style.backgroundColor = "#6CE892";
    };
    homeMenu.onmouseout = function(){
        if (activeMenu == "h_menu") {
            homeMenu.style.backgroundColor = "#6CE892";
        } else {
            homeMenu.style.backgroundColor = "#00C4FF";
        };   
    };
    
    pdMenu.onmouseover = function(){
        pdMenu.style.backgroundColor = "#6CE892";
    };
    pdMenu.onmouseout = function(){
        if (activeMenu == "pd_menu") {
            pdMenu.style.backgroundColor = "#6CE892";
        } else {
            pdMenu.style.backgroundColor = "#00C4FF";
        }; 
    };
    
    vpMenu.onmouseover = function(){
        vpMenu.style.backgroundColor = "#6CE892";
    };
    vpMenu.onmouseout = function(){
        if (activeMenu == "vp_menu") {
            vpMenu.style.backgroundColor = "#6CE892";
        } else {
            vpMenu.style.backgroundColor = "#00C4FF";
        }; 
    };
    
    dlMenu.onmouseover = function(){
        dlMenu.style.backgroundColor = "#6CE892";
    };
    dlMenu.onmouseout = function(){
        if (activeMenu == "dl_menu") {
            dlMenu.style.backgroundColor = "#6CE892";
        } else {
            dlMenu.style.backgroundColor = "#00C4FF";
        }; 
    };
    
    rvMenu.onmouseover = function(){
        rvMenu.style.backgroundColor = "#6CE892";
    };
    rvMenu.onmouseout = function(){
        if (activeMenu == "rv_menu") {
            rvMenu.style.backgroundColor = "#6CE892";
        } else {
            rvMenu.style.backgroundColor = "#00C4FF";
        }; 
    };
    
    spMenu.onmouseover = function(){
        spMenu.style.backgroundColor = "#6CE892";
    };
    spMenu.onmouseout = function(){
        if (activeMenu == "sp_menu") {
            spMenu.style.backgroundColor = "#6CE892";
        } else {
            spMenu.style.backgroundColor = "#00C4FF";
        }; 
    };
    
    /** default home page load **/
    $.ajax({
       url:"home.html",
       datatype:"html",
       success:function(resp){
           //if succussful, come back with response
           displayDiv.innerHTML = resp;
           activeMenu = "h_menu";
           homeMenu.style.backgroundColor = "#6CE892";
       } 
    });
    
    /** display plage loading **/
    var i;
    homeMenu.onclick = function() {
        $.ajax({
           url:"home.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               displayDiv.innerHTML = resp;
           } 
        });
        activeMenu = "h_menu";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        homeMenu.style.backgroundColor = "#6CE892";
    };
    
    pdMenu.onclick = function() {
        $.ajax({
           url:"pdetails.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               displayDiv.innerHTML = resp;
           } 
        });
        activeMenu = "pd_menu";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        pdMenu.style.backgroundColor = "#6CE892";
    };
    
    vpMenu.onclick = function() {
        $.ajax({
           url:"vpicker.html",
           datatype:"html",
           success:function(resp){
                //if succussful, come back with response
                displayDiv.innerHTML = resp;
               
                /** infographic script **/
                var introVP = document.getElementById("introq");
                var beginVP = document.getElementById("answer_0_a");
                var q1 = document.getElementById("question_1");
                var a1a = document.getElementById("answer_1_a");
                var a1b = document.getElementById("answer_1_b");
                var a1c = document.getElementById("answer_1_c");
                var q2 = document.getElementById("question_2");
                var a2a = document.getElementById("answer_2_a");
                var a2b = document.getElementById("answer_2_b");
                var q3 = document.getElementById("question_3");
                var a3a = document.getElementById("answer_3_a");
                var a3b = document.getElementById("answer_3_b");
                var q4 = document.getElementById("question_4");
                var a4a = document.getElementById("answer_4_a");
                var a4b = document.getElementById("answer_4_b");
                var q5 = document.getElementById("question_5");
                var a5a = document.getElementById("answer_5_a");
                var a5b = document.getElementById("answer_5_b");
                var a5c = document.getElementById("answer_5_c");
                var resultVP = document.getElementById("result");
                var appVerDiv = document.getElementById("app_version")
                var appLink = document.getElementById("app_link");
                var appImg = document.getElementById("app_img");
                var appVersion = document.getElementById("app_result");
                var rentDiv = document.getElementById("rentwatch");
                var learnMore = document.getElementById("learnmore");

                var response1 = false;
                var response2 = false;
                var response3 = 0;

                beginVP.onclick = function() {
                    beginVP.style.borderColor = "rgba(108,232,146,1)";
                    introVP.style.left = "-150vw";
                    q1.style.left = "15vw";
                    a5a.style.borderColor = "rgba(108,232,146,0)";
                    a5b.style.borderColor = "rgba(108,232,146,0)";
                    a5c.style.borderColor = "rgba(108,232,146,0)";
                };
               
               a1a.onclick = function() {
                   beginVP.style.borderColor = "rgba(108,232,146,0)";
                   a1a.style.borderColor = "rgba(108,232,146,1)";
                   q1.style.left = "-150vw";
                   q2.style.left = "15vw";
               };
               a1b.onclick = function() {
                   beginVP.style.borderColor = "rgba(108,232,146,0)";
                   a1b.style.borderColor = "rgba(108,232,146,1)";
                   q1.style.left = "-150vw";
                   q2.style.left = "15vw";
               };
               a1c.onclick = function() {
                   beginVP.style.borderColor = "rgba(108,232,146,0)";
                   a1c.style.borderColor = "rgba(108,232,146,1)";
                   q1.style.left = "-150vw";
                   q2.style.left = "15vw";
                   response1 = true;
               };
               
               a2a.onclick = function() {
                   a1a.style.borderColor = "rgba(108,232,146,0)";
                   a1b.style.borderColor = "rgba(108,232,146,0)";
                   a1c.style.borderColor = "rgba(108,232,146,0)";
                   a2a.style.borderColor = "rgba(108,232,146,1)";
                   q2.style.left = "-150vw";
                   q3.style.left = "15vw";
               };
               a2b.onclick = function() {
                   a1a.style.borderColor = "rgba(108,232,146,0)";
                   a1b.style.borderColor = "rgba(108,232,146,0)";
                   a1c.style.borderColor = "rgba(108,232,146,0)";
                   a2b.style.borderColor = "rgba(108,232,146,1)";
                   q2.style.left = "-150vw";
                   q3.style.left = "15vw";
                   response2 = true;
               };
               
               a3a.onclick = function() {
                   a2a.style.borderColor = "rgba(108,232,146,0)";
                   a2b.style.borderColor = "rgba(108,232,146,0)";
                   a3a.style.borderColor = "rgba(108,232,146,1)";
                   q3.style.left = "-150vw";
                   q4.style.left = "15vw";
                   response1 = true;
               };
               a3b.onclick = function() {
                   a2a.style.borderColor = "rgba(108,232,146,0)";
                   a2b.style.borderColor = "rgba(108,232,146,0)";
                   a3b.style.borderColor = "rgba(108,232,146,1)";
                   q3.style.left = "-150vw";
                   q4.style.left = "15vw";    
               };
               
               a4a.onclick = function() {
                   a3a.style.borderColor = "rgba(108,232,146,0)";
                   a3b.style.borderColor = "rgba(108,232,146,0)";
                   a4a.style.borderColor = "rgba(108,232,146,1)";
                   q4.style.left = "-150vw";
                   q5.style.left = "15vw";
                   response1 = true;
               }; 
               a4b.onclick = function() {
                   a3a.style.borderColor = "rgba(108,232,146,0)";
                   a3b.style.borderColor = "rgba(108,232,146,0)";
                   a4b.style.borderColor = "rgba(108,232,146,1)";
                   q4.style.left = "-150vw";
                   q5.style.left = "15vw";    
               };
               
               a5a.onclick = function() {
                   a4a.style.borderColor = "rgba(108,232,146,0)";
                   a4b.style.borderColor = "rgba(108,232,146,0)";
                   a5a.style.borderColor = "rgba(108,232,146,1)";
                   q5.style.left = "-150vw";
                   resultVP.style.left = "15vw";
                   response3 = 0;
                   
                   console.log(response1);
                   console.log(response2);
                   console.log(response3);
                   if (response1) {
                       appVersion.innerHTML = "Premium App";
                   } else {
                       appVersion.innerHTML = "Standard App";
                   };

                   
                   appLink.setAttribute("href", "https://play.google.com/store?hl=en");
                   appImg.src = "googleplay.png";
                  
                   if (response2) {
                       rentDiv.style.visibility = "visible";
                   };
               }; 
               a5b.onclick = function() {
                   a4a.style.borderStyle = "hidden";
                   a4b.style.borderStyle = "hidden";
                   a5b.style.borderColor = "rgba(108,232,146,1)";
                   q5.style.left = "-150vw";
                   resultVP.style.left = "15vw";
                   response3 = 1;
                   
                   console.log(response1);
                   console.log(response2);
                   console.log(response3);
                   if (response1) {
                       appVersion.innerHTML = "Premium App";
                   } else {
                       appVersion.innerHTML = "Standard App";
                   };
                   
                   appLink.setAttribute("href", "https://www.apple.com/itunes/");
                   appImg.src = "Appstore-logo.png";

                   if (response2) {
                       rentDiv.style.visibility = "visible";
                   };
               };
               a5c.onclick = function() {
                   a4a.style.borderStyle = "hidden";
                   a4b.style.borderStyle = "hidden";
                   a5c.style.borderColor = "rgba(108,232,146,1)";
                   q5.style.left = "-150vw";
                   resultVP.style.left = "15vw";
                   response3 = 2;
                   
                   console.log(response1);
                   console.log(response2);
                   console.log(response3);
                   if (response1) {
                       appVersion.innerHTML = "Premium App";
                   } else {
                       appVersion.innerHTML = "Standard App";
                   };

                   appVersion.innerHTML = "Unfortunately, we only offer Android and iOS Apps at this time.";
                   
                   if (response2) {
                       rentDiv.style.visibility = "visible";
                   };
               }; 
               
               
               
               learnMore.onclick = function() {
                   $.ajax({
                       url:"download.html",
                       datatype:"html",
                       success:function(resp){
                           //if succussful, come back with response
                           console.log(resp);
                           displayDiv.innerHTML = resp;
                       } 
                    });
                    activeMenu = "dl_menu";
                    for (i = 0; i < menuGroup.length; i++) {
                         menuGroup[i].style.backgroundColor = "#00C4FF";
                    }
                    dlMenu.style.backgroundColor = "#6CE892";
               };
           }
        });
        
        activeMenu = "vp_menu";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        vpMenu.style.backgroundColor = "#6CE892";
        
    };
    
    dlMenu.onclick = function() {
        $.ajax({
           url:"download.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               console.log(resp);
               displayDiv.innerHTML = resp;
           } 
        });
        activeMenu = "dl_menu";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        dlMenu.style.backgroundColor = "#6CE892";
    };
    
    rvMenu.onclick = function() {
        $.ajax({
           url:"reviews.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               console.log(resp);
               displayDiv.innerHTML = resp;
           } 
        });
        activeMenu = "rv_menu";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        rvMenu.style.backgroundColor = "#6CE892";
    };
    
    spMenu.onclick = function() {
        $.ajax({
           url:"support.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               displayDiv.innerHTML = resp;
           } 
        });
        activeMenu = "sp_menu";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        spMenu.style.backgroundColor = "#6CE892";
    };
    
    aboutUS.onclick = function() {
        $.ajax({
           url:"aboutus.html",
           datatype:"html",
           success:function(resp){
               //if succussful, come back with response
               displayDiv.innerHTML = resp;
           } 
        });
        activeMenu = "";
        for (i = 0; i < menuGroup.length; i++) {
             menuGroup[i].style.backgroundColor = "#00C4FF";
        }
        aboutUS.style.backgroundColor = "#6CE892";
    };
});