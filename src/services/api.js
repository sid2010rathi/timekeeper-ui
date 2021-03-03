export const login = async (data) => {
    console.log("Call Login API");
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:data.email,
            password:data.password
        })
    }).then((res) => res.json());

    if(response.status === "ok") {
        localStorage.setItem('token', response.token);
        alert("Success");
    } else {
        alert("Error");
    }
}

export const register = async (data) => {
    console.log("Call Register API", data);
    const response = await fetch('http://localhost:5000/organizations/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            organizationName: data.orgName,
            organizationWebsite: data.orgSite,
            username: data.email,
            password: data.password
        })
    }).then((res) => res.json());

    if(response.status === "ok") {
        return response
    } else {
        return response
    }
}