# SOLID

## SOLID 원칙이란?

### S(SRP, Single Responsibility Principle): 단일 책임 원칙

- 하나의 모듈은 하나의, 오직 하나의 책임을 가져야 한다.
- 프론트엔드는 사용자와 맞닿아있는 영역이라 그런지 좀 더 다채로움
  - 각 영역의 요구사항을 명확히 파악하고 영역을 구분해 의존성 없는 독립적인 컴포넌트로 만들어 각 책무의 요구사항 변경에도 사이드이펙트 없이 유연하게 대처할 수 있도록 설계하고 구현하는 것이 키포인트

1. 기획 책무
   - 와이어프레임이나 상세 기획서가 나오기 전 정보구조도(Information Architecture, IA)를 작성
   - IA를 바탕으로 컴포넌트 제작
     - SRP를 만족하면 무엇을 테스트할지에 대한 문제도 자연스럽게 해결 : IA의 제약 조건과 예외사항을 만족하는지 테스트하면 됨
2. 디자인(UI) 책무
   - 디자인 시스템을 구축하여 응집도 높은 UI 컴포넌트 개발
   - 도출된 컴포넌트를 개발에서 그대로 사용하기 위해 아토믹 디자인 차용
     - 아토믹 디자인 : Atom, Molecule, Organism, Template, Page 각각이 하나의 책임을 담당할 수 있또록 구조화
     - 디자인 컴포넌트와 1:1로 매치되는 컴포넌트 제작

### O(OCP, Open Closed Principle): 개방 폐쇄 원칙

- 기존 코드를 변경하는 것이 아니라 새로운 코드를 추가하는 방향으로 추구하는 원칙

### L(LSP, Liskov Substitution Principle): 리스코프 치환 원칙

### I(ISP, Interface Segregation Principle): 인터페이스 분리 원칙

### D(DIP, Dependency Inversion Principle): 의존 역전 원칙

# Reference

- [프론트엔드와 SOLID 원칙](https://fe-developers.kakaoent.com/2023/230330-frontend-solid/)
