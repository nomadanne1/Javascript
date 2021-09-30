// Ex6 : 노드조작- 메뉴추가(createTextNode, Element)
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    
    var titleInput = section.querySelector(".title-input");
    var menuListUI = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value;

        var html = '<a href="">'+title+'</a>';
        var li = document.createElement("li");
        li.innerHTML = html;

        // menuListUI.appendChild(li); 
        
        // menuListUI.appendChild(title); // 오류 (createTextNode 필수)
        menuListUI.append(title); // append는 문자열도 바로 가능 !!
        menuListUI.append(li); // append는 문자열도 바로 가능 !!

        // menuListUI.innerHTML += '<li><a href="">'+title+'</a></li>'; // 성능에 문제.

        /*
        // 이렇게 만드는 경우 없음 !!
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        
        var aNode = document.createElement("a");
        aNode.href="";
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.appendChild(aNode);

        menuListUI.appendChild(liNode);
        */

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);
    };

    delButton.onclick = function(){
        // var txtNode = menuListUI.childNodes[0];
        var liNode = menuListUI.children[0];
        // menuListUI.removeChild(txtNode);

        liNode.remove(); // 부모를 통할 필요없이 내가 삭제 가능 !!
    };
});

// Ex5 : 엘리먼트 노드의 속성 && CSS 속성 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select")
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick=function(){

        // 엘리먼트 노드의 속성 변경 
        img.src = "images/"+srcInput.value;
        // img.src = "images/"+imgSelect.value;

        // CSS 속성 변경
        // img.style.border-color=?; // xxx  
        // img.style["bor der-color"] = colorInput.value; // ok
        img.style.borderColor = colorInput.value; // ok

        // console.log(img.class); // xxx 클래스는 예약어!!
        console.log(img.className); // ok 
    }
});

// Ex4 : childeNodes를 이용한 노드 선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    // childNodes :  *comment, text도 자식이다!!
    // var input1 = box.childNodes[0]; 
    // var input2 = box.childNodes[1];

    // children : 태그 형태만 자식으로 취급한다.
    var input1 = box.children[0]; 
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";

});

// Ex3 : Selectors API Level1
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");

    var txtX = section3.querySelector("input[name='x']"); 
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

// Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    /*
    var inputs = section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

// Ex1 : 계산기 프로그램
window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});