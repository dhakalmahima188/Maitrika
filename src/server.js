export async function addNewPatient(userInfo) {
    let url = "http://localhost:5000/data"
    let patient = {
        "name": userInfo.title,
        "age": userInfo.age,
        "location": userInfo.desc
    }
    console.log(userInfo)
    console.log(patient)

    const response =  await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(patient) // body data type must match "Content-Type" header
    })

    return response.json();
}

export async function getAllPatient() {
    let url = "http://localhost:5000/data"
    const response = await fetch(url)

    let events = []
    let items = await response.json()
    let i = 0;

    items.patients.forEach(item => {
        if (item.location){
            events.push({
                sn: i,
                name: item.name,
                location: item.location,
                age: item.age
            })
            i++;
        }

        
    });
    console.log("Yanked Data from server")
    console.log(events)
     return events;
}