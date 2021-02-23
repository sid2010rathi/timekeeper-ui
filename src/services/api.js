export const login = async (data) => {
    console.log("Let's call API");
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