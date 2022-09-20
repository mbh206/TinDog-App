
class Dog {
    constructor(data) {
        Object.assign(this, data)
        }

        renderDogHtml() {
            const { name, avatar, age, bio} = this
            return `
                <div>
                    <img src="${avatar}" id="avatar">
                </div>
                <div class="user-info">
                    <p id="title"><span id="name">${name}</span>, <span id="age">${age}</span></p>
                </div>
                <div class="user-info">
                    <p id="desc"><span id="bio">${bio}</span></p>
                </div>
                `
            }
        
} 

export {Dog}