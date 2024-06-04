function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 20,
        skills: ['JS', 'CSS', 'HTML'],
        details: function () {
            this.skills.forEach(function (skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.details();
}