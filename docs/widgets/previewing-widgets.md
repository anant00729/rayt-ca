---
title: Previewing Widgets Before Enabling
description: Use Rayt's preview mode to check how widgets will look on your store before customers see them.
collection: widgets
collectionLabel: On-site Displays & Widgets
group: Installation
slug: previewing-widgets
date: 2026-04-06
---

Nobody wants a widget rolling out to live traffic only to discover it clashes with the theme. Rayt's preview mode lets you see every widget rendered against your live store — without affecting anyone else.

## How preview mode works

When you toggle preview mode in **Settings → Displays**, Rayt gives you a shareable preview URL. Visit that URL in any browser and widgets appear exactly as they will in production. Everyone else — actual customers, teammates who aren't signed into Rayt — continues to see your store with widgets disabled.

The preview is backed by a short-lived signed token, so you can share it with a designer or teammate without giving them Rayt access.

## What to check

Walk through a typical customer journey: home → collection → product page → cart. On each page, verify that star ratings line up with your typography, the review block doesn't push important content below the fold, and the carousel doesn't overflow on mobile.

Pay special attention to your product page on mobile at 375px wide — that's where layout bugs usually surface first.

## Rolling out

When everything looks right, click **Publish** from **Settings → Displays**. Widgets go live immediately; no deploy needed. If something breaks, hitting **Pause** removes the widgets in under a second — so you can always roll back safely.

If you're making a big theme change, it's worth previewing widgets on your theme staging environment before merging the change to your live theme.
