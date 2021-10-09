// Ex1 : 버블링을 이용한 사용자 이벤트 처리하기 (event target)
window.addEventListener("load", function(){

    var section = document.querySelector("#section3");

    // var imgs = section.querySelectorAll(".img");
    var imgList = section.querySelector(".img-list")
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {

        if(e.target.nodeName !="IMG" ) return;

        currentImg.src = e.target.src;
    }

    // // Bad Code: function 객체가 반복문 만큼 만들어짐 (메모리 낭비)
    // for(var i=0; i<imgs.length; i++)
    //     imgs[i].onclick = function(e){
    //         // console.log(e.target.nodeName) // IMG
    //         currentImg.src = e.target.src;
    //     };
});

// 연습문제 1 : 선택된 레코드 삭제하기 (event target)
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");

    var delButtons = section.querySelectorAll(".del-button");

    for(var i=0; i<delButtons.length; i++){
        delButtons[i].onclick = function(e){
            var tr = e.target.parentElement.parentElement;
            tr.remove();
        };
    }    
}); 

// Ex1 : 선택된 이미지 보여주기 (event target)
window.addEventListener("load", function(){

    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    // Bad Code: function 객체가 반복문 만큼 만들어짐 (메모리 낭비)
    for(var i=0; i<imgs.length; i++)
        imgs[i].onclick = function(e){
            // console.log(e.target.nodeName) // IMG
            currentImg.src = e.target.src;
        };
});