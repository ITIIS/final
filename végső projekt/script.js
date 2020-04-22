let auto = {
    photo: 'images/car.jpg',
    title: 'Sportkocsi',
    description: 'Itt egy Nissan',
};
$('#photo').attr('src', data.photo);
let myImages = [auto];
let currentPhoto = 0;
$('#photo').attr('src', myImages[currentPhoto].photo);
$('#photo-title').text(myImages[currentPhoto].title);
$('#photo-description').text(myImages[currentPhoto].description);