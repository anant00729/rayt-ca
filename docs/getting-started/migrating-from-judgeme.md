---
title: Migrating to Rayt from Judge.me
description: Import Judge.me reviews into Rayt without downtime or lost history.
collection: getting-started
collectionLabel: Getting Started
group: Migrating from Another Vendor
slug: migrating-from-judgeme
date: 2026-04-18
---

Judge.me customers can bring every review across to Rayt in under 15 minutes. This guide covers the full switchover, from data export to swapping out widgets on your store.

## Getting your Judge.me export

In your Judge.me admin, go to **Settings → General Settings → Data Export** and click "Export all reviews." Judge.me zips the data and emails you a download link. The export includes product handles, review content, ratings, customer names, and any attached media.

Unzip the file locally — you should see a `reviews.csv` and a `media/` folder with photos and videos.

## Uploading to Rayt

Open **Settings → Import Reviews** in Rayt and pick "From Judge.me." Upload both the CSV and the media archive. Rayt handles the matching for you: it reads Judge.me's product handles, looks them up against your connected store, and attaches each review to the correct product.

Any unmatched reviews land in a review queue so you can resolve them manually — usually because a product was deleted or renamed.

## Switching over your site

Once the import completes, swap the Judge.me widget on your product pages for Rayt's. Most stores can do this via a theme edit or by installing the Rayt Shopify app and turning on the product widget from the app embed settings. Your newly imported reviews will render immediately — no delay while our index rebuilds.

We recommend keeping Judge.me active for 48 hours as a safety net, then disabling it once you've confirmed everything displays correctly in Rayt.
