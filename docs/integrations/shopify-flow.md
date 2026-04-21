---
title: Shopify Flow Integration
description: Automate actions in Shopify when reviews come in — tag customers, update metafields, fire webhooks.
collection: integrations
collectionLabel: Integrations
group: Commerce
slug: shopify-flow
date: 2026-03-22
---

Shopify Flow is a free automation tool that can react to events from Rayt. If you want to tag loyal reviewers, flag products with consistent negative feedback, or route critical reviews to a Slack channel, Flow is the easiest way.

## Installing the Flow connector

In Shopify, make sure the Flow app is installed from the Shopify App Store (it's free for Shopify Plus; for lower tiers it depends on your plan). Then in Rayt, open **Settings → Integrations → Shopify Flow** and toggle the connector on.

You'll see Rayt triggers appear inside Flow within a minute or two.

## Useful automation examples

A few recipes our customers use most:

- **Tag reviewers**: when a customer leaves a 5-star review, add a `loyal-reviewer` tag to their Shopify customer profile so you can target them in future campaigns.
- **Flag bad products**: when a product receives three 1-star reviews in 30 days, add a `review-triage` tag so your merch team can investigate.
- **Slack alerts**: when any review under 3 stars comes in, post it to a `#cx-reviews` Slack channel for immediate follow-up.

Each of these is a single Flow that takes under 5 minutes to build.

## Debugging

If a Flow doesn't fire when you expect, check the Flow run history — Shopify logs every trigger and step. Most issues trace back to a customer profile missing an email, or a product tag not existing yet. Flow's error messages point you at the specific step that failed.

Once the Flow is working correctly, you can leave it running indefinitely — there's no per-run charge.
