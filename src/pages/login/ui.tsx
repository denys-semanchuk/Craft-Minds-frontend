import {LoginForm} from "@/features/auth/login";
import {Container} from "@/shared/ui/container";

export const LoginPage = () => {
    return <Container>
        <h2 className='text-center'>Login</h2>
        <LoginForm/>
    </Container>

}
