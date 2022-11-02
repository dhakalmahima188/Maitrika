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

function getMother(person) {
    let people = getPeople()
    const index = people.findIndex(p => p.title == person)
    return { people: people, motherIndex: index }
}

export function addChild(parentName, childInfo) {
    let { people, motherIndex } = getMother(parentName)
    if (motherIndex > -1) {
        let person = people[motherIndex]
        if (person.children) {
            people[motherIndex].children.push(childInfo)
        }
        else {
            person.children = [childInfo]
        }
        localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [...people] }))
        return person.children
    }
    return []
}

export function addChildDetails(parentName, childName, childInfo) {
    let { people, motherIndex } = getMother(parentName);
    if (motherIndex > -1) {
        if (!people[motherIndex].children) return;
        const childIndex = people[motherIndex].children.findIndex(c => c.name == childName)
        people[motherIndex].children[childIndex].details = childInfo
        localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [...people] }))
    }
}
export function addChildVitals(parentName, childName, childVitals) {
    let { people, motherIndex } = getMother(parentName);
    if (motherIndex > -1) {
        if (!people[motherIndex].children) return;
        const childIndex = people[motherIndex].children.findIndex(c => c.name == childName)
        if (people[motherIndex].children[childIndex].vitals) {
            childVitals.sn = people[motherIndex].children[childIndex].vitals.length + 1
            people[motherIndex].children[childIndex].vitals.push(childVitals)
        }
        else {
            childVitals.sn = 1
            people[motherIndex].children[childIndex].vitals = [childVitals]
        }
        localStorage.setItem(localStorageItemKey, JSON.stringify({ patients: [...people] }))
        return people[motherIndex].children
    }
}
export function addMotherVitals(parentName, motherVitals) {
    let { people, motherIndex } = getMother(parentName);
    if (motherIndex > -1) {
        if (!people[motherIndex].vitals) {
            people[motherIndex].vitals.push(motherVitals)
        }
        else {
            people[motherIndex].vitals = [motherVitals]
        }
    }
}

export function getChildren(parentName) {
    let people = getPeople();
    const index = people.findIndex(p => p.title == parentName)
    if (index > -1) {
        let person = people[index]
        console.log(person)
        return person.children || []
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