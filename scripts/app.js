window.onload = function() {

    // GPS
    var x = document.getElementById("locationstatus");
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    if (navigator.geolocation) {
        navigator.permissions.query({name: 'geolocation'}).then(function (permissionStatus) {
            x.innerHTML = permissionStatus.state;
            navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

            permissionStatus.onchange = function () {
                x.innerHTML = this.state;
            };
        });
    }

    function successHandler(location) {
        console.log("Success!")
    }
    function errorHandler(error) {
        console.log('Attempt to get location failed: ' + error.message);
    }
}