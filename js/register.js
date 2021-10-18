function next(){
        document.getElementById('student-form2').style.left="15px";
        document.getElementById('student-form2').style.right="15px";
        document.getElementById('student-form1').style.left="1000px";
        
    };

function back(){
    document.getElementById('student-form1').style.left="15px";
    document.getElementById('student-form1').style.right="15px";
    document.getElementById('student-form2').style.left="1000px";
    
}

function mentorform(){
    document.getElementById('student-form1').style.left="2000px";
    document.getElementById('student-form2').style.left="2000px";
    document.getElementById('mentor-form1').style.left="15px";
    document.getElementById('mentor-form1').style.right="15px";
    document.getElementById('mentor').style.backgroundColor="#EB5310";
    document.getElementById('mentor').style.color="#ffffff";
    document.getElementById('student').style.backgroundColor="#ffffff";
    document.getElementById('student').style.color="#000000";
}
function studentform(){
    document.getElementById('mentor-form1').style.left="2000px";
    document.getElementById('mentor-form2').style.left="2000px";
    document.getElementById('student-form1').style.left="15px";
    document.getElementById('student-form1').style.right="15px";
    document.getElementById('student').style.backgroundColor="#EB5310";
    document.getElementById('student').style.color="#ffffff";
    document.getElementById('mentor').style.backgroundColor="#ffffff";
    document.getElementById('mentor').style.color="#000000";
}
function mentornext() {
    document.getElementById('mentor-form2').style.left="15px";
    document.getElementById('mentor-form2').style.right="15px";
    document.getElementById('mentor-form1').style.left="1000px";
}
function mentorback(){
    document.getElementById('mentor-form1').style.left="15px";
    document.getElementById('mentor-form1').style.right="15px";
    document.getElementById('mentor-form2').style.left="1000px";
}