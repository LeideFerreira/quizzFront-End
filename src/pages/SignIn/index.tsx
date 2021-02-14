import React, { useState, useContext, useEffect } from 'react';
import { Container, Form, FormTitle } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
    const { logged, signIn, user } = useAuth();
    //const [username,setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    var data = { //object com os dados do login
        email: email,
        password: password,
    }

    // useEffect(() => { //Estudar
    //     handleSign();
    //  }, []);
     
    console.log("logged: ", logged);
    
    async function handleSign() {
        await signIn(data);
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        handleSign()
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormTitle>
                    Entrar
                    </FormTitle>
                <Input
                    type="email"
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}

                />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;