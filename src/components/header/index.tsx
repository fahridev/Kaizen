import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <HeaderContainer>
      <TouchableOpacity activeOpacity={1}>
        <LogoImage source={require('../../../assets/images/logo.png')} />
      </TouchableOpacity>
      <LoginArea>
        {isLogin && (
          <LoginBtnContainer>
            <LoginBtn activeOpacity={1} onPress={() => setIsLogin(!isLogin)}>
              Giriş Yap
            </LoginBtn>
          </LoginBtnContainer>
        )}
        <ProfileArea
          activeOpacity={1}
          onPress={() => setIsLogin(!isLogin)}
          isLogin>
          <FontAwesomeIcon icon={faUser} color="#fff" size={16} />
          {!isLogin && (
            <LoginLightContainer>
              <LoginLight />
            </LoginLightContainer>
          )}
        </ProfileArea>
      </LoginArea>
    </HeaderContainer>
  );
};
export const HeaderContainer = styled.View`
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  padding: 15px;
  flex-direction: row;
`;
export const LogoImage = styled.Image`
  width: 81px;
  height: 40px;
`;
export const LoginArea = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const LoginBtnContainer = styled.View`
  margin-right: 10px;
  background-color: #f40000;
  padding: 10px;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
`;
export const LoginBtn = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.17px;
`;
export const ProfileArea = styled.TouchableOpacity<{isLogin: boolean}>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({isLogin}) => (isLogin ? '#000' : '#F40000')};
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const LoginLightContainer = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 12px;
  background-color: #fff;
  position: absolute;
  top: 0px;
  right: 0;
  justify-content: center;
  align-items: center;
`;
export const LoginLight = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 12px;
  background-color: #009639;
`;
