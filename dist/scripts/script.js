$(document).ready(function(){$("#showApiDiv").text(""),fetch("https://fakestoreapi.com/products").then(a=>a.json()).then(a=>showdata(a)),showdata=a=>{a.forEach(a=>{a=`<div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="${a.image}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${a.title}</h5>
                                    <p class="card-text">${a.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>`;$("#showApiDiv").append(a)})}});