// Parameters
const profileName = "snapty99";
const project = "Learning Java script";

// Object
const profile = {
    profileId : 1,
    profileName : profileName,
    project,
    information(test){
        console.log("Project = " + test);
    }
}

// call object
console.log(profile);
// call function in Object
profile.information("test");