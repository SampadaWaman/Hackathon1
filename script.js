async function getbreweries(){
    let breweries;
    try{
        const data=await fetch(
            "https://api.openbrewerydb.org/breweries",
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                },
            }
        );
        breweries=await data.json();
        console.log(breweries);
        
    }
    catch(err){
        console.log(err);
    }
    return breweries;
    
}
getbreweries().then(breweries =>{breweries});


async function displayname(){
    let breweries =await getbreweries();

   
    let html="";
        breweries.forEach (user => {
            let htmlSegment = `<div class="user">
                                
                                <h2> Name: ${user.name}</h2><br>
                                <h2> Brewery Type: ${user.brewery_type}</h2><br>
                                <h2> Website URL: ${user.website_url}</h2><br>
                                <h2> Contact No.: ${user.phone}</h2><br><br><br>
                            </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('.container');
        container.innerHTML = html;
    };

displayname();

