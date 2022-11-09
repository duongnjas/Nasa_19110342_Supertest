const launches = new Map();

let lastestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket:"Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b', 
    customer: ['ZTM', 'NASA'], 
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
    return launches. has(launchId);

}

function getAllLaunches(){
    
    return Array.from(launches.values());
}
function addNewLaunch(launch){
    lastestFlightNumber ++;

    launches.set(
        lastestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['Zero to Mastery','NASA'],
            flightNumber: lastestFlightNumber,

        })
    );
}

function deleteLaunchById(launchId){
    const deleteLaunch = launches.get(launchId);
    deleteLaunch.upcoming = false;
    deleteLaunch.success = false;
    return deleteLaunch;
}


module.exports ={
    existLaunchWithId,
    getAllLaunches, 
    addNewLaunch,
    deleteLaunchById,
};