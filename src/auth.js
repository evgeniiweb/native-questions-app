export function getAuthForm() {
    return `
        <form id="auth-form"
              class="mui-form">
            <div class="mui-textfield mui-textfield--float-label">
                <input id="email"
                       type="email"
                       required>
                <label for="email">Email</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input id="password"
                       type="password"
                       required>
                <label for="password">Password</label>
            </div>
            <button type="submit"
                    class="mui-btn mui-btn--raised mui-btn--primary">
                Login
            </button>
        </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyAMZJwWwHybM8wjiDbLfQpoK4I9n-v3rfc';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.idToken);
}
