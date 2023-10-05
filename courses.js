//courses.js
let aCourse = {
   code: "CSE121b",
   name: "Javascript Language",
   section :[
           {
            sectionNumber: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'    
           },
           {
            sectionNumber: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sister A'
           },
           {
            sectionNumber: 3, roomNum: 'STC 355', enrolled: 8, days: 'TTh', instructor: 'Sister B'
           },
           {
            sectionNumber: 4, roomNum: 'STC 371', enrolled: 2, days: 'TTh', instructor: 'Sister C'
           },
           {
            sectionNumber: 5, roomNum: 'STC 327', enrolled: 22, days: 'TTh', instructor: 'Bro A'
           }
          ],       
    addOrSub: function (ind, add = true){
        let found = this.section.findIndex( (item) => item.sectionNumber == ind);                                                          
              if (found >= 0){
                    if (add){
                        this.section[found].enrolled +=1;
                        setDisplayData(this.section);
                    }
                    else{
                        this.section[found].enrolled -=1;
                        setDisplayData(this.section);
                    }                 
              }
              else{
                alert('Not found !');
              };         
    }                                  
};
function setCourse(course){
       let courseName = document.querySelector('#courseName');
       courseName.textContent = course.name;
       let courseCode = document.querySelector('#courseCode');
       courseCode.textContent = course.code;              
}
function setDisplayData(course){
         let h = '';         
         let id_ = document.querySelector('#sections');
                   course.map((item) => {            
           h += `<tr>
                                 <td> ${item.sectionNumber}:</td>
                                 <td> ${item.roomNum}</td>
                                 <td> ${item.enrolled}</td>
                                 <td> ${item.days}</td>
                                 <td> ${item.instructor}</td>
                              </tr>`;                                    
        });
        id_.innerHTML = h;
}
setCourse(aCourse);
setDisplayData(aCourse.section);
let enrollBtn = document.querySelector('#enrollStudent');
enrollBtn.addEventListener('click', () => {
    let lookSectionNum = Number(document.querySelector('#sectionNumber').value);
            aCourse.addOrSub(lookSectionNum);
    });    
let dropStudentBtn = document.querySelector('#dropStudent')
dropStudentBtn.addEventListener('click',() => {    
    let lookSectionSubstract = document.querySelector('#sectionNumber').value;
            aCourse.addOrSub(lookSectionSubstract, false);
});    
   




