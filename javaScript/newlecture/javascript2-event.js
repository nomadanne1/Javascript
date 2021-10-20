// Ex9 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    var left = container.offsetLeft;
    var top = container.offsetTop;

    // container.onmousedown = function(e){  // .container - 이벤트 버블링
    document.onmousedown = function(e){ 
        if(e.target.classList.contains("box")) {
            dragging = true; 
            current = e.target; // 현재 선택된것 !
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    // container.onmousemove = function(e){
        document.onmousemove = function(e){
        if(!dragging) return;

        // var x = e.pageX-offset.x;
        // var y = e.pageY-offset.y;
        // 1. page 기준 x, y가 아닌 
        // .container 기준 x, y이 바람직 하다
        
        // var x = e.offsetX - offset.x;
        // var y = e.offsetY - offset.y;
        // 2. 그러나 이벤트 버블링으로 onmousemove 이벤트가
        // .container, .box 2번실행돼서 깜빡깜빢거리는 문제 발생

        // 3. 해결) .container 왼쪽 모서리가 
        // (시작점) 0 ,0 좌표가 될수있도록 한다.
        // => 박스의 왼쪽 모서리의 좌표를 구해서 뺴준다.
        var x = e.pageX-offset.x-left;
        var y = e.pageY-offset.y- top;

        current.style.left = x+"px"; // 이동할 대상> 현재 선택된 것!!
        current.style.top = y+"px";

        status.innerText = `(x, y) : (${x}, ${y})`;
    };

    // container.onmouseup = function(e){ 
        document.onmouseup = function(e){ 
        dragging = false;
    };
});

// Ex8 : 마우스 이벤트 객체 - 여러개 박스 드래그 방식을 옮기기
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    container.onmousedown = function(e){ // .container - 이벤트 버블링
        if(e.target.classList.contains("box")) {
            dragging = true; 
            current = e.target; // 현재 선택된것 !
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    container.onmousemove = function(e){
        if(!dragging) return;
        current.style.left = e.pageX-offset.x+"px"; // 이동할 대상> 현재 선택된 것!!
        current.style.top = e.pageY-offset.y+"px";
    };

    container.onmouseup = function(e){
        dragging = false;
    };
});

// Ex7 : 마우스 이벤트 객체 - 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    // 1. 박스를 선택하고, 
    // 2. 드래그 할때!!
    // *박스 선택할때 마우스가 꼭짓점으로  붙어 가는 현상 
    //  => offset 좌표 !!
    container.onmousedown = function(e){
        if(e.target === box) // 박스를 선택
        dragging = true; // 드래그!!
    };

    container.onmousemove = function(e){
        if(!dragging) return;
        box.style.left = e.pageX-offset.x+"px";
        box.style.top = e.pageY-offset.y+"px";
    };

    container.onmouseup = function(e){
        dragging = false;

    };

    box.onmousedown = function(e){
        // box로 부터의 offsetX, offsetY
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
});

// Ex6 : 마우스 이벤트 객체 - 마우스 좌표
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e){
        // e객체: 좌표등 얻을 수 있음..
        // e.x, x.y / e.offsetX, e.offsetY / e.clientX, e.pageX ...
        console.log("(x.y):"+e.x+","+e.y);
        console.log("clinet (x.y):"+e.clientX+","+e.clientY);
        console.log("page (x.y):"+e.pageX+","+e.pageY);
        console.log("offset (x.y):"+e.offsetX+","+e.offsetY);
        box.style.position = "absolute";
        box.style.left = e.x+"px";
        box.style.top = e.y+"px";
    };
});

// Ex5 : DOM 이벤트 트리거
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function(){
        var event = new MouseEvent("click", {
            'view':window,
            'bubbles':true,
            'cancelable':true
        })
        fileButton.dispatchEvent(event);
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