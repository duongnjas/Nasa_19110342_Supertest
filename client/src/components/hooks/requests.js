const url = 'http://localhost:8000';

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${url}/planets`);
  return await response.json();
  
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${url}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b)=>{
    return a.flightnumber - b.flightnumber;
  })
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${url}/launches`, {
      method: "post", 
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  }
  catch(err){
    return{
      ok:false,
    };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try{
    return await fetch(`${url}/launches/${id}`,{
      method:"delete",
    });
  }
  catch(err){

  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};