---
sidebar_label: "Builder Tips"
description: Learn tips for building on Solana with Jupiter products.
title: General Building Tips
---

<head>
    <title>General Tips For Building on Solana With Jupiter</title>
    <meta name="twitter:card" content="summary" />
</head>



**New to building on Solana?**

This is a good resource: https://solanacookbook.com

**Private Key, beware of compromising your wallet.**

A wallet Private Key is the most important strings of text, that allows anyone to restore/access your wallet, make sure you never commit your **Private Key** into your version control (*Git, etc.*), or expose them anywhere.

The safer way would be the use of `.env` file in your projects, and adding a `.gitignore` entry. Managing secrets can feel like extra work, but it is necessary to keep your wallets safe.

Our example repos are all equipped with `.env` support by default, if you want to configure it yourself: [dotenv](https://github.com/motdotla/dotenv#readme), [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv).

**Careful! Before executing this function block!**

Swaps are irreversible! Make sure you are certain with your code, and be extra careful if you happen to run intervals, or any code without human supervision.
