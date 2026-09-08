# HGMS CI Carrier

This branch is used only to run the HGMS M0 Windows gate in GitHub Actions.

The previous `part-*.txt` Base64 carrier is disabled because a prior upload corrupted `part-03.txt` with non-Base64 text. The workflow now requires a manifest plus a candidate ZIP filename and SHA-256 instead of hard-coded text parts.

The branch also contains `vercel.json` and a static fallback page so preview-deployment integrations do not try to build this branch as the normal `wangzhang` application.
