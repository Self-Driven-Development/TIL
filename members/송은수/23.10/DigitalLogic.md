---
title: '디지털회로개론'
---

# 디회개

## digital system

Inverter의 cost = 2

Driver = Inverter + Inverter

NOR, NAND, NXOR에 Inverter를 부텨 OR, AND, XOR가 만들어진다. 시간cost 역시 각각 +2가 된다.

0+a = a, 1\*a = a Identity

1+a = 1, 0\*a = 0 Null

a+a = a, a\*a = a Idempotency

a+bc = (a+b)(a+c) distributive

a+ab = a absorption

:::note

a+a'b = a+b simplication

(a+b)(a+b')=a adjacency

ab+a'c = (a+c)(a'+b)

:::

### Karnaugh Map

letter는 상수혹은 변수, literal은 보수까지 포함

Product term과 Sum term은 literal로 구성되나 letter가 중복될 순 없다

Minterm, Maxterm은 모든 letter가 사용되어야한다

모든 표현식은 Minterm으로 표현할 수 있다.(by complement)

Minterm들을 통해 카르노맵을 그린다

카르노맵에서 1들을 모아 minimum SOP를 만들 수 있다

minimum SOP 는 AND-OR 형식이다. Bubble pushing을 통해 NAND-NAND 게이트로 변환가능하다

카르노맵에서 0들을 모아 SOP 를 만들 수 있다

이때 구한 SOP는 F'으로, 드모르간을 취해주면 F를 구할 수 있고 이는 minimum POS이다

이들을 Maxterm이고, AND-OR gate이다. Bubble pushing을 통해 NOR-NOR게이트로 변환한다

Implicant : 2^k의 묶음

Prime-Implicant : Implicant중 가장 큰 묶음

Essential-PI : PI로 묶었을때 구성하는 요소 중 적어도 하나는 다른 PI에 속하지 않는 요소를 가지고 있는 PI

카르노맵은 EPI+일부PI의 모음이다

don't care : 0으로 봐도되고 1로 봐도되는 항. 있을때 카르노맵의 solution이 다양해진다

:::note

꼭지점, X가 포함되었을때 위아래 시야 넓게 가지기
![Alt text ](../assets/IMG_2760.jpeg)

input으로 보수가 허용된다면, a+b는 (a'b')'인 NAND게이트가 된다

4변수함수는 큐브모양으로 이루어질 수 있다. 2D space의 확장방법은 두 2D공간의 꼭지점을 잇는것, 3D to 4D 역시 마찬가지다

:::

## designing combinational system

full adder

S = A^B  
C_out = C_in(A^B)+A&B

ripple carry adder의 딜레이는 2n+4이다 => 시간복잡도 O(n)= linear하다

carry look ahead adder(CLA) carry를 미리 예측한다

:::note

carry generater(G) = A&B  
carry propogate(P) = A^B  
C_i+1 = C_i&P+G

4bit씩 묶여있을때, P,G를 계산하는데 1delay(이하 gate delay를 의미),  
C(i,i+3)계산하는데 2delay,  
S 계산하는데 1delay걸린다

S_9를 구한다면, 1+2+2+2(C9를 구해야함)+1 = 8

2-level CLA

1-level이 C0=>C4=>C8=>C12... 순차적으로 구하는거라면  
2-level은 C0을 통해 C4,C8,C12,...을 원콤에 구한다

대신 G(i,i+3)를 계산해야 C_i를 구할 수 있으므로 2delay가 추가필요하다

S_9든, S_6이든 1+2+2+2(C_i를 통해 C(i+1,i+3)을 구함)+1이 걸린다

:::
