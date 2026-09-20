# GroundTruth

Satellite-change triage and field-evidence workflow for Armenian land inspection.

**[Current application brief](https://jerrysahon.github.io/groundtruth/apply.html)** · Firebird Build, September 26–27, 2026.

## Existing evidence

A Python satellite-change baseline and 92 imagery annotations: 57 drawn boxes, 16 accepted suggestions and 19 rejected suggestions. These are imagery judgments, not field confirmations. The saved evaluation has substantial false alarms; the application brief includes the counts and limitations.

## Proposed sprint

Use Codex to build human triage, a phone-based evidence submission and an exportable case record. Existing detector work will be disclosed; the sprint scope is subject to organizer rules. Autonomous drone stations are future concepts.

## This repository

This is the public presentation site, not the detector source repository. `apply.html` is the current application brief. `evidence-summary.json` contains aggregate archived results and hashes of the supplied source artifacts; it does not reproduce training.

The older `index.html` pitch contains exploratory concepts and claims superseded by the current application brief. Refer to `apply.html` for present status and scope. Imagery is ESA / Copernicus Sentinel-2.
