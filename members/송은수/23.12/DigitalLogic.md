---
title: "디회개"
---

# Decoder
$n$개의 bit를 받아 $2^n$개의 출력을 만든다.
- active high decoder: 1일때 실행
- acitve low decoder: 0일때 실행. 꼬랑지에 부정이 달려있음.

차이는 출력에 o가 달려있다.

enable bit가 있다고 할 때, 이를 bit중 하나로 지정할 수 있다.   
1일때만 입력이 가능하기 때문에, b가 0일때 작동시키기 위해선 b'을 연결시켜야 한다.

# Multiplexer
selector를 통해 원하는 입력을 선택한다.

# ROM
Read Only Memory

$n$개의 input을 받아 $2^n$개의 word를 저장한다. 이 워드는 $m$bit로 이루어질 수 있다.

m개의 output이 만들어진다.

# PLA
Programmable Logic Array

필요한 워드들만 만들어 내겠다.

minimum term을 구해 필요한 word만 만든다. 맨 밑에 보수기를 만들어 최소화 시킬 수 있다.

# PAL
마지막 or gate의 input and가 고정되어 있음.

뽑히자 마자 and or gate로 들어감.

빈 or gate 중 하나는 어떻게 설계하든 상관없다(설계를 하든, Null로 설계하든)

# FSM

## MOORE machine
output이 현재 state에만 의존한다.

## MEALY machine
output이 현재 input과 현재 state에 의존한다.

# Latch, Flip-Flop

## Latch
latch는 clock의 level단계를 인지

## Flip-Flop
flipflop은 clock의 edge단계를 인지

# table
Characteristic table = behavioral table

excitation table = 변화를 통한 유추표

# MOS
메탈 억사이드 실리콘

### NMOS
- 1일때 연결
- F'을 구성

### PMOS
- 0일때 연결
- not 붙어있음
- F를 구성

# power
p = Consumption x Voltage^2 x Frequency x N + Leakage x Voltage

# RAM
읽을때는 mux를 사용,
쓸때는 decoder와 clock을 사용한다.

## SRAM
static RAM. refresh가 전기신호만을 필요로 하기 때문에 refresh가 필요 없다.

## DRAM
Dynamic RAM. 케페시터를 필요로 하기 때문에 누수가 발생해 refresh가 필요하다.

### SDRAM
동기화된 DRAM. 사이클당 한번 전송

### DDR(n)
rising,falling edge 둘다 신호를 보낸다.
2^n뭉탱이씩 보내는데, n=3일때부턴 8개 고정이다.

# 대역폭
bandwidth : bytes transferred/time

# clock주기
clock period : 1/clock_rate