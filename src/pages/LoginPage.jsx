import SectionAuthWrap from '../UI/SectionAuthWrap';
import ContainerAuthImage from '../UI/ContainerAuthImage';
import ContainerAuthForm from '../UI/ContainerAuthForm';
import SvgIcon from '../UI/SvgIcon';
import LoginForm from '../components/LoginForm';
const HomePage = () => {
  return (
    <SectionAuthWrap>
      <ContainerAuthImage title={'Finance App'}>
        <SvgIcon iconName={'loginPicture-tablet'} />
        <SvgIcon iconName={'loginPicture-desc'} />
      </ContainerAuthImage>
      <ContainerAuthForm formContainer={'loginForm'}>
        <LoginForm />
      </ContainerAuthForm>
    </SectionAuthWrap>
  );
};

export default HomePage;
