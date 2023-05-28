export const getProjects = async () => {
    console.log(process.env.REACT_APP_API_SERVER_ENDPOINT);

    let projects = [];
    try {
        const apiUrl = `${process.env.REACT_APP_API_SERVER_ENDPOINT}/projects`;
        projects = await fetch(apiUrl).then(response => response.json());
    } catch (e) {
        console.log("ERROR", {e});
    }

    return projects;
}
