---
sidebar_label: "Personal Security On Solana"
description: A short guide to keeping your assets secure as you enjoy Jupiter and Solana.
title: Personal Security on Solana
---

<head>
    <title>Personal Security on Solana: Safeguard Your Assets</title>
    <meta name="twitter:card" content="summary" />
</head>

:::tip This is a community contributed guide
This is a community guide to personal security on Solana, created by [@julianhzhu](https://twitter.com/julianhzhu).

Anyone can contribute a guide to Jupiter Station! Simply send us a PR.
:::

Personal security on Solana can be understood in two parts - **private key security** and **transaction security**.

## 1 - Private Key Security

Private key security is about ensuring that your private keys stay private and only known to you.
:::info
Like all blockchains, your assets on Solana are not actually “stored” in your wallet, they are “stored” on accounts on the blockchain.
:::
Whoever has the private key will be able to sign transactions and transfer these assets in the wallet to other accounts on the blockchain. Hence it is extremely important that you keep your private key safe and only known to yourself.

Closely related to the private key is the concept of a seed phrase/passphrase. These are usually made up of 12 or 24 random words. Each passphrase can typically be used to generate many private keys and their corresponding public addresses. If your passphrase is stolen, the hacker will get access to **all** your wallets controlled by that passphrase.

### Quick Recap

- **One** seed phrase/passphrase → can generate **many** private keys.
- **One** private key → **One** public key/wallet address
- Whoever has the private key can take ownership of the assets on the wallet, so we should keep this private.

### For the regular Web3 user

:::tip A few simple steps you can take

- Never screenshot or store your private key & seed phrases in plain text.
- If you need to store them on any device, consider using a password manager for example [Bitwarden](https://bitwarden.com/) that has a free version for personal use. This will ensure that they are stored with **encryption**.
- Install a trustworthy antivirus and malware scanner and keep it up-to-date with regular scheduled scans. E.g. [Bitdefender](https://www.bitdefender.com/), [Malwarebytes](https://www.malwarebytes.com/) are some of the highly-rated ones with a free option available for basic use.
- Avoid pointing any camera at your seed phrase & private key or revealing it in public.

:::

### Other Considerations

#### Physical Security

- Who else has access to the space where your device is stored? 
- Are your hardware wallets and backups locked up in a safe? 
- Do you have secondary backups in second physically secure location?

#### Hardware

- How secure is the user’s device? Are there any backdoors on the device itself?

#### Software

- Malware, virus, malicious files that scan your filesystem and steal the keypair files
- Input capture such as keyloggers, screen capture applications

#### Best Practices

- Use a safe hardware wallet where the private key never leaves the wallet.
- Consider the use of multisig wallets with keys stored separately and safely for high-valued assets.
- Encrypt all files containing the private key when stored on the local filesystem.
- Be careful when installing any software that may capture your system’s inputs and/or scan your file system.
- Avoid installing any fake/pirated software as these often contain malware.
- Install all wallet software from official sites only, double-check they are the correct URL before downloading as there are many fake wallet sites.

## 2 - Transaction Security

The second aspect of personal on-chain security is transaction security. This is different from private key security in that attackers do not need to get hold of your private key in order to steal your funds from you. All they need to do is to trick you to sign a transaction that does a malicious transfer of assets.

The good news is that preventing this type of attacks is easy and 100% within your control as long as you incorporate a few good practices to your journey on Solana.

### Transaction Simulation

Transaction simulation by modern Solana wallets are extremely powerful tools to help safeguard you from loss of funds.

![Example of a transaction simulation working](../img/personal-security/example_of_transaction_simulation_correct.png)

Always pay attention to what is written and if a transaction simulation fails or is reverted, as a general rule, do **NOT** sign the transaction. You really only want to break this rule if you are a thousand percent certain that the site you are on is a legitimate site and that there is a very good reason that you are aware of as to why the transaction is failing to simulate.

### Understanding URL Structure

Learning to recognise the structure of URLs is very important so that you can avoid fradulent sites. This practice is called typo-squatting and malicious sites will go to great lengths to mimic legitimate sites with the only difference being a single character in the URL.

**Let’s take a look at an example**

https://lfg.jup.ag/jup

The trick is to always look for the position of the **dots** (periods) in the URL.

A URL will either have 1 or 2 dots.

In the example above, there are 2 dots, one after “lfg” and one after “jup”/before "ag". Double-check it for yourself and make sure you are following along with this example.

Since there are 2 dots in this URL, then what you need to pay attention to is what is **after the first dot**. For example lfg.jup.ag, after the first dot is “jup.ag”. **If this is an official domain then it is safe.**

If there is only 1 dot in an URL, for example https://twitter.com then you need to pay attention to the **parts surrounding the dot**. If that makes an official website domain, then the URL is safe. An example twitter.io would not be safe and could be malicious for example.

Scammers will often register similar-looking domains such as lfg-jup.ag to try and trick you. Notice in this case there is only 1 dot, hence you need to look at both parts surrounding the dot. Clearly lfg-jup.ag is NOT an official site and it is a fake site trying to trick you.

Here are some more links for you to practice your scam-link identification skills. Some of the urls may not even exist. The list is just for you to practice.

- beta.jup.ag ✅
  - 2 dots, so we look at what's after the first dot, in this case jup.ag is an official site.
- www.jup.ag ✅
  - 2 dots, so we look at what's after the first dot, in this case jup.ag is an official site.
- beta-jup.ag ❌
  - 1 dot, so we look at what's surrounding the dot, in this case beta-jup.ag is not an official site.
- jup-ag.com ❌
  - 1 dot, so we look at what's surrounding the dot, in this case jup-ag.com is not an official site.
- jup.io ❌
  - 1 dot, so we look at what's surrounding the dot, in this case jup.io is not an official site.
- lfg-jup-ag.com ❌
  - 1 dot, so we look at what's surrounding the dot, in this case lfg-jup-ag.com is not an official site.
- jup.jup.ag ✅
  - 2 dots, so we look at what's after the first dot, in this case jup.ag is an official site.

**Alpha:** You can also use this method to sometimes guess what the actual URLs of new releases or features may be and get there before everyone else!

:::tip

Always **double-check the URL** of the domain in the browser URL bar before interacting with any site.
:::

### Social engineering attacks

This can happen in Discord, Telegram, Twitter, basically anywhere with communication taking place. How it works is that scammers will try to post a fake link. If you are careful and check the URL in the browser bar before doing anything on a site, you will be safe.

Note, even if you accidentally connect your wallet, As long as you did not sign any transactions, you are still safe. See the part on transaction simulation as a safeguard.

### For the regular Web3 user

:::tip A few simple steps you can take

- Never rush. Whenever you rush, it is more likely that you will make mistakes.
- Avoid signing a transaction that does not clearly simulate in the wallet. Read all balance changes shown in the simulation carefully before signing any transaction.
- If you really really have to sign something on an untrusted site or sign a transaction that does not simulate, always use a separate wallet with very limited funds to minimize any possibility of a malicious transaction draining all of your funds. Creating a new wallet is very easy on most wallet apps and it is very cheap to fund new wallets on Solana due to low fees. Don’t be cheap or lazy.

:::

And with that, I wish you all the best on your journey on Solana. It no doubt has one of the best user experience across any blockchains and by following these tips I have shared here, I am confident that you will have a great time here.
