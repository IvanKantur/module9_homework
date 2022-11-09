const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let students;

function parseXML() {
    const listNode = xmlDOM.querySelector("list");
    const studentCollection = listNode.querySelectorAll("student");
    const studentsArr = Array.from(studentCollection);
    return (
        students = studentsArr.map(function (student){

        student.name = student.querySelector("first").textContent + ' ' + student.querySelector("second").textContent
        student.age = student.querySelector("age").textContent
        student.prof = student.querySelector("prof").textContent
        let studentName = student.querySelector("name")
        student.lang = studentName.getAttribute("lang")
        return student;
    })
);
}
parseXML();
const result = {
    list :[
        {name: students[0].name, age: students[0].age, prof: students[0].prof, lang: students[0].lang},
        {name: students[1].name, age: students[1].age, prof: students[1].prof, lang: students[1].lang},
    ]
}
console.log(result)
