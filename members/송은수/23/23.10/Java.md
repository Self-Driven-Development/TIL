---
title: 'JAVA'
---

# Java

- 자바에서 built-in 함수를 method라고 부른다.
- syso로 자동완성 할 수 있다.
- Math.random()은 0.0~1.0사이(초과, 미만)의 값을 만들어낸다.

print : 괄호안 내용을 단순히 출력. 개행문자(=줄바꿈문자=\n) 포함안됨.

printf : C에서의 printf와 동일. %d, %s 등을 쓰기위해 사용. 개행문자 포함X

println : 괄호안 내용을 출력한 후 마지막에 개행문자가 포함되어 있어 출력후 한 줄 띄워짐.

```java
public class ThreadTest extends Thread{
	public static void main(String[] args) {
		int num = 5;
		System.out.print("print ! " + num + "\n");	//print
		System.out.printf("printf ! %d \n", num);	//printf
		System.out.println("println ! " + num);		//println
	}
}
```

“”와 +를 통해 자료형이 다른 변수를 출력할 수 있고, \를 사용해 특수문자를 출력할 수 있다.

- label : 다중반복문에서 label을 사용해 탈출할 수 있다.
  선언없이 맨 앞에 사용하고, break말고 continue로 사용할 수도 있음
- byte란 자료형이 있다. 127을 넘어가면 2의 보수처럼 작동함
- 교수님이 c에 boolean타입 없다고 했는데,, 있음
- 소수 뒤에 F를 안붙이면 double형으로 인식되고, 붙이면 float형으로 인식된다.
- char의 자료형은 2byte, float은 4byte이다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2f7d9420-6dc5-43c9-8bb1-ce9cca6cb2e7/3f638339-5c2a-41d7-9f9d-095a0c036e67/Untitled.png)

- 문자열 풀(String Pool)은 Java에서 문자열 리터럴이 저장되는 특별한 메모리 영역입니다. 이는 문자열 리터럴을 재사용하고 메모리를 절약하기 위한 목적으로 사용됩니다.

# 자바 중간고사 공부하기

자바 ⇒ Java Virtual Machine을 사용, 운영체제와는 독립적으로 동작

자바는 연산자 오버로딩을 금지하고 제네릭을 도입

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2f7d9420-6dc5-43c9-8bb1-ce9cca6cb2e7/59cd79c4-d1f8-4f22-aa1c-25e245ec4864/Untitled.png)

자바 컴파일러

사용자가 작성한 자바 소스코드를 JVM이 이해할 수 있는 자바 바이트코드로 변환

JVM

자바 바이트 코드를 실행시키기 위한 가상머신, 이게 있어야 실행가능

자바 인터프리터

인터프리터를 통해 코드 해석

클래스 로더 동적으로 읽어오므로 런타임에 로딩해주는 역할

JLT (Just In Time)

런타임에 기계어로 변환

가바지 콜렉터

사용자가 지정할 필요 없이 자동으로 처

클래스

클래스는 필드(상태)와 메서드(동작) 으로 이루어진다

main() method

자바는 실행되면 main()을 찾아 먼저 실행

즉 자바 내에는 하나이상의 main()이 존재해야한다

```java
public static void main(String[] args) {

    ...

}
```

자바 클래스 파일(.java)에 public 클래스가 존재하면 이는 클래스 파일명과 같아야 한다. public 클래스는 파일마다 단 한개 뿐이다

람다 표현식이란, 메소드를 하나의 식으로 표현한다

스트림 API

자바는 일반적으로 배열, 컬렉션을 이용하는데, 이는 반복문을 써야하고, 일관되지 않거나 재사용이 어렵다는 등의 문제가 있어 스트림 API가 도입되었다.

```java
String[] arr = new String[]{"넷", "둘", "셋", "하나"};



// 배열에서 스트림 생성

Stream<String> stream1 = Arrays.stream(arr);

stream1.forEach(e -> System.out.print(e + " "));

System.out.println();



// 배열의 특정 부분만을 이용한 스트림 생성

Stream<String> stream2 = Arrays.stream(arr, 1, 3);

stream2.forEach(e -> System.out.print(e + " "));
```

final을 통한 상수선

리터털

그 자체로 값을 의미. 변수나 상수처럼 저장된 메모리 공간을 가리키는 것이 아니다

리터럴타입 접미사

실수형을 입력하면 모두 double타입으로 인식, 접미사 f,F,l,L등을 붙여야한다. 정수형이면 int형으로, L등 표현해주어야한

byte형

1바이트, -128~127

char형

2바이트. 유니코드를 사용, 16비트 필요

C는 아스키(7비트)를 이용하기 때문에 1바이트.

`>>>`

`>>`는 MSB의 영향을 받는 반면 >>>는 무조건 0을 만든다

label

탈출:

~~ break 탈출;

로 쓰면 모든 반복문을 탈출한다

array 선언

```java
타입이름[] 이름 = new 타입[길이]
int[] grade = new int[3]
```

array 초기화

미초기화시 0으로 할당

```java
타입이름[] 이름 = new 타입[길이]{}
타입이름[] 이름 = {}
```

배열 복사

```java
int[] arr1 = new int[]{1, 2, 3, 4, 5};

int newLen = 10;



// 1. System 클래스의 arraycopy() 메소드

int[] arr2 = new int[newLen];

System.arraycopy(arr1, 0, arr2, 0, arr1.length);



// 2. Arrays 클래스의 copyOf() 메소드

int[] arr3 = Arrays.copyOf(arr1, 10);
```

enhanced for문

```java
int[] arr = new int[]{1, 2, 3, 4, 5};



for (int e : arr) {

    System.out.print(e + " ");

}
```

배열의 복사본이라, value를 참조하지는 않는다.

자바(JS도)는 call by value다.

주소값을 이용하는것은 뭐냐? call by address라고 생각하면된다.

원시값들은 값을 저장하고, 원시값이 아닌 참조형타입은 거기에 주소를 저장한다. 그래서 함수호출시 stackframe에 그 주소가 전달이 되어 사용할 수 있는 것이다.

call by reference는 주소 자체를 가리키게 되어 주소에 엑세스가 가능하다.

자바는 이러한 조작이 불가능하게 만들어졌다.

파라미터를 사용한 메소드 오버로딩이 가능하다

생성자

클래스에서 객체를 생성하면 메모리에 즉시 생성되는데, 인스턴스 변수들은 초기화되지 않은상태라 초기화를 진행한다.

→ 선언시 초기화가 가능한데?

접근제어자가 private이면 초기화가 불가능하다

생성자도 하나의 메서드이므로 오버로딩이 가능하다

생성자는 클래스 생성시 ()안에 정의 가능하다.

클래스 생성시도 가능하지만, 클래스의 필드영역에서도 생성가능하다.

기본 생성자는 빈 메서드인데, 다른 생성자를 정의했다면 클래스를 생성할때 매개변수를 비워놓을 수 없다

```java
Car(String modelName, int modelYear, String color, int maxSpeed) {

        this.modelName = modelName;

        this.modelYear = modelYear;

        this.color = color;

        this.maxSpeed = maxSpeed;

        this.currentSpeed = 0;

    }



    Car() {

        this("소나타", 2012, "검정색", 160); // 다른 생성자를 호출함.

    }
```

첫줄에서만 this()를 이용해 다른 생성자를 호출할 수 있다

클래스 생성

```java
클래스 클래스 이름 = new 클래스이름();
```

this

메서드의 인스턴스 변수에 접근가능하다

이는 이름이 지어질 녀석이라 현재는 이름이 없어서 this로 지정한다

선언시 매개변수의 이름과 클래스필드의 이름이 같다

클래스 메소드에서는 사용할 수 없다(일반적인 메소드는 인스턴스 메소드이며, static이 붙은 메소드가 클래스 메소드이다(공용))

this()는 생성자내부에서 생성자 오버로딩을 위해 쓰인다

패키지

클래스와 인터페이스의 집합으로 디렉터리 개념이다.

```java
package 패키지이름;
```

하나이상의 패키지에 포함되어야 하는데, 어더한 패키지의 선언도 포함되지 않으면 이름없는 패키지에 포함해 컴파일한다

import를 통해 다른 패키지에 있는 클래스를 사용할 수 있다.

import는 하위패키지까지 포함해주지는 않는다

default 접근제어

해당 패키지에서만 접근가능하다

protected 접근제어

같은패키지 + 다른 패키지 자식클래스

static 키워드

클래스 영역에서 static 키워드를 가지면 클래스변수(메서드)가 된다

클래스변수(메서드)는 모든 인스턴스가 공유한다

클래스변수(메서드)는 클래스의 선언없이 사용할 수 있다

초기화 블록

초기화 블록은 생성자보다 먼저 호출되며, static 키워드의 유무에 따라 다음과 같이 구분

1. 인스턴스 초기화 블록

2. 클래스 초기화 블록

{}만 있으면 인스턴스 초기화, static{}도 같이 있으면 클래스 초기화이다

자식클래스에서 private, default에 접근할 수는 없다

자바는 Object라는 전역 부모 클래스가 잇

super

부모클래스의 생성자 호출가능. 이때 부모클래스의 기본생성자가 명시적 선언되어있어야 한다.

super가 없다면 기본으로 부모기본생성자 먼저 호출

this든 super든 첫 줄에만 사용 가능, 즉 동시사용 불가능

오버로딩은 서로다른 시그니처를 갖는 여러 메소드를 하나의 이름으로 정의하는 것, 오버라이딩은 상속관계에 있는 부모클래스에서 이미 정의된 메소드를 자식클래스에서 같은 시그니쳐를 갖는 메소드로 다시 정의하는 것.

간단히 정의하면 오버로딩(overloading)은 새로운 메소드를 정의하는 것입니다.

하지만 오버라이딩(overriding)은 상속받은 기존의 메소드를 재정의하는 것입니다.

다형

부모는 자식의 타입을 가질 수 있다.

참조변수 타입변환

```java
pa01 = ch;          // pa01 = (Parent)ch; 와 같으며, 타입 변환을 생략할 수 있음.

br = (Brother)pa02; // 타입 변환을 생략할 수 없음.

br = (Brother)ch; // 직접적인 상속 관계가 아니므로, 오류 발생.
```

instance of

자식은 부모도 맞다. 부모는 자식이 틀리다

인터페이스는 추상클래스와 마찬가지로 직접 인스턴스 생성할 수 는 없다

내부에는 오직 상수와 추상클래스만 생성가능하다

```java
접근제어자 interface 인터페이스이름 {

    public static final 타입 상수이름 = 값;

    ...

    public abstract 메소드이름(매개변수목록);

    ...

}
```

인터페이스끼리 상속이 가능하며, 다중상속이 가능하다

일관되고 정형화된 개발을 위한 표준화 가능

1. 연산은 —> 방향으로 진행된다

(ex.

int x = 1;

int z = x*x*(x+=5)*x = 1*1*6*6=36;

)

1. 실수형에 대해 특별한 타입선언이 없다면 기본값은 double형이다.

float 형으로 사용하기 위해선 접미사f,F를 쓰거나 접두사로 (float)을 사용해야한다.

그리고 float형은 출력시 소수점뒤로 7자리가 출력된다.

1. 부모 클래스 타입의 참조변수로 자식타입의 인스턴스를 참조할 수 있지만,

자식 클래스 타입의 참조변수로 부모타입의 인스턴스를 참조할 수는 없다.

```java
//부모가 자식을 참조할 순 있으나, 실질적으로 값은 사용할 수 없다
public class HelloClass{
	public static void main(String[] args) {
		Parent P =  new Child(1);
		System.out.println(P.ca); //출력 불가능
	}
}
```

(ex.

class P {}

class C extends P {}

P cls1 = new C(); //가능

C cls2 = new P(); //불가능

)

## 중간고사

자바가 뭘로 구성되는지.. 이런거 안 물어봄

문법, 캐스팅, break label 등등..

코드블럭주고 뭐가 결과로 나오는지.

강의자료에 있는 코드들 잘보기

substring등, 강의자료에 나와있는 빌트인메소드

인터페이스 X

자바와 C의 차이점. byte같이

main focus : OOF
