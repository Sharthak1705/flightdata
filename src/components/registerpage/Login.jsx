const Login = ({ toggleForm }) => {
    const handleLogin = (e) => {
        e.preventDefault();

        const emailOrUsername = e.target.emailOrUsername.value;
        const password = e.target.password.value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Validate user credentials
        const user = users.find(
            (u) =>
                (u.email === emailOrUsername || u.username === emailOrUsername) &&
                u.password === password
        );

        if (user) {
            alert(`Welcome, ${user.username}!`);
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h3 className="text-2xl font-bold text-black mb-4">Login with Review&Rate</h3>
            <label className="block text-white mb-2">Email or Username</label>
            <input
                type="text"
                name="emailOrUsername"
                placeholder="Email or Username"
                className="w-full p-2 mb-4 bg-black/30 text-white rounded focus:outline-none"
                required
            />
            <label className="block text-white mb-2">Password</label>
            <div className="relative mb-4">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 bg-black/30 text-white rounded focus:outline-none"
                    required
                />
                <i className="absolute right-3 top-3 text-white cursor-pointer">👁️</i>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Login</button>

            <p className="text-center text-white mt-4">
                Don't have an account?{' '}
                <span className="text-green-500 cursor-pointer" onClick={toggleForm}>
                    Sign Up
                </span>
            </p>
        </form>
    );
};

export default Login;