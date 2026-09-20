# GroundTruth

**Satellite change detection for Armenia, confirmed on the ground.**

→ **[jerrysahon.github.io/groundtruth](https://jerrysahon.github.io/groundtruth/)** — the pitch, 12 screens.

Built for [Firebird Build](https://hackathon.firebird.ai), Yerevan, 26–27 September 2026.

## What this is

Armenia has no operational land-change monitoring. One third of the country sits in a
landslide hazard zone, forest cover fell from roughly 40% in antiquity to about 7.5%
today, and illegal cutting runs at an estimated 22 hectares a day. Nobody watches it at
the cadence at which it actually happens.

Free Sentinel-2 imagery already covers the whole country every five days at 10 m/pixel.
It is enough to find a graded track, a new quarry face or a fresh clearing — and not
enough to confirm one. So the pipeline has two halves:

1. **Orbit** finds candidates across the whole country, continuously, at zero imagery cost.
2. **Ground** confirms them — a drone that lives on the slope, in a shell the landscape
   already contains, plus soil and geodetic instruments at the same point.

The evidence screens on the page are real Sentinel-2 frames over the Aragats district,
45,563 ha, where the detector's proposals and a human's marks are shown side by side.

## Provenance

- All satellite imagery: **Sentinel-2, ESA Copernicus** — free and open, 10 m/pixel.
- The two station images are captioned **"Concept render"** on the page itself.
- Figures are colour-coded by origin: a company's own claim, our calculation, or a
  stated limitation. No number on the page is unattributed.

## Repo

Static site. `index.html` plus `img/`. Served by GitHub Pages from `main`.
