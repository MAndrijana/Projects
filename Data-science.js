let btnCV = document.querySelector(".btnCV");
let tipsParagraph = document.querySelector(".tipsParagraph");
let tipsParagraph1 = document.querySelector(".tipsParagraph1");
let tipsParagraph2 = document.querySelector(".tipsParagraph2");
let btnEdit = document.createElement("button");
let btnDownload = document.createElement("button");
let btnLinkedin = document.querySelector(".btnLinkedin");
let btnLaika = document.querySelector(".btnLaika");
document.querySelector(".all").classList.add("info");
document.querySelector(".carouselRow").classList.add("info");
document.querySelector(".carouselRowLaika").classList.add("info");

//CV button

btnCV.addEventListener("click", function () {
  document.querySelector(".all").setAttribute("id", "invoice");
  btnCV.classList.add("color");
  btnLinkedin.classList.remove("color");
  btnLaika.classList.remove("color");
  document.querySelector(".background").style.height = "auto";
  document.querySelector(".editCol").appendChild(btnEdit);
  btnEdit.setAttribute("class", "btn");
  btnEdit.innerText = "EDIT";
  btnEdit.style.backgroundColor = "#6530D8";
  btnEdit.style.color = "#F3F3F3";
  btnEdit.style.padding = "10px";
  btnEdit.style.fontWeight = "bold";
  btnEdit.style.boxShadow = "1px 6px 15px -4px rgba(0,0,0,0.75)";
  document.querySelector(".webDevelopmentCV").style.backgroundColor = "white";
  document.querySelector(".webDevelopmentCV").style.borderRadius = "4px";
  document.querySelector(".webDevelopmentCV").style.boxShadow = "0px 0px 19px -7px rgba(0,0,0,0.75)";

  //Download button

  document.querySelector(".download").appendChild(btnDownload);
  btnDownload.setAttribute("class", "btn");
  btnDownload.setAttribute("data-toggle", "modal");
  btnDownload.setAttribute("data-target", "#exampleModal");
  btnDownload.innerText = "DOWNLOAD";
  btnDownload.style.backgroundColor = "#6530D8";
  btnDownload.style.color = "#F3F3F3";
  btnDownload.style.padding = "10px";
  btnDownload.style.fontWeight = "bold";
  btnDownload.style.boxShadow = "1px 6px 15px -4px rgba(0,0,0,0.75)";
  document.querySelector(".all").classList.remove("info");
  document.querySelector(".carouselRow").classList.add("info");
  document.querySelector(".tipsCol").classList.remove("info");
  document.querySelector(".carouselRowLaika").classList.add("info");

  //Download in PDF

  function generatePDF() {
    const element = document.getElementById("invoice");
    if ($("input.data").val() !== '' && $("textarea.data1").val() !== '') {
      html2pdf()
        .from(element)
        .save();
      $("input.data").each(function (i, v) { let val = v.value; $(this).replaceWith("<span>" + val + "</span>"); });
      $("textarea.data1").each(function (i, v1) {
        let val1 = v1.value; $(this).replaceWith("<div>" + val1 + "</div>");
      });
    }
    else {
      btnDownload.setAttribute("data-toggle","tooltip");
      btnDownload.setAttribute("title","Fill all sections in the CV builder"); 
    }
  }
  btnDownload.addEventListener("click", function () {
    if(btnLinkedin.classList.contains("click") && btnLaika.classList.contains("click")){
    generatePDF();
  }
    else{
      btnDownload.setAttribute("data-toggle","tooltip");
      btnDownload.setAttribute("title","Check Linkedin and WeAreLaika.com fields before downloading the CV"); 
    }
  })
})
//Edit button
btnEdit.addEventListener("click", function () {
  btnEdit.style.display = "none";

  //Textarea resize

  function autosize() {
    var el = this;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }
  //Image

  document.querySelector(".imageDiv1").innerHTML = '<form><img class="image1 rounded-circle mb-2" id="myImg" src="images/addimg.png" alt="your image"><input type="file" class="inputImage"/></form>';
  $(function () {
    $(":file").change(function () {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL(this.files[0]);
        $(".inputImage").hide()
      }
    });
  });
  function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
    $('#yourImage').attr('src', e.target.result);
  };

  document.querySelector("#myImg").addEventListener("mouseover", function () {
    tipsParagraph.innerText = "Put a photo made with a good camera. It’s better to send a CV without a photo, if you were planning on cropping yourself from a group photo from a dinner with friends, or a selfie in you room.";
  })

  //Full Info

  document.querySelector(".fullInfo").innerHTML = '<form><div class="pl-4"><input type="text" placeholder="Full Name" class="data widthInput mb-2 border-0 fullName"><div><textarea rows="1" type="text" placeholder="Professional title" class="data1 textarea1 widthInput border-0 professionalTitle job"></textarea></div><div class="aboutMe d-flex align-items-center"><i class="fas fa-times info iconDelete"></i><textarea rows="1" type="text" placeholder="About me" class="data1 textarea2 widthInput border-0 delete"></textarea></div></div></form>';
  document.querySelector(".textarea1").addEventListener('keydown', autosize);
  document.querySelector(".textarea2").addEventListener('keydown', autosize);
  document.querySelector(".fullInfo").addEventListener("mouseover", function () {
    tipsParagraph.innerText = "Write the short intro that trully represents you. Don't put overused buzzwords, describe yourself and your capabilities with your own vocabulary.";
  })

  // Practical Info 
  document.querySelector(".practicalInfo1").innerHTML = '<div class="width"><i class="fas fa-envelope"></i><input type="email" placeholder="Email" class="data mb-1 border-0 widthInput"></div><div class="width"><i class="fas fa-mobile-alt"></i><input type="phone" placeholder="Phone Number" class="data mb-1 border-0 widthInput"></div><div class="width"><i class="fas fa-map-marker"></i><input type="text" placeholder="City, Country" class="data mb-1 border-0 widthInput"></div><div class="twitter w-50"><i class="fas fa-times info iconDelete1"></i><i class="fab fa-twitter"></i><input type="text" placeholder="Twitter" class="widthInput data mb-1 border-0"></div><div class="linkedin w-50"><i class="fas fa-times info iconDelete2"></i><i class="fab fa-linkedin"></i><input type="text" placeholder="Linkedin" class="widthInput data mb-1 border-0"></div>';
  document.querySelector(".practicalInfo1").addEventListener("mouseover", function () {
    tipsParagraph.innerText = "Include your LinkedIn profile link, but don’t just copy and paste the whole profile URL, shorten it. Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.";
  })
  //Full Info
  document.querySelector(".aboutMe").addEventListener("mouseover", function () {
    document.querySelector(".iconDelete").classList.remove("info");
  })
  document.querySelector(".aboutMe").addEventListener("mouseout", function () {
    document.querySelector(".iconDelete").classList.add("info");
  })
  document.querySelector(".iconDelete").addEventListener("click", function () {
    document.querySelector(".aboutMe").remove();
  })

  //Twitter
  document.querySelector(".twitter").addEventListener("mouseover", function () {
    document.querySelector(".iconDelete1").classList.remove("info");
  })
  document.querySelector(".twitter").addEventListener("mouseout", function () {
    document.querySelector(".iconDelete1").classList.add("info");
  })
  document.querySelector(".iconDelete1").addEventListener("click", function () {
    document.querySelector(".twitter").remove();
  })

  //Linkedin
  document.querySelector(".linkedin").addEventListener("mouseover", function () {
    document.querySelector(".iconDelete2").classList.remove("info");
  })
  document.querySelector(".linkedin").addEventListener("mouseout", function () {
    document.querySelector(".iconDelete2").classList.add("info");
  })
  document.querySelector(".iconDelete2").addEventListener("click", function () {
    document.querySelector(".linkedin").remove();
  })
  //Work experience
  document.querySelector(".anotherPosition").innerHTML = '<div><div class="pt-3"><p class="h5 text-uppercase">work experience</p><div class="workEx"><i class="fas fa-times info iconDel mr-2"></i><i class="fas fa-plus-square info iconAdd"></i><input type="text" placeholder="Position/Title" class="data border-0 widthInput position"></div><input type="text" placeholder="Company/Workplace" class="data border-0 widthInput"></div><div class="d-flex justify-content-between"><div><input type="text" placeholder="00/0000 - 11/1111"  class="data border-0 widthInput italic"></div><div><input type="text" placeholder="City, Country"  class="data text-right border-0 widthInput italic"></div></div><div><input type="text" placeholder="Accomplishments/Tasks/Duties" class="data border-0 widthInput1 italic"></div><ul class="list1"><div class="taskDel1"><i class="fas fa-times info iconDel1"></i><li><textarea rows="1" type="text" placeholder="Accomplishments" class="data1 textarea3 border-0 widthInput"></textarea></li></div><div class="taskDel2"><i class="fas fa-times info iconDel2"></i><li><textarea rows="1" type="text" placeholder="Task" class="data1 textarea4 border-0 widthInput"></textarea></li></div><div class="taskDel3"><i class="fas fa-times info iconDel3 mr-2"></i><i class="fas fa-plus-square info iconAdd1"></i><li class="addTask"><textarea rows="1" type="text" placeholder="Task" class="data1 textarea5 border-0 widthInput"></textarea></li></div></ul></div>';
  document.querySelector(".textarea3").addEventListener('keydown', autosize);
  document.querySelector(".textarea4").addEventListener('keydown', autosize);
  document.querySelector(".textarea5").addEventListener('keydown', autosize);
  document.querySelector(".anotherPosition").addEventListener("click", function () {
    tipsParagraph.innerText = "Write your previous ​job experience,​ and if you’re currently working, your current job title. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.";
  })
  //Delete work position
  document.querySelector(".workEx").addEventListener("mouseover", function () {
    document.querySelector(".iconDel").classList.remove("info");
    document.querySelector(".iconAdd").classList.remove("info");
  })
  document.querySelector(".workEx").addEventListener("mouseout", function () {
    document.querySelector(".iconDel").classList.add("info");
    document.querySelector(".iconAdd").classList.add("info");
  })
  document.querySelector(".iconDel").addEventListener("click", function () {
    document.querySelector(".anotherPosition").remove();
  })

  //Delete work task1
  document.querySelector(".taskDel1").addEventListener("mouseover", function () {
    document.querySelector(".iconDel1").classList.remove("info");
  })
  document.querySelector(".taskDel1").addEventListener("mouseout", function () {
    document.querySelector(".iconDel1").classList.add("info");
  })
  document.querySelector(".iconDel1").addEventListener("click", function () {
    document.querySelector(".taskDel1").remove();
  })

  //Delete work task2
  document.querySelector(".taskDel2").addEventListener("mouseover", function () {
    document.querySelector(".iconDel2").classList.remove("info");
  })
  document.querySelector(".taskDel2").addEventListener("mouseout", function () {
    document.querySelector(".iconDel2").classList.add("info");
  })
  document.querySelector(".iconDel2").addEventListener("click", function () {
    document.querySelector(".taskDel2").remove();
  })

  //Delete work task3
  document.querySelector(".taskDel3").addEventListener("mouseover", function () {
    document.querySelector(".iconDel3").classList.remove("info");
    document.querySelector(".iconAdd1").classList.remove("info");
  })
  document.querySelector(".taskDel3").addEventListener("mouseout", function () {
    document.querySelector(".iconDel3").classList.add("info");
    document.querySelector(".iconAdd1").classList.add("info");
  })
  document.querySelector(".iconDel3").addEventListener("click", function () {
    document.querySelector(".taskDel3").remove();
  })

  //Add work position 

  document.querySelector(".iconAdd").addEventListener("click", function () {
    document.querySelector(".addTask").innerHTML += '<div class="newAdd"><div class="pt-3"><div class="workEx"><i class="fas fa-times info iconDel mr-2"></i><input type="text" placeholder="Position/Title" class="data border-0 widthInput position"></div><input type="text" placeholder="Company/Workplace" class="data border-0 widthInput"></div><div class="d-flex justify-content-between"><div><input type="text" placeholder="00/0000 - 11/1111" class="data border-0 widthInput italic"><input type="text" placeholder="Accomplishments/Tasks/Duties" class="data border-0 widthInput1 italic"></div><div><input type="text" placeholder="City, Country" class="data text-right border-0 widthInput italic"></div></div><ul class="list1"><div class="taskDel1"><li><input type="text" placeholder="Accomplishments" class="data border-0 widthInput"></li></div><div class="taskDel2"><li><input type="text" placeholder="Task" class="data border-0 widthInput"></li></div><div class="taskDel3"><li class="addTask"><input type="text" placeholder="Task" class="border-0 widthInput data"></li></div></ul></div>';
    let allDelPositions = document.querySelectorAll(".iconDel");
    document.querySelector(".addTask").addEventListener("mouseover", function () {
      allDelPositions.forEach(el => {
        el.classList.remove("info");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          e.target.parentElement.parentElement.parentElement.remove();
        })
      })
    })
    document.querySelector(".addTask").addEventListener("mouseout", function () {
      allDelPositions.forEach(el => {
        el.classList.add("info");
      })
    })
  })

  //Add work task
  let iconDel3 = document.createElement("i");
  document.querySelector(".iconAdd1").addEventListener("click", function () {
    document.querySelector(".addTask").innerHTML += '<div class="newAdd"><li class="addTask"><input type="text" placeholder="Task" class="data border-0 widthInput"></li></div>';
    document.querySelector(".addTask").addEventListener("mouseover", function () {
      document.querySelector(".newAdd").appendChild(iconDel3);
      iconDel3.setAttribute("class", "fas fa-times iconDel3");
    })
    document.querySelector(".addTask").addEventListener("mouseout", function () {
      iconDel3.classList.add("info");
    })
    iconDel3.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.parentElement.remove();
    })
  })

  //Education
  document.querySelector(".educationDiv").innerHTML = '<div><div class="pt-3"><p class="h5 text-uppercase">education</p><div class="edu"><i class="fas fa-times info delEducation mr-2"></i><i class="fas fa-plus-square info eduAdd"></i><input type="text" placeholder="Study program" class="data border-0 widthInput position"></div><input type="text" placeholder="Instutution" class="data border-0 widthInput"></div><div class="d-flex justify-content-between"><div><input type="text" placeholder="mm/year - mm/year" class="data border-0 widthInput italic"></div><div><input type="text" placeholder="City, Country"  class="data text-right border-0 widthInput italic"></div></div><div><input type="text" placeholder="Studied/Courses" class="data border-0 widthInput1 italic"></div><ul class="list1"><div class="educationDel1"><i class="fas fa-times info eduDel1"></i><li><textarea rows="1" type="text" placeholder="Accomplishments" class="data1 textarea6 border-0 widthInput"></textarea></li></div><div class="educationDel2"><i class="fas fa-times info eduDel2"></i><li><textarea rows="1" type="text" placeholder="Task" class="data1 textarea7 border-0 widthInput"></textarea></li></div><div class="educationDel3"><i class="fas fa-times info eduDel3 mr-2"></i><i class="fas fa-plus-square info eduAdd1"></i><li class="eduTask"><textarea rows="1" type="text" placeholder="Task" class="data1 textarea8 border-0 widthInput"></textarea></li></div></ul></div>';
  document.querySelector(".anotherPosition1").innerHTML = "";
  document.querySelector(".textarea6").addEventListener('keydown', autosize);
  document.querySelector(".textarea7").addEventListener('keydown', autosize);
  document.querySelector(".textarea8").addEventListener('keydown', autosize);
  document.querySelector(".educationDiv").addEventListener("click", function () {
    tipsParagraph.innerText = "Let the recruiter know about your ​education​, but only write the important parts – skip the high school and elementary, stick to the university degrees and courses relevant to the job you’re applying for.";
  })
  //Delete education
  document.querySelector(".edu").addEventListener("mouseover", function () {
    document.querySelector(".delEducation").classList.remove("info");
    document.querySelector(".eduAdd").classList.remove("info");
  })
  document.querySelector(".edu").addEventListener("mouseout", function () {
    document.querySelector(".delEducation").classList.add("info");
    document.querySelector(".eduAdd").classList.add("info");
  })
  document.querySelector(".delEducation").addEventListener("click", function () {
    document.querySelector(".educationDiv").remove();
  })

  //Add education

  document.querySelector(".eduAdd").addEventListener("click", function () {
    document.querySelector(".eduTask").innerHTML += '<div class="newAdd"><div class="pt-3"><div class="edu"><i class="fas fa-times info delEducation mr-2"></i><input type="text" placeholder="Study program" class="data border-0 widthInput position"></div><input type="text" placeholder="Instutution" class="data border-0 widthInput"></div><div class="d-flex justify-content-between"><div><input type="text" placeholder="mm/year - mm/year"  class="data border-0 widthInput italic"><input type="text" placeholder="Studied/Courses" class="border-0 widthInput1 italic data"></div><div><input type="text" placeholder="City, Country" class="data text-right border-0 widthInput italic"></div></div><ul class="list1"><div class="educationDel1"><li><input type="text" placeholder="Accomplishments" class="data border-0 widthInput"></li></div><div class="educationDel2"><li><input type="text" placeholder="Task" class="data border-0 widthInput"></li></div><div class="educationDel3"><li class="eduTask"><input type="text" placeholder="Task" class="border-0 widthInput data"></li></div></ul></div>';
    let allDelEducation = document.querySelectorAll(".delEducation");
    document.querySelector(".eduTask").addEventListener("mouseover", function () {
      allDelEducation.forEach(el => {
        el.classList.remove("info");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          e.target.parentElement.parentElement.parentElement.remove();
        })
      })
    })
    document.querySelector(".eduTask").addEventListener("mouseout", function () {
      allDelEducation.forEach(el => {
        el.classList.add("info");
      })
    })
  })

  //Delete education task1
  document.querySelector(".educationDel1").addEventListener("mouseover", function () {
    document.querySelector(".eduDel1").classList.remove("info");
  })
  document.querySelector(".educationDel1").addEventListener("mouseout", function () {
    document.querySelector(".eduDel1").classList.add("info");
  })
  document.querySelector(".eduDel1").addEventListener("click", function () {
    document.querySelector(".educationDel1").remove();
  })

  //Delete education task2
  document.querySelector(".educationDel2").addEventListener("mouseover", function () {
    document.querySelector(".eduDel2").classList.remove("info");
  })
  document.querySelector(".educationDel2").addEventListener("mouseout", function () {
    document.querySelector(".eduDel2").classList.add("info");
  })
  document.querySelector(".eduDel2").addEventListener("click", function () {
    document.querySelector(".educationDel2").remove();
  })

  //Delete education task3
  document.querySelector(".educationDel3").addEventListener("mouseover", function () {
    document.querySelector(".eduDel3").classList.remove("info");
    document.querySelector(".eduAdd1").classList.remove("info");
  })
  document.querySelector(".educationDel3").addEventListener("mouseout", function () {
    document.querySelector(".eduDel3").classList.add("info");
    document.querySelector(".eduAdd1").classList.add("info");
  })
  document.querySelector(".eduDel3").addEventListener("click", function () {
    document.querySelector(".educationDel3").remove();
  })

  //Add education task

  let eduDel3 = document.createElement("i");
  document.querySelector(".eduAdd1").addEventListener("click", function () {
    document.querySelector(".eduTask").innerHTML += '<div class="newAdd"><li class="eduTask"><input type="text" placeholder="Task" class="data border-0 widthInput"></li></div>';
    document.querySelector(".eduTask").addEventListener("mouseover", function () {
      document.querySelector(".newAdd").appendChild(eduDel3);
      eduDel3.setAttribute("class", "fas fa-times eduDel3");
    })
    document.querySelector(".eduTask").addEventListener("mouseout", function () {
      eduDel3.classList.add("info");
    })
    eduDel3.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.parentElement.remove();
    })
  })

  //Skills

  document.querySelector(".skillHeader").innerHTML = '<div><i class="fas fa-times info delSkillHeader mr-2"></i><p class="h5 text-uppercase">skills</p></div>';
  document.querySelector(".python").innerHTML = '<div class="d-flex justify-content-between"><div><i class="fas fa-times info delSkills mr-2"></i><span class="border-0" role="textbox" contenteditable>Python</span></div><div><i class="far fa-circle iconCircle1 mr-2"></i><i class="far fa-circle iconCircle1 mr-2"></i><i class="far fa-circle iconCircle1 mr-2"></i><i class="far fa-circle iconCircle1 mr-2"></i><i class="far fa-circle iconCircle1"></i></div></div>';
  document.querySelector(".mySQL").innerHTML = '<div class="d-flex justify-content-between pt-2"><div><i class="fas fa-times info delSkill1 mr-2"></i><span class="border-0" role="textbox" contenteditable>MySQL</span></div><div><i class="far fa-circle iconCircle2 mr-2"></i><i class="far fa-circle iconCircle2 mr-2"></i><i class="far fa-circle iconCircle2 mr-2"></i><i class="far fa-circle iconCircle2 mr-2"></i><i class="far fa-circle iconCircle2"></i></div></div>';
  document.querySelector(".php").innerHTML = '<div class="d-flex justify-content-between pt-2"><div><i class="fas fa-times info delSkill2 mr-2"></i><span class="border-0" role="textbox" contenteditable>PHP</span></div><div><i class="far fa-circle iconCircle3 mr-2"></i><i class="far fa-circle iconCircle3 mr-2"></i><i class="far fa-circle iconCircle3 mr-2"></i><i class="far fa-circle iconCircle3 mr-2"></i><i class="far fa-circle iconCircle3"></i></div></div>';
  document.querySelector(".r").innerHTML = '<div class="d-flex justify-content-between pt-2"><div><i class="fas fa-times info delSkill3 mr-2"></i><span class="border-0" role="textbox" contenteditable>R</span></div><div><i class="far fa-circle iconCircle4 mr-2"></i><i class="far fa-circle iconCircle4 mr-2"></i><i class="far fa-circle iconCircle4 mr-2"></i><i class="far fa-circle iconCircle4 mr-2"></i><i class="far fa-circle iconCircle4"></i></div></div>';
  document.querySelector(".c").innerHTML = '<div class="d-flex justify-content-between pt-2"><div><i class="fas fa-times info delSkill4 mr-2"></i><span class="border-0" role="textbox" contenteditable>C</span></div><div><i class="far fa-circle iconCircle5 mr-2"></i><i class="far fa-circle iconCircle5 mr-2"></i><i class="far fa-circle iconCircle5 mr-2"></i><i class="far fa-circle iconCircle5 mr-2"></i><i class="far fa-circle iconCircle5"></i></div></div>';
  let iconCircle1 = document.querySelectorAll(".iconCircle1");
  let iconCircle2 = document.querySelectorAll(".iconCircle2");
  let iconCircle3 = document.querySelectorAll(".iconCircle3");
  let iconCircle4 = document.querySelectorAll(".iconCircle4");
  let iconCircle5 = document.querySelectorAll(".iconCircle5");

  let counter;
    iconCircle1.forEach(function (el,i) {
    el.addEventListener("click", function () {
        counter=0;
iconCircle1.forEach(el1=>{
  if(counter<=i){
        el1.style.backgroundColor = "black";
        el1.style.borderRadius = "50%"; 
        counter++;
  }
  else{
    el1.style.backgroundColor = "white";
  }
  
})
    })
  })
  let counter1;
  iconCircle2.forEach(function (el,i) {
  el.addEventListener("click", function () {
      counter1=0;
iconCircle2.forEach(el1=>{
if(counter1<=i){
      el1.style.backgroundColor = "black";
      el1.style.borderRadius = "50%"; 
      counter1++;
}
else{
  el1.style.backgroundColor = "white";
}
})
  })
})
let counter2;
  iconCircle3.forEach(function (el,i) {
  el.addEventListener("click", function () {
      counter2=0;
iconCircle3.forEach(el1=>{
if(counter2<=i){
      el1.style.backgroundColor = "black";
      el1.style.borderRadius = "50%"; 
      counter2++;
}
else{
  el1.style.backgroundColor = "white";
}
})
  })
})
let counter3;
  iconCircle4.forEach(function (el,i) {
  el.addEventListener("click", function () {
      counter3=0;
iconCircle4.forEach(el1=>{
if(counter3<=i){
      el1.style.backgroundColor = "black";
      el1.style.borderRadius = "50%"; 
      counter3++;
}
else{
  el1.style.backgroundColor = "white";
}
})
  })
})
let counter4;
  iconCircle5.forEach(function (el,i) {
  el.addEventListener("click", function () {
      counter4=0;
iconCircle5.forEach(el1=>{
if(counter4<=i){
      el1.style.backgroundColor = "black";
      el1.style.borderRadius = "50%"; 
      counter4++;
}
else{
  el1.style.backgroundColor = "white";
}
})
  })
})

  //Delete skill Header

  document.querySelector(".skillHeader").addEventListener("mouseover", function () {
    document.querySelector(".delSkillHeader").classList.remove("info");
  })
  document.querySelector(".skillHeader").addEventListener("mouseout", function () {
    document.querySelector(".delSkillHeader").classList.add("info");
  })
  document.querySelector(".delSkillHeader").addEventListener("click", function () {
    document.querySelector(".skillHeader").remove();
  })

  //Delete skill Python

  document.querySelector(".python").addEventListener("mouseover", function () {
    document.querySelector(".delSkills").classList.remove("info");
  })
  document.querySelector(".python").addEventListener("mouseout", function () {
    document.querySelector(".delSkills").classList.add("info");
  })
  document.querySelector(".delSkills").addEventListener("click", function () {
    document.querySelector(".python").remove();
  })

  //Delete skill MySQL

  document.querySelector(".mySQL").addEventListener("mouseover", function () {
    document.querySelector(".delSkill1").classList.remove("info");
  })
  document.querySelector(".mySQL").addEventListener("mouseout", function () {
    document.querySelector(".delSkill1").classList.add("info");
  })
  document.querySelector(".delSkill1").addEventListener("click", function () {
    document.querySelector(".mySQL").remove();
  })

  //Delete skill PHP

  document.querySelector(".php").addEventListener("mouseover", function () {
    document.querySelector(".delSkill2").classList.remove("info");
  })
  document.querySelector(".php").addEventListener("mouseout", function () {
    document.querySelector(".delSkill2").classList.add("info");
  })
  document.querySelector(".delSkill2").addEventListener("click", function () {
    document.querySelector(".php").remove();
  })

  //Delete skill R

  document.querySelector(".r").addEventListener("mouseover", function () {
    document.querySelector(".delSkill3").classList.remove("info");
  })
  document.querySelector(".r").addEventListener("mouseout", function () {
    document.querySelector(".delSkill3").classList.add("info");
  })
  document.querySelector(".delSkill3").addEventListener("click", function () {
    document.querySelector(".r").remove();
  })

  //Delete skill C

  document.querySelector(".c").addEventListener("mouseover", function () {
    document.querySelector(".delSkill4").classList.remove("info");
  })
  document.querySelector(".c").addEventListener("mouseout", function () {
    document.querySelector(".delSkill4").classList.add("info");
  })
  document.querySelector(".delSkill4").addEventListener("click", function () {
    document.querySelector(".c").remove();
  })

  document.querySelector(".skillsLanguages").addEventListener("click", function () {
    tipsParagraph.innerText = "Be specific about the skills, tech and tools you used, and what your role was if you’re listing group projects. Specify coding languages, libraries etc. Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited, so don’t waste on soft skills like leadership or communication.";
  })

  //Achievements and sertificates

  document.querySelector(".projectsDiv").innerHTML = '<form><div class="achievementDiv"><i class="fas fa-times info delAchievements mr-2"></i><p class="h5 text-uppercase achievementsAndCertificates pt-4">achievements & certificates</p><div class="dates datesDiv1"><i class="fas fa-times info delAchievement1 mr-2"></i><textarea type="text" placeholder="Achievement" rows="1" class="data1 textarea9 border-0 widthInput"></textarea><textarea type="text" placeholder="If needed write here description about achievement" rows="1" class="data1 textarea10 border-0 w-100 achievements"></textarea></div><div class="dates pt-2 datesDiv2"><i class="fas fa-times info delAchievement2 mr-2"></i><i class="fas fa-plus-square info achievementAdd"></i><textarea type="text" placeholder="Achievements" rows="1" class="data1 textarea11 border-0 widthInput"></textarea><textarea type="text" placeholder="If needed write here description about achievement" rows="1" class="data1 textarea12 border-0 w-100 achievements"></textarea></div></div></form>';
  document.querySelector(".textarea9").addEventListener('keydown', autosize);
  document.querySelector(".textarea10").addEventListener('keydown', autosize);
  document.querySelector(".textarea11").addEventListener('keydown', autosize);
  document.querySelector(".textarea12").addEventListener('keydown', autosize);
  document.querySelector(".projectsDiv").addEventListener("click", function () {
    tipsParagraph.innerText = "Highlight the key achievements you have presented on your CV so the hiring manager can catch them very quickly. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. Enable the reader to see what he needs to about your experience right away. Describe every job title with a few words about your most relevant experiences connected to the title you’re applying for.";
  })

  //Delete achievement & certificates

  document.querySelector(".achievementDiv").addEventListener("mouseover", function () {
    document.querySelector(".delAchievements").classList.remove("info");
  })
  document.querySelector(".achievementDiv").addEventListener("mouseout", function () {
    document.querySelector(".delAchievements").classList.add("info");
  })
  document.querySelector(".delAchievements").addEventListener("click", function () {
    document.querySelector(".achievementDiv").remove();
  })

  //Delete achievement1
  document.querySelector(".datesDiv1").addEventListener("mouseover", function () {
    document.querySelector(".delAchievement1").classList.remove("info");
  })
  document.querySelector(".datesDiv1").addEventListener("mouseout", function () {
    document.querySelector(".delAchievement1").classList.add("info");
  })
  document.querySelector(".delAchievement1").addEventListener("click", function () {
    document.querySelector(".datesDiv1").remove();
  })

  //Delete achievement2
  document.querySelector(".datesDiv2").addEventListener("mouseover", function () {
    document.querySelector(".delAchievement2").classList.remove("info");
    document.querySelector(".achievementAdd").classList.remove("info");
  })
  document.querySelector(".datesDiv2").addEventListener("mouseout", function () {
    document.querySelector(".delAchievement2").classList.add("info");
    document.querySelector(".achievementAdd").classList.add("info");
  })
  document.querySelector(".delAchievement2").addEventListener("click", function () {
    document.querySelector(".datesDiv2").remove();
  })

  //Add achievements

  document.querySelector(".achievementAdd").addEventListener("click", function () {
    document.querySelector(".datesDiv2").innerHTML += '<form><div class="pt-2 datesDivNew"><i class="fas fa-times delAchievement3 info mr-2"></i><input type="text" placeholder="Achievements" class="data border-0 widthInput"><input type="text" placeholder="If needed write here description about achievement" class="data border-0 w-100 achievements"></div></form>';
    document.querySelector(".datesDiv2").addEventListener("mouseover", function () {
      document.querySelector(".delAchievement3").classList.remove("info");
    })
    document.querySelector(".datesDiv2").addEventListener("mouseout", function () {
      document.querySelector(".delAchievement3").classList.add("info");
    })
    document.querySelector(".datesDivNew").addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("delAchievement3")) {
        e.target.parentElement.remove();
      }
    })
  })

  //Languages

  document.querySelector(".languages").innerHTML = '<form><div class="languagesDiv"><i class="fas fa-times info delLanguages mr-2"></i><p class="h5 text-uppercase pt-4">LANGUAGES</p><div class="dates english"><i class="fas fa-times info delEnglish mr-2"></i><textarea type="text" placeholder="English" rows="1" class="data1 textarea13 border-0 widthInput"></textarea><textarea type="text" placeholder="Full Professional Proficiency" rows="1" class="data1 textarea14 border-0 w-100 achievements"></textarea></div><div class="dates language1 pt-2"><i class="fas fa-times info delLanguage1 mr-2"></i><i class="fas fa-plus-square info languageAdd"></i><textarea type="text" placeholder="Language" rows="1" class="data1 textarea15 border-0 widthInput"></textarea><textarea type="text" placeholder="Limited Working Proficiency" rows="1" class="data1 textarea16 border-0 w-100 achievements"></textarea></div></div></form>';
  document.querySelector(".textarea13").addEventListener('keydown', autosize);
  document.querySelector(".textarea14").addEventListener('keydown', autosize);
  document.querySelector(".textarea15").addEventListener('keydown', autosize);
  document.querySelector(".textarea16").addEventListener('keydown', autosize);

  document.querySelector(".languages").addEventListener("click", function () {
    tipsParagraph.innerText = "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.";
  })

  //Delete languages

  document.querySelector(".languagesDiv").addEventListener("mouseover", function () {
    document.querySelector(".delLanguages").classList.remove("info");
  })
  document.querySelector(".languagesDiv").addEventListener("mouseout", function () {
    document.querySelector(".delLanguages").classList.add("info");
  })
  document.querySelector(".delLanguages").addEventListener("click", function () {
    document.querySelector(".languagesDiv").remove();
  })

  //Delete language
  document.querySelector(".english").addEventListener("mouseover", function () {
    document.querySelector(".delEnglish").classList.remove("info");
  })
  document.querySelector(".english").addEventListener("mouseout", function () {
    document.querySelector(".delEnglish").classList.add("info");
  })
  document.querySelector(".delEnglish").addEventListener("click", function () {
    document.querySelector(".english").remove();
  })

  //Delete language1
  document.querySelector(".language1").addEventListener("mouseover", function () {
    document.querySelector(".delLanguage1").classList.remove("info");
    document.querySelector(".languageAdd").classList.remove("info");
  })
  document.querySelector(".language1").addEventListener("mouseout", function () {
    document.querySelector(".delLanguage1").classList.add("info");
    document.querySelector(".languageAdd").classList.add("info");
  })
  document.querySelector(".delLanguage1").addEventListener("click", function () {
    document.querySelector(".language1").remove();
  })

  //Add language
  document.querySelector(".languageAdd").addEventListener("click", function () {
    document.querySelector(".language1").innerHTML += '<form><div class="pt-2 languageNew"><i class="fas fa-times delLanguage2 info mr-2"></i><input type="text" placeholder="Language" class="data border-0 widthInput"><input type="text" placeholder="Limited Working Proficiency" class="border-0 w-100 achievements data"></div></form>';
    document.querySelector(".language1").addEventListener("mouseover", function () {
      document.querySelector(".delLanguage2").classList.remove("info");
    })
    document.querySelector(".language1").addEventListener("mouseout", function () {
      document.querySelector(".delLanguage2").classList.add("info");
    })
    document.querySelector(".languageNew").addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("delLanguage2")) {
        e.target.parentElement.remove();
      }
    })
  })

  //Informal Education

  document.querySelector(".informalEducationDiv").innerHTML = '<form><div class="informalEducation"><i class="fas fa-times info delInformal"></i><p class="h5 text-uppercase">informal education</p><div class="informalDiv"><div class="informalDiv1 pb-2"><i class="fas fa-times info delInformal1"></i><input type="text" placeholder="Course" class="data form-control"></div><div class="informalDiv2 pb-2"><i class="fas fa-times info delInformal2"></i><input type="text" placeholder="Webinar" class="data form-control"></div><div class="informalDiv3 pb-2"><i class="fas fa-times info delInformal3 mr-2"></i><i class="fas fa-plus-square info skillAdd"></i><input type="text" placeholder="Book" class="data form-control"></div></div></div></form>';

  document.querySelector(".informalEducationDiv").addEventListener("click", function () {
    tipsParagraph.innerText = "Don’t be afraid to include a ​“Informal education”​ where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.";
  })

  //Delete informal education

  document.querySelector(".informalEducation").addEventListener("mouseover", function () {
    document.querySelector(".delInformal").classList.remove("info");
  })
  document.querySelector(".informalEducation").addEventListener("mouseout", function () {
    document.querySelector(".delInformal").classList.add("info");
  })
  document.querySelector(".delInformal").addEventListener("click", function () {
    document.querySelector(".informalEducation").remove();
  })

  //Delete course
  document.querySelector(".informalDiv1").addEventListener("mouseover", function () {
    document.querySelector(".delInformal1").classList.remove("info");

  })
  document.querySelector(".informalDiv1").addEventListener("mouseout", function () {
    document.querySelector(".delInformal1").classList.add("info");

  })
  document.querySelector(".delInformal1").addEventListener("click", function () {
    document.querySelector(".informalDiv1").remove();
  })

  //Delete webinar

  document.querySelector(".informalDiv2").addEventListener("mouseover", function () {
    document.querySelector(".delInformal2").classList.remove("info");
  })
  document.querySelector(".informalDiv2").addEventListener("mouseout", function () {
    document.querySelector(".delInformal2").classList.add("info");
  })
  document.querySelector(".delInformal2").addEventListener("click", function () {
    document.querySelector(".informalDiv2").remove();
  })

  //Delete book
  document.querySelector(".informalDiv3").addEventListener("mouseover", function () {
    document.querySelector(".delInformal3").classList.remove("info");
    document.querySelector(".skillAdd").classList.remove("info");
  })
  document.querySelector(".informalDiv3").addEventListener("mouseout", function () {
    document.querySelector(".delInformal3").classList.add("info");
    document.querySelector(".skillAdd").classList.add("info");
  })
  document.querySelector(".delInformal3").addEventListener("click", function () {
    document.querySelector(".informalDiv3").remove();
  })

  //Add informal education

  document.querySelector(".skillAdd").addEventListener("click", function () {
    document.querySelector(".informalDiv3").innerHTML += '<form><div class="informalNew pt-2"><i class="fas fa-times info delInformal4"></i><input type="text" placeholder="Added Informal Education" class="data form-control"></div></form>';
    document.querySelector(".informalDiv3").addEventListener("mouseover", function () {
      document.querySelector(".delInformal4").classList.remove("info");
    })
    document.querySelector(".informalDiv3").addEventListener("mouseout", function () {
      document.querySelector(".delInformal4").classList.add("info");
    })
    document.querySelector(".informalNew").addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("delInformal4")) {
        e.target.parentElement.remove();
      }
    })
  })
})
//Linkedin button

btnLinkedin.addEventListener("click", function () {
  btnLinkedin.classList.add("click");
  btnLinkedin.classList.add("color");
  document.querySelector(".background").style.height = "auto";
  document.querySelector(".all").classList.add("info");
  document.querySelector(".carouselRowLaika").classList.add("info");
  document.querySelector(".carouselRow").classList.remove("info");
  document.querySelector(".tipsCol").classList.add("info");
  document.querySelector(".tipsCol2").classList.add("info");
  document.querySelector(".webDevelopmentCV").style.backgroundColor = "transparent";
  document.querySelector(".webDevelopmentCV").style.borderRadius = "0";
  document.querySelector(".webDevelopmentCV").style.boxShadow = "none";
  btnLaika.classList.remove("color");
  btnDownload.classList.add("info");
  btnEdit.classList.add("info");
  btnCV.classList.remove("color");
})
//Linkedin tips
document.querySelector(".tips1").addEventListener("mouseover", function () {
  tipsParagraph1.innerText = "Make sure that your title matches your skills. E.g., if you’re an entry level Data Scientist, don’t say that you’re a Data Science Expert. Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you. Don’t write in things that you wouldn’t like to happen.";
})
document.querySelector(".tips2").addEventListener("mouseover", function () {
  tipsParagraph1.innerText = "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile. Put in the skills you are most experienced in, so you can be endorsed from other people. Tip: Ask friends and coworkers to endorse you.";
})
document.querySelector(".topLinkedin").addEventListener("mouseover", function () {
  tipsParagraph1.innerText = "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts.";
})
document.querySelector(".bottomLinkedin").addEventListener("mouseover", function () {
  tipsParagraph1.innerText = "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Digital Marketing Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.";
})
document.querySelector(".tips4").addEventListener("mouseover", function () {
  tipsParagraph1.innerText = "List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award from a hackaton.";
})

//WeAreLaika Button

btnLaika.addEventListener("click", function () {
  btnLaika.classList.add("click");
  btnLaika.classList.add("color");
  btnLinkedin.classList.remove("color");
  document.querySelector(".background").style.height = "auto";
  document.querySelector(".all").classList.add("info");
  document.querySelector(".carouselRow").classList.add("info");
  document.querySelector(".carouselRowLaika").classList.remove("info");
  document.querySelector(".tipsCol").classList.add("info");
  document.querySelector(".tipsCol2").classList.remove("info");
  document.querySelector(".webDevelopmentCV").style.backgroundColor = "transparent";
  document.querySelector(".webDevelopmentCV").style.borderRadius = "0";
  document.querySelector(".webDevelopmentCV").style.boxShadow = "none";
  btnDownload.classList.add("info");
  btnEdit.classList.add("info");
  btnCV.classList.remove("color");
})

//WeAreLaika tips

document.querySelector(".tipsLaika1").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Make sure you leave an email that you check regularly.";
})
document.querySelector(".top").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)";
})
document.querySelector(".bottom").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.";
})
document.querySelector(".top1").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).";
})
document.querySelector(".bottom1").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.";
})
document.querySelector(".tipsLaika4").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.";
})
document.querySelector(".top2").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Please be honest when selecting the level of your experience.";
})
document.querySelector(".middle").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.";
})
document.querySelector(".bottom2").addEventListener("mouseover", function () {
  tipsParagraph2.innerText = "You can choose multiple choices for your desired job plan.";
})























