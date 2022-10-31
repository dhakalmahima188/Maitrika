const localStorageItemKey = "patient"
export function getPeople() {
    let data = localStorage.getItem(localStorageItemKey)
    if (data) {
        let jsondata = JSON.parse(data)
        return jsondata.patients
    }
    else {
        localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [] }))
        return []
    }
}
export function addPeople(person) {
    let people = getPeople()
    localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [...people, person] }))
}

export function addChild(parentName, childInfo) {
    let people = getPeople()
    const index = people.findIndex(p => p.title == parentName)
    if (index > -1) {
        let person = people[index]
        if (person.children) {
            people[index].children.push(childInfo)
        }
        else {
            person.children = [childInfo]
        }
        localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [...people] }))
        return person.children
    }
    return []
}
export function getChildren(parentName) {
    let people = getPeople();
    const index = people.findIndex(p => p.title == parentName)
    if (index > -1) {
        let person = people[index]
        return person.children
    }
    else {
        return []
    }
}

export function removePeople(person) {
    let people = getPeople();
    const index = people.findIndex(p => p.title == person.title)
    if (index > -1) {
        people.splice(index, 1)
    }
    localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [...people] }))
}