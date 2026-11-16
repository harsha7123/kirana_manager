# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JavaScript, no build step, hosted on GitHub Pages. Live sharing through Firebase Cloud Firestore (free tier), configured by the owner once; without it the list works on one phone only. Delegated: chosen by Claude after the user asked for a list shared between two phones.

## Users

Two people: the owner and his father. Every few days the household buys kirana (groceries). Either of them notices something is running out and adds it; the father usually does the buying at the shop, phone in one hand, bag in the other. Telugu and English readers.

## Product Purpose

One shared kirana list that both phones see live. Add items by typing, by tapping a usual item, or by voice; tick them off at the shop; the other person sees what is bought. Success: nothing is forgotten and nobody buys the same thing twice.

## Positioning

A family shopping list, not a store or a budget app. Shows who added what. Re-adding the usual items is one tap.

## Capabilities and Constraints

- Items: name, quantity (free text like "2 kg"), optional note, who added, bought or not, who bought.
- Usual items: a starter set of common kirana items in Telugu and English, plus items bought before.
- Voice entry in Telugu (te-IN) or English (en-IN); works in Chrome on Android.
- Pairing by a share link sent on WhatsApp; no accounts, no passwords. The link is the key, so it must stay in the family.
- Must work at the shop with weak network: changes queue offline and sync later.
- Only the shopping list. No bills, no credit, no reminders (not requested).

## Product Principles

1. At the shop, one tap ticks an item. Nothing else on screen competes.
2. Always show whether the list is shared and live, or only on this phone.
3. Usual items are one tap away; typing is the fallback.
4. Plain Telugu or English words.

## Accessibility & Inclusion

Older user: body 18px+, touch targets 48px+, high contrast in daylight, bought state shown by strike-through and position, not colour alone.
