let data = [];
const page = document.querySelector("#page")

page.addEventListener("change", () => {
    main()
})

async function getData() {
    const url = "https://randomuser.me/api/?results=10";
    
    const response = await fetch(`${url}&page=${page.value}`);
    data = await response.json();
    
}


function renderUser() {
    let table = '';
    const tbody = document.querySelector("#tbody")
    const sorted = data.results.sort((a,b) => {
        const aFirstname = a.name.first;
        const bFirstname = b.name.first;

        if (aFirstname < bFirstname) return -1
        if (aFirstname > bFirstname) return 1

        return 0
    })
    for(let i=0 ; i<sorted.length; i++) {
        table += `<tr id="id-${i}">
            <td class="border">${sorted[i].name.title}. ${sorted[i].name.first} ${sorted[i].name.last}</td>
            <td class="border">${sorted[i].login.username}</td>
            <td class="border flex justify-center"><img class="object-cover" width="64" height="64" src="${sorted[i].picture.thumbnail}" alt="thumnail"/></td>
        </tr>`
    }
    tbody.innerHTML = table
    console.log(sorted);
}


async function main() {
    await getData();
    renderUser();
    
    
}


// fullname.addEventListener("click", data.sort())

main()
