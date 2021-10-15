// Ex5 : DOM 이벤트 트리거
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTrigerButton = section.querySelector(".file-trigger-button");

    fileTrigerButton.onclck = function(){
        alert("test");
    }

});

// Ex4 : 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function(){

    var section = document.querySelector("#section4");

    var tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function(e){

        e.preventDefault();

        var target = e.target;

        if(target.nodeName != "A" && target.nodeName != "INPUT") // (대문자)
            return;

        // if(target.nodeName != "INPUT") // (대문자)
        //     return;

        // target.className = "sel-button aa bb" 
        // 클래스 full name 적어줘야 한다.
        
        // cf. classList.remove / classList.add 
        if(target.classList.contains("sel-button")){
            // var tr = target.parentElement.parentElement;
            // (구조가 좀만 달라져도 위험 부담이 생긴다.)
            var tr = target.parentElement;
            for(; tr.nodeName !="TR"; tr=tr.parentElement);

            tr.style.background = "purple";

        }else if(target.classList.contains("edit-button")){
            
        }else if(target.classList.contains("del-button")){

        }

    };
})

// Ex3 : 이벤트 버블링 멈추기
window.addEventListener("load", function(){

    var section = document.querySelector("#section3");

    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        console.log("imgList.onclick");
        if(e.target.nodeName !="IMG" ) return;

        currentImg.src = e.target.src;
    }

    // .imgList 클릭> addButton도 같이 클릭된다 (버블링)
    addButton.onclick = function(e){
        e.stopPropagation();
        
        console.log("addButton.onclick"); 
        var img = document.createElement("img");
        img.src = "images/img1.png";
        currentImg.insertAdjacentElement("afterend", img);
    }

});

// Ex2 : 버블링을 이용한 사용자 이벤트 처리하기 (event target)
window.addEventListener("load", function(){

    var section = document.querySelector("#section2");

    // var imgs = section.querySelectorAll(".img");
    var imgList = section.querySelector(".img-list");
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