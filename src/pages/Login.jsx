function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-900 p-5 rounded">
        <h2 className="text-white mb-3">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="block mb-2 p-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="block mb-2 p-2 w-full"
        />

        <button className="bg-red-500 w-full p-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;