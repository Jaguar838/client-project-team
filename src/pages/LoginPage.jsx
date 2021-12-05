
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useLocation} from "react-router-dom";
import SectionAuthWrap from "../UI/SectionAuthWrap";
import ContainerAuthImage from "../UI/ContainerAuthImage";
import ContainerAuthForm from "../UI/ContainerAuthForm";
import SvgIcon from "../UI/SvgIcon";
import LoginForm from "../components/LoginForm";
import authOperations from '../redux/auth/auth-operations';



const HomePage = () => {
    const dispatch = useDispatch();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');

    useEffect(() => {
        if (token) dispatch(authOperations.logInByGoogle(token));
    })

    return (
        <SectionAuthWrap>
            <ContainerAuthImage title={'Finance App'}>
                <SvgIcon iconName={'loginPicture-tablet'}/>
                <SvgIcon iconName={'loginPicture-desc'}/>
            </ContainerAuthImage>
            <ContainerAuthForm formContainer={'loginForm'}>
                <LoginForm />
            </ContainerAuthForm>
        </SectionAuthWrap>
    )
}

export default HomePage;
