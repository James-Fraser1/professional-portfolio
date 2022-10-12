// function Matrix() {

//     return (
//         <div style="background-color:#000000;" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" rightmargin="0">
//             <canvas width="1920" height="604" id="canv"> </canvas>
//             <script language="javascript" type="text/javascript">

//                 var n=3570;
//                 var numRandom= Math.round(Math.random()*(n-1));
//                 var selection= String(numRandom);
//                 var TheText= "001 01 101 00 11 1 0 000 111 0101 1010";// Default text
//                 var largo = -1;
//                 console.log("/poetry/"+selection+".html")
//                 fetch("./poetry/"+selection+".html")
//   .then(res => res.text())
//   .then(content => {
//     //console.log(content)
//     var parser = new DOMParser();
//                 var doc = parser.parseFromString(content, "text/html");
//                 var poemaTxt = doc.getElementsByClassName('poema')
//                 TheText= poemaTxt[0].innerText  ;
//   });

//                 const canvas = document.getElementById('canv');
//                 const ctx = canvas.getContext('2d');

//                 const w = canvas.width = document.body.offsetWidth;
//                 const h = canvas.height = document.body.offsetHeight;
//                 const cols = Math.floor(w / 20) + 1;
//                 const ypos = Array(cols).fill(0);

//                 ctx.fillStyle = '#000';
//                 ctx.fillRect(0, 0, w, h);
//                 var contador=0;

//                 // Function writes the characters from the text, It uses a Matrix Font defined in file ./estilos/matixfont.css
//                 function matrix () {
//                     // Draw a semitransparent black rectangle on top of previous drawing
//                     ctx.fillStyle = '#0001';
//                 ctx.fillRect(0, 0, w, h);

//                 // Set color to green and font to matrix
//                 ctx.fillStyle = '#0f0';
//                 ctx.font = "20px Matrix";
    
    
//     ypos.forEach((y, ind) => {
//       var text="";
//                 if (TheText[contador]=== undefined){
//                     contador = 1;
//                 text = TheText[contador];
//     }else{
//                     text = TheText[contador];
//                 contador=contador+1;
//     }

//                 // x coordinate of the column, y coordinate is already given
//                 const x = ind * 20;
//                 ctx.fillText(text, x, y);

//     // randomly reset the end of the column if it's at least 100px high
//       if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
//                 // otherwise just move the y coordinate for the column 20px down,
//                 else ypos[ind] = y + 20;
//     });
//   }

//                 // call function every 50 Ms
//                 setInterval(matrix, 60);
//             </script>
//         </div>
//     )

// }

// export default Matrix;