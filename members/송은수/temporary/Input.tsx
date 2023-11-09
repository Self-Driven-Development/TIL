import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import theme from '../../styles/theme';
import { validate } from '../../util/validator';

type InputType = 'password' | 'email' | 'text';
interface InputInfo {
  value: string;
  isValid: boolean;
  touched: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isIconVisible: boolean;
  type: InputType;
  validator: { type: string; val: number }[];
  errorMessage: string;
  onInputChange: (type: InputType, val: InputInfo) => void;
}

export default function Input({
  isIconVisible,
  type,
  placeholder,
  validator,
  errorMessage,
  onInputChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [pwdVisible, setPwdVisible] = useState<boolean>(false);
  const [pwdType, setPwdType] = useState<InputType>(type);
  const [inputState, setInputState] = useState<InputInfo>({
    value: '',
    isValid: false,
    touched: false,
  });

  const inputIconHandler = () => {
    setPwdVisible(prev => !prev);
    setPwdType(prev => (prev === 'password' ? 'text' : 'password'));
  };

  const touchHandler = () => {
    setIsFocused(false);
    setInputState({ ...inputState, touched: true });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      value: e.target.value,
      isValid: validate(e.target.value, validator), //valid만 있으면 된다 얘만 관리한다
    });
  };
  useEffect(() => {
    onInputChange(type, inputState);
  }, [inputState, onInputChange, type]);

  return (
    <div css={inputWrapper}>
      <label
        htmlFor="inputFocus"
        css={
          !inputState.isValid && inputState.touched
            ? [inputContainer(isFocused), inputInvalid]
            : inputContainer(isFocused)
        }
        onFocus={() => setIsFocused(true)}
        onBlur={touchHandler}
      >
        <input
          css={inputStyle}
          type={pwdType}
          value={inputState.value}
          placeholder={placeholder}
          onChange={changeHandler}
          id="inputFocus"
        />
        {isIconVisible &&
          (pwdVisible ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={inputIconHandler}
              css={inputSvg}
              xmlns="http://www.w3.org/2000/svg"
              onMouseDown={e => e.preventDefault()}
            >
              <g id="Iconly/Light-Outline/Hide">
                <g id="Hide">
                  <path
                    id="Fill 1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.76082 15.6172C9.56882 15.6172 9.37682 15.5442 9.23082 15.3972C8.49282 14.6602 8.08582 13.6802 8.08582 12.6382C8.08582 10.4782 9.84182 8.72119 11.9998 8.72119C13.0378 8.72119 14.0458 9.14019 14.7648 9.87119C15.0548 10.1672 15.0518 10.6412 14.7558 10.9312C14.4608 11.2232 13.9868 11.2182 13.6958 10.9242C13.2568 10.4772 12.6388 10.2212 11.9998 10.2212C10.6688 10.2212 9.58582 11.3052 9.58582 12.6382C9.58582 13.2792 9.83682 13.8832 10.2908 14.3372C10.5838 14.6302 10.5838 15.1042 10.2918 15.3972C10.1448 15.5442 9.95282 15.6172 9.76082 15.6172Z"
                  />
                  <path
                    id="Fill 3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5674 16.4912C12.2124 16.4912 11.8964 16.2372 11.8304 15.8752C11.7564 15.4682 12.0264 15.0772 12.4344 15.0032C13.4144 14.8252 14.1904 14.0472 14.3664 13.0662C14.4404 12.6592 14.8304 12.3912 15.2374 12.4612C15.6454 12.5342 15.9164 12.9242 15.8434 13.3322C15.5564 14.9252 14.2944 16.1892 12.7024 16.4792C12.6574 16.4872 12.6114 16.4912 12.5674 16.4912Z"
                  />
                  <g id="Group 7">
                    <mask
                      id="mask0_4_2947"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="4"
                      width="17"
                      height="15"
                    >
                      <path
                        id="Clip 6"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 4.62448H18.0862V18.7226H2V4.62448Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_4_2947)">
                      <path
                        id="Fill 5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.65438 18.7226C6.49238 18.7226 6.32938 18.6696 6.19138 18.5626C4.50038 17.2346 3.07138 15.2876 2.06138 12.9336C1.97938 12.7436 1.97938 12.5296 2.06138 12.3406C3.08238 9.97661 4.52038 8.01961 6.22038 6.68261C9.68638 3.93961 14.3004 3.93061 17.8014 6.70261C18.1264 6.95961 18.1814 7.43161 17.9244 7.75661C17.6664 8.07961 17.1964 8.13661 16.8704 7.87861C13.9044 5.53061 10.0834 5.53861 7.14938 7.86061C5.71338 8.99061 4.48038 10.6366 3.57038 12.6386C4.47138 14.6286 5.69338 16.2646 7.11838 17.3826C7.44438 17.6386 7.50038 18.1106 7.24438 18.4356C7.09638 18.6236 6.87638 18.7226 6.65438 18.7226Z"
                      />
                    </g>
                  </g>
                  <g id="Group 10">
                    <mask
                      id="mask1_4_2947"
                      maskUnits="userSpaceOnUse"
                      x="8"
                      y="8"
                      width="14"
                      height="13"
                    >
                      <path
                        id="Clip 9"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.71753 8.74118H22.0001V20.6894H8.71753V8.74118Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_4_2947)">
                      <path
                        id="Fill 8"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0002 20.6894C11.0632 20.6894 10.1312 20.5374 9.23116 20.2384C8.83816 20.1074 8.62516 19.6824 8.75616 19.2894C8.88716 18.8954 9.31016 18.6864 9.70516 18.8144C10.4522 19.0634 11.2242 19.1894 12.0002 19.1894C15.4282 19.1894 18.5612 16.7474 20.4302 12.6364C19.9742 11.6374 19.4432 10.7324 18.8492 9.94239C18.6002 9.61139 18.6662 9.14039 18.9972 8.89139C19.3272 8.64239 19.7982 8.71039 20.0472 9.04039C20.7712 10.0014 21.4072 11.1124 21.9382 12.3384C22.0212 12.5284 22.0212 12.7444 21.9382 12.9334C19.8422 17.7904 16.1272 20.6894 12.0002 20.6894Z"
                      />
                    </g>
                  </g>
                  <g id="Group 13">
                    <mask
                      id="mask2_4_2947"
                      maskUnits="userSpaceOnUse"
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                    >
                      <path
                        id="Clip 12"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.36353 4.0004H20.637V21.2734H3.36353V4.0004Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask2_4_2947)">
                      <path
                        id="Fill 11"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.11328 21.2734C3.92128 21.2734 3.72928 21.2004 3.58328 21.0534C3.29028 20.7604 3.29028 20.2864 3.58328 19.9934L19.3573 4.21938C19.6503 3.92638 20.1243 3.92638 20.4173 4.21938C20.7103 4.51238 20.7103 4.98738 20.4173 5.28038L4.64328 21.0534C4.49728 21.2004 4.30528 21.2734 4.11328 21.2734Z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={inputIconHandler}
              css={inputSvg}
              xmlns="http://www.w3.org/2000/svg"
              onMouseDown={e => e.preventDefault()}
            >
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9996 9.64133C10.6696 9.64133 9.58862 10.7233 9.58862 12.0533C9.58862 13.3823 10.6696 14.4633 11.9996 14.4633C13.3296 14.4633 14.4116 13.3823 14.4116 12.0533C14.4116 10.7233 13.3296 9.64133 11.9996 9.64133ZM11.9996 15.9633C9.84262 15.9633 8.08862 14.2093 8.08862 12.0533C8.08862 9.89633 9.84262 8.14133 11.9996 8.14133C14.1566 8.14133 15.9116 9.89633 15.9116 12.0533C15.9116 14.2093 14.1566 15.9633 11.9996 15.9633Z"
              />
              <mask id="mask0_4_2936" maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="17">
                <path
                  id="Clip 4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.00012 4.00021H22V20.1052H2.00012V4.00021Z"
                  fill="white"
                />
              </mask>
              <path
                id="Fill 3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.56987 12.0525C5.42987 16.1615 8.56287 18.6045 11.9999 18.6055C15.4369 18.6045 18.5699 16.1615 20.4299 12.0525C18.5699 7.94451 15.4369 5.50151 11.9999 5.50051C8.56387 5.50151 5.42987 7.94451 3.56987 12.0525ZM12.0019 20.1055H11.9979H11.9969C7.86087 20.1025 4.14687 17.2035 2.06087 12.3485C1.97987 12.1595 1.97987 11.9455 2.06087 11.7565C4.14687 6.90251 7.86187 4.00351 11.9969 4.00051C11.9989 3.99951 11.9989 3.99951 11.9999 4.00051C12.0019 3.99951 12.0019 3.99951 12.0029 4.00051C16.1389 4.00351 19.8529 6.90251 21.9389 11.7565C22.0209 11.9455 22.0209 12.1595 21.9389 12.3485C19.8539 17.2035 16.1389 20.1025 12.0029 20.1055H12.0019Z"
              />
            </svg>
          ))}
      </label>
      {!inputState.isValid && inputState.touched && (
        <div css={errorMessageStyle}>{errorMessage}</div>
      )}
    </div>
  );
}

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1px;
  width: 100%;
  height: 40px;
`;
const inputStyle = css`
  flex-grow: 1;
  outline: none;
  border: none;
  ::placeholder {
    color: ${theme.color.subtle_light};
  }
`;
const inputContainer = (isFocused: boolean) => css`
  display: flex;
  gap: 10px;
  font-size: ${theme.textStyle.body_large};
  line-height: ${theme.textStyle.body_large};
  border-bottom: 2px solid ${isFocused ? theme.color.primary : theme.color.primary_subtle};
  width: 100%;
  height: 40px;
  padding: 5px;
`;

const inputSvg = css`
  fill: ${theme.color.subtle_light};
  &:hover {
    fill: ${theme.color.subtle_dark};
  }
`;
const inputInvalid = css`
  border-bottom: 2px solid ${theme.color.red};
`;

const errorMessageStyle = css`
  font-size: ${theme.textStyle.body_small.font_size};
  line-height: ${theme.textStyle.body_small.line_height};
  color: ${theme.color.red};
`;
