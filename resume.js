//1 create your own resume format in json format
let resume={
    "personal_information": [
    {
      "name": "Harshini",
      "address": "C10, Vsk Nagar,Vadavalli, Coimbatore -641041",
      "phone": "9944677738",
      "email": "harshuharshini516@gmail.com",
      "linkedin": "linkedin.com/in/Harshinim18",
      "github": "github.com/HarshiniM18"
    }
    ],
    "professional objective": "To work in an organisation which provides me with ample opportunities to enhance my skills and knowledge along with contributing to the growth of the organisation .",
    "education": [
      {
        "UG":[
            {
        "degree": "Bachelor of Science in Information Technology",
        "school": "Avinashilingam University",
        "graduation_year": 2022
            }
        ],
        "PG":[
            {
        "degree": "Master of Science in Information Technology",
        "school": "Bharathiar University",
        "graduation_year": 2024
      }
    ],
}
],
    "skills": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Python",
      "Git",
      "Problem Solving"
    ],
    "certifications": [
       "Introduction to Python ,Infosys SpringBoard",
       "Java Programming ,IIT Bombay",
       "C and Cpp ,IBM",
      
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Fluent"
      }
    ],
    "project work":[
        {
            "Title":"Women Security Application",
            "Software Used":"Android Studio",
            "Frontend":"Java",
            "Backend":"SQLite"
        }
    ]
  }
  console.log(resume)

//2 for the above json, iterate over all for loops
//for loop
for (let i = 0; i < resume.skills.length; i++) {
  console.log(`  ${resume.skills[i]}`);
}
//OUTPUT : 
  JavaScript
  HTML5
  CSS3
  Python
  Git
  Problem Solving

//for in
for (let key in resume) {
  console.log(`${key}: ${resume[key]}`);
}
//OUTPUT : 
personal_information:  
  name: Harshini
  address: C10, Vsk Nagar,Vadavalli, Coimbatore -641041
  phone: 9944677738
  email: harshuharshini516@gmail.com
  linkedin: linkedin.com/in/Harshinim18
  github: github.com/HarshiniM18
professional objective: To work in an organisation which provides me with ample opportunities to enhance my skills and knowledge along with contributing to the growth of the organisation .
education: 
  UG:
        degree: Bachelor of Science in Information Technology
        school: Avinashilingam University
        graduation_year: 2022
  PG:
        degree: Master of Science in Information Technology
        school: Bharathiar University
        graduation_year: 2024
skills: JavaScript,HTML5,CSS3,Python,Git,Problem Solving
certifications: Introduction to Python ,Infosys SpringBoard,Java Programming ,IIT Bombay,C and Cpp ,IBM
languages: 
   language: English
   proficiency: Fluent
project work: 
            Title:Women Security Application
            Software Used:Android Studio
            Frontend:Java
            Backend:SQLite

//for of
for (let educationItem of resume.education) {
  console.log("Education:");
  for (let key in educationItem) {
    console.log(`  ${key}: ${educationItem[key]}`);
  }
}
//OUTPUT : 
Education:
 UG:
        degree: Bachelor of Science in Information Technology
        school: Avinashilingam University
        graduation_year: 2022
  PG:
        degree: Master of Science in Information Technology
        school: Bharathiar University
        graduation_year: 2024

//for each
resume.personal_information.forEach((personal_informationItem) => {
  console.log("Personal Information:");
  for (let key in personal_informationItem) {
    console.log(`  ${key}: ${personal_informationItem[key]}`);
  }
});

//OUTPUT : 
Personal Information:
  name: Harshini
  address: C10, Vsk Nagar,Vadavalli, Coimbatore -641041
  phone: 9944677738
  email: harshuharshini516@gmail.com
  linkedin: linkedin.com/in/Harshinim18
  github: github.com/HarshiniM18
