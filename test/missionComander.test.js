const MissionComander = require("./../app/missionComander");

describe ("Unit Test for mission Comander Class", () => {
    test ('1) Create a mission commander objet', () => {
        const myMissionComander = new MissionComander ("Woopa")
        expect(myMissionComander.name).toBe("Woopa");
    });
})