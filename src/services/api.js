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
        localStorage.setItem('organizationId', response.user.organizationId);
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

export const getOrganization = async (data) => {
    const token = localStorage.getItem('token')
    const organizationId = localStorage.getItem('organizationId')
    console.log("Get Register Details");
    const response = await fetch('http://localhost:5000/organizations/'+organizationId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+ token
        }
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

    return response;
}

export const employeeOnboard = async (data) => {
    console.log("Employee Onboard API Called");
    const token = localStorage.getItem('token')
    const organizationId = localStorage.getItem('organizationId')

    const response = await fetch('http://localhost:5000/onboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+ token
        },
        body: JSON.stringify({
            firstName: data.userFirstname,
            lastName: data.userLastname,
            username: data.userUsername,
            password: data.userPassword,
            role: data.userRole,
            organizationId: organizationId
        })
    }).then((res) => res.json());

    return response;
}

export const employeeUpdate = async (data) => {
    console.log("Update Employee API Called")
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:5000/onboard', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+ token
        },
        body: JSON.stringify(data)
    }).then((res) => res.json());

    return response;
}

export const getEmployee = async () => {
    console.log("Get Employee API Called")
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:5000/onboard', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+ token
        }
    }).then((res) => res.json());

    return response;
}