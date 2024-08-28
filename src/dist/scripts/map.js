DG.then(function () {
    var map = DG.map('map', {
        center: [55.765023, 37.685197],
        zoom: 15
    });

    DG.marker([55.765175, 37.685697]).addTo(map).bindPopup('МГТУ им. Н.Э. Баумана, Кафедра ИУ-3');
});