# Cifra de César "O Imperador"

## Índice

* [1. Prefácio](#1-prefácio)
* [2. O que é?](#2-o-que-é-?)
* [3. Como Funciona](#3-como-funciona)
* [4. Como Utilizar](#4-como-utilizar)
* [5. O que foi utilizado no projeto](#5-o-que-foi-utilizado-no-projeto)
* [6. Foto da Página](#6-foto-da-página)
* [7. Link da Página](#7-link-da-página)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. O que é?

O site foi inspirado no "Imperador" Júlio César, que foi o primeiro a se comunicar com seus generais através de mensagens codificadas. Nessa ideia o layout da página vem com o plano de fundo de papel antigo, e as fontes como o próprio Júlio César tivesse escrito utilizando uma pena e tinta.

## 3. Como funciona

Nesse site o usuário vai usufruir dessa criatividade para codificar e descodificar a mensagem, o mesmo pode escolher o numero de posição das letras.

## 4. Como utilizar

Basta o usuário escolher a chave para determinar a posição que as letras vão caminhar, depois inserir a mensagem e clicar no botão "Cifrar".
Para descodificar, o usuário vai inserir a mesma chave escolhida no momento da cifragem e a mensagem codificada, posteriormente clicar no botão "Decifrar".

LEMBRANDO: somente as letras maiúsculas e minusculas serão codificados, os demais caracteres permaneceram apresentados.

## 5. O que foi utilizado no projeto

* HTML
* JAVA SCRIPT
* CSS

## 6. Foto da Página

![Página](src/O%20imperador.png)

## 7. Link da Página

https://vanesnery.github.io/SAP003-cipher/src/index.html