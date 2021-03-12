let organizationId;
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
        organizationId = response.user.organizationId;
        alert("Success");
    } else {
        alert("Error");
    }
}

export const register = async (data) => {
    console.log("Call Register API");
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

export const verifyCode = async (data) => {
    console.log("Verify code API");

    const response = await fetch('http://localhost:5000/organizations/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: data.username,
            code: data.code
        })
    }).then((res) => res.json());

    if(response.status === "ok") {
        return response
    } else {
        return response
    }
}

export const employeeOnboard = async (data) => {
    console.log("Employee Onboard");

    const response = await fetch('http://localhost:5000/userscreation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userFirstName: data.username,
            userLastName: data.userLastName,
            userUsername: data.userUsername,
            userPassword: data.userPassword,
            userRole: data.userRole,
            userOrganizationId:organizationId
            
        })
    }).then((res) => res.json());

    if(response.status === "ok") {
        return response
    } else {
        return response
    }
}