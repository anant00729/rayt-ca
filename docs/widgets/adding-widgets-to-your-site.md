---
title: Adding Rayt Widgets to Your Site
description: Install the product review widget and star-rating display on your store.
collection: widgets
collectionLabel: On-site Displays & Widgets
group: Installation
slug: adding-widgets-to-your-site
date: 2026-04-05
---

Rayt's widgets are how visitors see your reviews. You've got three to choose from: the full product reviews block, a star-rating snippet for product cards, and a site-wide testimonial carousel. This guide covers installing all three.

## Shopify (recommended)

Shopify merchants get the fastest path. Install the Rayt app from the Shopify App Store, open your theme editor, and enable the Rayt app embed. From there, toggle on "Product reviews block" and drop it into your product template wherever you want reviews to appear.

The star-rating snippet can be added to product cards via the Rayt section in your theme editor — it uses Shopify's native blocks so no theme-code edits are required.

## BigCommerce & WooCommerce

On other platforms, you'll paste a single `<script>` tag into your theme's header, then add a `<div data-rayt-product>` placeholder on each product template. Rayt replaces the placeholder at runtime with a fully rendered widget.

Full step-by-step code snippets are available in **Settings → Displays → Install** — the snippets come pre-filled with your store ID so you shouldn't need to edit anything.

## Custom / headless stores

Running a headless Shopify or a fully custom frontend? Use Rayt's JavaScript SDK. It ships a small (~14kb gzipped) bundle that lets you render any widget programmatically, with full control over timing, lazy loading, and props.

The SDK reference lives at our developer docs site — every widget supports the same prop surface you'll find in our no-code installer, just exposed as a JS API.
