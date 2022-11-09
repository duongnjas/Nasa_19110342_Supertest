const {
    getAllLaunches, 
    addNewLaunch, 
    existLaunchWithId,
    deleteLaunchById,
} = require('../../models/launches.model')

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res){
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.target){
            return res.status(400).json({
                error: 'Missing launch props',
            });
        }

    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpDeleteLaunch(req, res) {
    const launchId = Number(req.params.id);

    if(!existLaunchWithId(launchId)){
        return res.status(404).json({
            error: 'Launch not found',
        });
    }
    const deleteLaunch = deleteLaunchById(launchId);
    return res.status(200).json(deleteLaunch);
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpDeleteLaunch,
};