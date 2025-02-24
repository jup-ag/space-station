---
sidebar_label: "API Responses"
description: "API responses for the Jupiter API."
title: "API Responses"
---

<head>
    <title>API Responses</title>
    <meta name="twitter:card" content="summary" />
</head>

In this section, you can find the list of responses that can be returned by the Jupiter API.

:::info Program Errors
For more information on error codes from programs, see the [Swap API - Program Errors](/docs/swap-api/program-errors).
:::

| Common Codes | Description | Debug |
| --- | --- | --- |
| 200 | Good | Success! |
| 400 | Bad Request | Likely a problem with the request, check the request parameters, syntax, etc. |
| 404 | Not Found | Likely a broken or invalid endpoint. |
| 429 | Rate Limited | You are being rate limited. Either slow down requests, reduce bursts, or upgrade your plan. |
| 500 | Internal Server Error | Please contact [Jupiter Support](https://jupiverse.zendesk.com/hc/en-us/requests/new?ticket_form_id=18069133114012&tf_18541841140892=api_or_developer_support). |
| 502 | Bad Gateway | Please contact [Jupiter Support](https://jupiverse.zendesk.com/hc/en-us/requests/new?ticket_form_id=18069133114012&tf_18541841140892=api_or_developer_support). |
| 503 | Service Unavailable | Please contact [Jupiter Support](https://jupiverse.zendesk.com/hc/en-us/requests/new?ticket_form_id=18069133114012&tf_18541841140892=api_or_developer_support). |
| 504 | Gateway Timeout | Try disabling any proxies, VPNs, firewalls or other network restrictions and try again. If issue persists, please contact [Jupiter Support](https://jupiverse.zendesk.com/hc/en-us/requests/new?ticket_form_id=18069133114012&tf_18541841140892=api_or_developer_support). |
