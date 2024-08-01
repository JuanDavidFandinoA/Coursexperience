var courses = [{
    Coursename: "course intensivo algebra",
    Themearea: "Matematicas",
    Courseteacher: "Kris Jenner",
    Courselenght: "30 horas",
    Coursedescription: "Animate a inscribirte en un course intensivo a profundidad de algebra donde podras aprende todo lo necesario como para humillar a Baldor con nadie mas y nadie menos que KRIS JENNER! Que mejor que aprender numeros con el icono que volvio a sus hijas millonarias de maneras totalmente eticas y responsables. No importa si eres un estudiante de octavo grado o si vas repitiendo por tercera vez calculo en la carrera de la cual te quieres salir pero no sabes como decirle a tus padres"
},{
    Coursename: "Cocina",
    Themearea: "Supervivencia humana basica",
    Courseteacher: "Kylie Jenner",
    Courselenght: "15 horas",
    Coursedescription: "En este course podras aprender a mantener a tu pareja a tu lado con las grandes habilidades de cocina que vas a adquirir sin importar si eres hombre, mujer, no binarie. Tu profesora va a ser Kylie Jenner (sabemos que no es la persona mas apta para mantener a sus parejas al lado por mucho tiempo) pero no dejes que esto detenga tus ganas de aprender a cocinar con una celebridad!"
},{
    Coursename: "Fotografia",
    Themearea: "Artes escenicas",
    Courseteacher: "Kim Kardashian",
    Courselenght: "20 horas",
    Coursedescription: "Te compraste el ultimo iPhone 15 Pro Max pero, ¿Aun asi la mona tenga iPhone mona se queda? NO! por esto mismo ya que te estas replanteando esa inversión que hiciste (sin contar el cargador y los accesorios por separado) vas a poder invertir un poco mas en aprender a ser un icono frente a la camara con una de las personas con mas experiencia en el campo. Damas y caballeros: KIM KARDASHIAN! Este icono de la televisión va a enseñarte a lucir siempre bien frente una camara y quien sabe, tambien podras volverte famosa y hacerte una fortuna gracias a una como ella. Que esperas? ¡Inscribete ahora!"
},{
    Coursename: "Biologia",
    Themearea: "Ciencia",
    Courseteacher: "Miley Cyrus",
    Courselenght: "185 horas",
    Coursedescription: "course intensivo de biologia con Miley Cyrus (no se que mas decir por favor compra el course porfa porfa porfa porfa)"
}]

var create = document.getElementById("createThemearea")
var edit = document.getElementById("editThemearea")
var remove = document.getElementById("removeThemearea")

const waiting = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

function Createcourse(courses){
    courses.push({
        Coursename: prompt("Introduzca el nombre del course a crear:"),
        Themearea: prompt("Especifique el area al que desea que pertenezca el course:"),
        Courseteacher: prompt("Ingrese el nombre del profesor para el course:"),
        Courselenght: parseInt(prompt("Estipule la duracion aproximada del course:")),
        Coursedescription: prompt("Ingrese la descripción para el course:")
    })
    return courses;
}

function CourseEdit(courses){
    let Coursenamecourse = prompt("Introduzca el nombre del course a editar:");
    courses.forEach(course => {
        if (course.Coursename === Coursenamecourse){
            Coursename = prompt("Ingrese el nuevo nombre para el course:");
            let Themearea = prompt("Ingrese la nueva area a la que va a pertenecer el course:");
            let Courseteacher = prompt("Ingrese el nombre del profesor para el course:");
            let Courselenght = prompt("Cambie la duración del course:");
            let Coursedescription = prompt("Ingrese la descripción para el course");

            console.log(Coursename, Themearea, Courseteacher, Courselenght, Coursedescription);

            if(Coursename !== "") {courses[courses.indexOf(course)].Coursename = Coursename;}
            if(Themearea !== "") {courses[courses.indexOf(course)].Themearea = Themearea;}
            if(Courseteacher !== "") {courses[courses.indexOf(course)].Courseteacher = Courseteacher;}
            if(Courselenght != "") {courses[courses.indexOf(course)].Courselenght = parseInt(Courselenght);}
            if(Coursedescription !== "") {courses[courses.indexOf(course)].Coursedescription = Coursedescription;}
        }
    });
    return courses;
}

function Removecourses(courses){
    let Coursenamecourse = prompt("Ingrese el Coursename del course a remove");
    courses.forEach(course => {
        if (course.Coursename === Coursenamecourse){
            courses.splice(courses.indexOf(course), 1);
        }
    });
    return courses;
}


const load = async() => {
    const data = await waiting(courses);

    let Themeareas = ""
    data.forEach(Themearea => {
        Themeareas += `<div>
    <h2>${Themearea.Coursename}</h2>
    <p>Area: ${Themearea.Themearea}</p>
    <p>Profesor: ${Themearea.Courseteacher}</p>
    <p>Duración: ${Themearea.Courselenght} horas</p>
    <p>Descripción: ${Themearea.Coursedescription}</p>
    <br>
</div>
`
        document.getElementById("Themeareas").innerHTML = Themeareas;
    });
}
create.addEventListener("click", () => {
    courses = Createcourse(courses);
    localStorage.setItem("courses", JSON.stringify(courses));
    load();
})

remove.addEventListener("click", () => {
    courses = Removecourses(courses);
    localStorage.setItem("courses", JSON.stringify(courses));
    load();
});

edit.addEventListener("click", () => {
    courses = CourseEdit(courses);
    localStorage.setItem("courses", JSON.stringify(courses));
    load();
});

if(localStorage.getItem("courses") != undefined){
    courses = JSON.parse(localStorage.getItem("courses"));
}
load();