CONTEXTO DEL PROYECTO

Se trata de dos proyectos dentro de uno.
- Por un lado, mi portfolio personal, el cual está en "/"
- Y por el otro, una app con varios proyectos pequeños "Multi tasks app", el cual solo hice una sola tarea y por el momento no pienso completar más.

OBJETIVO
El objetivo es trabajar en el portfolio personal. Actualmente lo veo un poco desactualizado, con un estilo aburrido y sin animaciones que llamen la atención. Lo que quiero es un portfolio moderno, con animaciones y un estilo darkmode fachero y moderno que atraiga a los recruiters. Para esto, vamos a trabajar en cada sección para lograr un diseño estético y agregar animaciones.

TECNOLOGÍAS
- Next.js
- TailwindCSS
- Shadcn UI: actualmente uso MUI pero vamos a migrar a Shadcn UI.
- Framer Motion
- TypeScript

1- GENERALES
a- Colores: el azul que uso me parece muy aburrido, implementa colores más cercanos a la gama de los grices. No uses directamente negro y blanco. Introduce un color de acento vibrante pero profesional. Ejemplo: Un azul eléctrico, verde menta, morado suave o un naranja quemado.
b- Fuente: actualmente hay una sola fuente, sin mucho juego. Combina dos fuentes: Una para títulos (Headings): Una fuente más llamativa, moderna, quizás una "sans-serif" con personalidad (ej. Poppins, Montserrat, Rubik, Inter, Manrope). Otra para el cuerpo del texto (Body): Una fuente legible y cómoda de leer (ej. Lato, Open Sans, Roboto, Nunito).

2- HEADER
a- Los items del navbar en desktop deben tener un color gris claro, y cuando se le hace hover debe tener un color más tirando a blanco que resalte de los demás items.
b- En desktop, cada item del navbar deberia tener un underline que se active al hacer hover sobre el item; el underline debe ser del mismo color que el item activo, y no debe aparecer de la nada, sino que sebe ser una linea que va creciendo, que comienza desde el inicio del item y termina en el final.
c- En mobile se mantiene igual
d- En desktop cambia la ditribución porque agregamos un botón de contacto distinto: el logo queda a la izquierda, los items del nav van a ester en el medio, y ahora el botón de contacto no va a estar como un link más, sino que tiene que va a estar a la derecha.
e- El botón de contacto debe tener un estilo distinto a los links, y cuando es clickeado debe scrollear hasta la sección de contacto que hay en la página.

3- HERO
Si bien es un portfolio personal, el hero es el que más llama la atención, por lo que es el que más se debe trabajar. En el hero, el texto que se muestra es el nombre, el apellido y el título. Creo que mostrar mi foto no es necesario, y tampoco tengo una foto decente, por lo que se va a quitar. Haz que sea súper impactante. Tu nombre, título y una frase que resuma tu valor. Considera poner el "Download CV" más grande y prominente. Añade una ilustración personalizada de ti o algo que represente tu estilo como desarrollador.

4- PROYECTOS
Me gusta que los proyectos estén en grid. Pero adapta las cards al nuevo diseño que vayas a hacer para que se vea bien. Además, agrega un efecto hover a las card, como un destello que se vaya moviendo a medida que el cursor de mueve por la carta. También agrega un egecto de zoom a la imagen de la card.

5- SKILLS
Vamos a hacerlo un poco más visual:
Si bien vamos a mantener la agrupación de skills y los botones en estilo de pills, estos deben tener un diseño adaptado a los nuevos estilos de la página.
En cuanto a las skills, no vamos a usar más un collapsable, sino que cada skill va a ser una card que tendrá un radius ProgressBar que se llenará cuando el usuario baje hasta la sección de Skills. Dentro de ese círculo va a estar el logo de la tecnología, y cuando el usuario hace hver sobre la card de esa skill, en lugar del logo de la tecnología, debe mostrarse el porcentaje de conocimiento. 
Busca un estilo Glassmorphism o con Neumorphism sutil.
- Grosor del trazo: Usa un trazo fino para el círculo de fondo y uno más grueso (o con un gradiente) para el progreso.
- Gradientes: No uses colores planos. Un gradiente de linear-gradient(45deg, #color1, #color2) hace que se vea mucho más premium.

6- ABOUT ME
Es mucho texto y poco atractivo. No se me ocutrre ninguna idea, pero fijate algo que sea más atractivo visualmente y no muestre demasiado texto desde un inicio.

7- CONTACTO
Creo que está bastante bien. Solo adáptalo a los nuevos estilos y diseños del portfolio.