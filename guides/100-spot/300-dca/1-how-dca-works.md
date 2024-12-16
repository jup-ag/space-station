---
sidebar_label: How DCA works
title: How DCA works?
description: Introduction to how DCA works
---

<head>
    <title>How DCA works</title>
    <meta name="twitter:card" content="summary" />
</head>

Creating a DCA order is like setting up a reliable machine that processes your trades in the intervals you set them at, here’s how it works in a nutshell, let’s break it down into:

- How DCAs are created
- How their order mechanism works
- How tokens are transferred after each order
- How the DCA is (auto) closed

---

## How the orders are created

1. When you start a DCA order, the total allocated tokens you’re selling, say USDC, will be transferred from your wallet into an order account owned by the Jupiter DCA Program. This also includes other information like order interval, buying amount, etc.
2. Once you [create your first DCA position](./100-how-to-create-dca.md), your first order is processed right away! For example, if you're DCA-ing USDC into JupSOL, the full USDC amount you chose will be stored in your vault, and the first trade will happen immediately.
3. The remaining trades follow at regular intervals, based on the schedule you pick.

:::tip **Heads-Up! Keep It Up with Randomness**
To keep your DCA strategy less predictable, each trade will execute within a randomized window of ±30 seconds from your chosen time. Think of it as a little sprinkle of unpredictability to keep things fresh and secure.
:::

## How your tokens are bought

When you create a DCA order account, your big order is split into smaller, bite-sized trades. The number of trades depends on the options you pick. Let’s break it down:

Say you’re DCA-ing $300 USDC into JupSOL over 3 days. Your order will be split into 3 trades of $100 USDC each, one for every day. Let’s see this in action:

| Order # | Amount to sell  | JupSOL Price | JupSOL Bought | Total JupSOL | Time                      |
|---------|-----------------|-----------|------------|-----------|---------------------------|
| 1       | $100            | $200      | 0.5        | 0.5       | Immediately upon creation |
| 2       | $100            | $210      | 0.476      | 0.976     | 1 day after creation      |
| 3       | $100            | $180      | 0.555      | 1.531     | 2 days after creation     |

At the end of the example DCA, you can see that the price of JupSOL has fluctuated and the average cost of your DCA is $196.666.

## How tokens are transferred after each order

Every time an order executes, the purchased tokens will show up in your wallet within the same transaction. No extra steps required! Let’s break it down:

Using the same example as above:

**Day 1:** Your first $100 USDC order executes, and voila! You receive **0.4995 JupSOL** (net of fees) in your wallet.

**Day 2:** Your second $100 USDC order processes, delivering **0.4755 JupSOL** (net of fees) to your wallet.

**Day 3:** Your final $100 USDC order wraps things up with another **0.554 JupSOL** (net of fees) delivered to your wallet.

:::warning **Caveat to Auto-Withdrawal: Keep Your ATAs Open**
If your purchased token isn’t SOL, automatic transfers only work if you have the correct **Associated Token Account (ATA)** set up. But don’t worry—Jupiter DCA creates the necessary ATA when you set up your account.
:::

### What if you closed your ATA?

**Heads-Up:** If you manually close your purchased token’s ATA (via a wallet or a 3rd-party tool), auto-transfers after every order won’t work. Instead, tokens will stay in your DCA vault safely and only transfer as a lump sum at the end of your DCA cycle.

:::tip **Pro Tip:** Manual withdraw
If you don’t want to wait, you can manually withdraw your tokens from the DCA vault anytime through our user-friendly UI.
:::

## How the DCA is (auto) closed

At the end of your DCA cycle, Jupiter takes care of everything for you. Here’s how it works:

- If your wallet’s Associated Token Account (ATA) stays open, your purchased tokens are transferred to your wallet with each order. (No one else can ever receive your tokens)
- If you’ve closed your token account mid-cycle (as mentioned above), don’t worry. The program recovers the rent from your DCA account’s in-token PDA and uses it to re-open your token account, so your tokens can still reach you safely.

**How Rent Works:**

By default, **2/3 of the rent** from your DCA account is sent back to you. The remaining **1/3 of the rent** isn’t taken by Jupiter or anyone else—it’s recoverable by you if you decide to close your ATA that holds your tokens later.

:::warning **Do NOT close your ATA**
Do not clsoe your ATA, before withdrawing or swapping your tokens! If you do, it could result in token loss. This isn’t just a Jupiter thing, it’s how Solana wallets and accounts operate.
:::