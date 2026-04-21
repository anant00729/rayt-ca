---
title: Klaviyo Integration
description: Send review request emails through Klaviyo so they inherit your brand's existing email design.
collection: integrations
collectionLabel: Integrations
group: Email & SMS
slug: klaviyo-integration
date: 2026-03-20
---

If your brand already lives in Klaviyo, it makes sense to send your review requests from there too — same sender reputation, same design system, same analytics. Rayt's Klaviyo integration makes this a two-click setup.

## Connecting the accounts

In Rayt, open **Settings → Integrations → Klaviyo** and click "Connect." You'll be redirected to Klaviyo's OAuth screen, approve the connection, and you're back. No API keys to copy around.

Rayt now has permission to push events and profile properties into Klaviyo — nothing else.

## Choosing the events to push

By default, Rayt pushes three events into Klaviyo: `Order Delivered` (so you can trigger a review request flow), `Review Submitted` (so you can trigger a thank-you or upsell), and `Negative Review Left` (so you can route to a support-recovery flow).

You can turn any of these off per-event in the integration settings if you don't want them cluttering your Klaviyo dashboard.

## Building the flow

Inside Klaviyo, create a new flow triggered by the `Order Delivered` event from Rayt. Add a time delay (we suggest 10–14 days), then an email that contains the `{{ event.review_request_url }}` merge tag — this is the unique, signed URL that lets the customer submit a review directly in Rayt.

Test the flow by firing a test event from Rayt. Once you see the email arrive in your preview inbox, turn the flow on and you're live.
