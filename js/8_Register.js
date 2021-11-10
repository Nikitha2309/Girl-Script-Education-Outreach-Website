
var flag=1;
function next(){
    document.getElementById("warning").innerHTML="";
    var input_fields=document.getElementsByClassName('valid-input1');
    
    for(var i=0;i<input_fields.length;i++){
        if(input_fields[i].value.length==0){
            flag=0;
        }
    }
    console.log(flag);
    if(flag==1){
    document.getElementById('student-form2').style.left="15px";
    document.getElementById('student-form2').style.right="15px";
    document.getElementById('student-form1').style.left="1000px";
    document.getElementById("student-form2").style.opacity = "1";
    document.getElementById("student-form1").style.opacity = "0";
    }
    else if(flag==2){
    document.getElementById('student-form2').style.left="5.041vw";
    document.getElementById('student-form2').style.right="5.041vw";
    document.getElementById('student-form1').style.left="1000px";
    document.getElementById("student-form2").style.opacity = "1";
    document.getElementById("student-form1").style.opacity = "0";
    }
    else{
        document.getElementById("warning").innerHTML="Please fill out all the fields";
    }
    
};

function back(){
document.getElementById("warning").innerHTML="";
document.getElementById('student-form1').style.left="15px";
document.getElementById('student-form1').style.right="15px";
document.getElementById('student-form2').style.left="1000px";
document.getElementById('student-form2').style.opacity="0";
document.getElementById("student-form1").style.opacity = "1";
}

function mentorform(){
document.getElementById("warning").innerHTML="";
document.getElementById('student-form1').style.left="2000px";
document.getElementById('student-form1').style.opacity="0";
document.getElementById('student-form2').style.left="2000px";
document.getElementById('student-form2').style.opacity="0";
document.getElementById('mentor-form2').style.left="2000px";
document.getElementById('mentor-form3').style.opacity="0";
document.getElementById('mentor-form3').style.left="2000px";
document.getElementById('mentor-form2').style.opacity="0";
document.getElementById('mentor-form1').style.left="15px";
document.getElementById('mentor-form1').style.right="15px";
document.getElementById('mentor-form1').style.opacity="1";
document.getElementById('mentor').style.backgroundColor="#EB5310";
document.getElementById('mentor').style.color="#ffffff";
document.getElementById('student').style.backgroundColor="#ffffff";
document.getElementById('student').style.color="#000000";
}
function studentform(){
document.getElementById("warning").innerHTML="";
document.getElementById('mentor-form1').style.left="2000px";
document.getElementById('mentor-form1').style.opacity="0";
document.getElementById('mentor-form2').style.left="2000px";
document.getElementById('mentor-form2').style.opacity="0";
document.getElementById('mentor-form3').style.left="2000px";
document.getElementById('mentor-form3').style.opacity="0";
document.getElementById('student-form2').style.left="2000px";
document.getElementById('student-form2').style.opacity="0";
document.getElementById('student-form1').style.left="15px";
document.getElementById('student-form1').style.right="15px";
document.getElementById('student-form1').style.opacity="1";
document.getElementById('student').style.backgroundColor="#EB5310";
document.getElementById('student').style.color="#ffffff";
document.getElementById('mentor').style.backgroundColor="#ffffff";
document.getElementById('mentor').style.color="#000000";
}
function mentornext() {
document.getElementById("warning").innerHTML="";
var input_fields=document.getElementsByClassName('valid-input2');
flag=1;
for(var i=0;i<input_fields.length;i++){
    if(input_fields[i].value.length==0){
        flag=0;
    }
}
if(flag==1){
document.getElementById('mentor-form2').style.left="15px";
document.getElementById('mentor-form2').style.right="15px";
document.getElementById('mentor-form2').style.opacity="1";
document.getElementById('mentor-form1').style.left="1000px";
document.getElementById('mentor-form1').style.opacity="0";
}
else if(flag==2){
document.getElementById('mentor-form2').style.left="5.041vw";
document.getElementById('mentor-form2').style.right="5.041vw";
document.getElementById('mentor-form2').style.opacity="1";
document.getElementById('mentor-form1').style.left="1000px";
document.getElementById('mentor-form1').style.opacity="0";
}
else{
    document.getElementById("warning").innerHTML="Please fill out all the fields";
}
}
function mentorback(){
document.getElementById("warning").innerHTML="";
document.getElementById('mentor-form1').style.left="15px";
document.getElementById('mentor-form1').style.right="15px";
document.getElementById('mentor-form1').style.opacity="1";
document.getElementById('mentor-form2').style.left="1000px";
document.getElementById('mentor-form2').style.opacity="0";
}
function mentorsecondnext(){
document.getElementById("warning").innerHTML="";
var input_fields=document.getElementsByClassName('valid-input3');
flag=1;
for(var i=0;i<input_fields.length;i++){
    if(input_fields[i].value.length==0){
        flag=0;
    }
}

if(flag==1 && (document.getElementById('radio-button1').checked ||document.getElementById('radio-button2').checked)){

document.getElementById('mentor-form3').style.left="15px";
document.getElementById('mentor-form3').style.right="15px";
document.getElementById('mentor-form3').style.opacity="1";
document.getElementById('mentor-form2').style.left="1000px";
document.getElementById('mentor-form2').style.opacity="0";
}
else if(flag==2){
document.getElementById('mentor-form3').style.left="5.041vw";
document.getElementById('mentor-form3').style.right="5.041vw";
document.getElementById('mentor-form3').style.opacity="1";
document.getElementById('mentor-form2').style.left="1000px";
document.getElementById('mentor-form2').style.opacity="0";
}
else{
    document.getElementById("warning").innerHTML="Please fill out all the fields";
}
}

function mentorsecondback(){
document.getElementById("warning").innerHTML="";

document.getElementById('mentor-form2').style.left="15px";
document.getElementById('mentor-form2').style.right="15px";
document.getElementById('mentor-form2').style.opacity="1";
document.getElementById('mentor-form3').style.left="1000px";
document.getElementById('mentor-form3').style.opacity="0";


}
function mediaFunction(x) {
    if (x.matches) { 
        flag=2;
    } 
    }
