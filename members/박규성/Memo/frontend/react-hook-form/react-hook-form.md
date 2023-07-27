# react-hook-form
- 인프랩 프론트엔드 팀 : 몇 백개의 form이 한 페이지에 있어 발생하는 렌ㄷ러ㅣㅇ 문제를 해결하기 위해 `colocation`과 `ref`를 이용
  - `colocation` : input 요소가 여러 개일 때, 한 input 유효성 상태 변경 때문에 모든 컴포넌트가 리렌더링 될 필요가 없음
  - 서로 관련이 있는 것들끼리만 모아 분리하여 위치시키는 방법을 `state colocation`이라고 함

## react-hook-form이 뭐넫?

### 특징
1. 비제어 컴포넌트 방식으로 구현 -> 렌더링 이슈 해결 (ref를 기준하여 API 설계 됨)
   1. 비제어 컴포넌트는 리액트의 상태 관리 흐름에서 벗어나 DOM자체에서 데이터를 직접 조작하고 관리하는 컴포넌트
   2. 비제어 컴포넌트에서 DOM에 접근하기 위해 리액트에서는 `ref`라는 객체 제공
   3. `ref`객체의 `current`프로퍼티의 값을 변경하는데, 값을 업데이트해도 컴포넌트가 리렌더링되지 않기 때문에 렌더링 횟수를 줄여줌
   4. 함수형 컴포넌트에서는 인스턴스가 없기 때문에 `useRef`라는 Hook을 통해 `ref`객체를 생성
   5. 비제어 컴포넌트는 `state`를 사용하는 리액트의 데이터 관리 흐름에서 벗어나기 때문에 부모 컴포넌트에서 조작하는 `ref`를 컴포넌트에 전달해도 변경값은 전달 x. 그래서 `forwardRef`를 사용함
2. form의 데이터와 상태를 Provider 아래라면 어느 곳에서든지 props drilling 사용 X
3. 기존 방식에서는 이렇게 총 4개로 분산된 상태 이용
   1. Recoil에서 관리하는 상태 : 어떤 section에 에러가 있는지, 제출 버튼의 disabled
   2. Form Control 별 local state
   3. Context API에서 관리하하는 상태 : 제출 버튼 클릭에 따른 input 에러, 동적으로 늘고 줄어드는 form 관리
   4. ref로 직접 dom 접근
4. `react-hook-form`의 `useFormContext`하나에서 제공하는 form의 데이터와 에러만을 사용하면 됨
```js
const { errors } = useFormState<ProfileModel>({
  name: [`career.educations.${index}.schoolName`, `career.educations.${index}.major`],
});

// 디자인 시스템 Input 컴포넌트
<Input
  errorMessage={
    errors.career?.educations?.[index]?.schoolName?.message || ERROR_MESSAGE_SCHOOL_NAME
  }
  error={!!errors.career?.educations?.[index]?.schoolName}
  ...
/>

```
- `Input`에서 useFormState로 에러를 관리 가능

5. 여러가지 유틸과 코드 단순화
6. class Validator 지원
```js
export default class ProjectModel {
  @Length(1, 100, { message: ERROR_MESSAGE_PROJECT_NAME })
  projectName = '';

  ...
}
```
- `@hookform/resolvers/class-validator`라이브러리를 이용하여 백엔드와 유횽성 검증 통일 가능

7. 코드의 일관성 확보

## 다양한 기능
### 1. `Controller`
- `Controller`를 이용해 해당 요소를 감싼다면, `register`를 적용한 것처럼 react-hook-form에서 form 요소를 제어할 수 있음
```js
<Controller
  name={`career.companies.${index}.employmentStatus`}
  render={({ field }) => (
    <Dropdown label="재직 여부" autoSelect options={employmentStatusOptions} {...field} />
  )}
/>
```
- Controller의 props인 render에 원하는 컴포넌트를 전달
- `name` : 가리킬 Form의 field 명
- `control` : useForm의 control
- `render` : field에 이존하는 children node

- `useController`로도 사용 가능

```js
const { field } = useController({
 name:"userName",
 control:methods.control
})

const {name, value, onChange, onBlur, ref, formState, fieldState} = field;
```
- `field`만 반환하여 컨테이너와 로직 분리 기ㅏ능

### 2. [`useFieldArray`](https://react-hook-form.com/docs/usefieldarray#main)
```js
function FieldArray() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
  });


  return (
    {fields.map((field, index) => (
      <input
        key={field.id} // important to include key with field's id
        {...register(`test.${index}.value`)} 
      />
    ))}
  );
}
```
- `useFieldArray`를 이용해 배열을 관리할 수 있음
-  



### 3. Dev Tool
- form의 데이터 변화를 콘솔에 찍지 않고도 GUI로 확인 가능

### 4. File input 컨트롤
```js
export default function useAttachFiles(formRef: RefObject<HTMLFormElement>) {
  const { control } = useFormContext();

  const {
    fields: attachFiles,
    append: appendFile,
    remove: removeFile,
    update: updateFile,
  } = useFieldArray({ control, name: 'additional.attachFiles' });

  useEffect(() => {
    // 리훅폼에 append해서 돔이 생성되는 타이밍을 보장할 수 없으므로 useEffect에서 구독해 순서를 보장한다
    // 빈 모델이 생성되면 click하여 파일 선택을 할 수 있게 합니다.
    handleOpenBrowserFileSelector();
  }, [attachFiles]);

  const getEmptyFile = () => {
    return formRef.current?.querySelector(`.${ATTACH_FILE_CLASS_NAME}--invalid`) || null;
  };

  const handleOpenBrowserFileSelector = () => {
    const emptyFile = getEmptyFile();

    if (!emptyFile) {
      return;
    }

    (emptyFile.querySelector('input[name="attachFile"]') as HTMLInputElement)?.click();
  };

  const handleClickAddFileButton = () => {
    handleOpenBrowserFileSelector();

    const emptyFile = getEmptyFile();

    if (!emptyFile && attachFiles.length < 5) {
      appendFile(new AttachFileModel());
    }
  };

  ...
}

``` 
- `파일 추가하기`버튼을 누르면 빈 file input 요소를 생성 (`append`)
```js
// 파일 업로드 이벤트
const fileUploadEventHandler: ChangeEventHandler<HTMLInputElement> = async ({
  target: { files },
}) => {
  ...
  try {
    ...
    // cdn 업로드 후 업로드된 결과를 응답값으로 반환
    const { data: file } = await fileService.uploadFile(files[0]);

    // 응답값을 form의 데이터에 업데이트
    updateFile(index, plainToClass(AttachFileModel, file));
  } catch (error) {
    ...
  } finally {
    ...
  }
};
```
- 유저가 선택한 파일을 CDN에 올리기 위한 통신을 진행 (`update`) -> 그 응답값을 받아 form의 첨부파일 데이터를 업데이트 후 어떤 파일이 첨부되었는지 화면에 렌ㄷ러ㅣㅇ

### 5. `getValues`
- `getValues` : 단순히 `값을 가져온다` x, `호출하는 시점의 값을 가져온다`

### 6. `watch`
- `watch` : observer pattern 이용함
- 공식문서 "watch는 호출될 때 어플리케이션 또는 Form을 전부 리렌더링하므로 성능 이슈가 발생한다면 별도의 콜백함수 또는 useWatch를 사용하세요 "

## react-hook-form으로 얻은 점
1. 4개로 분산되어 있던 상태를 한곳에서 관리할 수 있게 되며 상태 관리가 단순해짐
   1. 어떤 form에 에러가 있는지 알려주는 error state
   2. 각 form별 어떤 에러가 있는지 알려주는 error state
   3. 각각 form의 상태 관리
   4. post요청을 하기 위한 최신 데이터
2. 명령적이던 코드 > 선언적으로 작성
3. 코드의 가독성
4. 예측 가능성
5. 확장 및 유지보수성



# Reference
- [](https://tech.inflab.com/202207-rallit-form-refactoring/react-hook-form/#2-2-1-register)