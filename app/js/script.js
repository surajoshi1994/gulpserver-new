$(document).ready(function(){
    
    $('#showApiDiv').text('');

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(dataApi=>showdata(dataApi))
    
    showdata = dataApi => {
        dataApi.forEach(data => {
            let singleData;
            singleData = `<div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="${data.image}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${data.title}</h5>
                                    <p class="card-text">${data.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>`;

            $('#showApiDiv').append(singleData);
        });
    }
})