import { AuthBackground } from "../organisms/background/AuthBackground";
import { RegisterForm } from "../organisms/RegisterForm";

export function RegisterPage() {
    return (
        <AuthBackground>
            <RegisterForm/>
        </AuthBackground>
    );
}