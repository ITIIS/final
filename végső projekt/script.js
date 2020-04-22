let auto = {
    photo: 'images/car.jpg',
    title: 'Sportkocsi',
    description: 'Itt egy Nissan GT-R',
};
//let city = {
   // photo: 'images/city.jpg',
  //title: 'Varos,
  // description: 'Itt egy varos',
// };



 




//$('#photo').attr('src', data.photo);
let myImages = [auto];
let currentPhoto = 0;
$('#photo').attr('src', myImages[currentPhoto].photo);
$('#photo-title').text(myImages[currentPhoto].title);
$('#photo-description').text(myImages[currentPhoto].description); 

let loadCurrent = (photoNumber) => {
    $('#photo').attr('src', myImages[currentPhoto].photo);
    $('#photo-title').text(myImages[currentPhoto].title);
    $('#photo-description').text(myImages[currentPhoto].description);
}

$('.gomb1').click(() => {
  if(currentPhoto > 1) {
    currentPhoto--;  
  }
  loadCurrent(currentp);
});

$('.gomb2').click(() => {
  if(currentPhoto < 5) { 
    currentPhoto++; 
  }
  loadCurrent(currentPhoto);
});

loadCurrent(currentPhoto);