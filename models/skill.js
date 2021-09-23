const skills = [
    {id: 123456789, skill: "Python", learned: false},
    {id: 234567891, skill: "Javascript", learned: true},
    {id: 345678912, skill: "HTML", learned: true},
    {id: 456789123, skill: "CSS", learned: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}