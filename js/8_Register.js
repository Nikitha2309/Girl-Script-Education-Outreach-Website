function next(){
    var input_fields=document.getElementsByClassName('valid-input1');
    var flag=1;
    for(var i=0;i<input_fields.length;i++){
        if(input_fields[i].value.length==0){
            flag=0;
        }
    }
    if(flag==1){
    document.getElementById('student-form2').style.left="15px";
    document.getElementById('student-form2').style.right="15px";
    document.getElementById('student-form1').style.left="1000px";
    document.getElementById("student-form2").style.opacity = "1";
    document.getElementById("student-form1").style.opacity = "0";
    }
    else{
        alert('please fill all fields');
    }
    
};

function back(){
document.getElementById('student-form1').style.left="15px";
document.getElementById('student-form1').style.right="15px";
document.getElementById('student-form2').style.left="1000px";
document.getElementById('student-form2').style.opacity="0";
document.getElementById("student-form1").style.opacity = "1";
}

function mentorform(){
document.getElementById('student-form1').style.left="2000px";
document.getElementById('student-form1').style.opacity="0";
document.getElementById('student-form2').style.left="2000px";
document.getElementById('student-form2').style.opacity="0";
document.getElementById('mentor-form1').style.left="15px";
document.getElementById('mentor-form1').style.right="15px";
document.getElementById('mentor-form1').style.opacity="1";
document.getElementById('mentor').style.backgroundColor="#EB5310";
document.getElementById('mentor').style.color="#ffffff";
document.getElementById('student').style.backgroundColor="#ffffff";
document.getElementById('student').style.color="#000000";
}
function studentform(){
document.getElementById('mentor-form1').style.left="2000px";
document.getElementById('mentor-form1').style.opacity="0";
document.getElementById('mentor-form2').style.left="2000px";
document.getElementById('mentor-form2').style.opacity="0";
document.getElementById('mentor-form3').style.left="2000px";
document.getElementById('mentor-form3').style.opacity="0";
document.getElementById('student-form1').style.left="15px";
document.getElementById('student-form1').style.right="15px";
document.getElementById('student-form1').style.opacity="1";
document.getElementById('student').style.backgroundColor="#EB5310";
document.getElementById('student').style.color="#ffffff";
document.getElementById('mentor').style.backgroundColor="#ffffff";
document.getElementById('mentor').style.color="#000000";
}
function mentornext() {
var input_fields=document.getElementsByClassName('valid-input2');
var flag=1;
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
else{
    alert('please fill all fields');
}
}
function mentorback(){
document.getElementById('mentor-form1').style.left="15px";
document.getElementById('mentor-form1').style.right="15px";
document.getElementById('mentor-form1').style.opacity="1";
document.getElementById('mentor-form2').style.left="1000px";
document.getElementById('mentor-form2').style.opacity="0";
}
function mentorsecondnext(){
document.getElementById('mentor-form3').style.left="15px";
document.getElementById('mentor-form3').style.right="15px";
document.getElementById('mentor-form3').style.opacity="1";
document.getElementById('mentor-form2').style.left="1000px";
document.getElementById('mentor-form2').style.opacity="0";
}
function mentorsecondback(){
var input_fields=document.getElementsByClassName('valid-input3');
var flag=1;
for(var i=0;i<input_fields.length;i++){
    if(input_fields[i].value.length==0){
        flag=0;
    }
}
if(flag==1){
document.getElementById('mentor-form2').style.left="15px";
document.getElementById('mentor-form2').style.right="15px";
document.getElementById('mentor-form2').style.opacity="1";
document.getElementById('mentor-form3').style.left="1000px";
document.getElementById('mentor-form3').style.opacity="0";
}
else{
alert('please fill all fields');
}
}
