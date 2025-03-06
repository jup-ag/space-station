---
sidebar_label: "Best Practices"
description: "Best Practices for using the Recurring API"
title: "Best Practices"
---

<head>
    <title>Best Practices</title>
    <meta name="twitter:card" content="summary" />
</head>

Some best practices when using the Recurring API.

| Item | Recommendation |
| --- | --- |
| Understand the Recurring Product. | The Recurring API supports order creation for both recurring and smart recurring strategies. Understand the difference between the two and choose the appropriate one for your needs. |
| Keep track of the order account. | You will need to keep track of the order account in order to use the `cancelOrder` or `depositOrder` endpoints.<br /><br />We currently do not support requesting data on open orders or order history. |
| Require minimum order amount of 100 USD. | As per the Jupiter Recurring API's requirements to prevent small orders from being created.<br /><br />This is similar to jup.ag's frontend check for minimum order amount. |
