import SectionAuthWrap from "../UI/SectionAuthWrap";
import ContainerAuthImage from "../UI/ContainerAuthImage";
import ContainerAuthForm from "../UI/ContainerAuthForm";
import SvgIcon from "../UI/SvgIcon";

const HomePage = () => {
    return (
        <SectionAuthWrap>
            <ContainerAuthImage title={'Finance App'}>
                <SvgIcon iconName={'regPicture-tablet'}/>
                <SvgIcon iconName={'regPicture-desc'}/>
            </ContainerAuthImage>
            <ContainerAuthForm formContainer={'registrationForm'}>
                {/* <RegistrationForm /> */}
            </ContainerAuthForm>
        </SectionAuthWrap>
    )
}

export default HomePage;