import Login from "views/login";

interface LoginPageProps {
    register?: boolean;
}

export default function LoginPage({ register }: LoginPageProps) {
    return (
        <div>
            <h1>Login</h1>
            { register ? 'register' : 'login' }
            <Login/>
        </div>
    )
}