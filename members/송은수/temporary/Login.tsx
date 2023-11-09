import React, { useCallback, useState } from 'react';
import Input from '../components/Input/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../util/validator';
import Button from '../components/Button/Button';
import theme from '../styles/theme';
import { css } from '@emotion/react';
import Modal from '../components/Modal/Modal';

interface LoginForm {
  email: {
    value: string;
    isValid: boolean;
  };
  password: {
    value: string;
    isValid: boolean;
  };
  text?: {
    value: string | undefined;
    isValid: boolean | undefined;
  };
  isFormValid: boolean;
}

interface InputInfo {
  value: string;
  isValid: boolean;
  touched: boolean;
}

const DUMMY_USER = [{ name: 'eunsu', email: 'songess@naver.com', password: 'qmfforvldzm' }];

export default function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formState, setFormState] = useState<LoginForm>({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
    text: {
      value: undefined,
      isValid: undefined,
    },
    isFormValid: false,
  });

  const changeHandler = useCallback(
    (type: 'email' | 'password' | 'text', val: InputInfo) => {
      setFormState(prev => {
        const updateField = {
          ...prev[type],
          value: val.value,
          isValid: val.isValid,
        };
        let updateIsFormValid = false;
        switch (type) {
          case 'email':
            updateIsFormValid =
              updateField.isValid &&
              prev.password.isValid &&
              (!isSignUpMode || (prev.text!.isValid ?? false));
            break;
          case 'password':
            updateIsFormValid =
              prev.email.isValid &&
              updateField.isValid &&
              (!isSignUpMode || (prev.text!.isValid ?? false));
            break;
          case 'text':
            updateIsFormValid =
              prev.email.isValid && prev.password.isValid && (!isSignUpMode || updateField.isValid);
            break;
        }
        return { ...prev, [type]: updateField, isFormValid: updateIsFormValid };
      });
    },
    [isSignUpMode]
  );
  const modeSwitchHandler = () => {
    if (isSignUpMode) {
      //signup->login 이면 text필드 삭제
      setFormState(prev => {
        const updateField = {
          ...prev['text'],
          value: undefined,
          isValid: undefined,
        };
        // eslint-disable-next-line no-useless-computed-key
        return { ...prev, ['text']: updateField };
      });
    } else {
      setFormState(prev => {
        const updateField = { ...prev['text'], value: '', isValid: false };
        // eslint-disable-next-line no-useless-computed-key
        return { ...prev, ['text']: updateField };
      });
    }
    setIsSignUpMode(p => !p);
  };
  const submitHandler = () => {
    const loginUser = DUMMY_USER.filter(user => user.email === formState.email.value);
    if (loginUser.length === 0) {
      setIsModalOpen(p => !p);
    } else {
      setIsModalOpen(p => !p);
    }
    console.log('hello');
  };
  return (
    <div css={loginWrapper}>
      <Modal
        isOpen={isModalOpen}
        onClear={() => {
          setIsModalOpen(p => !p);
        }}
      >
        <Modal.Header>로그인 실패!</Modal.Header>
        <Modal.Content>이메일 또는 비밀번호가 맞는지 확인해주세요</Modal.Content>
        <Modal.Footer>
          <Button backgroundColor="primary" color="white" size="medium" width="100%">
            확인
          </Button>
        </Modal.Footer>
      </Modal>
      <header css={loginHeader}>
        <p css={loginTitle}>서강대! 너 내 도도독!</p>
        <p css={loginSubtitle}>
          {isSignUpMode ? '회원가입을 진행해주세요' : '이메일과 비밀번호를 입력해주세요'}
        </p>
      </header>
      <section css={loginSection}>
        {isSignUpMode && (
          <Input
            errorMessage="이름을 입력해주세요"
            placeholder="이름을 입력하세요"
            isIconVisible={false}
            type="text"
            validator={[VALIDATOR_REQUIRE()]}
            onInputChange={changeHandler}
          />
        )}
        <Input
          errorMessage="올바른 이메일을 입력해주세요."
          placeholder="이메일을 입력하세요"
          isIconVisible={false}
          type="email"
          validator={[VALIDATOR_EMAIL()]}
          onInputChange={changeHandler}
        />
        <Input
          errorMessage="비밀번호가 일치하지 않습니다. 8자 이상 입력해주세요."
          placeholder="비밀번호를 입력하세요"
          isIconVisible={true}
          type="password"
          validator={[VALIDATOR_MINLENGTH(8)]}
          onInputChange={changeHandler}
        />
        {isSignUpMode ? '' : <p css={isForgetPassword}>비밀번호를 잊으셨나요?</p>}
      </section>
      <footer css={loginFooter}>
        <Button
          backgroundColor="primary"
          color="white"
          size="medium"
          width="100%"
          onClick={submitHandler}
          disabled={!formState.isFormValid}
        >
          {isSignUpMode ? '회원가입' : '로그인'}
        </Button>
        <div css={loginGrid}>또는</div>
        <Button
          backgroundColor="subtle_dark"
          color="white"
          size="medium"
          width="100%"
          onClick={modeSwitchHandler}
        >
          {isSignUpMode ? '로그인' : '회원가입'}
        </Button>
      </footer>
    </div>
  );
}
const loginGrid = css`
  margin: 10px 0;
  color: ${theme.color.background};
  font-size: 12px;
  text-align: center;
  &::before,
  ::after {
    display: inline-block;
    width: calc(50% - 20px);
    height: 1px;
    margin: 8px 0;
    background-color: rgba(0, 0, 0, 0.06);
    vertical-align: top;
    content: '';
  }
`;

const loginFooter = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const loginSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const isForgetPassword = css`
  color: ${theme.color.subtle_light};
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  align-self: end;
  &:hover {
    color: ${theme.color.subtle_dark};
    cursor: pointer;
  }
`;

const loginSubtitle = css`
  color: ${theme.color.subtle_dark};
  font-size: ${theme.textStyle.title_medium.font_size};
  line-height: ${theme.textStyle.title_medium.line_height};
`;

const loginTitle = css`
  font-weight: 700;
  color: ${theme.color.thick_primary};
  font-size: ${theme.textStyle.headline_large.font_size};
  line-height: ${theme.textStyle.headline_large.line_height};
`;

const loginHeader = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const loginWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px 80px 40px;
  background-color: ${theme.color.white};
`;
